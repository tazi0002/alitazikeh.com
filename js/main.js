document.addEventListener("DOMContentLoaded", function () {
  var data = window.SITE_DATA || {};
  var body = document.body;
  var basePath = body.dataset.base || "";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  function resolvePath(path) {
    if (!path) {
      return "";
    }

    if (/^https?:\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
      return path;
    }

    return basePath + path;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getProjectsByCategory(category) {
    return (data.projects || []).filter(function (project) {
      return project.category === category;
    });
  }

  function createTagMarkup(tags) {
    return (tags || [])
      .map(function (tag) {
        return '<span class="tag-pill">' + escapeHtml(tag) + "</span>";
      })
      .join("");
  }

  function createProjectCard(project) {
    var linkLabel = project.ctaLabel || (project.type === "case-study" ? "Explore Case Study" : "Open Project");
    var destination = project.type === "case-study" ? resolvePath(project.detailPage) : project.externalUrl;
    var target = project.type === "case-study" ? "" : ' target="_blank" rel="noreferrer"';
    var tools = project.meta && project.meta.tools ? project.meta.tools.join(" • ") : "";

    return (
      '<a class="portfolio-card reveal interactive-hover" href="' + escapeHtml(resolvePath(destination)) + '"' + target + ">" +
      '<div class="portfolio-media">' +
      '<img src="' + escapeHtml(resolvePath(project.coverImage)) + '" alt="' + escapeHtml(project.coverAlt) + '">' +
      "</div>" +
      '<div class="portfolio-card-body">' +
      '<div class="portfolio-chip-row">' + createTagMarkup(project.tags) + "</div>" +
      '<h3 class="portfolio-card-title">' + escapeHtml(project.title) + "</h3>" +
      '<p class="portfolio-card-copy">' + escapeHtml(project.summary) + "</p>" +
      '<div class="portfolio-meta">' +
      '<span><i data-lucide="briefcase"></i>' + escapeHtml(project.meta.role) + "</span>" +
      '<span><i data-lucide="sparkles"></i>' + escapeHtml(tools) + "</span>" +
      "</div>" +
      '<div class="portfolio-card-footer">' +
      '<span class="button button-secondary" aria-hidden="true">' +
      escapeHtml(linkLabel) +
      '<i data-lucide="arrow-up-right"></i></span>' +
      "</div>" +
      "</div>" +
      "</a>"
    );
  }

  function renderSkills() {
    var skillGrid = document.getElementById("skills-grid");
    var floatingIcons = document.getElementById("hero-floating-icons");

    if (skillGrid) {
      skillGrid.innerHTML = (data.skills || [])
        .map(function (skill, index) {
          return (
            '<article class="skill-card reveal" style="--skill-accent:' + escapeHtml(skill.accent) + ";--skill-delay:" + index + '">' +
            '<div class="skill-icon-wrap">' +
            '<img src="' + escapeHtml(skill.iconUrl) + '" alt="' + escapeHtml(skill.name) + ' logo" class="skill-icon">' +
            "</div>" +
            '<h3 class="skill-title">' + escapeHtml(skill.name) + "</h3>" +
            '<p class="skill-note">' + escapeHtml(skill.note) + "</p>" +
            "</article>"
          );
        })
        .join("");
    }

    if (floatingIcons) {
      floatingIcons.innerHTML = (data.skills || [])
        .slice(0, 6)
        .map(function (skill, index) {
          return (
            '<div class="floating-skill skill-pos-' + (index + 1) + ' interactive-hover" style="--skill-accent:' + escapeHtml(skill.accent) + '">' +
            '<img src="' + escapeHtml(skill.iconUrl) + '" alt="' + escapeHtml(skill.name) + ' logo">' +
            '<span>' + escapeHtml(skill.name) + "</span>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  function renderHeroStats() {
    var statsGrid = document.getElementById("hero-stats");
    if (!statsGrid) {
      return;
    }

    statsGrid.innerHTML = (data.heroStats || [])
      .map(function (stat) {
        return (
          '<div class="hero-stat reveal">' +
          '<span class="hero-stat-value" data-count="' + escapeHtml(stat.value) + '">' + escapeHtml(stat.value) + "</span>" +
          '<span class="hero-stat-label">' + escapeHtml(stat.label) + "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderProjectOverview() {
    var sections = [
      { id: "ux-grid", category: "UX/UI Design" },
      { id: "web-grid", category: "Web Development" },
      { id: "video-grid", category: "Videography" }
    ];

    sections.forEach(function (section) {
      var container = document.getElementById(section.id);
      if (!container) {
        return;
      }

      container.innerHTML = getProjectsByCategory(section.category)
        .map(createProjectCard)
        .join("");
    });

    var photoPreview = document.getElementById("photo-preview-grid");
    if (photoPreview) {
      photoPreview.innerHTML = (data.photography || [])
        .slice(0, 4)
        .map(function (photo, index) {
          return (
            '<button class="photo-preview-card reveal interactive-hover" type="button" data-photo-index="' + index + '">' +
            '<img src="' + escapeHtml(resolvePath(photo.src)) + '" alt="' + escapeHtml(photo.alt) + '">' +
            '<span class="photo-preview-label">' + escapeHtml(photo.collection) + "</span>" +
            "</button>"
          );
        })
        .join("");
    }
  }

  var photoState = {
    filter: "All",
    sort: "curated"
  };

  function getFilteredPhotos() {
    var photos = (data.photography || []).slice();

    if (photoState.filter !== "All") {
      photos = photos.filter(function (photo) {
        return photo.collection === photoState.filter;
      });
    }

    photos.sort(function (a, b) {
      if (photoState.sort === "reverse") {
        return b.order - a.order;
      }

      if (photoState.sort === "filename") {
        return a.src.localeCompare(b.src);
      }

      return a.order - b.order;
    });

    return photos;
  }

  function renderPhotographyFilters() {
    var filterWrap = document.getElementById("photo-filters");
    var sortSelect = document.getElementById("photo-sort");
    if (!filterWrap || !sortSelect) {
      return;
    }

    var collections = ["All"].concat(
      Array.from(
        new Set(
          (data.photography || []).map(function (photo) {
            return photo.collection;
          })
        )
      )
    );

    filterWrap.innerHTML = collections
      .map(function (collection) {
        var activeClass = collection === photoState.filter ? " is-active" : "";
        return (
          '<button class="filter-chip interactive-hover' + activeClass + '" type="button" data-filter="' + escapeHtml(collection) + '">' +
          escapeHtml(collection) +
          "</button>"
        );
      })
      .join("");

    sortSelect.value = photoState.sort;
  }

  function renderPhotographyGrid() {
    var grid = document.getElementById("photography-grid");
    if (!grid) {
      return;
    }

    var filteredPhotos = getFilteredPhotos();

    grid.innerHTML = filteredPhotos
      .map(function (photo) {
        return (
          '<button class="photo-card interactive-hover" type="button" data-photo-src="' + escapeHtml(photo.src) + '" data-lightbox-caption="' + escapeHtml(photo.collection) + '">' +
          '<img src="' + escapeHtml(resolvePath(photo.src)) + '" alt="' + escapeHtml(photo.alt) + '">' +
          '<span class="photo-card-meta">' +
          '<strong>' + escapeHtml(photo.collection) + "</strong>" +
          "</span>" +
          "</button>"
        );
      })
      .join("");
  }

  function createLightbox() {
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.id = "lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML =
      '<div class="lightbox-backdrop" data-close-lightbox="true"></div>' +
      '<div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview" tabindex="-1">' +
      '<button class="lightbox-close interactive-hover" type="button" aria-label="Close preview" data-close-lightbox="true"><i data-lucide="x"></i></button>' +
      '<img class="lightbox-image" src="" alt="">' +
      '<div class="lightbox-caption"></div>' +
      "</div>";
    document.body.appendChild(lightbox);
    refreshIcons();
    return lightbox;
  }

  var lightbox = null;

  function openLightbox(lightboxData) {
    if (!lightbox) {
      lightbox = createLightbox();
    }

    lightbox.querySelector(".lightbox-image").src = resolvePath(lightboxData.src);
    lightbox.querySelector(".lightbox-image").alt = lightboxData.alt || "";
    lightbox.querySelector(".lightbox-caption").textContent = lightboxData.caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    lightbox.querySelector(".lightbox-dialog").focus();
  }

  function closeLightbox() {
    if (!lightbox) {
      return;
    }

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  }

  function renderProjectPage() {
    if (body.dataset.page !== "project") {
      return;
    }

    var project = (data.projects || []).find(function (item) {
      return item.id === body.dataset.projectId;
    });

    if (!project) {
      return;
    }

    document.title = project.title + " | Ali Tazikeh";

    var heroShell = document.getElementById("project-shell");
    var storyShell = document.getElementById("project-story");
    if (!heroShell || !storyShell) {
      return;
    }

    heroShell.innerHTML =
      '<div class="project-hero-copy reveal">' +
      '<span class="section-label">Case Study</span>' +
      '<h1 class="project-title">' + escapeHtml(project.title) + "</h1>" +
      '<p class="project-summary">' + escapeHtml(project.summary) + "</p>" +
      '<div class="project-tag-row">' + createTagMarkup(project.tags) + "</div>" +
      '<div class="project-meta-grid">' +
      '<div class="project-meta-card"><span>Role</span><strong>' + escapeHtml(project.meta.role) + "</strong></div>" +
      '<div class="project-meta-card"><span>Tools</span><strong>' + escapeHtml(project.meta.tools.join(", ")) + "</strong></div>" +
      '<div class="project-meta-card"><span>Deliverables</span><strong>' + escapeHtml(project.meta.deliverables) + "</strong></div>" +
      '<div class="project-meta-card"><span>Outcome</span><strong>' + escapeHtml(project.meta.outcome) + "</strong></div>" +
      "</div>" +
      "</div>" +
      '<div class="project-hero-media reveal">' +
      '<button class="project-image-button interactive-hover" type="button" data-lightbox-src="' + escapeHtml(project.coverImage) + '" data-lightbox-alt="' + escapeHtml(project.coverAlt) + '" data-lightbox-caption="' + escapeHtml(project.title) + '">' +
      '<img src="' + escapeHtml(resolvePath(project.coverImage)) + '" alt="' + escapeHtml(project.coverAlt) + '">' +
      "</button>" +
      "</div>";

    storyShell.innerHTML =
      '<section class="project-highlight-band reveal">' +
      (project.highlights || [])
        .map(function (highlight) {
          return '<article class="highlight-card"><i data-lucide="sparkles"></i><p>' + escapeHtml(highlight) + "</p></article>";
        })
        .join("") +
      "</section>" +
      (project.storyBlocks || [])
        .map(function (block) {
          if (block.type === "text") {
            return (
              '<section class="story-block story-text reveal">' +
              '<span class="section-label">' + escapeHtml(block.eyebrow) + "</span>" +
              '<div class="story-copy">' +
              '<h2>' + escapeHtml(block.title) + "</h2>" +
              (block.paragraphs || [])
                .map(function (paragraph) {
                  return "<p>" + escapeHtml(paragraph) + "</p>";
                })
                .join("") +
              "</div>" +
              "</section>"
            );
          }

          if (block.type === "list") {
            return (
              '<section class="story-block story-list reveal">' +
              '<span class="section-label">' + escapeHtml(block.eyebrow) + "</span>" +
              '<div class="story-copy">' +
              '<h2>' + escapeHtml(block.title) + "</h2>" +
              '<p>' + escapeHtml(block.intro || "") + "</p>" +
              '<ul class="story-list-items">' +
              (block.items || [])
                .map(function (item) {
                  return '<li><i data-lucide="arrow-up-right"></i><span>' + escapeHtml(item) + "</span></li>";
                })
                .join("") +
              "</ul>" +
              "</div>" +
              "</section>"
            );
          }

          if (block.type === "gallery") {
            return (
              '<section class="story-block story-gallery reveal">' +
              '<span class="section-label">' + escapeHtml(block.eyebrow) + "</span>" +
              '<div class="story-copy"><h2>' + escapeHtml(block.title) + "</h2></div>" +
              '<div class="gallery-layout gallery-' + escapeHtml(block.layout || "grid") + '">' +
              (block.images || [])
                .map(function (image) {
                  return (
                    '<figure class="gallery-card">' +
                    '<button class="gallery-card-button interactive-hover" type="button" data-lightbox-src="' + escapeHtml(image.src) + '" data-lightbox-alt="' + escapeHtml(image.alt) + '" data-lightbox-caption="' + escapeHtml(image.caption || block.title) + '">' +
                    '<img src="' + escapeHtml(resolvePath(image.src)) + '" alt="' + escapeHtml(image.alt) + '">' +
                    "</button>" +
                    '<figcaption>' +
                    '<strong>' + escapeHtml(image.caption || "") + "</strong>" +
                    "</figcaption>" +
                    "</figure>"
                  );
                })
                .join("") +
              "</div>" +
              "</section>"
            );
          }

          return "";
        })
        .join("");
  }

  function initPhotoInteractions() {
    document.addEventListener("click", function (event) {
      var filterButton = event.target.closest("[data-filter]");
      var photoButton = event.target.closest("[data-photo-src]");
      var previewButton = event.target.closest("[data-photo-index]");
      var genericLightboxButton = event.target.closest("[data-lightbox-src]");
      var lightboxClose = event.target.closest("[data-close-lightbox]");

      if (filterButton) {
        photoState.filter = filterButton.dataset.filter;
        renderPhotographyFilters();
        renderPhotographyGrid();
        refreshIcons();
        return;
      }

      if (photoButton) {
        var photo = (data.photography || []).find(function (item) {
          return item.src === photoButton.dataset.photoSrc;
        });

        if (photo) {
          openLightbox({
            src: photo.src,
            alt: photo.alt,
            caption: photo.collection
          });
        }
        return;
      }

      if (previewButton) {
        var previewPhoto = (data.photography || [])[Number(previewButton.dataset.photoIndex)];
        if (previewPhoto) {
          openLightbox({
            src: previewPhoto.src,
            alt: previewPhoto.alt,
            caption: previewPhoto.collection
          });
        }
        return;
      }

      if (genericLightboxButton) {
        openLightbox({
          src: genericLightboxButton.dataset.lightboxSrc,
          alt: genericLightboxButton.dataset.lightboxAlt,
          caption: genericLightboxButton.dataset.lightboxCaption
        });
        return;
      }

      if (lightboxClose) {
        closeLightbox();
      }
    });

    var sortSelect = document.getElementById("photo-sort");
    if (sortSelect) {
      sortSelect.addEventListener("change", function (event) {
        photoState.sort = event.target.value;
        renderPhotographyGrid();
        refreshIcons();
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });
  }

  function initCursorGlow() {
    if (!finePointer || reducedMotion) {
      body.classList.add("no-cursor-glow");
      return;
    }

    var cursorGlow = document.getElementById("cursor-glow");
    var cursorCore = document.getElementById("cursor-core");
    if (!cursorGlow || !cursorCore) {
      return;
    }

    var position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var target = { x: position.x, y: position.y };

    function animateCursor() {
      position.x += (target.x - position.x) * 0.14;
      position.y += (target.y - position.y) * 0.14;
      cursorGlow.style.transform = "translate3d(" + position.x + "px, " + position.y + "px, 0)";
      cursorCore.style.transform = "translate3d(" + target.x + "px, " + target.y + "px, 0)";
      window.requestAnimationFrame(animateCursor);
    }

    document.addEventListener("mousemove", function (event) {
      target.x = event.clientX;
      target.y = event.clientY;
      body.classList.add("cursor-visible");
    });

    document.addEventListener("mouseover", function (event) {
      if (event.target.closest(".interactive-hover, a, button, input, textarea, select")) {
        body.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", function (event) {
      if (event.target.closest(".interactive-hover, a, button, input, textarea, select")) {
        body.classList.remove("cursor-hover");
      }
    });

    animateCursor();
  }

  function initPortraitTilt() {
    if (!finePointer || reducedMotion) {
      return;
    }

    var stage = document.getElementById("portrait-stage");
    var portraitCard = document.getElementById("portrait-card");

    if (!stage || !portraitCard) {
      return;
    }

    stage.addEventListener("mousemove", function (event) {
      var bounds = stage.getBoundingClientRect();
      var centerX = bounds.left + bounds.width / 2;
      var centerY = bounds.top + bounds.height / 2;
      var rotateY = ((event.clientX - centerX) / bounds.width) * 14;
      var rotateX = ((centerY - event.clientY) / bounds.height) * 14;

      portraitCard.style.transform =
        "rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg) translateY(-8px)";
    });

    stage.addEventListener("mouseleave", function () {
      portraitCard.style.transform = "";
    });
  }

  function initCountUp() {
    var values = document.querySelectorAll(".hero-stat-value");
    if (!values.length || reducedMotion) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, statObserver) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var target = entry.target;
          var rawValue = target.dataset.count || "0";
          var numeric = parseInt(rawValue.replace(/\D/g, ""), 10);

          if (Number.isNaN(numeric)) {
            statObserver.unobserve(target);
            return;
          }

          var suffix = rawValue.replace(String(numeric), "");
          var current = 0;
          var increment = Math.max(1, Math.round(numeric / 40));

          function update() {
            current += increment;
            if (current >= numeric) {
              current = numeric;
            }

            target.textContent = current + suffix;

            if (current < numeric) {
              window.requestAnimationFrame(update);
            }
          }

          update();
          statObserver.unobserve(target);
        });
      },
      { threshold: 0.6 }
    );

    values.forEach(function (value) {
      observer.observe(value);
    });
  }

  function initRevealAnimations() {
    var revealItems = document.querySelectorAll(".reveal");
    if (!revealItems.length) {
      return;
    }

    if (window.gsap && window.ScrollTrigger && !reducedMotion) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.utils.toArray(".reveal").forEach(function (item, index) {
        window.gsap.fromTo(
          item,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: Math.min(index * 0.02, 0.2),
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%"
            }
          }
        );
      });

      var parallaxTarget = document.querySelector(".hero-visual-glow");
      if (parallaxTarget) {
        window.gsap.to(parallaxTarget, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            scrub: true
          }
        });
      }

      return;
    }

    var observer = new IntersectionObserver(
      function (entries, revealObserver) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");
    var submitButton = document.getElementById("submit-button");
    if (!form || !status || !submitButton) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        status.textContent = "Please complete the required fields before sending your message.";
        status.className = "form-status is-error";
        return;
      }

      if (!data.formspreeEndpoint || data.formspreeEndpoint.indexOf("your-form-id") !== -1) {
        status.innerHTML =
          'Add your real Formspree endpoint in <code>js/data.js</code> to activate live form delivery. You can still email <a href="mailto:' +
          escapeHtml(data.contactEmail) +
          '">' +
          escapeHtml(data.contactEmail) +
          "</a> directly.";
        status.className = "form-status is-error";
        return;
      }

      var formData = new FormData(form);
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Sending';
      status.textContent = "Sending your message...";
      status.className = "form-status";

      fetch(data.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Submission failed");
          }

          form.reset();
          form.classList.remove("was-validated");
          status.textContent = "Message sent successfully. I will follow up by email.";
          status.className = "form-status is-success";
        })
        .catch(function () {
          status.innerHTML =
            'Something went wrong while sending the form. Please try again or email <a href="mailto:' +
            escapeHtml(data.contactEmail) +
            '">' +
            escapeHtml(data.contactEmail) +
            "</a> directly.";
          status.className = "form-status is-error";
        })
        .finally(function () {
          submitButton.disabled = false;
          submitButton.innerHTML = 'Send Message <i data-lucide="arrow-up-right"></i>';
          refreshIcons();
        });
    });
  }

  function refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  renderHeroStats();
  renderSkills();
  renderProjectOverview();
  renderPhotographyFilters();
  renderPhotographyGrid();
  renderProjectPage();
  initPhotoInteractions();
  initCursorGlow();
  initPortraitTilt();
  initRevealAnimations();
  initCountUp();
  initContactForm();
  refreshIcons();

  var year = document.getElementById("current-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
});
