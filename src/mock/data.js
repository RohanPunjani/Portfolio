import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Rohan | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rohan Punjani',
  subtitle: "I'm a Designer & Full Stack Developer ",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'rohan.jpg',
  paragraphOne:
    'I am a second-year engineering student studying at Ramrao Adik Institute of Technology, Navi Mumbai. My passion is to design/code difficult problems into a beautifully simple solutions.',
  paragraphTwo:
    'I have worked under the bucket of Image Processing and Full Stack Development and am also a competitive programmer. I spend most of my college time working on different projects for the college or upcoming competitions.',
  paragraphThree:
    'Along with academics, I was also a leading member of the cultural committee of my Junior college.',
  resume: 'RESUME.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bloggit.jpg',
    title: 'Bloggit',
    info:
      'Bloggit is a blog editor that helps you to write blogs and compile your thoughts without messing with your thought flow.',
    info2: '',
    livetext: '',
    url: 'https://bloggit-app1.herokuapp.com/',
    repo: 'https://github.com/RohanPunjani/Bloggit', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/rohan-punjani-5175a9163/',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/rohan__punjani/',
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
