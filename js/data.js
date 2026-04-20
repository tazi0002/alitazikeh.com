window.SITE_DATA = {
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
  contactEmail: "tazi0002@algonquinlive.com",
  heroStats: [
    { value: "7", label: "featured projects" },
    { value: "28", label: "curated photo frames" },
    { value: "4", label: "creative disciplines" }
  ],
  skills: [
    {
      name: "Figma",
      iconUrl: "https://cdn.simpleicons.org/figma/F24E1E",
      accent: "#f24e1e",
      note: "Interface systems, wireframes, and collaborative prototyping"
    },
    {
      name: "Photoshop",
      iconUrl: "images/icons/adobe-photoshop.svg",
      accent: "#31a8ff",
      note: "Photo retouching, composition, and polished visual assets"
    },
    {
      name: "Illustrator",
      iconUrl: "images/icons/adobe-illustrator.svg",
      accent: "#ff9a00",
      note: "Brand graphics, icon work, and sharp vector layouts"
    },
    {
      name: "JavaScript",
      iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
      accent: "#f7df1e",
      note: "DOM interaction, event handling, and dynamic front-end behavior"
    },
    {
      name: "VS Code",
      iconUrl: "images/icons/vscode.svg",
      accent: "#007acc",
      note: "Clean workflow, code organization, and front-end development"
    },
    {
      name: "HTML5",
      iconUrl: "https://cdn.simpleicons.org/html5/E34F26",
      accent: "#e34f26",
      note: "Semantic structure, accessibility, and content-first markup"
    },
    {
      name: "CSS3",
      iconUrl: "https://cdn.simpleicons.org/css/1572B6",
      accent: "#1572b6",
      note: "Responsive layouts, animation, and visual refinement"
    },
    {
      name: "Bootstrap",
      iconUrl: "https://cdn.simpleicons.org/bootstrap/7952B3",
      accent: "#7952b3",
      note: "Fast responsive foundations with custom premium styling layered on top"
    }
  ],
  projects: [
    {
      id: "board-and-bun",
      category: "UX/UI Design",
      title: "Board & Bun",
      summary:
        "A food photography and menu design project focused on giving a local pub a cleaner, more professional presentation.",
      coverImage: "images/portfolio/ux-ui-design/signature-sandwitches-576-1024.png",
      coverAlt: "Board and Bun sandwich menu concept",
      tags: ["Food photography", "Menu layout", "Visual hierarchy"],
      type: "case-study",
      detailPage: "projects/board-and-bun.html",
      gallery: [
        {
          src: "images/portfolio/ux-ui-design/signature-sandwitches-576-1024.png",
          alt: "Board and Bun menu presentation"
        }
      ],
      meta: {
        role: "Photographer and layout designer",
        tools: ["Photoshop", "Illustrator"],
        deliverables: "Food imagery and menu concept layout",
        outcome: "A clearer and more visually consistent menu presentation"
      },
      highlights: [
        "Combined original food photography with layout design choices.",
        "Focused on clarity, appetite appeal, and better visual consistency.",
        "Used photography as the visual anchor instead of decorative noise."
      ],
      storyBlocks: [
        {
          type: "text",
          eyebrow: "Overview",
          title: "Photography and layout working together",
          paragraphs: [
            "For this project, I visited a local pub to photograph their food and turn the menu into something more polished and visually appealing.",
            "The goal was to show the dishes clearly, create stronger visual consistency, and make the menu feel more professional without losing the casual character of the place."
          ]
        },
        {
          type: "list",
          eyebrow: "Process",
          title: "How I approached the menu",
          intro:
            "The design process focused on balancing appetizing photography with a layout that feels easy to scan.",
          items: [
            "Photographed the food with presentation and clarity in mind.",
            "Selected imagery that made each item feel more tangible and inviting.",
            "Structured the menu so the visuals supported the reading flow instead of distracting from it."
          ]
        },
        {
          type: "gallery",
          eyebrow: "Featured Visual",
          title: "Menu concept",
          layout: "single",
          images: [
            {
              src: "images/portfolio/ux-ui-design/signature-sandwitches-576-1024.png",
              alt: "Board and Bun featured menu design",
              caption: "The final visual focuses on food appeal, hierarchy, and a cleaner presentation."
            }
          ]
        },
        {
          type: "text",
          eyebrow: "Design Decisions",
          title: "Why the layout works",
          paragraphs: [
            "I kept the composition direct and image-led so the food carries the visual weight. Clear spacing and structured text help the menu feel easier to understand at a glance.",
            "The final direction shows how photography and layout can work together to make a simple menu feel more deliberate and more memorable."
          ]
        },
        {
          type: "text",
          eyebrow: "Outcome",
          title: "A sharper presentation",
          paragraphs: [
            "This project strengthened my ability to translate photography into a practical design outcome. It also reinforced how important structure and restraint are when building something that needs to communicate quickly."
          ]
        }
      ]
    },
    {
      id: "remiya",
      category: "UX/UI Design",
      title: "Remiya App",
      summary:
        "A premium memory-keeping product concept that turns a meaningful video moment into a physical wall tile with instant replay.",
      coverImage: "images/portfolio/ux-ui-design/remiya/hi-fi/1-create-home.png",
      coverAlt: "Remiya app home screen hi-fi design",
      tags: ["Product concept", "Personas", "Mobile UI"],
      type: "case-study",
      detailPage: "projects/remiya.html",
      gallery: [
        {
          src: "images/portfolio/ux-ui-design/remiya/personas/primary-persona.png",
          alt: "Primary persona for Remiya"
        },
        {
          src: "images/portfolio/ux-ui-design/remiya/low-fi/1-create-home.png",
          alt: "Low fidelity Remiya home flow"
        },
        {
          src: "images/portfolio/ux-ui-design/remiya/hi-fi/1-create-home.png",
          alt: "High fidelity Remiya home flow"
        }
      ],
      meta: {
        role: "UX/UI designer",
        tools: ["Figma", "Photoshop"],
        deliverables: "Personas, flows, wireframes, hi-fi UI, and component studies",
        outcome: "A premium digital product concept centered on emotional memory keeping"
      },
      highlights: [
        "Defined a niche product position around intention, permanence, and instant replay.",
        "Moved from personas to low-fi flows and then into a refined visual system.",
        "Focused the interface on reducing friction around meaningful memories."
      ],
      storyBlocks: [
        {
          type: "text",
          eyebrow: "Overview",
          title: "Designing memory as something intentional",
          paragraphs: [
            "Remiya is a native app paired with web that helps users select, preserve, display, and instantly replay a single meaningful video moment through a premium physical wall tile.",
            "The concept stood out to me because it treats memories with intention. Instead of burying emotional moments in cloud storage, it turns one chosen video into something visible, personal, and easy to revisit."
          ]
        },
        {
          type: "list",
          eyebrow: "Mission and Problem",
          title: "What the product solves",
          intro:
            "The product overview established a clear emotional problem space and a practical design opportunity.",
          items: [
            "People capture more memories than ever but revisit fewer than ever.",
            "Important emotional moments disappear into digital storage and become hard to access.",
            "Remiya removes the need to search, scrub, or remember where a memory is stored."
          ]
        },
        {
          type: "list",
          eyebrow: "Pain Points",
          title: "Key user frustrations",
          intro: "The main pain points shaping the experience were:",
          items: [
            "Digital forgetting",
            "Replay friction",
            "A lack of emotional presence in everyday life"
          ]
        },
        {
          type: "list",
          eyebrow: "How It Works",
          title: "A simple step-by-step journey",
          intro:
            "The product flow is intentionally direct so the technology stays in the background.",
          items: [
            "The user selects a meaningful video.",
            "They trim the exact moment that matters.",
            "They create a premium physical wall tile.",
            "They mount it like decor.",
            "A scan instantly replays the chosen moment."
          ]
        },
        {
          type: "gallery",
          eyebrow: "Personas",
          title: "Understanding who Remiya is for",
          layout: "trio",
          images: [
            {
              src: "images/portfolio/ux-ui-design/remiya/personas/primary-persona.png",
              alt: "Primary persona for Remiya",
              caption: "Primary persona focused on design-conscious households and gift buyers."
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/personas/secondary-persona.png",
              alt: "Secondary persona for Remiya",
              caption: "Secondary persona exploring different emotional and practical motivations."
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/personas/tertiary-persona.png",
              alt: "Tertiary persona for Remiya",
              caption: "Tertiary persona reflecting legacy and low-tech comfort needs."
            }
          ]
        },
        {
          type: "text",
          eyebrow: "My Reflection",
          title: "What the persona process taught me",
          paragraphs: [
            "When I developed the personas for Remiya, I wanted them to feel grounded in real emotional habits instead of generic demographics. The most useful part of the process was seeing how the same product could serve very different motivations, from celebrating joyful milestones to preserving memories with long-term sentimental value.",
            "That work helped me make better interface decisions later on. It pushed me to keep the experience calm, focused, and low-friction because the users I was designing for were not looking for complexity. They were looking for something meaningful, simple, and trustworthy."
          ]
        },
        {
          type: "gallery",
          eyebrow: "Low-Fidelity",
          title: "Early flow exploration",
          layout: "masonry",
          images: [
            {
              src: "images/portfolio/ux-ui-design/remiya/low-fi/1-create-home.png",
              alt: "Low fidelity home screen for Remiya",
              caption: "Exploring the opening experience and initial task flow."
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/low-fi/3-create-import-social-link-2.png",
              alt: "Low fidelity import social link flow for Remiya",
              caption: "Testing how users might bring in a memory from another platform."
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/low-fi/5-create-trim-your-video.png",
              alt: "Low fidelity trim video flow for Remiya",
              caption: "Focusing on the key moment-selection step."
            }
          ]
        },
        {
          type: "gallery",
          eyebrow: "High-Fidelity",
          title: "Refining the product into a premium visual direction",
          layout: "masonry",
          images: [
            {
              src: "images/portfolio/ux-ui-design/remiya/hi-fi/1-create-home.png",
              alt: "High fidelity home screen for Remiya",
              caption: "A cleaner, more premium interface direction for the product."
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/hi-fi/3-create-import-social-link-2.png",
              alt: "High fidelity import flow for Remiya",
              caption: "Clarifying the import process without losing visual warmth."
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/hi-fi/5-create-trim-your-video.png",
              alt: "High fidelity trim video flow for Remiya",
              caption: "Making the key editing action feel focused and approachable."
            }
          ]
        },
        {
          type: "gallery",
          eyebrow: "Components",
          title: "Supporting the visual system",
          layout: "grid",
          images: [
            {
              src: "images/portfolio/ux-ui-design/remiya/componients/color-palette.png",
              alt: "Remiya color palette",
              caption: "Color system"
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/componients/typography.png",
              alt: "Remiya typography study",
              caption: "Typography choices"
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/componients/navigation.png",
              alt: "Remiya navigation component",
              caption: "Navigation"
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/componients/text-field.png",
              alt: "Remiya text field component",
              caption: "Form fields"
            },
            {
              src: "images/portfolio/ux-ui-design/remiya/componients/icons.png",
              alt: "Remiya iconography study",
              caption: "Iconography"
            }
          ]
        },
        {
          type: "text",
          eyebrow: "Outcome",
          title: "From concept to believable experience",
          paragraphs: [
            "Remiya helped me bring together product thinking, UX structure, and visual design in one project. The final concept feels premium because it stays emotionally focused and avoids adding unnecessary complexity.",
            "It also strengthened my confidence in using personas and interface systems to support a product idea from both the user side and the visual side."
          ]
        }
      ]
    },
    {
      id: "stittsville",
      category: "UX/UI Design",
      title: "Stittsville Shooting Range Website Redesign",
      summary:
        "A team-based redesign focused on improving clarity, professionalism, trust, and safety communication for a dated website.",
      coverImage: "images/portfolio/ux-ui-design/stittsville/mood-2.jpg",
      coverAlt: "Mood board for Stittsville Shooting Range redesign",
      tags: ["Team project", "Brand refresh", "Responsive redesign"],
      type: "case-study",
      detailPage: "projects/stittsville.html",
      gallery: [
        {
          src: "images/portfolio/ux-ui-design/stittsville/mood-2.jpg",
          alt: "Mood board for Stittsville"
        },
        {
          src: "images/portfolio/ux-ui-design/stittsville/creative brief.png",
          alt: "Creative brief for Stittsville redesign"
        }
      ],
      meta: {
        role: "Project administrator and design contributor",
        tools: ["Figma", "Illustrator", "Basecamp"],
        deliverables: "Creative brief, brand direction, UX structure, and responsive redesign planning",
        outcome: "A clearer, more modern concept that emphasized services, safety, and easier navigation"
      },
      highlights: [
        "Started with a full review of the original site to identify usability and structure issues.",
        "Reframed the experience around clarity, professionalism, and trust.",
        "Balanced design contributions with project coordination responsibilities."
      ],
      storyBlocks: [
        {
          type: "text",
          eyebrow: "Overview",
          title: "Improving trust through structure and design",
          paragraphs: [
            "The Stittsville Shooting Range Website Redesign focused on improving the online experience by creating a clearer, more modern, and more user-friendly website.",
            "The original site felt outdated and visually cluttered, which made it difficult for users to quickly find important information and weakened the sense of professionalism and safety."
          ]
        },
        {
          type: "text",
          eyebrow: "Team Context",
          title: "A group project with real coordination demands",
          paragraphs: [
            "This was a group project completed by a team of six students, with our instructor acting as the client. We began by analyzing the existing website to identify structural and usability issues before developing a new design direction.",
            "The goal was to improve both UX and visual branding by building a mobile-responsive concept that highlighted services, emphasized safety, and made information easier to access."
          ]
        },
        {
          type: "list",
          eyebrow: "My Role",
          title: "Design support plus project administration",
          intro:
            "In addition to contributing to the design work, I also handled the project administrator role.",
          items: [
            "Organized tasks and assigned roles across the team.",
            "Set deadlines and followed up to keep milestones on schedule.",
            "Uploaded project documents, updated shared links, and maintained the working structure for the group."
          ]
        },
        {
          type: "text",
          eyebrow: "Creative Brief",
          title: "Defining the foundation",
          paragraphs: [
            "The creative brief established the main objectives, scope, and deliverables. It aligned the team on the need for a clearer, safer, and more user-friendly website while also strengthening the visual identity of the brand.",
            "It also clarified the scope of redesigning the desktop and mobile experience, refreshing the logo and brand direction, and planning a more intentional information structure."
          ]
        },
        {
          type: "text",
          eyebrow: "Sitemap",
          title: "Reorganizing content for easier navigation",
          paragraphs: [
            "The sitemap stage helped us compare the original site structure with a cleaner redesigned version. That process made it easier to see where content could be grouped more logically and where navigation could become simpler.",
            "The redesigned structure focused on helping visitors reach key sections such as services, safety information, and booking-related content faster."
          ]
        },
        {
          type: "gallery",
          eyebrow: "Available Visuals",
          title: "Creative brief and visual direction",
          layout: "split",
          images: [
            {
              src: "images/portfolio/ux-ui-design/stittsville/creative brief.png",
              alt: "Creative brief for Stittsville redesign",
              caption: "The project brief set the tone, deliverables, and UX priorities."
            },
            {
              src: "images/portfolio/ux-ui-design/stittsville/mood-2.jpg",
              alt: "Mood board for the Stittsville redesign",
              caption: "A visual direction exploring a more polished and modern brand presence."
            }
          ]
        },
        {
          type: "text",
          eyebrow: "Brand and UX Direction",
          title: "Making the site feel more credible",
          paragraphs: [
            "The redesign direction aimed to communicate professionalism, safety, and clarity at every level. That meant stronger hierarchy, clearer calls to action, cleaner layouts, and a visual identity that felt more current and trustworthy.",
            "This project taught me a lot about how structure, communication, and project management can directly influence the quality of a design outcome."
          ]
        },
        {
          type: "text",
          eyebrow: "Outcome",
          title: "A stronger digital first impression",
          paragraphs: [
            "The final concept improved the overall experience by clarifying the content structure and reinforcing the brand with a more modern visual direction. It also gave me valuable experience balancing design execution with team organization."
          ]
        }
      ]
    },
    {
      id: "my-coffee-house",
      category: "Web Development",
      title: "My Coffee House",
      summary:
        "A responsive landing page built from a provided Figma file using semantic HTML, CSS Grid, Flexbox, animations, and GitHub Pages deployment.",
      coverImage: "images/portfolio/web-development/coffee-house/web-2-mid-scaled.jpg",
      coverAlt: "My Coffee House responsive landing page",
      tags: ["Responsive build", "Semantic HTML", "GitHub Pages"],
      type: "external",
      externalUrl: "https://tazi0002.github.io/mtm6201-midterm/",
      ctaLabel: "View Live Site",
      meta: {
        role: "Front-end developer",
        tools: ["HTML", "CSS", "GitHub Pages"],
        deliverables: "Responsive landing page from a design file",
        outcome: "A mobile-first, validated, accessible front-end build"
      }
    },
    {
      id: "three-star",
      category: "Web Development",
      title: "Three Star",
      summary:
        "A mobile-first website for a Web Development 1 final assignment, built with clean structure, responsive CSS, and GitHub Pages deployment.",
      coverImage: "images/portfolio/web-development/three-star/web-1-final.jpg",
      coverAlt: "Three Star website mockup",
      tags: ["Mobile-first", "Grid and Flexbox", "Static site"],
      type: "external",
      externalUrl: "https://tazi0002.github.io/final-project/",
      ctaLabel: "View Live Site",
      meta: {
        role: "Front-end developer",
        tools: ["HTML", "CSS"],
        deliverables: "Responsive static website",
        outcome: "A clean coded final assignment based on a provided mockup"
      }
    },
    {
      id: "short-horror-movie",
      category: "Videography",
      title: "Short Horror Movie",
      summary:
        "A short film edited from raw, unorganized footage into a cohesive story with a defined beginning, direction, and ending.",
      coverImage: "images/portfolio/videography/short-horror-movie/short-horror-movie-cover-image.png",
      coverAlt: "Short horror movie cover image",
      tags: ["Story editing", "Narrative structure", "Video foundations"],
      type: "external",
      externalUrl: "https://www.youtube.com/watch?v=icLCB1YwOCU",
      ctaLabel: "View Video",
      meta: {
        role: "Editor",
        tools: ["Video editing"],
        deliverables: "Short narrative video",
        outcome: "A cohesive short film built from raw footage"
      }
    },
    {
      id: "the-camper",
      category: "Videography",
      title: "The Camper",
      summary:
        "A Foley sound project where every key environmental sound was crafted to support tension, atmosphere, and immersion.",
      coverImage: "images/portfolio/videography/the-camper/the-camper-image.jpg",
      coverAlt: "The Camper project cover image",
      tags: ["Foley", "Atmosphere", "Audio storytelling"],
      type: "external",
      externalUrl: "https://www.youtube.com/watch?v=DaUhtr5fygA",
      ctaLabel: "View Video",
      meta: {
        role: "Sound designer and editor",
        tools: ["Foley", "Video editing"],
        deliverables: "Short film with crafted soundscape",
        outcome: "A stronger emotional atmosphere through custom audio work"
      }
    },
    {
      id: "ten-toes-coffee",
      category: "Videography",
      title: "Ten Toes Coffee",
      summary:
        "A location tour exercise focused on composition, tripod framing, short-form editing, and a balanced mix of visuals, voiceover, and music.",
      coverImage: "images/portfolio/videography/ten-toes/ten-toes-image.jpg",
      coverAlt: "Ten Toes Coffee project cover image",
      tags: ["Location tour", "Composition", "Editing"],
      type: "external",
      externalUrl: "https://www.youtube.com/watch?v=LsC91of-e08&t=2s",
      ctaLabel: "View Video",
      meta: {
        role: "Cinematographer and editor",
        tools: ["Tripod shooting", "Audio balancing", "Editing"],
        deliverables: "One-minute location-based video",
        outcome: "A visually consistent location piece with controlled pacing"
      }
    }
  ],
  photography: [
    { src: "images/portfolio/photography/8.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 1 },
    { src: "images/portfolio/photography/11.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 2 },
    { src: "images/portfolio/photography/12.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 3 },
    { src: "images/portfolio/photography/14.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 4 },
    { src: "images/portfolio/photography/21.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 5 },
    { src: "images/portfolio/photography/22.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 6 },
    { src: "images/portfolio/photography/25.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 7 },
    { src: "images/portfolio/photography/29.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 8 },
    { src: "images/portfolio/photography/31.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 9 },
    { src: "images/portfolio/photography/36.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 10 },
    { src: "images/portfolio/photography/37.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 11 },
    { src: "images/portfolio/photography/39.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 12 },
    { src: "images/portfolio/photography/dSC01205.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 13 },
    { src: "images/portfolio/photography/iMG_0070.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 14 },
    { src: "images/portfolio/photography/iMG_0229.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 15 },
    { src: "images/portfolio/photography/iMG_0660.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 16 },
    { src: "images/portfolio/photography/iMG_1282.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 17 },
    { src: "images/portfolio/photography/iMG_1419.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 18 },
    { src: "images/portfolio/photography/iMG_1675.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 01", order: 19 },
    { src: "images/portfolio/photography/iMG_1847.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 20 },
    { src: "images/portfolio/photography/iMG_3001.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 21 },
    { src: "images/portfolio/photography/iMG_3135.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 02", order: 22 },
    { src: "images/portfolio/photography/iMG_3175.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 23 },
    { src: "images/portfolio/photography/iMG_3763.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 24 },
    { src: "images/portfolio/photography/iMG_3781.jpg", alt: "Photography work by Ali Tazikeh", collection: "Series 03", order: 25 },
    { src: "images/portfolio/photography/iMG_3929.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 26 },
    { src: "images/portfolio/photography/iMG_4993.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 27 },
    { src: "images/portfolio/photography/iMG_5641.jpg", alt: "Photography work by Ali Tazikeh", collection: "Featured", order: 28 }
  ]
};
