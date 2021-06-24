import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Rohan | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
// export const heroData = {
//   title: '',
//   name: 'Rohan Punjani',
//   subtitle: "I'm a Designer & Full Stack Developer ",
//   cta: '',
// };

// ABOUT DATA
export const aboutData = {
  img: 'rohan.jpg',
  paragraphOne:
    'Rohan Punjani is a third-year engineering student studying at Ramrao Adik Institute of Technology, Navi Mumbai. His passion is to design/code seemingly challenging problems into beautifully simple solutions.',
  paragraphTwo:
    'He has worked under the bucket of Image Processing and Full Stack Development and is also a competitive programmer. He spends most of his college time either working on different projects for the college or participating in upcoming competitions.',
  resume: 'RESUME.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'colors.png',
    title: 'Colors',
    info:
      'Colors is a quick frontend Dashboard made using ReactJS. This is an example of a desing implementation where the design was taken from dribbble.com',
    info2: '',
    livetext: 'See Live',
    url: 'https://dashboard-colors.netlify.app',
    repo: 'https://github.com/RohanPunjani/colors', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'grillax.png',
    title: 'Grillax',
    info:
      'Grillax is an online web music player with its amazing and user-friendly UI along with contents loaded using pure asynchronous requests',
    info2: '',
    livetext: 'See Live',
    url: 'http://grillax.dev-rohan.com',
    repo: 'https://github.com/RohanPunjani/Grillax', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'apriori.png',
    title: 'Apriori Data Visualization',
    info:
      'Another Dashboard for data visualization based on flask Api where the data is fetched and seen on the ReactJS dashboard with dynamic rendering',
    info2: '',
    livetext: 'Source Code',
    url: 'https://github.com/RohanPunjani/AprioriDataVisualization', // if no repo, the button will not show up
    // url: 'http://grillax.dev-rohan.com',
    // repo: 'https://github.com/RohanPunjani/Grillax', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'feedly1.jpg',
    title: 'Feedly',
    info:
      'A social awareness web application that lets you know of what exactly is going around, based on your interests.',
    info2: '',
    livetext: 'Check Article',
    url: 'https://www.linkedin.com/pulse/feedly-rohan-punjani/',
    repo: 'https://github.com/RohanPunjani/feedly-1.1', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Capture.JPG',
    title: 'CroCon',
    info:
      'CroCon is a crowd detection software which notifies you about the condition of any place by using Face Recognition techniques.',
    info2: '',
    livetext: 'Check Document',
    url:
      'https://docs.google.com/presentation/d/1cPv51WEZHcV8_RiuMUdxsU-85BIky8bTAqX_dF0v01w/edit?usp=sharing',
    repo: 'https://github.com/RohanPunjani/CroCon', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nahorpunjani@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rohanpunjani/',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/punjani.rohan/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/rohanpunjani',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
