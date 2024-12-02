import Mock from '../mock';

const database = {
  information: {
    name: 'Do Ky Phuong',
    name_vi: 'Do Ky Phuong',
    aboutHome:
      'I am a Software Engineer with expertise in both front-end and back-end development, as well as cloud computing. I specialize in delivering clean code and designing scalable, maintainable systems.',
    aboutContent:
      'I am a software engineer who excels in modern web and hybrid mobile application development. I am passionate about building stuffs in javascript, python, golang programming languages and AWS cloud computing. I prefer talking about tech discussions and surfing tech groups like reddit, dev.to, medium... when I have free time to comprehend as well as update knowledge from the communities.',
    dob: '17 March 1993',
    phone: '',
    nationality: 'Viet Nam',
    language: 'Vietnamese, English',
    hobby: 'Tech discussion, books, table-tennis, jogging, traveling, cuisine',
    personality: 'gentle, harmony',
    experience: '8+ years overall in the software industry - application development field',
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
    cvfile: 'http://phuongdk.com/images/cv.pdf',
    cert1: 'http://phuongdk.com/images/ielts_cert.jpg',
    cert1Image: '/images/ielts-badge.png',
    cert2: 'https://www.credly.com/badges/a52f4f5a-1a13-425f-a97a-08d3d50ce505/linked_in_profile',
    cert2Image: '/images/aws-saa-badge.png',
    cert3: 'https://www.credly.com/badges/bf6b012a-bc7b-4872-bc84-8a45124c3048/linked_in_profile',
    cert3Image: '/images/aws-dva-badge.png',
    cert4: 'https://www.credly.com/badges/65a4be6b-146b-45da-9630-409064ec4d0e/linked_in_profile',
    cert4Image: '/images/aws-scs-badge.png',
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
      level: '8 YoE',
      value: 100,
      additionalInfo: ''
    },
    {
      title: 'React',
      level: '5 YoE',
      value: 62.5,
      additionalInfo: '<ul><li>React hook, React context</li><li>Redux, Redux-tool-kit, Mobx-state-tree, React-query</li><li>Nextjs</li><li>Webpack</li></ul>'
    },
    {
      title: 'React Native',
      level: '1 YoE',
      value: 12.50,
      additionalInfo: ''
    },
    {
      title: 'Angular',
      level: '2 YoE',
      value: 25,
      additionalInfo: '<ul><li>Angular 17, Typescript</li><li>Rxjs</li><li>Angular Universal</li></ul>'
    },
    {
      title: 'Electronjs',
      level: '1 YoE',
      value: 12.5,
      additionalInfo: ''
    },
    {
      title: 'Nodejs',
      level: '4 YoE',
      value: 50,
      additionalInfo: '<ul><li>Express framework</li><li>Nestjs framework</li></ul>'
    },
    {
      title: 'Python',
      level: '3 YoE',
      value: 37.5,
      additionalInfo: '<ul><li>Flask micro framework</li><li>Fastapi framework</li><li>Python boto3 for interacting with AWS resources</li></ul>'
    },
    {
      title: 'Golang',
      level: '2 YoE',
      value: 25,
      additionalInfo: '<ul><li>Echo framework</li><li>Chi framework</li></ul>'
    },
    {
      title: 'Docker',
      level: '3 YoE',
      value: 37.5,
      additionalInfo: '<ul><li>Docker compose</li></ul>'
    },
    {
      title: 'Kubernetes',
      level: '1 YoE',
      value: 12.5,
      additionalInfo: '<ul><li>Helm chart</li></ul>'
    },
    {
      title: 'Amazon Web Services',
      level: '3 YoE',
      value: 37.5,
      additionalInfo: '\
      <ul><li>IAM</li>\
      <li>VPC</li>\
      <li>Route53</li>\
      <li>EC2</li>\
      <li>S3</li>\
      <li>SQS</li>\
      <li>SNS</li>\
      <li>Lambda</li>\
      <li>API Gateway</li>\
      <li>Cognito</li>\
      <li>Cloudfront</li>\
      <li>DynamoDB</li>\
      <li>SAM</li>\
      <li>Amplify</li>\
      <li>Kinesis</li>\
      <li>Cloudwatch</li>\
      </ul>\
      '
    },
    {
      title: 'Support tools...',
      level: '',
      value: 0,
      additionalInfo: '\
      <ul>\
      <li>Github, Gitlab, Github action, Gitlab CI/CD, Bitbucket</li>\
      <li> Jira, Confluence</li>\
      <li>Trello, Slack, Postman</li>\
      <li>Github copilot, GPT</li>\
      </ul>\
      '
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: 'August 2021 - Now',
        position: 'Senior Software Engineer Team Lead',
        company: 'HCL Technologies',
        companyLink: 'https://www.hcltech.com/',
        details: '\
        <ul>\
        <li>Working with ANZ Bank, the top three banks in Australia.</li>\
        <li>Working with United Overseas Bank in Singapore, a leading bank in Asia on their products, focusing on javascript and Python.</li>\
        <ul>',
        projects: [
          {
            client: 'ANZ',
            name: 'Generative AI application',
            teamSize: '12 members',
            domain: 'AI',
            description: 'Developing an advanced AI-powered virtual assistant designed to enhance productivity and engagement for ANZ employees',
            architecture: 'Microservices, BFF (Backend for Frontend) architecture',
            technologies: 'React, Redux-toolkit, Jest, Playwright, Python, Golang, Nodejs, Langchain, PostgreSql, Pgvector, AWS Lambda, AWS Sagemaker, AWS S3, Docker, Docker-compose, K8s, Helm, Github, Codefresh',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Independent working</li>\
            <li>Collaborate with AI engineers to enhance LLMs efficiency</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>FE implementation</li>\
            <li>BE implementation (Python, Node)</li>\
            <li>Golang Lambda implementation</li>\
            <li>Backend for Frontend (BFF) golang implementation</li>\
            <li>Prompt engineering tweak</li>\
            <li>Vector store embedding</li>\
            <li>Langchain integration</li>\
            <li>RAG material preparation</li>\
            </ul>\
            </li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Perform unit testings</li>\
            <li>Perform e2e testings</li>\
            <li>System maintaining</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            client: 'UOB',
            name: 'Artifact Management System',
            teamSize: '4 members',
            domain: 'E-commerce (auction)',
            description: 'Developing and migrating the system from on-premise to cloud-based using AWS platform',
            architecture: 'Serverless',
            technologies: 'Route53, VPC, NGW, IGW, Amplify, React, React-query, Zustand, Jest, Playwright, API Gateway, Python Boto3, Lambda, DynamoDB, Cognito, SQS, SAM, S3, Github actions',
            responsibilities: '\
            <ul>\
            <li>Setup VPC</li>\
            <li>Setup Frontend project structure</li>\
            <li>Setup serverless architecture</li>\
            <li>Setup Frontend pipeline</li>\
            <li>Implement features using python boto3 Lambda functions:\
            <ul class="feature-branches">\
            <li>FE implementation</li>\
            <li>BE serverless function development</li>\
            <li>Implement CRUD bid items</li>\
            <li>Implement bid items functionalities</li>\
            <li>Implement bid items searching and countdown</li>\
            <li>Setup AWS SQS for biding</li>\
            </ul>\
            </li>\
            <li>Collaborate with devops engineer for cloud formation and SAM template setup</li>\
            <li>Troubleshooting and bug fixing</li>\
            <li>Tasks distribution</li>\
            <li>Perform unit testings</li>\
            <li>System maintaining</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            client: 'UOB',
            name: 'Loan Management System',
            teamSize: '6 members',
            domain: 'Banking',
            description: 'Developing and maintaining user-friendly loan management system to streamline the lending process and enhance operational efficiency',
            architecture: 'Monolithic client-side approach',
            technologies: 'Angular 12, Typescript, Rxjs, Nodejs, PostgreSql, Cypress, Pytest',
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
          // {
          //   client: 'UOB',
          //   name: 'BB CASA(Current Account and Savings Account)',
          //   teamSize: '6 members',
          //   domain: 'Banking',
          //   description: 'Build and manage an application that handle different type of banking accounts across multiple regions',
          //   architecture: 'Monolithic client-side approach',
          //   technologies: 'React, Redux-toolkit, Python (Flask), PostgreSql, Jest, React testing library, Pytest',
          //   responsibilities: '\
          //   <ul>\
          //   <li>Squad leading</li>\
          //   <li>Fullstack development</li>\
          //   <li>Provide plan, tasks distribution and estimation</li>\
          //   <li>Requirements analysis</li>\
          //   <li>Implement features:\
          //   <ul class="feature-branches">\
          //   <li>Implement banking account types workflow</li>\
          //   <li>Implement credit card for banking account types workflow</li>\
          //   <li>Designing form generation workflow depend on account types</li>\
          //   <li>Validate Limited Transactions for banking account types</li>\
          //   <li>Coordinate datas with other UOB systems using Singpass</li>\
          //   </ul>\
          //   </li>\
          //   <li>Troubleshooting and bug fixing</li>\
          //   <li>Code reviews and team collaboration</li>\
          //   <li>Coaching Junior</li>\
          //   <li>Write Unit and Component Testings</li>\
          //   <li>Production issues response</li>\
          //   <li>Daily Scrum process</li>\
          //   </ul>'
          // },
        ],
      },
      {
        id: 2,
        year: 'Sep 2019 - Dec 2020',
        position: 'Fullstack Software Engineer',
        company: 'Viettel Cyber Security',
        companyLink: 'https://viettelcybersecurity.com/',
        details:
          'Working on Viettel software products, concentrating on Angular, Electron and Python Flask.',
        projects: [
          {
            client: 'Viettel',
            name: 'Anti-Fraud Phone Charges System',
            teamSize: '8 members',
            domain: 'Internal product',
            description: 'Build a system that can detect a fraud or illicit fees that charge from mobiphone',
            architecture: 'Monolithic client-side approach',
            technologies: 'Angular 8, Rxjs, Typescript, Python / Flask, Pymongo, MongoDB, Pytest, Docker, Gitlab CI/CD',
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
            <li>Collaborate across functional teams for requirements gathering</li>\
            <li>Daily Scrum process</li>\
            </ul>'
          },
          {
            client: 'Viettel',
            name: 'Remote Botware Integrated System',
            teamSize: '15 members',
            domain: 'Internal product',
            description: 'Build a bot that can intergrated in many OS(Linux, Windows, MacOS) and be able to control the guest machine from afar',
            architecture: 'Monolithic client-side approach',
            technologies:
              'Angular 8, Rxjs, Typescript, Electron, Python / Flask, Pymongo, MongoDB, gRPC, Pytest, Docker, Gitlab CI / CD',
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
            <li>Coordinate with C++ dev team for bot communication</li>\
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
            client: 'Japanese',
            name: 'Ticketing system',
            teamSize: '8 members',
            domain: 'E-Commerce',
            description: 'Develop a platform to streamline the process of buying tickets for various events, shows, concerts, and attractions',
            architecture: 'Microservices',
            technologies: 'Nextjs, React, Redux-toolkit, Nodejs/Nest, Typescript, MaterialUI, Bull, Redis, PostgreSql,\
            Websocket, Cypress, Jest, Docker, K8s, Nginx-ingress, NATS message streaming',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Implement features:\
            <ul class="feature-branches">\
            <li>Build centralized packages</li>\
            <li>Handling distributed transaction</li>\
            <li>Implement chat functionality</li>\
            <li>Coaching Junior</li>\
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
            client: 'Japanese',
            name: 'Car booking application',
            teamSize: '6 members',
            domain: 'Transportation and Travel services',
            description: 'Designing and developing a user-friendly and feature-rich platform that allows customers to book rental cars and ride-hailing services',
            architecture: 'Microservices',
            technologies:
              'React, Mobx-state-tree, React Native, Typescript, Nodejs/Express, Express Gateway, MongoDB,\
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
            <li>Coaching Junior</li>\
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
            client: 'Japanese',
            name: 'Hotel, restaurant, spa,... management system',
            teamSize: '20 members',
            domain: 'Hotel and Hospitality',
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
            client: 'Japanese',
            name: 'Medical management system',
            teamSize: '5 members',
            domain: 'Healthcare',
            description: 'Build a platform that will serve as a centralized hub for managing patient information, medical records management, appointment scheduling, analytics and reporting',
            architecture: 'Monolithic server-side approach',
            technologies: 'Python / Flask, Sqlalchemy, Postgresql, Jinja, Pytest',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation</li>\
            <li>Write Unit Testings</li>\
            <li>Water fall process</li>\
            </ul>'
          },
          {
            client: 'Japanese',
            name: 'E-learning application',
            teamSize: '4 members',
            domain: 'Education',
            description: 'Platform that provide a online learning experience, catering to students, professionals, and lifelong learners about Japanese language teaching',
            architecture: 'Monolithic server-side approach',
            technologies: 'Python / Flask, Sqlalchemy, Mysql, Jinja, Pytest, AWS S3',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation</li>\
            <li>Write Unit Testings</li>\
            <li>Collaborate and discuss with colleague to clarify doubts</li>\
            <li>Water fall process</li>\
            </ul>'
          },
          {
            client: 'Rikkeisoft',
            name: 'Skillsheet application',
            teamSize: '3 members',
            domain: 'Internal product',
            description: 'An application that allow users to upload their skills, experiences, expertises, education,...',
            architecture: 'Monolithic client-side approach',
            technologies: 'Angular 2, Python / Flask, Mysql',
            responsibilities: '\
            <ul>\
            <li>Fullstack development</li>\
            <li>Requirements analysis</li>\
            <li>Features Implementation</li>\
            <li>Collaboration and discussion with colleague to clarify doubts</li>\
            <li>Water fall process</li>\
            </ul>'
          },
        ],
      },
      {
        id: 4,
        year: 'Feb 2016 - Feb 2017',
        position: 'CMS Developer',
        company: 'BrainOS',
        companyLink: 'https://www.linkedin.com/company/brainos/',
        details:
          'Take charge of creating and coding themes and plug-ins on three platforms, namely Wordpress, Shopify and React.',
        projects: [
          {
            client: 'ThemeForest market',
            name: 'CMS development',
            teamSize: 'Individual',
            domain: 'CMS market',
            description: '',
            architecture: '',
            technologies: 'Wordpress, Shopify, React',
            responsibilities: '\
            <ul>\
            <li>Shopify theme development</li>\
            <li>Wordpress theme development</li>\
            <li>Wordpress plug-in development</li>\
            <li>React landing pages implementation</li>\
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
      title: 'Angular Generative AI Application',
      featuredImage: '/images/genai-bg.webp',
      link: 'https://botspeak-ai-app.phuongdk.io',
      download: false,
      // createDay: '2',
      // createMonth: 'Dec',
      // createYear: '2024',
    },
    {
      id: 2,
      title: 'Vuejs Tiny Sketch Application',
      featuredImage: '/images/tiny-sketch-bg.jpg',
      link: 'https://tiny-sketch-app.phuongdk.io',
      download: false,
      // createDay: '1',
      // createMonth: 'Dec',
      // createYear: '2022',
    },
    {
      id: 3,
      title: 'React Dumbo Chat Application',
      featuredImage: '/images/dumbo-bg.jpg',
      link: 'https://dumbo-chat-app.phuongdk.io',
      download: false,
      // createDay: '1',
      // createMonth: 'June',
      // createYear: '2021',
    },
    {
      id: 4,
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
      // createDay: '1',
      // createMonth: 'August',
      // createYear: '2020',
    },
    {
      id: 5,
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
      // createDay: '1',
      // createMonth: 'November',
      // createYear: '2021',
    },
    {
      id: 6,
      title: 'Electron CPU Monitor Application for Windows',
      featuredImage: '/images/cpu-monitor-bg.jpg',
      link: 'http://phuongdk.com/cpu-monitor-app/CpuMonitor-Setup-1.0.0.exe',
      download: true,
      // createDay: '1',
      // createMonth: 'October',
      // createYear: '2020',
    },
    {
      id: 7,
      title: 'Oxygen Shopify Theme',
      featuredImage: '/images/oxygen-bg.jpg',
      link: 'https://ap-oxygen.myshopify.com/',
      download: false,
      // createDay: '1',
      // createMonth: 'January',
      // createYear: '2017',
    },
    {
      id: 8,
      title: 'Over Shopify Theme',
      featuredImage: '/images/over-bg.jpg',
      link: 'https://ap-over.myshopify.com/',
      download: false,
      // createDay: '1',
      // createMonth: 'April',
      // createYear: '2017',
    },
    {
      id: 9,
      title: 'Casper Shopify Theme',
      featuredImage: '/images/casper-bg.jpg',
      link: 'https://ap-cp.myshopify.com/',
      download: false,
      // createDay: '1',
      // createMonth: 'June',
      // createYear: '2017',
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
    // phoneNumbers: ['(+84) 393 167 157'],
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
