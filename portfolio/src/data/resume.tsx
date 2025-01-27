import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sameer Poswal",
  initials: "SP",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Developer | Engineer | Writer",
  summary:
    "Passionate Engineer who loves to work on things related to web and games. Diving deep in [Golang](https://go.dev/), [WebRTC](https://webrtc.org/) and [Solidity](https://soliditylang.org/) these days. Apart from developing and debugging, I am highly interested in volleyball, emulation, mechanical keyboards and rubik's cube. Currently working as a software engineer at [Referrush](https://www.referrush.com), and previously worked as a frontend engineer at [Keyshade](https://www.keyshade.xyz/). You can find me pretty much active on [Github](https://github.com/poswalsameer), [LinkedIn](https://www.linkedin.com/in/sameerposwal/) and [Twitter](https://twitter.com/sameerposwal03). Feel free to check out my [Resume](https://docs.google.com/document/d/1X5eMOd4Jn4zolTgN-wwA2KxnnPu25FRe/edit?usp=sharing&ouid=105591030184095501081&rtpof=true&sd=true).",
  avatarUrl: "/profile.jpg",
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Express.js",
    "Appwrite",
    "Socket.io",
    "Redux",
    "Tailwind",
    "ShadCN",
    "NPM",
    "Python",
    "Go",
    "Postgres",
    "MongoDB",
    "Docker",
    "Github",
    "C++",
    "C#",
    "Unity",
    "Postman",
    "Vercel",
    "Data Structures",
    "Algorithms"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "poswalsameer2003@gmail.com",
    tel: "+91-7982108619",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/poswalsameer",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sameerposwal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/sameerposwal03",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Referrush",
      href: "https://www.referrush.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/referrush.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Currently working as a software engineer at Referrush building the product that includes their web application and shopify apps and extensions that will help thousands of brands in increasing their sales through direct customer referrals.",
    },
    //test comment 2
    {
      company: "Keyshade",
      href: "https://www.keyshade.xyz/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/keyshade.png",
      start: "November 2024",
      end: "Jan 2025",
      description:
        "Currently working as a frontend engineer at Keyshade developing frontends for their Platform and Web application. Collaborating with the backend team to ship code with minimum production time errors and building with full efficiency. Being part of an open-source organization, also taking parts in PR reviews on Github.",
    },
    {
      company: "ChaiFluence",
      badges: [],
      href: "#",
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/chaifluence.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Incorporated the first website for the organization. Boosted operations by 50% through efficient AI integration in day-to-day processes.Devised strategy to increase the social media presence by 100%.",
    },
    {
      company: "The IT Studio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Technical Content Developer",
      logoUrl: "./building.png",
      start: "July 2023",
      end: "November 2023",
      description:
        "Delivered technical content related to technologies like TypeScript, Next.js, and React.js for the organization's web application and social media handles. Worked with 10+ clients in setting up their web application and providing content in the technical domain. Boosted the organization's social media presence by 80% in the span of 3 months.",
    },
  ],
  education: [
    {
      school: "JC Bose University Of Science And Technology, YMCA",
      href: "https://jcboseust.ac.in/",
      degree: "B.Tech ( Electronics And Computer Engineering )",
      logoUrl: "/jcbust.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Shortfolio",
      href: "https://youtu.be/PB7ZsftjHoU?si=hFuq7Tucc5PaYCV-",
      dates: "",
      active: true,
      description:
        "Do you get lazy when it comes to building your portfolio website? Don't worry, Shortfolio will help you in preparing your portfolio page in less than 2 minutes.",
      technologies: [
        "Next.js",
        "Typescript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
        "Appwrite",
        "React Hook Form",
      ],
      links: [
        {
          type: "Website",
          href: "https://youtu.be/PB7ZsftjHoU?si=hFuq7Tucc5PaYCV-",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/shortfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shortfolioImage.png",
      video:
        "",
    },
    {
      title: "Trackr",
      href: "https://trackrlife.vercel.app/",
      dates: "",
      active: true,
      description:
        "Keep track of your daily, weekly and monthly tasks in a better way.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Next Auth",
        "Shadcn UI",
        "React Drag and Drop",
      ],
      links: [
        {
          type: "Website",
          href: "https://trackrlife.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/trackr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/trackr.png",
      video: "",
    },
    {
      title: "Minerush",
      href: "https://minerush.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed a friendly clone of one of the most popular game on Stake - a very famous online gambling website",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://minerush.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/MineRush",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mines-Image.jpeg",
      video: "",
    },
    {
      title: "Digital Ink",
      href: "https://digitalinknew.vercel.app/",
      dates: "",
      active: true,
      description:
        "Got an offer letter? Congratulation! But how would you accept it without signing? Try Digital Ink.",
      technologies: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "HTML Canvas",
      ],
      links: [
        {
          type: "Website",
          href: "https://digitalinknew.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/DigitalInk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sign.jpg",
      video:
        "",
    },
    {
      title: "TypeMaster",
      href: "https://typemaster-typingtest.netlify.app/",
      dates: "",
      active: true,
      description:
        "Want to 2x your productivity as a developer. There's no hack, learn typing with your 10 fingers and start working with double productivity. Start practising now!",
      technologies: [
        "React.js",
        "JavaScript",
        "TailwindCSS",
        "NPM",
      ],
      links: [
        {
          type: "Website",
          href: "https://typemaster-typingtest.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/TypeMaster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/keyboard.jpg",
      video:
        "",
    },
    {
      title: "Nitro Dash",
      href: "https://sameerposwal.itch.io/nitro-dash",
      dates: "",
      active: true,
      description:
        "A fun 2D car racing game. The goal is to beat your best friend's high score. Jump into it now!",
      technologies: [
        "C#",
        "Unity Game Engine"
      ],
      links: [
        {
          type: "Website",
          href: "https://sameerposwal.itch.io/nitro-dash",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/Nitro-Dash",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nitro.jpg",
      video:
        "",
    },
    {
      title: "Leetcost",
      href: "https://leetcost.vercel.app",
      dates: "",
      active: true,
      description:
        "Are you too much passionate about DSA and Leetcode? Enter your leetcode username and get insights on how much time you have given to the platform.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "ShadCN",
        "APIs",
        "NPM",
      ],
      links: [
        {
          type: "Website",
          href: "https://leetcost.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/Leetcost",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/leetcost.png",
      video:
        "",
    },
    {
      title: "Scanly",
      href: "https://scanlyapp.vercel.app",
      dates: "",
      active: true,
      description:
        "Do you want to extract texts from your government IDs or even any random image? This application can come to your rescue!",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "ShadCN",
        "Tesseract.js",
        "NPM",
      ],
      links: [
        {
          type: "Website",
          href: "https://scanlyapp.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/poswalsameer/Scanly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/scanly.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Lucide Icons",
      dates: "",
      location: "",
      description:
        "Rectified the issue of the wrong INKSCAPE image used on the deployed website.",
      image:
        "/lucide.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/lucide-icons/lucide/pull/2382",
        },
      ],
    },
    {
      title: "Codemod",
      dates: "",
      location: "",
      description:
        "Fixed inconsistent text color in the Clerk UI component.",
      image:
        "/codemod.jpg",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/codemod-com/codemod/pull/1352",
        },
      ],
    },
    {
      title: "Tabler",
      dates: "",
      location: "",
      description:
        "Repaired the wrong border styling used in the ribbon start class.",
      image:
        "/tabler.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/tabler/tabler/pull/1936",
        },
      ],
    },
    {
      title: "Keyshade",
      dates: "",
      location: "",
      description:
        "Added logic for joining the waitlist one time with one email only.",
      image:
        "/keyshade.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/keyshade-xyz/keyshade/pull/492",
        },
      ],
    },
    {
      title: "Shelf",
      dates: "",
      location: "",
      description:
        "Removed the extra $ sign appearing on the popup in workspaces tab.",
      image:
        "/shelf.png",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/Shelf-nu/shelf.nu/pull/1348",
        },
      ],
    },
    {
      title: "100xDevs",
      dates: "",
      location: "",
      description:
        "Conditionally rendered the `p` tag to show `per annum` text only when minSalary && maxSalary is valid.",
      image:
        "/100xdevs.jpg",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/code100x/job-board/pull/377",
        },
      ],
    },
    {
      title: "BM Samay",
      dates: "",
      location: "",
      description:
        "Revamped the privacy policy page to simplify the user experience.",
      image:
        "/samay.jpg",
      mlh: "",
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/Bot-Rakshit/bm_frontend/pull/145",
        },
      ],
    },
  ],
} as const;
