import Mock from '../mock';

const database = {
  information: {
    name: 'Do Ky Phuong',
    name_vi: 'Do Ky Phuong',
    aboutHome:
      'I am a Software Engineer. I can tackle with both front-end and back-end issues. I can provide clean code and work with data structures as well.',
    aboutContent:
      'I am a Software Engineer who excels in web and cross-platform mobile development. I am passionate about building applications in javascript and python platform. I prefer talking about tech discussions and surfing tech groups like reddit, dev.to, medium... when I have free time to comprehend as well as update knowledge from the communities.',
    dob: '17 / 03 / 1993',
    phone: '',
    nationality: 'Viet Nam',
    language: 'Vietnamese, English',
    hobby: 'Tech discussion, books, games, traveling, cuisine',
    personality: 'gentle, harmony',
    experience: '6 years',
    email: '',
    address: '',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      dribbble: '',
      github: 'https://github.com',
      linkedin: '',
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: 'http://phuongdk.com/cv_sub.jpg',
    cert1: 'http://phuongdk.com/ielts_cert.jpg',
  },
  services: [
    {
      title: 'AWS Developer Associate',
      icon: 'aws',
    },
    {
      title: 'FE & BE Web Development',
      icon: 'code',
    },
    {
      title: 'React Native Development',
      icon: 'mobile',
    },
  ],
  skills: [
    {
      title: 'HTML5 / CSS3 / Javascript ESNext',
      level: '6 YoE',
      value: 100,
    },
    {
      title: 'React',
      level: '3 YoE',
      value: 50,
    },
    {
      title: 'React Native',
      level: '1 YoE',
      value: 16.666,
    },
    {
      title: 'Angular',
      level: '2 YoE',
      value: 33.332,
    },
    {
      title: 'Vuejs',
      level: '1 YoE',
      value: 16.666,
    },
    {
      title: 'Nodejs (Express, Nest)',
      level: '3 YoE',
      value: 50,
    },
    {
      title: 'Python (Flask, Boto3)',
      level: '2 YoE',
      value: 33.332,
    },
    {
      title: 'Docker',
      level: '1 YoE',
      value: 16.666,
    },
    {
      title: 'Kubernetes',
      level: '6 months',
      value: 8.333,
    },
    {
      title: 'Gitlab CI / CD',
      level: '1 YoE',
      value: 16.666,
    },
    {
      title: 'Amazon Web Services',
      level: '1 YoE',
      value: 16.666,
    },
    {
      title: 'Familiar with these support tools: Github, Gitlab, Bitbucket, Jira, Confluence, Trello, Slack, Postman',
      level: '',
      value: 0,
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2016 - 2017',
        position: 'CMS Developer',
        company: 'BrainOS',
        companyLink: 'https://brainos.vn/',
        details:
          'Take in charge of creating and coding theme and plug-in on three platforms, namely Wordpress, Shopify and Big Commerce.',
        projects: [],
      },
      {
        id: 2,
        year: '2017 - 2019',
        position: 'Frontend & Backend Developer',
        company: 'Rikkeisoft',
        companyLink: 'https://rikkeisoft.com/',
        details:
          'Working on many out-sourcing products for Japanese clients in both front-end and back-end issues.',
        projects: [
          {
            name: 'Skillsheet application',
            description: '',
            technologies: 'Angular 2, PHP / Laravel',
            responsibility: 'Front-end & Back-end development',
          },
          {
            name: 'Embedded management system',
            description: '',
            technologies: 'Ractivejs, Backbonejs',
            responsibility: 'Front-end development',
          },
          {
            name: 'Car booking application',
            description: '',
            technologies:
              'React, React Native, Nextjs, Nodejs, Typescript, GraphQL, Apollo, Twillio, mobx-state-tree, docker / compose',
            responsibility: 'Front-end development',
          },
          {
            name: 'E-learning system',
            description: '',
            technologies: 'PHP / Cake2, MySQL',
            responsibility:
              'Mentoring fresher, supporting and debugging application',
          },
          {
            name: 'Medical management system',
            description: '',
            technologies: 'PHP / Laravel, MySQL',
            responsibility: 'Back-end development',
          },
          {
            name: 'Hotel, restaurant, spa,... management system',
            description: '',
            technologies: 'React, redux, ant-design',
            responsibility: 'Front-end development',
          },
          {
            name: 'An online hiring performer platform',
            description: '',
            technologies: 'React, PHP / Laravel, MaterialUI, Vagrant',
            responsibility: 'Front-end development',
          },
        ],
      },
      {
        id: 3,
        year: '2019 - 2020',
        position: 'Frontend & Backend Developer',
        company: 'Viettel Cyber Security',
        companyLink: 'https://viettelcybersecurity.com/',
        details:
          'Working on Viettel software products, concentrate on Angular, Electron and Python Flask.',
        projects: [
          {
            name: 'Anti-Fraud Phone Charges System',
            description: '',
            technologies: 'Angular 7, Python / Flask, MongoDB, docker',
            responsibility: 'Front-end & Back-end development',
          },
          {
            name: 'Supervising and Monitoring System',
            description: '',
            technologies:
              'Angular 7, Electron, Python / Flask, MongoDB, docker',
            responsibility:
              'Front-end & Back-end development, setup Gitlab CI / CD',
          },
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2008 - 2011',
        graduation: 'Student',
        university: 'Le Quy Don High School',
        companyLink: 'http://thptlequydon-dd.edu.vn/',
      },
      {
        id: 2,
        year: '2011 - 2016',
        graduation: 'Bachelor Degree of Information Technology',
        university: 'Ha Noi University',
        companyLink: 'http://www.hanu.vn/vn/',
        details: 'Graduate from Ha Noi University, IT department',
      },
    ],
  },
  petProjects: [
    {
      id: 1,
      title: 'React Dumbo Chat Application',
      featuredImage: '/images/dumbo-bg1.jpg',
      link: 'https://dumbo-chat-app-phuongdk.herokuapp.com',
      download: false,
      createDay: '1',
      createMonth: 'June',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'React Native Car Booking Application ( Pure UI )',
      featuredImage: '/images/car-app-bg.jpg',
      link: 'https://expo.io/@phuongdk/projects/CarBookingAppUI',
      link2: {
        name: 'Download expo client android app',
        link:
          'https://play.google.com/store/apps/details?id=host.exp.exponent&hl=vi&gl=US',
      },
      link3: {
        name: "Scan application's QR Code with expo",
        link: 'http://phuongdk.com/car-app-qr-code.jpg',
      },
      download: false,
      createDay: '1',
      createMonth: 'August',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'React Native Estate Full Application',
      featuredImage: '/images/estate-bg.jpg',
      link: 'https://expo.io/@phuongdk/projects/pumahousing',
      link2: {
        name: 'Download apk file',
        link: 'https://www.phuongdk.com/puma-housing-app.apk',
      },
      link3: {
        name: "Scan application's QR Code with expo",
        link: 'https://www.phuongdk.com/puma-housing-app-qr-code.jpg',
      },
      download: false,
      createDay: '1',
      createMonth: 'November',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Electron CPU Monitor Application for Windows',
      featuredImage: '/images/cpu-monitor-bg1.jpg',
      link: 'http://phuongdk.com/cpu-monitor-app/CpuMonitor Setup 1.0.0.exe',
      download: true,
      createDay: '1',
      createMonth: 'October',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Oxygen Shopify Theme',
      featuredImage: '/images/oxygen-bg1.jpg',
      link: 'https://ap-oxygen.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'January',
      createYear: '2016',
    },
    {
      id: 6,
      title: 'Over Shopify Theme',
      featuredImage: '/images/over-bg1.jpg',
      link: 'https://ap-over.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'April',
      createYear: '2016',
    },
    {
      id: 7,
      title: 'Casper Shopify Theme',
      featuredImage: '/images/casper-bg1.jpg',
      link: 'https://ap-cp.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'June',
      createYear: '2016',
    },
  ],
  universityProjects: [
    {
      id: 1,
      title: 'Dice Game',
      subtitle: 'Pure javascript Application',
      imageUrl: '/images/dice-bg.jpg',
      largeImageUrl: ['/images/dice-bg.jpg'],
      url: 'http://phuongdk.com/dice-game',
    },
    {
      id: 2,
      title: 'Small budget Application',
      subtitle: 'Pure javascript application',
      imageUrl: '/images/budget-bg.jpg',
      largeImageUrl: ['/images/budget-bg.jpg'],
      url: 'http://phuongdk.com/budget-web-app',
    },
    {
      id: 3,
      title: 'Alpha Blog Application',
      subtitle: 'Build on top of Ruby on Rails framework',
      imageUrl: '/images/alpha-blog.jpg',
      largeImageUrl: ['/images/alpha-blog.jpg'],
      url: 'https://alpha-blog-phuongdk.herokuapp.com/',
    },
  ],
  contactInfo: {
    phoneNumbers: ['(+84) 393 167 157'],
    emailAddress: ['phuongdkk@gmail.com'],
    githubLink: 'https://github.com/phuongdk',
    linkedinLink: 'https://linkedin.com/in/phuongdk',
  },
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/petProjects').reply((config) => {
  const response = database.petProjects;
  return [200, response];
});

Mock.onGet('/api/uProjects').reply((config) => {
  const response = database.universityProjects;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
