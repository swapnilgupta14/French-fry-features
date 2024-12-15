// const projectData = [
//     {
//       name: "RUMMEE 123",
//       label: "Mobile Application Design",
//       description:
//         "RUMMEE123 is a sleek and intuitive rummy-based gaming application designed to provide a seamless experience for card game enthusiasts. With user-centric design principles, the app's interface combines modern aesthetics and functionality to ensure ease of use across multiple user flows.",
//       type: "UI/UX Designing",
//       tech: "Figma",
//       link: "https://example.com/ar-fashion",
//       image: "/images/rummy.png",
//     },
//     {
//       name: "Kainath",
//       label: "Kainath - Redefining Blind Dating",
//       description:
//         "Kainath is a unique dating application designed to foster genuine connections between individuals in an exclusive and thoughtful manner. Unlike conventional dating apps, Kainath eliminates the influence of visual biases by focusing solely on personality and conversation. Users engage in a timed 5-minute chat to explore compatibility before deciding to meet.",
//       type: "UI/UX Designing",
//       tech: "Figma",
//       link: "https://example.com/3d-tech",
//       image: "/images/p1.png",
//     },
//     {
//       name: "NexaBet",
//       label: "Luxury Real Estate Website",
//       description:
//         "Developed a sleek and responsive website for a luxury real estate brand, focusing on high-quality visuals and seamless navigation.",
//       type: "Web App",
//       tech: "React / Next.js / Tailwind CSS",
//       link: "https://example.com/luxury-real-estate",
//       image: "/images/p1.png",
//     },
//     {
//       name: "Jai Multi",
//       label: "Multi-Purpose Business Website",
//       description:
//         "Jai Multi is a modern, multi-purpose business website designed to cater to diverse industries. The platform showcases versatility with a clean and professional layout, offering a seamless user experience. Developed with a focus on scalability and performance, the website is optimized for showcasing a company's services, portfolio, and unique offerings.",
//       type: "B2B Websites",
//       tech: "HTML, CSS, React JavaScript",
//       link: "https://example.com/lifestyle-ecommerce",
//       image: "/images/jai.jpg",
//     },
//     {
//       name: "AuctoGames (Cricket Auction)",
//       label: "Brand Book for Modern Startup",
//       description:
//         "Designed a comprehensive brand book outlining the visual identity, tone, and guidelines for a modern tech startup.",
//       type: "Book Design",
//       tech: "Adobe Illustrator / InDesign / Photoshop",
//       link: "https://example.com/startup-brand-book",
//       image: "/images/p1.png",
//     },
//     {
//       name: "The Good Planet",
//       label: "Sustainable Cleaning Solutions",
//       description:
//         "A Shopify-based e-commerce platform built for a company dedicated to providing sustainable, plant-based cleaning solutions. The website not only showcases the company’s eco-friendly products but also reflects its mission and values through carefully crafted sections like About Us. The platform is designed to resonate with environmentally conscious consumers while delivering an intuitive and seamless shopping experience.",
//       type: "UI/UX, Shopify",
//       tech: "Figma/ Shopify",
//       link: "https://example.com/luxury-real-estate",
//       image: "/images/good.jpg",
//     },
//     {
//       name: "Entise",
//       label: "Premium Sustainable Lifestyle Store",
//       description:
//         "Entise is an e-commerce platform offering curated, sustainable lifestyle products. The website embodies a minimalist and user-friendly design, focusing on premium aesthetics and seamless shopping experiences. The platform highlights Entise’s dedication to eco-friendly living and ethical practices through a carefully crafted UI/UX that resonates with its target audience.",
//       type: "E-commerce Website",
//       tech: "Shopify",
//       link: "https://example.com/luxury-real-estate",
//       image: "/images/entise.jpg",
//     },
//   ];

export const projectDetails = {
  "RUMMEE 123": {
    id: "rummee-123",
    name: "RUMMEE 123",
    label: "Mobile Application Design",
    description:
      "RUMMEE123 is a sleek and intuitive rummy-based gaming application designed to provide a seamless experience for card game enthusiasts.",
    type: "UI/UX Designing",
    tech: "Figma",
    link: "https://example.com/rummee123",
    imageFiles: [
      "/images/rummy.png",
      "/images/rummy-splash.png",
      "/images/rummy-onboarding.png",
      "/images/rummy-dashboard.png",
    ],
    keyFeatures: [
      "Splash Screen",
      "Onboarding Screens",
      "KYC Verification Flow",
      "Loading Screens",
      "Intuitive Dashboard",
    ],
    designProcess: [
      "User Research",
      "Wireframing",
      "High-Fidelity UI Design",
      "Prototyping",
      "User Feedback Iterations",
    ],
  },
  Kainath: {
    id: "kainath",
    name: "Kainath",
    label: "Redefining Blind Dating",
    description:
      "A unique dating application designed to foster genuine connections between individuals in an exclusive and thoughtful manner.",
    type: "UI/UX Designing",
    tech: "Figma",
    link: "https://example.com/kainath",
    imageFiles: [
      "/images/kain.png",
      "/images/kainath-onboarding.png",
      "/images/kainath-chat.png",
    ],
    keyFeatures: [
      "5-Minute Timed Chat",
      "Personality-Based Matching",
      "Venue Selection",
      "Activity Scheduling",
    ],
    designProcess: [
      "Concept Development",
      "UX Research",
      "Interface Design",
      "Prototyping",
      "Iteration",
    ],
  },
  NexaBet: {
    id: "nexabet",
    name: "NexaBet",
    label: "Web App",
    description:
      "A dynamic web application designed for managing betting platforms, offering an engaging user interface and real-time updates.",
    type: "Web Development",
    tech: "React, Node.js",
    link: "https://example.com/nexabet",
    imageFiles: [
      "/images/nexabet-placeholder.png", // Placeholder image as server is down
    ],
    keyFeatures: ["Real-Time Odds", "User Wallet Management", "Bet History"],
    designProcess: [
      "Requirement Analysis",
      "UI/UX Design",
      "Feature Implementation",
      "Testing and Deployment",
    ],
  },
  "Aucto (Cricket Auction)": {
    id: "aucto",
    name: "Aucto (Cricket Auction)",
    label: "Web App",
    description:
      "An innovative platform for conducting cricket auctions, designed for managing teams, players, and real-time bidding.",
    type: "Web Development",
    tech: "React, Firebase",
    link: "https://example.com/aucto",
    imageFiles: ["/images/aucto.jpg"],
    keyFeatures: [
      "Player Bidding",
      "Team Management",
      "Real-Time Auction Updates",
    ],
    designProcess: ["User Research", "Prototyping", "UI Design", "Development"],
  },
  "Jai Multi Engineering Co.": {
    id: "jai-multi",
    name: "Jai Multi Engineering Co.",
    label: "B2B Website",
    description:
      "Jai Multi is a modern, multi-purpose business website designed to cater to diverse industries. The platform showcases versatility with a clean and professional layout, offering a seamless user experience.",
    type: "Web Development",
    tech: "React, Vercel",
    link: "https://jai-multi.vercel.app/",
    imageFiles: [
      "/images/jai.jpg", // Include visuals as specified
      "/images/jai-multi-about.png",
      "/images/jai-multi-products.png",
      "/images/jai-multi-contact.png",
    ],
    keyFeatures: ["Homepage", "About Us", "Product Section", "Contact Page"],
    designProcess: [
      "Design and Development",
      "Performance Optimization",
      "Testing and Deployment",
    ],
  },
  Entise: {
    id: "entise",
    name: "Entise",
    label: "Shopify Website",
    description:
      "Entise is an e-commerce platform offering curated, sustainable lifestyle products. The website embodies a minimalist and user-friendly design, focusing on premium aesthetics and seamless shopping experiences.",
    type: "E-commerce Development",
    tech: "Shopify",
    link: "https://entise.in/",
    imageFiles: [
      "/images/entise.jpg",
      "/images/entise-product.png",
      "/images/entise-policy.png",
    ],
    keyFeatures: ["Homepage", "Product Page", "Return and Refund Policy"],
    designProcess: [
      "Theme Customization",
      "Feature Integration",
      "SEO Optimization",
    ],
  },
  "The Good Planet": {
    id: "good-planet",
    name: "The Good Planet",
    label: "Shopify Website",
    description:
      "A Shopify-based e-commerce platform built for a company dedicated to providing sustainable, plant-based cleaning solutions. The website showcases eco-friendly products while reflecting the company's mission and values.",
    type: "E-commerce Development",
    tech: "Shopify",
    link: "https://95eba7-df.myshopify.com/",
    imageFiles: [
      "/images/good.jpg",
      "/images/good-planet-products.png",
      "/images/good-planet-about.png",
    ],
    keyFeatures: ["Homepage", "Product Listing Page", "About Us"],
    designProcess: [
      "Theme Customization",
      "App Integration",
      "Performance Optimization",
    ],
  },
};
