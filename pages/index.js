import React from 'react'
import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import Logo from '@/components/Logo/Logo'
import Typography from '@/components/Typography/Typography'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MdChecklist, MdOutlineBusiness, MdOutlineSpeed, MdOutlineUpgrade, MdPeopleOutline } from 'react-icons/md'

export default function Home() {

  const router = useRouter()

  const reasons = [
    {
      icon: <MdPeopleOutline/>,
      title: 'Access to Top IT Talents',
      description: `In the IT industry, talent is the most valuable resources. We deliver our best developers to implement their talent into your project.`
    },
    {
      icon: <MdChecklist/>,
      title: 'Specific in Providing IT Talent',
      description: `Having the expert on your team immediately reduces the risk of any project. Controlling and reducing the operational cost.`
    },
    {
      icon: <MdOutlineUpgrade/>,
      title: 'Enhancing Productivity and Adaptability',
      description: `With development taken care of, you can focus your resources and company’s time on your core business or project.`
    },
    {
      icon: <MdOutlineSpeed/>,
      title: 'Speed Up Hiring Process',
      description: `By taking these module : technical skill set, soft skills, and cultural fit. Help you to scale up your team immediately.`
    },
    {
      icon: <MdOutlineBusiness/>,
      title: 'Improved Concentration on The Core Business Activities',
      description: `Keep your systems and project running whilst you focus on the big picture. Our team will help your business addressing key technology challenges.`
    },
  ]

  const expertises = [
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
  ]

  const workflow = [
    {
      title: 'Initiation',
      description: [
        `It serves a variety of requirements:`,
        [
          `Tech Stack (Code Language, Database, Containerization, etc)`,
          `Onsite/Fullremote`,
          `Level Experience`
        ]
      ]
    },
    {
      title: `Pre-Onboarding`,
      description: [
        
        [
          `Interview User`,
          `Documents Approved and Signed`,
          `Set up all Preparation`
        ]
      ]
    },
    {
      title: `Onboarding`,
      description: [
        `Our experts are ready to onboard`
      ]
    },
    {
      title: `Post Onboarding`,
      description: [
        [
          `Low performance, bad attitude, health issue within a certain period can be replaced`,
          `Daily Report Collection will send to you once a month`,
        ]
      ]
    },
  ]

  const clients = [
    {
      name: 'BRI',
      image: '/assets/image/clients/bri.png',
    },
    {
      name: 'Mandiri',
      image: '/assets/image/clients/mandiri.png',
    },
    {
      name: 'CIMB Niaga',
      image: '/assets/image/clients/cimb_niaga.png',
    },
    {
      name: 'Bank Raya',
      image: '/assets/image/clients/raya.png',
    },
    {
      name: 'Astra International',
      image: '/assets/image/clients/astra_int.png',
    },
    {
      name: 'UOB',
      image: '/assets/image/clients/uob.png',
    },
    {
      name: 'ID Star',
      image: '/assets/image/clients/idstar.png',
    },
    {
      name: 'Mandala',
      image: '/assets/image/clients/mandala.png',
    },
    {
      name: 'Walden Global Service',
      image: '/assets/image/clients/wgs.png',
    },
    {
      name: 'Sobat',
      image: '/assets/image/clients/sobat.png',
    },
    {
      name: 'Jubelio',
      image: '/assets/image/clients/jubelio.png',
    },
    {
      name: 'Gramedia',
      image: '/assets/image/clients/gramedia.png',
      width: 64
    },
  ]

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="section ">
        <div className='text-center responsive  h-[80vh] lg:h-fit lg:pt-20 flex items-center justify-center flex-col'>
          <Typography variant={'h1'} className='mb-6 text-primary'>
            Indonesia’s IT Talent Provider and Software Development Services
          </Typography>
          <Typography variant='subtitle2'>
            Our way of making our services reach our customer’s needs
          </Typography>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section">
        <div className="flex flex-col space-y-6 responsive lg:flex-row lg:space-y-0 lg:space-x-10">
          <div className="flex items-center justify-center w-full p-10 bg-primary aspect-video lg:w-[48%]">
            <Logo variant={'secondary'} size={'md'}/>
          </div>
          <div className="flex flex-col p-5 bg-primary-50 lg:w-[48%] items-start">
            <Typography className='mb-2 font-semibold'>
              ABOUT US
            </Typography>
            <Typography variant='h3' component={'h2'} className='mb-5'>
              Entrust Digital
            </Typography>
            <Typography className='mb-2 font-medium'>
              PT. ENTREPRENEUR TRUST DIGITAL
            </Typography>
            <Typography variant='body2' className='mb-6'>
              We offer a proficient team well-versed in the latest technologies. Our services provide you access to top-notch IT talent, serving as a valuable solution. Numerous clients rely on us to enhance their IT team resources, enabling them to save time and concentrate on their core business activities.
            </Typography>
            <Button onClick={() => router.push('/about')}>
              <Typography>
                See More About Us
              </Typography>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="section">
        <div className="flex flex-col space-y-6 responsive lg:flex-row lg:space-y-0">
          <div className="relative flex-shrink-0 aspect-video lg:w-[48%] lg:order-2 lg:ml-10">
            <Image className='object-cover object-center' src={'/assets/image/photo/service.png'} alt='service' fill/>
          </div>
          <div className="lg:py-5">
            <Typography className='mb-2 font-semibold'>
              Service
            </Typography>
            <Typography variant='h3' component={'h2'} className='mb-5'>
              IT Outsourcing
            </Typography>
            <Typography variant='body2' className='mb-3'>
              Over the past decade, there has been a significant shift in the business approach towards information technology. Large corporations and young startups alike are now actively seeking digital transformation solutions to stay competitive in today&apos;s fast-paced world.
            </Typography>
            <Typography variant='body2' className=''>
            IT Outsourcing Services have emerged as a highly effective means of providing IT solutions to businesses, helping them enhance their overall performance. Many companies opt for these services as they offer access to skilled professionals with diverse expertise.
            </Typography>
          </div>
        </div>
      </section>

      {/* REASONS SECTION */}
      <section className="section">
        <div className="flex flex-col space-y-6 responsive lg:flex-row lg:space-y-0 lg:space-x-10">
          <div className="flex-shrink-0 w-full p-10 text-white bg-secondary lg:w-2/5">
            <Typography variant='h3' component={'h2'} className=''>
              Reasons to Choose Us as IT Outsourcing Partner
            </Typography>
          </div>
          <div className="flex flex-col p-5 space-y-5 bg-secondary-50">
            {reasons.map((reason, reasonIdx) => (
              <div key={reasonIdx} className='flex'>
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-3 font-semibold text-white rounded-full bg-secondary">
                  {reason?.icon}
                </div>
                <div  className='flex flex-col space-y-2'>                    
                  <Typography variant='h6' className=''>
                    {reason?.title}
                  </Typography>
                  <Typography variant='body2' className=''>
                    {reason.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="section">
        <div className="flex flex-col items-center space-y-8 text-center responsive ">
          <Typography variant='h3' component={'h2'} className=''>
            Our Expertise
          </Typography>
          <div className={'my-12 flex flex-wrap justify-center '}>
            {expertises.map((exp) => (
              <Image key={`expertise${exp.id}`} className={`mb-6 w-[25%] md:w-[20%] p-3 md:p-5 lg:w-[12%]`} src={exp.image} alt={exp.name} height={120} width={120}/>
            ))}
          </div>
          <Typography>
            ...and many more
          </Typography>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section">
        <div className="flex flex-col space-y-6 responsive lg:flex-row lg:space-y-0 lg:space-x-10">
          <div className="flex flex-col w-full p-10 text-white bg-primary lg:w-2/5">
            <Typography className='mb-2 font-semibold'>
              WORKFLOW
            </Typography>
            <Typography variant='h3' component={'h2'} className=''>
              Efficient Way to Deliver IT Solution
            </Typography>
          </div>
          <div className="flex flex-col p-5 space-y-5 bg-primary-50">
            {workflow.map((flow, flowIdx) => (
              <div key={flowIdx} className='flex'>
                <div className='flex flex-col items-center mr-3'>
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 font-semibold text-white rounded-full bg-primary">
                    <Typography>
                      {flowIdx + 1}
                    </Typography>
                  </div>
                </div>
                <div  className={`flex flex-col -mt-1 space-y-2 lg:-mt-2}`}>                    
                  <Typography variant='h6' className=''>
                    {flow?.title}
                  </Typography>
                  {flow.description.map((desc, descIdx) => (
                    <React.Fragment key={descIdx}>
                      {typeof desc === 'string' ? (
                        <Typography variant='body2'>
                          {desc}
                        </Typography>
                      ) : (
                        <div className='flex flex-col space-y-1'>
                          {desc?.map((point, pointIdx) => (
                            <div key={pointIdx} className='flex space-x-1'>
                              <Typography variant='body2'>
                                •
                              </Typography>
                              <Typography variant='body2'>
                                {point}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CLIENTS SECTION */}
       <section className="section">
        <div className="flex flex-col items-center space-y-8 text-center md:space-y-10 lg:space-y-12 xl:space-y-16 responsive">
          <div className='w-full'>
            <Typography className='mb-2 font-semibold'>
              BRANDS
            </Typography>
            <Typography variant='h3' component={'h2'} className=''>
              Partner and Frequents
            </Typography>
          </div>
          <div className={'my-12 flex flex-wrap justify-center items-center'}>
            {clients.map((client, clientIdx) => (
              <div key={clientIdx} className='flex items-center justify-center mx-5 mb-8' style={{width: 120}}>
                <Image className={` ${client?.className || ''}`} src={client.image} alt={client.name} height={client.height||120} width={client.width || 120}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </Layout>
  )
}
