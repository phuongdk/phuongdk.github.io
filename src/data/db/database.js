import Mock from '../mock';

const database = {
  information: {
    name: 'Do Ky Phuong',
    name_vi: 'Do Ky Phuong',
    aboutHome:
      'I am a Software Engineer. I can tackle with both front-end and back-end issues. I can provide clean code and work with data structures as well.',
    aboutContent:
      'I am a Software Engineer who excels in web and cross-platform mobile development. I am passionate about building applications in javascript, python programming languages and AWS platform. I prefer talking about tech discussions and surfing tech groups like medium, dev.to, reddit... when I have free time to comprehend as well as update knowledge from the communities.',
    dob: '03-17-1993',
    phone: '',
    nationality: 'Viet Nam',
    language: 'Vietnamese, English',
    hobby: 'Tech discussion, books, games, traveling, cuisine',
    personality: 'gentle, harmony',
    experience: '7 years overall in the software industry - application development field',
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
    cvfile: 'http://phuongdk.com/images/cv_dkp.pdf',
    cert1: 'http://phuongdk.com/images/ielts_cert.jpg',
    cert1Image: '/images/ielts-badge.png',
    cert2: 'https://www.credly.com/badges/a52f4f5a-1a13-425f-a97a-08d3d50ce505/linked_in_profile',
    cert2Image: '/images/aws-saa-badge.png',
    cert3: 'https://www.credly.com/badges/bf6b012a-bc7b-4872-bc84-8a45124c3048/linked_in_profile',
    cert3Image: '/images/aws-dva-badge.png',
  },
  services: [
    {
      title: 'AWS Cloud Development',
      icon: 'aws',
    },
    {
      title: 'Fullstack Web Development',
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
      level: '7 YoE',
      value: 100,
      additionalInfo: ''
    },
    {
      title: 'React',
      level: '4 YoE',
      value: 57.14,
      additionalInfo: '<ul><li>React hook, React context</li><li>Redux, Redux-tool-kit, Mobx-state-tree, React-query</li><li>Nextjs</li><li>Webpack</li></ul>'
    },
    {
      title: 'React Native',
      level: '1 YoE',
      value: 14.29,
      additionalInfo: ''
    },
    {
      title: 'Angular',
      level: '2 YoE',
      value: 28.58,
      additionalInfo: '<ul><li>Angular 14, Typescript</li><li>Rxjs</li><li>Angular Universal</li></ul>'
    },
    {
      title: 'Vuejs',
      level: '1 YoE',
      value: 14.29,
      additionalInfo: '<ul><li>Vue 3</li><li>Vuex 4, Pinia</li><li>Vuex Router 4</li></ul>'
    },
    {
      title: 'Nodejs',
      level: '4 YoE',
      value: 42.87,
      additionalInfo: '<ul><li>Express framework</li><li>Nestjs framework</li></ul>'
    },
    {
      title: 'Python',
      level: '3 YoE',
      value: 42.87,
      additionalInfo: '<ul><li>Flask micro framework</li><li>Python boto3 for interacting with AWS resources</li></ul>'
    },
    {
      title: 'Docker',
      level: '2 YoE',
      value: 28.58,
      additionalInfo: '<ul><li>Docker compose</li></ul>'
    },
    {
      title: 'Kubernetes',
      level: '6 months',
      value: 7.145,
      additionalInfo: ''
    },
    {
      title: 'Gitlab CI / CD',
      level: '1 YoE',
      value: 14.29,
      additionalInfo: ''
    },
    {
      title: 'Amazon Web Services',
      level: '2 YoE',
      value: 28.58,
      additionalInfo: '\
      <ul><li>IAM</li>\
      <li>VPC</li>\
      <li>Route53</li>\
      <li>EC2</li>\
      <li>S3</li>\
      <li>ELB</li>\
      <li>SQS</li>\
      <li>SNS</li>\
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
        year: 'July 2021 - Now',
        position: 'Senior Software Engineer Team Lead',
        company: 'HCL Technologies',
        companyLink: 'https://www.hcltech.com/',
        details:
          'Working with United Oversea Bank in Singapore, leading bank in Asia with a global network of more than 500 offices in 19 countries and territories in multiple products, focusing on javascript, python and AWS.',
        projects: [
          {
            customer: 'Singaporean and Asian',
            name: 'BB CASA(Current Account and Savings Account)',
            teamSize: '6 members',
            domain: 'Banking',
            description: 'Build and manage an application that handle different type of banking accounts across multiple regions',
            architecture: 'Monolithic client-side approach',
            technologies: 'React, React-query, Zustand, Python (Flask), Pymongo, MongoDB, Jest, React testing library, Pytest',
            responsibilities: '\
            <ul>\
            <li>Squad leading</li>\
            <li>Fullstack development</li>\
            <li>Provide plan, tasks distribution and estimation</li>\
            <li>Requirements analysis</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>Implement banking account types workflow</li>\
            <li>Implement credit card for banking account types workflow</li>\
            <li>Designing form generation workflow depend on account types</li>\
            <li>Validate Limited Transactions for banking account types</li>\
            <li>Coordinate datas with other UOB systems using Singpass</li>\
            </ul>\
            </li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Code reviews and team collaboration</li>\
            <li>Coaching Junior</li>\
            <li>Write Unit and Component Testings</li>\
            <li>Production issues response</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            customer: 'Singaporean',
            name: 'Loan Management System',
            teamSize: '6 members',
            domain: 'Banking',
            description: 'Developing and maintaining user-friendly loan management system to streamline the lending process and enhance operational efficiency',
            architecture: 'Monolithic client-side approach',
            technologies: 'Vue 3, Vuex 4, Vue Router 4, Nodejs, Postgresql, Cypress, Pytest',
            responsibilities: '\
            <ul>\
            <li>Squad leading</li>\
            <li>Fullstack development</li>\
            <li>Provide plan, tasks distribution and estimation</li>\
            <li>Requirements analysis</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>Receiving account datas from various sources within UOB ecosystem and branching scenarios</li>\
            <li>Implement various kind of rental: personal, home, business, consumer, other loans</li>\
            <li>Validate for Loan eligibility check</li>\
            <li>Implement loan approval notification</li>\
            <li>Implement Late payment penalty</li>\
            <li>Send data analytics and reportings</li>\
            </ul>\
            </li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Code reviews and team collaboration</li>\
            <li>Write Automation and Unit Testings</li>\
            <li>Production issues response</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            customer: 'Singaporean',
            name: 'Artifact Management System',
            teamSize: '3 members',
            domain: 'E-commerce (auction)',
            description: 'Migrate the system from on-premise to cloud-based using AWS platform',
            architecture: 'Serverless',
            technologies: 'Python Boto3, Route53, VPC, NGW, IGW, API Gateway, Lambda, SQS, SNS, DynamoDB, Amplify, S3',
            responsibilities: '\
            <ul>\
            <li>Setup VPC</li>\
            <li>Setup serverless architecture</li>\
            <li>Setup code commit</li>\
            <li>Migrating features by ultilizing AWS resources:\
            <ul class="feature-branches">\
            <li>Implement CRUD bid items</li>\
            <li>Implement bid items functionalities</li>\
            <li>Implement bid items searching and countdown</li>\
            <li>Setup AWS SQS for biding</li>\
            </ul>\
            </li>\
            <li>Collaborate with devops engineer for cloud formation and SAM template setup</li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>System maintaining</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
        ],
      },
      {
        id: 2,
        year: 'Sep 2019 - Dec 2020',
        position: 'Fullstack Software Engineer',
        company: 'Viettel Cyber Security',
        companyLink: 'https://viettelcybersecurity.com/',
        details:
          'Working on Viettel software products, concentrate on Angular, Electron and Python Flask.',
        projects: [
          {
            customer: 'Viettel',
            name: 'Anti-Fraud Phone Charges System',
            teamSize: '10 members',
            domain: 'Internal',
            description: 'Build a system that can detect a fraud or illicit fees that charge from mobiphone',
            architecture: 'Monolithic client-side approach',
            technologies: 'Angular 8, Rxjs, Typescript, Python / Flask, Pymongo, MongoDB, Pytest, Docker, Gitlab CI / CD',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>Implement account registration flow</li>\
            <li>Implement account login flow</li>\
            <li>Build UI and using am4chart to display statistics, develop APIs</li>\
            <li>Sending and receiving signals from Java servers to detect incoming frauld or illicit fees</li>\
            <li>Implement mobilephone number creation functionality to block the number for certain amount of time</li>\
            </ul>\
            </li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Write Unit Testings</li>\
            <li>Setup Gitlab CI/CD pipeline</li>\
            <li>Collaborate across functional team for requirements gathering</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            customer: 'Viettel',
            name: 'Remote Botware Integrated System',
            teamSize: '15 members',
            domain: 'Internal',
            description: 'Build a bot that can intergrated in many OS(Linux, Windows, MacOS) and be able to control the guest machine from afar',
            architecture: 'Monolithic client-side approach',
            technologies:
              'Angular 8, Rxjs, Typescript, Electron, Python / Flask, Pymongo, MongoDB, gRPC, Docker, Gitlab CI / CD',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>Implement account registration flow</li>\
            <li>Setup electron and angular integration</li>\
            <li>Implement list remoted guest machines flow</li>\
            <li>Implement guest machine specification flow</li>\
            <li>Implement terminal remote control flow</li>\
            <li>Implement remote screenshot full-screen capture flow</li>\
            </ul>\
            </li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Setup Gitlab CI/CD pipeline</li>\
            <li>Collaborate across functional team for requirements gathering</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
        ],
      },
      {
        id: 3,
        year: 'May 2017 - Aug 2019',
        position: 'Fullstack Software Engineer',
        company: 'Rikkeisoft',
        companyLink: 'https://rikkeisoft.com/',
        details:
          'Working on many out-sourcing products for Japanese clients in both front-end and back-end issues.',
        projects: [
          {
            customer: 'Japanese',
            name: 'Ticketing system',
            teamSize: '8 members',
            domain: 'E-Commerce',
            description: 'Develop a platform to streamline the process of buying tickets for various events, shows, concerts, and attractions',
            architecture: 'Microservices',
            technologies: 'React, Redux-toolkit, Nodejs/Nest, Typescript, MaterialUI, Bull, Redis, MySQL, Websocket, Cypress, Jest, Docker, K8s, NATS message streaming',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>Build centralized package</li>\
            <li>Handling distributed transaction</li>\
            <li>Implement chat functionality</li>\
            <li>Coaching new comers</li>\
            </ul>\
            </li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Write Automation and Unit Testings</li>\
            <li>Write Docker script</li>\
            <li>Write K8s script</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            customer: 'Japanese',
            name: 'Hotel, restaurant, spa,... management system',
            teamSize: '20 members',
            domain: 'Compilation',
            description: 'Design a system for a large corporation that have their business eco-system revolve around hotel, restaurant and spa',
            architecture: 'Microservices',
            technologies: 'React, Redux, Ant-design, Dva, Typescript, Node/Express, MongoDB, Jest, Apache Kafka message streaming',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Responsibility for the hotel modules, including: Reservation management, Room booking, Hotel Map, Rate management</li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Write Unit Testings</li>\
            <li>Water fall process</li>\
            </ul>'
          },
          {
            customer: 'Japanese',
            name: 'Car booking application',
            teamSize: '5 members',
            domain: 'Transportation and Travel services',
            description: 'Designing and developing a user-friendly and feature-rich platform that allows customers to book rental cars and ride-hailing services',
            architecture: 'Microservices',
            technologies:
              'React, Mobx-state-tree, React Native, Nextjs, Typescript, Nodejs/Express, MySQL,\
              Firebase, GraphQL, Apollo, Twillio, Stripe, Jest, Docker / Docker-compose, K8s, AWS S3, AWS Kinesis Stream',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation:\
            <ul class="feature-branches">\
            <li>Implement user profile information</li>\
            <li>Implement admin portal site</li>\
            <li>Implement ride booking flow</li>\
            <li>Implement ride histories flow</li>\
            <li>Add Geo-Location and Map Integration</li>\
            <li>Coaching new comers</li>\
            <li>Water fall process</li>\
            </ul>\
            </li>\
            <li>Integrated third-party API</li>\
            <li>Documented application</li>\
            <li>Write Unit Testings</li>\
            <li>Write Docker script</li>\
            </ul>'
          },
          {
            customer: 'Japanese',
            name: 'Medical management system',
            teamSize: '5 members',
            domain: 'Healthcare',
            description: 'Build a platform that will serve as a centralized hub for managing patient information, medical records management, appointment scheduling, analytics and reporting',
            architecture: 'Monolithic server-side approach',
            technologies: 'Python / Flask, Sqlalchemy, PostgreSQL, Jinja, Pytest',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation</li>\
            <li>Write Unit Testings</li>\
            </ul>'
          },
          {
            customer: 'Japanese',
            name: 'E-learning application',
            teamSize: '4 members',
            domain: 'Education',
            description: 'Platform that provide a online learning experience, catering to students, professionals, and lifelong learners about Japanese language teaching',
            architecture: 'Monolithic server-side approach',
            technologies: 'Python / Flask, Sqlalchemy, MySQL, Jinja, Pytest, AWS S3',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation</li>\
            <li>Write Unit Testings</li>\
            <li>Collaborate and discuss with colleague to clarify doubts</li>\
            </ul>'
          },
          {
            customer: 'Rikkeisoft',
            name: 'Skillsheet application',
            teamSize: '3 members',
            domain: 'Internal',
            description: 'An application that allow users to upload their skills, experiences, expertises, education,...',
            architecture: 'Monolithic client-side approach',
            technologies: 'Angular 2, PHP / Laravel, Mysql',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation</li>\
            <li>Collaboration and discussion with colleague to clarify doubts</li>\
            </ul>'
          },
        ],
      },
      {
        id: 4,
        year: 'Feb 2016 - Feb 2017',
        position: 'CMS Developer',
        company: 'BrainOS',
        companyLink: 'https://brainos.vn/',
        details:
          'Take in charge of creating and coding theme and plug-in on three platforms, namely Wordpress, Shopify and Big Commerce.',
        projects: [
          {
            customer: 'ThemeForest market',
            name: 'CMS development',
            teamSize: 'Individual',
            domain: 'CMS market',
            description: '',
            architecture: '',
            technologies: 'Wordpress/PHP, Shopify, BigCommerce',
            responsibilities: '\
            <ul>\
            <li>Shopify theme development</li>\
            <li>Big Commerce theme development</li>\
            <li>Wordpress theme development</li>\
            <li>Wordpress plug-in development</li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Handling customer requirements for theme and plug-in customization</li>\
            </ul>',
          }
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2011 - 2016',
        graduation: 'Bachelor Degree of Information Technology',
        university: 'Ha Noi University',
        companyLink: 'https://www.hanu.vn/vn/',
        details: 'Graduate from Ha Noi University, IT department',
      },
      {
        id: 2,
        year: '2008 - 2011',
        graduation: 'Student',
        university: 'Le Quy Don High School',
        companyLink: 'http://thptlequydon-dd.edu.vn/',
      },
    ],
  },
  petProjects: [
    {
      id: 1,
      title: 'Vuejs Tiny Sketch Application',
      featuredImage: '/images/tiny-sketch-bg.jpg',
      link: 'https://tiny-sketch-app.phuongdk.io',
      download: false,
      createDay: '1',
      createMonth: 'Dec',
      createYear: '2022',
    },
    {
      id: 2,
      title: 'React Dumbo Chat Application',
      featuredImage: '/images/dumbo-bg.jpg',
      link: 'https://dumbo-chat-app.phuongdk.io',
      download: false,
      createDay: '1',
      createMonth: 'June',
      createYear: '2021',
    },
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
      featuredImage: '/images/cpu-monitor-bg.jpg',
      link: 'http://phuongdk.com/cpu-monitor-app/CpuMonitor-Setup-1.0.0.exe',
      download: true,
      createDay: '1',
      createMonth: 'October',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'Oxygen Shopify Theme',
      featuredImage: '/images/oxygen-bg.jpg',
      link: 'https://ap-oxygen.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'January',
      createYear: '2017',
    },
    {
      id: 7,
      title: 'Over Shopify Theme',
      featuredImage: '/images/over-bg.jpg',
      link: 'https://ap-over.myshopify.com/',
      download: false,
      createDay: '1',
      createMonth: 'April',
      createYear: '2017',
    },
    {
      id: 8,
      title: 'Casper Shopify Theme',
      featuredImage: '/images/casper-bg.jpg',
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
    {
      id: 3,
      title: 'Small Auction System',
      subtitle: 'Small Auction System',
      imageUrl: '/images/auction-bg.jpg',
      largeImageUrl: ['/images/auction-bg.jpg'],
      url: 'https://auction-system.phuongdk.io',
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
