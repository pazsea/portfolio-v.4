//ICONS
import firebaseIcon from "../images/icons/firebaseIcon.svg";
import cssIcon from "../images/icons/cssIcon.svg";
import htmlIcon from "../images/icons/htmlIcon.svg";
import javascriptIcon from "../images/icons/javascriptIcon.svg";
import jwtIcon from "../images/icons/jwtIcon.svg";
import mobxIcon from "../images/icons/mobxIcon.svg";
import reactIcon from "../images/icons/reactIcon.svg";
import reduxIcon from "../images/icons/reduxIcon.svg";
import styledcomponentIcon from "../images/icons/styledcomponentsIcon.png";
import sqlIcon from "../images/icons/sqlIcon.svg";
import nodejsIcon from "../images/icons/nodejsIcon.svg";
import nativeIcon from "../images/icons/reactnativeIcon.svg";

//Booking App Images

const bookingAppLanding =
  "https://howlygil.sirv.com/Images/projects/booking-app/bookingAppLandingjpg.jpg";
const bookingAppMobileLanding =
  "https://howlygil.sirv.com/Images/projects/booking-app/bookingAppMobileLanding.jpg";
const bookingAppSignIn =
  "https://howlygil.sirv.com/Images/projects/booking-app/bookingAppSignIn.png";

//GIF

const bookroomGif =
  "https://howlygil.sirv.com/Images/projects/booking-app/bookroomGif.gif";

//Parfume Match Images
const parfumeMatchLanding =
  "https://howlygil.sirv.com/Images/projects/parfume-match/parfumeMatchLanding.jpg";
//GIF
const parfumeMatchGif =
  "https://howlygil.sirv.com/Images/projects/parfume-match/parfumeMatchGif.gif";

//Portfolio Manager Images
const portfolioManagerLanding =
  "https://howlygil.sirv.com/Images/projects/portfolio-manager/portfolioManagerLanding.jpg";
//GIF
const portfolioManagerGif =
  "https://howlygil.sirv.com/Images/projects/portfolio-manager/portfolioManagerGif.gif";

//Portfolio v.2 Images
const portfolioLanding =
  "https://howlygil.sirv.com/Images/projects/portfoliov2/portfolioLanding.jpg";
//GIF
const portfolioGif =
  "https://howlygil.sirv.com/Images/projects/portfoliov2/portfolioGif.gif";

//Quire Notepad Images
const quireLanding =
  "https://howlygil.sirv.com/Images/projects/quire-notepad/quireLanding.jpg";

// School Player Images
const schoolPlayerLanding =
  "https://howlygil.sirv.com/Images/projects/school-player/schoolPlayerLanding.jpg";
//GIF
const schoolPlayerGif =
  "https://howlygil.sirv.com/Images/projects/school-player/schoolPlayerGif.gif";
// Train Alert Images
const trainAlertLanding =
  "https://howlygil.sirv.com/Images/projects/train-alert/trainAlertLanding.jpg";
//GIF
const trainAlertGif =
  "https://howlygil.sirv.com/Images/projects/train-alert/trainAlertGif.gif";

// SHORT DESC
// IMAGE PIC TO CAR MOBILE
// ICON PICS TO MOBILE

export const projects = [
  {
    name: "Booking App",
    githubURL: "https://github.com/pazsea/booking-app",
    mobileImage: bookingAppLanding,
    shortDesc:
      "A group project for school that enabled a user to book a school room and check invitees whereabouts.",
    goalsDesc:
      "For this group project we had to implement somekind of GPS function, we had to have two or more roles for the user which showed some functions for one and not for the other. /n We decided to make an booking app where students and teacher could reserve rooms at given time and dates. The teacher would be able to see where the students is located if the student were not in school at start of the lecture.",
    challengesDesc:
      "The biggest challenge was which backend we should use. As none of us had coded backend before, we had a big challenge. /n We choosed firebase because it was websocket base and an smaller learning curve than say SQL. We read up on how to use it and we really liked it.",
    myRoleDesc:
      "I really went all in on firebase. I studied the best way to code an CRUD implementation (create, read, update, delete) against firebase. /n I also had a big part in the complicated JS functions like how the users could actually book a time and date in a certain grouproom. I learned alot of JS methods and how to use them in React. ",

    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: reactIcon, alt: "React" },
      { ico: firebaseIcon, alt: "Firebase" },
      { ico: styledcomponentIcon, alt: "Styled Component" }
    ],
    images: [
      {
        original: bookingAppMobileLanding,
        thumbnail: bookingAppMobileLanding,
        originalClass: "horizontalImage",
        thumbnailClass: "horizontalThumbnail",
        originalAlt: "Booking App landingpage for Mobiles",
        thumbnailAlt: "Booking App landingpage for Mobiles"
      },
      {
        original: bookroomGif,
        thumbnail: bookroomGif,
        originalClass: "verticalImage",
        thumbnailClass: "verticalThumbnail",
        originalAlt:
          "Booking App gif image showing the whole project for Mobiles",
        thumbnailAlt:
          "Booking App gif image showing the whole project for Mobiles",
        thumbnailLabel: "GIF"
      },
      {
        original: bookingAppLanding,
        thumbnail: bookingAppLanding,
        originalClass: "horizontalImage",
        thumbnailClass: "horizontalThumbnail",

        originalAlt: "Booking App landingpage for computers",
        thumbnailAlt: "Booking App landingpage for computers"
      },
      {
        original: bookingAppSignIn,
        thumbnail: bookingAppSignIn,
        originalClass: "horizontalImage",
        thumbnailClass: "horizontalThumbnail",
        originalAlt: "Booking App sign in page for computers",
        thumbnailAlt: "Booking App sign in page for computers"
      }
    ]
  },
  {
    name: "Parfume Match",
    mobileImage: parfumeMatchLanding,
    shortDesc:
      "A project we made for the company Sniph. A social network for parfume enthusiasts.",
    goalsDesc:
      "For this project we had an client company called Sniph that wanted us to create some features to their existing site. The company wanted to attract more customers and increase their time on the site. /n The site sells parfume and tries to increase the customers knowledge about the parfumes they buy. With that in minde we wanted to make somekind of social plattform for Sniphs customers.",
    challengesDesc:
      "Every customer buys a parfume that has different kinds of parfume notes. Some parfumes though can have the same kind of parfume. We wanted to create and function that matches users against other users with the same kind of parfume taste. When the user is matched they can view each other parfume wardrobe and discover new parfumes. /n This was our key function. We also used firebase for this project. But we had to have an global state where the different parfumes could be accessed. /n We added and static SQL database where our app fetched the parfumes and its description. From that point it was easy to render out notes, names and descriptions. /n But for our data like user information, matches, user pictures etc we used firebase.",
    myRoleDesc:
      "We had one member who was very good at SQL so he took the lead there. My role was to add firebase and create a node.js server with an endpoint that fetch the data from our SQL database. /n I also created an complex JS function that matches users together depending on what parfumes they bought.",

    githubURL: "https://github.com/pazsea/parfume-match",
    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: reactIcon, alt: "React" },
      { ico: firebaseIcon, alt: "Firebase" },
      { ico: styledcomponentIcon, alt: "Styled Component" },
      { ico: nodejsIcon, alt: "Node JS" },
      { ico: sqlIcon, alt: "SQL" },
      { ico: reduxIcon, alt: "Redux" }
    ],
    images: [
      {
        original: parfumeMatchLanding,
        thumbnail: parfumeMatchLanding,
        originalClass: "horizontalImage",
        originalAlt: "Parfume Match landing page for computers",
        thumbnailAlt: "Parfume Match landing page for computers"
      },
      {
        original: parfumeMatchGif,
        thumbnail: parfumeMatchGif,
        originalClass: "horizontalImage",
        originalAlt: "Parfume Match gif image showing the whole project",
        thumbnailAlt: "Parfume Match gif image showing the whole project",
        thumbnailLabel: "GIF"
      }
    ]
  },

  {
    name: "Train Alert",
    mobileImage: trainAlertLanding,
    needVerticalClass: true,
    shortDesc:
      "A app I made in React Native. The basic idea is to alert you when you are at an selected train stop destination.",
    goalsDesc:
      "The idea for this project was simple. I wanted to make an React native app using geolocation. /n Sometimes I get lost in traffic (or in my own thoughts) in sthlm. Even though I know how to get there I sometimes space out and miss my station. /n This app would alert me when it is time to get off.",
    challengesDesc:
      "The biggest challenge was to honestly to get the runtime enviroment working right. After that it was pretty straight forward. Working with web React before Native really helped me in this project. ",
    myRoleDesc: "This was my own project so I decided on everything.",

    githubURL: "https://github.com/pazsea/train-alert",
    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: nativeIcon, alt: "React Native" }
    ],
    images: [
      {
        original: trainAlertLanding,
        thumbnail: trainAlertLanding,
        originalClass: "verticalImage",
        thumbnailClass: "verticalThumbnail",
        originalAlt: "Train Alert landing page for mobiles",
        thumbnailAlt: "Train Alert landing page for mobiles"
      },
      {
        original: trainAlertGif,
        thumbnail: trainAlertGif,
        originalClass: "verticalImage",
        thumbnailClass: "verticalThumbnail",
        originalAlt: "Train Alert gif image showing the whole project",
        thumbnailAlt: "Train Alert gif image showing the whole project",
        thumbnailLabel: "GIF"
      }
    ]
  },
  {
    name: "School Player",
    mobileImage: schoolPlayerLanding,
    shortDesc:
      "An school player page I made for my fellow student collegues (including me). It has all lectures from our terms all in one neat package.",
    goalsDesc:
      "My teacher use to stream every lesson on google hangout and youtube. But there wasnt any playlist with all his lectures. /n So I decided to organize this with an lib that had an embedded youtube player.",
    challengesDesc:
      "The challenge with this was to get the youtube player to connect to the links I have provided trough firebase.",
    myRoleDesc:
      "This was my own project so I decided on everything. But I had to get permission from my teacher.",

    githubURL: "https://github.com/pazsea/school-player",
    liveDemoURL: "https://school-player.surge.sh/",
    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: reactIcon, alt: "React" },
      { ico: firebaseIcon, alt: "Firebase" },
      { ico: styledcomponentIcon, alt: "Styled Component" }
    ],
    images: [
      {
        original: schoolPlayerLanding,
        thumbnail: schoolPlayerLanding,
        originalClass: "horizontalImage",
        originalAlt: "School Player image of the landing page",
        thumbnailAlt: "School Player image of the landing page"
      },
      {
        original: schoolPlayerGif,
        thumbnail: schoolPlayerGif,
        originalClass: "horizontalImage",
        thumbnailClass: "horizontalThumbnailGif",
        originalAlt: "School Player gif image showing the whole project",
        thumbnailAlt: "School Player gif image showing the whole project",
        thumbnailLabel: "GIF"
      }
    ]
  },
  {
    name: "Portfolio Manager",
    mobileImage: portfolioManagerLanding,
    shortDesc:
      "A experiment project working with an API using JWT tokens. In this project I also experimented with MobX with satisfying results.",
    goalsDesc:
      "A company gave me this intresting work test. /n Using React + MobX + JWT tokens they wanted me to make a application that the user could log in to an existing account they provided. /n The user would then see his stock portfolio and it´s value.",
    challengesDesc:
      "I never worked with JWT tokens before and it was interesting to see how they work. Sometimes they need to be refreshed and verified before they could be an valid token. /n You need to keep this in mind when coding the fetch method. I think I did a good job. /n Also I never worked with MobX which could handle the global state. I still prefer Redux or React hooks.",
    myRoleDesc: "This was my own project so I decided on everything.",

    githubURL: "https://github.com/pazsea/portfolio-manager",
    liveDemoURL: "http://portfolio-manager.surge.sh/",
    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: jwtIcon, alt: "JWT Token/Authorization" },
      { ico: mobxIcon, alt: "MobX" },
      { ico: reactIcon, alt: "React" },
      { ico: styledcomponentIcon, alt: "Styled Component" }
    ],
    images: [
      {
        original: portfolioManagerLanding,
        thumbnail: portfolioManagerLanding,
        originalClass: "horizontalImage",

        originalAlt: "Portfolio Manger landing page image",
        thumbnailAlt: "Portfolio Manger landing page image"
      },
      {
        original: portfolioManagerGif,
        thumbnail: portfolioManagerGif,
        originalClass: "horizontalImage",
        originalAlt: "Portfolio Manager gif image showing the whole project",
        thumbnailAlt: "Portfolio Manager gif image showing the whole project",
        thumbnailLabel: "GIF"
      }
    ]
  },
  {
    name: "Quire Notepad",
    mobileImage: quireLanding,
    shortDesc:
      "An notepad where you can save, open and bookmarks notes. All made in vanilla JS, HTML and CSS.",
    goalsDesc:
      "This was a group project where we needed to make a notepad on the web with just plain JS, HTML and CSS. This was one of my first school assignment.",
    challengesDesc:
      "At this time. Vanilla JS was really hard to understand. I studied alot and got alot of help from my great teacher. /n Eventually we made a proper notepad that the user could save notes in local storage.",
    myRoleDesc: "I coded alot of the JavaScript functions.",

    githubURL: "https://github.com/pazsea/quire-notepad",
    // showThumbnail: false,
    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: htmlIcon, alt: "HTML" },
      { ico: cssIcon, alt: "CSS" }
    ],
    images: [
      {
        original: quireLanding,
        thumbnail: quireLanding,
        originalClass: "horizontalImage",
        originalAlt: "Quire Notepad landing page image",
        thumbnailAlt: "Quire Notepad landing page image"
      }
    ]
  },
  {
    name: "Porfolio Homepage v.2",
    mobileImage: portfolioLanding,
    shortDesc:
      "My second portfolio page made in React. Using all kind of libs and animations.",
    goalsDesc:
      "This was a school assignment although it was very important for my career in front end. /n The only goal here was to create the portfolio page in React which was new to me at the time.",
    challengesDesc:
      "Learning about state, lifecycles, components was challenging but fun. If I am being honest this was much more logical than vanilla JS. I class components you have lifecycles that always return in a certain order. For me it was much more easier to create desired functions in that order.",
    myRoleDesc: "This was my own project so I decided on everything.",

    githubURL: "https://github.com/pazsea/portfolio-v.2",
    icons: [
      {
        ico: javascriptIcon,
        alt: "JavaScript"
      },
      { ico: reactIcon, alt: "React" },
      { ico: styledcomponentIcon, alt: "Styled Component" }
    ],
    images: [
      {
        original: portfolioLanding,
        thumbnail: portfolioLanding,
        originalClass: "horizontalImage",
        originalAlt: "Portfolio v.2 landing page image",
        thumbnailAlt: "Portfolio v.2 landing page image"
      },
      {
        original: portfolioGif,
        thumbnail: portfolioGif,
        originalClass: "horizontalImage",
        originalAlt: "Portfolio v2 gif image showing the whole project",
        thumbnailAlt: "Portfolio v2 gif image showing the whole project",
        thumbnailLabel: "GIF"
      }
    ]
  }
];
