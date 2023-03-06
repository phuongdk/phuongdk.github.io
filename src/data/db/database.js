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
    experience: '7 years overall, 6 years with modern application development',
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
    brandImage: '/images/portrait.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: 'http://phuongdk.com/images/cv_dkp.jpg',
    cert1: 'http://phuongdk.com/images/ielts_cert.jpg',
    cert2: 'https://www.credly.com/badges/bf6b012a-bc7b-4872-bc84-8a45124c3048/linked_in_profile'
  },
  services: [
    {
      title: 'AWS Cloud Development',
      icon: 'aws',
    },
    {
      title: 'FE & BE Web Development',
      icon: 'code',
    },
    {
      title: 'Hybrid Mobile Development',
      icon: 'mobile',
    },
  ],
  skills: [
    {
      title: 'HTML5 / CSS3 / Javascript ESNext',
      level: '6 YoE',
      value: 100,
      additionalInfo: ''
    },
    {
      title: 'React',
      level: '3 YoE',
      value: 50,
      additionalInfo: '<ul><li>React hook, React context</li><li>Redux, Redux-tool-kit, Mobx-state-tree, React-query</li><li>Nextjs</li><li>Webpack</li></ul>'
    },
    {
      title: 'React Native',
      level: '1 YoE',
      value: 16.666,
      additionalInfo: ''
    },
    {
      title: 'Angular',
      level: '2 YoE',
      value: 33.332,
      additionalInfo: '<ul><li>Angular 14, Typescript</li><li>Rxjs</li><li>Angular Universal</li></ul>'
    },
    {
      title: 'Vuejs',
      level: '1 YoE',
      value: 16.666,
      additionalInfo: '<ul><li>Vue 3</li><li>Vuex 4, Pinia</li><li>Vuex Router 4</li></ul>'
    },
    {
      title: 'Nodejs',
      level: '3 YoE',
      value: 50,
      additionalInfo: '<ul><li>Express framework</li><li>Nestjs framework</li></ul>'
    },
    {
      title: 'Python',
      level: '2 YoE',
      value: 33.332,
      additionalInfo: '<ul><li>Flask micro framework</li><li>Python boto3 for interacting with AWS resources</li></ul>'
    },
    {
      title: 'Docker',
      level: '1 YoE',
      value: 16.666,
      additionalInfo: '<ul><li>Docker compose</li></ul>'
    },
    {
      title: 'Kubernetes',
      level: '6 months',
      value: 8.333,
      additionalInfo: ''
    },
    {
      title: 'Gitlab CI / CD',
      level: '1 YoE',
      value: 16.666,
      additionalInfo: ''
    },
    {
      title: 'Amazon Web Services',
      level: '1 YoE',
      value: 16.666,
      additionalInfo: '\
      <ul><li>IAM</li>\
      <li>VPC</li>\
      <li>Route53</li>\
      <li>EC2</li>\
      <li>S3</li>\
      <li>ELB</li>\
      <li>SQS</li>\
      <li>Lambda</li>\
      <li>API Gateway</li>\
      </ul>\
      '
    },
    {
      title: 'Support tools...',
      level: '',
      value: 0,
      additionalInfo: '<ul><li>Github, Gitlab, Bitbucket</li><li>Jira, Confluence</li><li>Trello, Slack, Postman</li></ul>'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: 'Feb 2016 - Feb 2017',
        position: 'CMS Developer',
        company: 'BrainOS',
        companyLink: 'https://brainos.vn/',
        details:
          'Take in charge of creating and coding theme and plug-in on three platforms, namely Wordpress, Shopify and Big Commerce.',
        projects: [],
      },
      {
        id: 2,
        year: 'Jun 2017 - Aug 2019',
        position: 'Frontend & Backend Developer',
        company: 'Rikkeisoft',
        companyLink: 'https://rikkeisoft.com/',
        details:
          'Working on many out-sourcing products for Japanese clients in both front-end and back-end issues.',
        projects: [
          {
            name: 'Skillsheet application',
            description: 'Monolithic architecture',
            technologies: 'Angular 2, PHP / Laravel',
            responsibility: 'Front-end & Back-end development',
          },
          {
            name: 'Embedded management system',
            description: 'Monolithic architecture',
            technologies: 'Ractivejs, Backbonejs',
            responsibility: 'Front-end development',
          },
          {
            name: 'Car booking application',
            description: 'Micro-services architecture',
            technologies:
              'React, Mobx-state-tree, React Native, Nextjs, Typescript, Nodejs/Express, MySQL, GraphQL, Apollo, Twillio, Stripe, Docker / Docker-compose, AWS S3, AWS Kinesis Stream',
            responsibility: 'Front-end & Back-end development',
          },
          {
            name: 'E-learning system',
            description: 'Monolithic architecture',
            technologies: 'PHP / Cake2, MySQL',
            responsibility:
              'Mentoring fresher, supporting and debugging application',
          },
          {
            name: 'Medical management system',
            description: 'Monolithic architecture',
            technologies: 'Ruby / Rails, PostgreSQL',
            responsibility: 'Back-end development',
          },
          {
            name: 'Hotel, restaurant, spa,... management system',
            description: 'Micro-services architecture',
            technologies: 'React, Redux, Ant-design, Dva, Typescript, Node/Express, MongoDB, Apache Kafka message streaming',
            responsibility: 'Front-end & Back-end development',
          },
          {
            name: 'E-Commerce Ticketing system',
            description: 'Micro-services architecture',
            technologies: 'Vuejs, Vuex, Nodejs/Nest, Typescript, MaterialUI, MongoDB, NATS message streaming',
            responsibility: 'Front-end & Back-end development',
          },
        ],
      },
      {
        id: 3,
        year: 'Sep 2019 - Dec 2020',
        position: 'Frontend & Backend Developer',
        company: 'Viettel Cyber Security',
        companyLink: 'https://viettelcybersecurity.com/',
        details:
          'Working on Viettel software products, concentrate on Angular, Electron and Python Flask.',
        projects: [
          {
            name: 'Anti-Fraud Phone Charges System',
            description: 'Monolithic architecture',
            technologies: 'Angular 8, Rxjs, Typescript, Python / Flask, MongoDB, Docker',
            responsibility: 'Front-end & Back-end development, setup Gitlab CI / CD pipeline',
          },
          {
            name: 'Remote Botware Integrated System',
            description: 'Monolithic architecture',
            technologies:
              'Angular 8, Rxjs, Typescript, Electron, Python / Flask, MongoDB, gRPC, Docker, Gitlab CI / CD',
            responsibility:
              'Front-end & Back-end development, setup Gitlab CI / CD pipeline',
          },
        ],
      },
      {
        id: 4,
        year: 'Jun 2021 - Now',
        position: 'Senior Software Engineer Team Lead',
        company: 'HCL Technologies',
        companyLink: 'https://www.hcltech.com/',
        details:
          'Working with United Oversea Bank in Singapore, leading bank in Asia with a global network of more than 500 offices in 19 countries and territories in multiple projects.',
        projects: [
          {
            name: 'BB CASA(Current Account and Savings Account)',
            description: 'Monolithic architecture',
            technologies: 'React, React-query, redux-toolkit, Nodejs, PostgreSQL',
            responsibility: 'Front-end development & Back-end development',
          },
          {
            name: 'Car Loan Management System',
            description: 'Monolithic architecture',
            technologies: 'Vue 3, Vuex 4, Vue Router 4',
            responsibility: 'Front-end development',
          },
          {
            name: 'Artifact Management System',
            description: 'AWS architecture',
            technologies: 'Python Boto3, AWS Route53, AWS VPC, AWS RDS, AWS S3, AWS EC2,...',
            responsibility:
              'Migrate the system from on-premise to cloud-base in AWS, using python for interacting with AWS resources',
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
        companyLink: 'https://www.hanu.vn/vn/',
        details: 'Graduate from Ha Noi University, IT department',
      },
    ],
  },
  petProjects: [
    {
      id: 1,
      title: 'React Dumbo Chat Application',
      featuredImage: '/images/dumbo-bg1.jpg',
      link: 'https://dumbo-chat-app.phuongdk.io',
      download: false,
      createDay: '1',
      createMonth: 'June',
      createYear: '2021',
    },
    // {
    //   id: 2,
    //   title: 'Vue Tiny Sketch Application',
    //   featuredImage: '/images/tiny-sketch.jpg',
    //   link: 'https://tiny-sketch-app.phuongdk.io',
    //   download: false,
    //   createDay: '1',
    //   createMonth: 'Dec',
    //   createYear: '2022',
    // },
    {
      id: 3,
      title: 'React Native Car Booking Application ( Pure UI )',
      featuredImage: '/images/car-app-bg.jpg',
      link: 'http://phuongdk.com/images/car-booking-app-ios-qr.png',
      linkReference: [
        {
          name: 'Download \"Expo Go\" Android App',
          link:
            'https://play.google.com/store/apps/details?id=host.exp.exponent&hl=vi&gl=US',
        },
        {
          name: 'Download \"Expo Go\" iOS App',
          link:
            'https://apps.apple.com/vn/app/expo-go/id982107779?l=en',
        },
        {
          name: "Scan App Android version with \"Expo Go\"",
          link: 'http://phuongdk.com/images/car-booking-app-android-qr.png',
        },
        {
          name: "iOS version scan with Iphone Camera App (need Expo installed)",
          link: 'http://phuongdk.com/images/car-booking-app-ios-qr.png',
        },
      ],
      download: false,
      createDay: '1',
      createMonth: 'August',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'React Native Estate Full Application',
      featuredImage: '/images/estate-bg.jpg',
      link: 'http://phuongdk.com/images/puma-housing-app-ios-qr.png',
      linkReference: [
        {
          name: "Scan App Android version with \"Expo Go\"",
          link: 'http://phuongdk.com/images/puma-housing-app-android-qr.png',
        },
        {
          name: "iOS version scan with Iphone Camera app (need Expo installed)",
          link: 'http://phuongdk.com/images/puma-housing-app-ios-qr.png',
        },
      ],
      download: false,
      createDay: '1',
      createMonth: 'November',
      createYear: '2021',
    },
    {
      id: 5,
      title: 'Electron CPU Monitor Application for Windows',
      featuredImage: '/images/cpu-monitor-bg1.jpg',
      link: 'http://phuongdk.com/cpu-monitor-app/CpuMonitor-Setup-1.0.0.exe',
      download: true,
      createDay: '1',
      createMonth: 'October',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'Oxygen Shopify Theme',
      featuredImage: '/images/oxygen-bg1.jpg',
      link: 'https://ap-oxygen.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'January',
      createYear: '2017',
    },
    {
      id: 7,
      title: 'Over Shopify Theme',
      featuredImage: '/images/over-bg1.jpg',
      link: 'https://ap-over.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'April',
      createYear: '2017',
    },
    {
      id: 8,
      title: 'Casper Shopify Theme',
      featuredImage: '/images/casper-bg1.jpg',
      link: 'https://ap-cp.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'June',
      createYear: '2017',
    },
  ],
  universityProjects: [
    {
      id: 1,
      title: 'Dice Game',
      subtitle: 'Pure javascript Application',
      imageUrl: '/images/dice-bg.jpg',
      largeImageUrl: ['/images/dice-bg.jpg'],
      url: 'https://dice-game-app.phuongdk.io',
    },
    {
      id: 2,
      title: 'Small budget Application',
      subtitle: 'Pure javascript Application',
      imageUrl: '/images/budget-bg.jpg',
      largeImageUrl: ['/images/budget-bg.jpg'],
      url: 'https://budget-app.phuongdk.io',
    },
    // {
    //   id: 3,
    //   title: 'Alpha Blog Application',
    //   subtitle: 'Build on top of Ruby on Rails framework',
    //   imageUrl: '/images/alpha-blog.jpg',
    //   largeImageUrl: ['/images/alpha-blog.jpg'],
    //   url: 'https://alpha-blog-phuongdk.herokuapp.com/',
    // },
  ],
  contactInfo: {
    phoneNumbers: ['(+84) 772 934 684'],
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
