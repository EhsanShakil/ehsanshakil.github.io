/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahsan Shakeel",
  title: "Hi, I'm Ahsan",
  subTitle: emoji(
    "I am a React Native Developer, love coding and I code every single day. Currently learning backend technologies like NodeJs, Express and MongoDB. I always willing to work in a team of experienced developers and take my skills to the next level."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cKgoilxZMJpRY29t91taUVVLFVI7HMCk/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ehsanshakil",
  linkedin: "https://www.linkedin.com/in/ehsanshakeel/",
  gmail: "ahsanshakeel1994@gmail.com",
  facebook: "https://www.facebook.com/ehxn0",
  medium: "https://ehsanshakeel.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/13884028/ahsan-shakeel",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Crazy Mobile Application Developer Who Wants To Explore Every Tech Stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"
    ),
    emoji(
      "⚡ Develop and maintain cross-platform mobile applications for iOS and Android"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Rest API's"
    ),
    emoji("⚡ Optimize the quality and performance of the code"),
    emoji(
      "⚡ Writing reusable and maintainable components and follow best practices"
    ),
    emoji("⚡ Debugging and testing the application")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Axiom",
      logo: require("./assets/images/axiom.png"),
      subHeader: "Cloud Native Computing",
      duration: "June 2019 - July 2020"
    },
    {
      schoolName: "NED University of Engineering & Technology",
      logo: require("./assets/images/ned.png"),
      subHeader:
        "Bachelor of Science in Industrial & Manufacturing Engineering",
      duration: "January 2013 - June 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Native Developer",
      company: "Tresmind Solution",
      companylogo: require("./assets/images/tresmind.jpeg"),
      date: "March 2021 – May 2021"
    },
    {
      role: "Mobile Application Developer",
      company: "Kardiya Technologies",
      companylogo: require("./assets/images/kardiya.jpeg"),
      date: "September 2021 – November 2021"
    },

    {
      role: "Mobile Application Developer",
      company: "iEDGE",
      companylogo: require("./assets/images/iedge.jpeg"),
      date: "December 2021 – June 2022"
    },
    {
      role: "React Native Engineer",
      company: "TDCR",
      companylogo: require("./assets/images/tdcr.jpeg"),
      date: "August 2022 – October 2022"
    },
    {
      role: "Front-End Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "May 2021 – Present"
    },
    {
      role: "React Native Engineer",
      company: "Hana Wallet",
      companylogo: require("./assets/images/hana.png"),
      date: "November 2022 – Present"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Crypto Wallet",
      projectDesc:
        "It's a crypto wallet through which users can trade in different crypto currencies",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1QHo2pkSGilPCSY2cx78R1TOUcTiRmkih/view"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Albaraka Orders",
      projectDesc: "This one is a foods and vegetables delivery application",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1c0Ng0qzIMUyFNhpTrZ-sZqh74ceXNluy/view"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "TvMount",
      projectDesc:
        "I made this for one of my client who have a small tv mount business, this application is for technician who can see orders and accept it and then need to go to the client to mount the tv.",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/14PBdcHSdYmv5a2YbPPwM9TLOqfQ7hQ5G/view"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "HOCS",
      projectDesc:
        "This is a service based business who provide oil changing services I made this for their clients to prebook the time slot and services as per their needs.",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1tTsimr5VbZZopR0OATyu1-ju2f6V--gY/view"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Asaan Rasta",
      projectDesc:
        "This application is for passenger and driver, passenger can post a request after selecting a route where they wants to go and drivers can see the passengers request and can accept once at a time",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1F5w0M9nX8bF_uBjFoa5YvaULokH2UkQw/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      subtitle: "By John Hopkins University (Coursera)",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xZ6D6seAldhmdX-dAfjx0DNIk4_-RUih/view"
        }
      ]
    },
    {
      title: "JavaScript Objects, Prototypes, and Classes",
      subtitle: "By Jim Cooper (Pluralsight)",
      image: require("./assets/images/pluralsight.png"),
      imageAlt: "Pluralsight Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1a51LaYrE2zKGAxJltOdcLVikNqrjGUoz/view"
        }
      ]
    },
    {
      title: "React Big Picture",
      subtitle: "By Cory House (Pluralsight)",
      image: require("./assets/images/pluralsight.png"),
      imageAlt: "Pluralsight Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ipktBeCIDKCm-0pdZrnkjI7-rcoF0qx_/view"
        }
      ]
    },
    {
      title: "React Hooks",
      subtitle: "By Peter Kellner (Pluralsight)",
      image: require("./assets/images/pluralsight.png"),
      imageAlt: "Pluralsight Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1QR8h4eMQlfB3wzpDjwFX1WTgDsLOFPT_/view"
        }
      ]
    },
    {
      title: "React and Redux",
      subtitle: "By Cory House (Pluralsight)",
      image: require("./assets/images/pluralsight.png"),
      imageAlt: "Pluralsight Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bVzjs3PA0aMqCG3f0bUauTfDbA-1Abyo/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "How to create Google Spreadsheet API and Build an Android App",
      description:
        "Creating an application using Google Spreadsheet API as a backend."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61474919538",
  email_address: "ahsanshakeel1994@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
