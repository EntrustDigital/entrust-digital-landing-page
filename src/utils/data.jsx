const data = {
  logo: [
    {
      id: 1,
      image: './assets/image/logo/entrust_logo_full.png'
    },
    {
      id: 2,
      image: './assets/image/logo/entrust_logo_full_white_secondary.png'
    },
  ],
  links: [
    {
      id: 1,
      name: 'home',
      path: '/'
    },
    {
      id: 2,
      name: 'about',
      path: '/about'
    },
    {
      id: 3,
      name: 'contact',
      path: '/contact'
    },
  ],
  contacts: [
    {
      id: 1,
      title: 'telephone',
      description: 'WA (+62) 821-1561-5619 / (+62) 857-9596-2340',
      path: '/'
    },
    {
      id: 2,
      title: 'email',
      description: 'info@entrustdigital.co.id',
      path: '/'
    },
    {
      id: 3,
      title: 'address',
      description: 'Jalan Ir. H. Juanda No.109, Dago, Bandung Regency, West Java 40132',
      path: '/'
    },
    {
      id: 4,
      title: 'address',
      description: 'Jalan Buah Batu No.161, Turangga, Bandung City, West Java 40265',
      path: '/'
    },
    {
      id: 5,
      title: 'operational time',
      description: 'Opening Hours: 09:00 - 18:00',
      path: '/'
    },
    
  ],
  jumbotron: {
    contact:  {
      title: `Have an Idea or Project?`,
      subtitle: `Call or send us an email to schedule an appointment. Our representative will reply you shortly.`,
      button: 'CONTACT NOW',
      image: './assets/image/photo/jumbotron2.jpg'
    },
  },
  screens: {
    home: {
      hero: {
        id:'hero',
        title: 'Indonesia’s IT Talent Provider and Software Development Services',
        subtitle: 'Our way of  making our services reach our customer’s needs',
        button: 'READ MORE',
        image: './assets/image/photo/hero.jpg'
      },
      about: {
        title: 'Entrust Digital',
        subtitle: 'WHO WE ARE',
        description: [
          'PT. ENTREPRENEUR TRUST DIGITAL',
          'We provide you with our professional team which are adapt with all the latest technologies. Our services can assist you with quality IT talent to be your valuable solution. Many of our clients needs to improve their IT team resources so they can reduce consuming-time and focus on its core business.'
        ],
        button: 'MORE ABOUT US',
        image: './assets/image/photo/about.jpg'
      },
      service: {
        title: 'IT Outsourcing',
        subtitle: 'SERVICE',
        description: [
          <span>The business approach to information technology has changed drastically in the last decade. Both big companies and young startups reaching out for digital transformation solutions in order to keep up the rapidly-changing modern times.</span>,
          <span><b>IT Outsourcing Service</b> are an efficient way to deliver IT solutions to any business to boost business perfomance. Many of them use our services to access professionals with different expertise.</span>
        ],
        image: './assets/image/photo/service.png'
      },
      reasons: {
        title: 'Reasons to Choose Us as IT Outsourcing Partner',
        subtitle: 'WHY US',
        reasonList: [
          {
            id: 1,
            title: <span>Access to <br/> Top IT <br/> Talent</span>,
            description: 'In the IT industry, talent is the most valuable resources. We deliver our best developers to implement their talent into your project.'
          },
          {
            id: 2,
            title: <span>Specific in <br /> providing <br /> IT Talent</span>,
            description: 'Having the expert on your team immediately reduces the risk of any project. Controling and reducing the operational cost.'
          },
          {
            id: 3,
            title: <span>Increasing　<br /> Efficiency <br /> and Flexibility</span>,
            description: 'With development taken care of, you can focus your resources and company’s time on your core business or project.'
          },
          {
            id: 4,
            title: <span>Speed Up <br /> Hiring <br /> Process</span>,
            description: 'By taking these module : technical skillset, soft skills, and cultural fit. Help you to scale up your team immediately.'
          },
          {
            id: 5,
            title: <span>Enchanced <br /> company’s focus <br /> on core business</span>,
            description: 'Keep your systems and project running whilst you focus on the big picture. Our team will help your business addressing key technology challenges.'
          },
        ]
      },
      expertise: {
        title: 'Our Expertise',
        subtitle: '... and many more',
        expertiseList : [
          {
            id: 1,
            name: 'Golang',
            image: '/assets/image/expertise/golang.png'
          },
          {
            id: 2,
            name: 'Java Spring',
            image: '/assets/image/expertise/javaspring.png'
          },
          {
            id: 3,
            name: 'Node JS',
            image: '/assets/image/expertise/nodejs.png'
          },
          {
            id: 4,
            name: 'React JS',
            image: '/assets/image/expertise/reactjs.png'
          },
          {
            id: 5,
            name: 'Vue JS',
            image: '/assets/image/expertise/vuejs.png'
          },
          {
            id: 6,
            name: 'Angular JS',
            image: '/assets/image/expertise/angularjs.png'
          },
          {
            id: 7,
            name: 'Android Native',
            image: '/assets/image/expertise/android.png'
          },
          {
            id: 8,
            name: 'IOS Native',
            image: '/assets/image/expertise/ios.png'
          },
          {
            id: 9,
            name: 'Laravel',
            image: '/assets/image/expertise/laravel.png'
          },
          {
            id: 10,
            name: 'PHP',
            image: '/assets/image/expertise/php.png'
          },
          {
            id: 11,
            name: 'Ruby',
            image: '/assets/image/expertise/ruby.png'
          },
          {
            id: 12,
            name: 'Swift',
            image: '/assets/image/expertise/swift.png'
          },
          {
            id: 13,
            name: 'Microsoft .NET',
            image: '/assets/image/expertise/dotnet.png'
          },
          {
            id: 14,
            name: 'Java',
            image: '/assets/image/expertise/java.png'
          },
          {
            id: 15,
            name: 'Python',
            image: '/assets/image/expertise/python.png'
          },
        ],
      },
      jumbotron: [
        {
          id: 1,
          title: <span>Efficient Way to Deliver <br /> IT Solutions</span>,
          button: 'SEE HOW IT’S WORK',
          image: './assets/image/photo/jumbotron1.png'
        },
       
      ],
      workflow: {
        title: 'Where to Start',
        subtitle: 'WORKFLOW',
        description: `We would like to know more about your needs, to align our resources to your requirements, to be able to achieve your expectation`,
        workflowList: [
          {
            id: 1,
            title: 'Initiation',
            description: [
              [`It serves a variety of requirements : `],
              [
                `Tech Stack ( Code Language, Database, Containerization, etc )`,
                `Onsite/Fullremote`,
                `Level Experience`
              ]
            ],
            image: './assets/image/photo/workflow1.png'
          },
          {
            id: 2,
            title: 'Pre Onboarding',
            description: [
              [`It serves a variety of requirements : `],
              [
                `Interview User`,
                `Documents Approved and Signed`,
                `Set up all Preparation`
              ]
            ],
            image: './assets/image/photo/workflow2.png'
          },
          {
            id: 3,
            title: 'Onboarding',
            description: [
              [`Our Experts Ready to Onboard`],
            ],
            image: './assets/image/photo/workflow3.png'
          },
          {
            id: 4,
            title: 'Post Onboarding',
            description: [
              [
                `Low performance, bad attitude, health issue within a certain period can be replaced`,
                `Daily Report Collection will send to you once a month`
              ],
            ],
            image: './assets/image/photo/workflow4.png'
          },
        ]
      },
      client: {
        title: `Clients and Frequent Partners`,
        subtitle: `BRANDS`,
        clientList: [
          {
            id: 1,
            name: 'BANK BRI',
            image: '/assets/image/clients/bri.png'
          },
          {
            id: 2,
            name: 'BRI Agro',
            image: '/assets/image/clients/bri-agro.png'
          },
          {
            id: 3,
            name: 'Bank Artha Graha',
            image: '/assets/image/clients/arthagraha.png'
          },
          {
            id: 4,
            name: 'Walden Global Services',
            image: '/assets/image/clients/wgs.png'
          },
          {
            id: 5,
            name: 'Sobat Teknologi',
            image: '/assets/image/clients/sobat.png'
          },
          {
            id: 6,
            name: 'Sophie Paris',
            image: '/assets/image/clients/sophie.png'
          },
          {
            id: 7,
            name: 'DUA',
            image: '/assets/image/clients/dua.png'
          },
          {
            id: 8,
            name: 'Gramedia',
            image: '/assets/image/clients/gramedia.png'
          },
          {
            id: 9,
            name: 'Fruity',
            image: '/assets/image/clients/fruity.png'
          },
          {
            id: 10,
            name: 'GKMIS by Petuah',
            image: '/assets/image/clients/gkmis.png'
          },
          {
            id: 11,
            name: 'CV Jaya Sentosa Abadi',
            image: '/assets/image/clients/cvjas.png'
          },
        ]
      }
    },
    about: {
      about: {
        title: 'Entrust Digital',
        subtitle: 'WHO WE ARE',
        description: [
          'PT. ENTREPRENEUR TRUST DIGITAL',
          'We provide you with our professional team which are adapt with all the latest technologies. Our services can assist you with quality IT talent to be your valuable solution. Many of our clients needs to improve their IT team resources so they can reduce consuming-time and focus on its core business.'
        ],
        button: 'MORE ABOUT US',
        image: './assets/image/photo/about.jpg'
      },
      timeline: {
        title: 'Our Timeline',
        timelineList: [
          {
            id: 1,
            title: 'Supply Any IT Vendor Individually',
            description: [
              [`First we provide any vendor that have request to our personal person`],
            ],
            image: './assets/image/photo/timeline1.png'
          },
          {
            id: 2,
            title: 'Handle Any Project ',
            description: [
              [`We do any kind of tasks ( small – higher level clients ) within our team, wich makes us run faster`],
            ],
            image: './assets/image/photo/timeline2.png'
          },
          {
            id: 3,
            title: 'Started Our Brand Legally ',
            description: [
              [`After we have skills and connections, we start to join medium – high client`],
            ],
            image: './assets/image/photo/timeline3.png'
          },
          {
            id: 4,
            title: 'Growing Up',
            description: [
              [`We supply our IT Talent to public or private company with big caps valuation and within a month we already provide 15-20 our talents`],
            ],
            image: './assets/image/photo/timeline4.png'
          },
          {
            id: 5,
            title: 'Expand Our Company',
            description: [
              [`We expand our talent to many companies and be the best technology talent provider and project based IT Solution `],
            ],
            image: './assets/image/photo/timeline5.png'
          },
        ]
      },
    }
  }
} 

export default data