export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [13, -7, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [15, 8, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-29, 24, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-17, -15, -10]
      : [-15, -13, -10],
  };
};

export const projects = [
  {
    id: 1,
    title: "J-Book - React Js Sandbox",
    logo: "assets/Jbook-logo.png",
    description:
      "Jbook is a code editing and a code documenting app. In the app, the user can code a react js application, just like they would in VScode.",
    link: "https://reactjssandbox.netlify.app/",
    subDescription:
      "The user has the ability to import libraries, such as Redux, styled components, etc. Consider the app as a code pen clone, but with the added functionality of documenting the code you have written (with the option of a markdown editor). Once the user has finished working, they can save their work in a file inside the user's hard drive.",
    techStack: [
      {
        id: 1,
        name: "React.js",
        link: "assets/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        link: "assets/typescript.png",
      },
      {
        id: 3,
        name: "Node.js",
        link: "assets/nodejs-icon.svg",
      },
      {
        id: 4,
        name: "CSS",
        link: "assets/css-logo.svg",
      },
    ],
    spotlight: "/assets/spotlight1.png",
  },
  {
    id: 2,
    title: "Swift Chat - Chat Application",
    logo: "assets/swiftChat-logo.png",
    description:
      "The Chat Application is a real-time messaging platform designed to facilitate seamless communication between users.",
    subDescription:
      "Built with a modern tech stack that includes React.js and Chakra UI for the frontend, and MongoDB, Express.js, and Node.js for the backend, the app offers a range of features to enhance user interaction. Users can securely sign up or sign in to their accounts, enabling them to engage in private one-on-one chats or create and manage group chats with multiple participants. With instantaneous message delivery and updates, conversations flow smoothly without delays. The application’s intuitive and responsive design, powered by Chakra UI, ensures a pleasant user experience across devices, making it an essential tool for both personal and professional communication.",
    github: "https://github.com/jayantpuri/ChatApp",
    techStack: [
      {
        id: 1,
        name: "React.js",
        link: "assets/react.svg",
      },
      {
        id: 2,
        name: "Chakra UI",
        link: "assets/chakra-ui-icon.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        link: "assets/mongo-logo.svg",
      },
      {
        id: 4,
        name: "Socket.io",
        link: "assets/socketio-icon.svg",
      },
    ],
    spotlight: "/assets/spotlight2.png",
  },
  {
    id: 3,
    title: "Crown clothing - E-commerce App",
    logo: "assets/crown.svg",
    description:
      "Crown Clothing is a dynamic e-commerce platform designed to provide users with a seamless shopping experience for apparel.",
    link: "https://reactjssandbox.netlify.app/",
    subDescription:
      "Built with a user-friendly interface, the store allows customers to easily browse through a diverse range of clothing categories, from casual wear to formal attire. Users can effortlessly add items to their cart, adjust quantities, and view the final price before proceeding to checkout. The platform also offers convenient options for editing the cart, ensuring that customers can tailor their selections to meet their preferences. With a focus on enhancing the online shopping experience, this application combines accessibility and functionality, making it the perfect destination for fashion enthusiasts looking to update their wardrobe.",
    techStack: [
      {
        id: 1,
        name: "React.js",
        link: "assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        link: "assets/css-logo.svg",
      },
      {
        id: 3,
        name: "Firebase",
        link: "assets/firebase-icon.svg",
      },
      {
        id: 4,
        name: "Redux",
        link: "assets/js_redux-icon.svg",
      },
    ],
    spotlight: "/assets/spotlight3.png",
  },
];

export const experience = [
  {
    id: 1,
    company: "Alba Inc.",
    logo: "/assets/Alba-logo.jpg",
    jobTitle: "FrontEnd Developer",
    date: "2022 - 2024",
    description:
      "As a front end Developer, I designed the official website using React and Chakra UI, focusing on UI/UX to enhance user engagement by 20% and reduce bounce rates by 15%. I developed a web-based ERP system with React and NodeJS, improving team productivity by 40% through Agile/Scrum practices. Additionally, I led monthly training sessions that boosted task completion efficiency by 20%.",
    animation: "clapping",
  },
  {
    id: 2,
    company: "National Campus and Community Radio Association",
    logo: "assets/campus-logo.jpeg",
    jobTitle: "FullStack Developer",
    date: "2021 - 2022",
    description:
      "I revamped the company website using React and Material UI, redesigning the user experience to boost traffic by 50%. I developed a PostgreSQL database for efficient data management and implemented Socket.IO to introduce a chat feature, increasing user engagement by 50% and the average messages exchanged per meeting by 30%. To enhance security, I integrated authentication with Passport JS and established a file-sharing system that reduced printing costs by 40%.",
    animation: "salute",
  },
];
