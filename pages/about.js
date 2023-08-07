import Layout from '@/components/Layout/Layout'
import Typography from '@/components/Typography/Typography'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {

  const timeline = [
    {
      title: 'Supply Any IT Vendor Individually',
      description: `Initially, we cater to any vendor that seeks assistance from our dedicated talents`,
      image:'/assets/image/photo/timeline1.png'
    },
    {
      title: 'Handle Any Project',
      description: `Our talents is versatile and capable of handling tasks of various complexities, from small to higher-level clients. This adaptability allows us to operate efficiently and deliver results swiftly`,
      image:'/assets/image/photo/timeline2.png'
    },
    {
      title: 'Legally Initiated Our Brand',
      description: `Once we have acquired the necessary skills and established valuable connections, we begin engaging with medium to high-level clients`,
      image:'/assets/image/photo/timeline3.png'
    },
    {
      title: 'Growing Up',
      description: `We provide our IT talent to both public and private companies with significant capital valuation. Within just one month, we have successfully supplied 15-20 of our skilled talents to meet their needs`,
      image:'/assets/image/photo/timeline4.png'
    },
    {
      title: 'Scale Up Our Company',
      description: `We extend our talent pool to numerous companies, aiming to become the premier technology talent provider and a leading source for project-based IT solutions`,
      image:'/assets/image/photo/timeline5.png'
    },
  ]

 

  return (
    <Layout
      headTitle={'About'}
    >
      {/* BANNER */}
      <section className="section bg-slate-100">
        <div className='flex flex-col items-center justify-center text-center responsive '>
          <Typography variant={'h1'} className='mb-6 text-primary'>
            About Us
          </Typography>
        </div>
      </section>

      {/* ABOUT */}
      <section className="flex flex-col space-y-4 section responsive">
        <Typography variant='body2'>
          We take great satisfaction in offering a team of highly skilled professionals who are well-versed in the latest technologies. This distinguished IT talent stands ready to assist your organization in overcoming digital challenges and fortifying business operations. Our commitment to innovation ensures that your company remains at the forefront of technological advancements.
        </Typography>
        <Typography variant='body2'>
          The service we provide have proven transformative for numerous clients, enabling substantial enhancements to their IT team capabilities. By leveraging our specialized resources, organizations have streamlined processes and achieved heightened productivity levels. This strategic shift has resulted in significantly reduced time consumption, allowing our clients to focus more on their core business imperatives. With our unwavering dedication to staying ahead of the technology curve, you gain access to the most pertinent and effective IT solutions available, empowering your enterprise to navigate the dynamic digital landscape with confidence and success.
        </Typography>
      </section>

      {/* TIMELINE */}
      <section className="flex flex-col items-center space-y-4 section responsive">
        <Typography variant={'h2'} className='mb-8 text-primary'>
          Our Timeline
        </Typography>
        <div className='flex flex-col w-full'>
          {timeline.map((tml, tmlIdx) => (
            <div key={tmlIdx} className='flex w-full'>
              <TimelineImage src={tml.image} alt={tml.title} className={`hidden md:block ${tmlIdx % 2 === 0 ? 'order-1' : 'order-3'}`}/>
              <TimelineLine className='mr-5 md:mx-10 md:order-2'/>
              <div className={`flex flex-col w-full md:my-10 lg:my-20 md:justify-center ${tmlIdx % 2 === 0 ? 'order-3' : 'order-1 text-right'} ${timeline.length - 1 === tmlIdx ? '' : 'mb-10'}`}>
                <TimelineImage src={tml.image} alt={tml.title} className='md:hidden'/>
                <TimelineDescription title={tml.title} description={tml.description}/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

const TimelineImage = ({
  className = '',
  src,
  alt
})  => {
  return (
    <div className={`relative w-full mb-5 md:my-5 lg:my-10 aspect-video  ${className}`}>
      <Image className='object-cover object-center w-full h-full ' src={src} alt={alt} fill/>
    </div>
  ) 
}

const TimelineDescription = ({
  title,
  description
}) => {
  return (
    <div className='flex flex-col justify-center'>
      <Typography variant='h5' className='mb-3'>
        {title}
      </Typography>
      <Typography>
        {description}
      </Typography>
    </div>
  )
}

const TimelineLine = ({
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center  ${className}`}>
      <div className="hidden h-full border border-l border-dashed border-slate-300 md:block"></div>
      <div className="p-1.5 rounded-full bg-secondary"/>
      <div className="h-full border border-l border-dashed border-slate-300"></div>
    </div>
  )
}
