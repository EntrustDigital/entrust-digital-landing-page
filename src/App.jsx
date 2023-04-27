import { Parallax } from 'react-scroll-parallax'
import './App.css'
import SimpleButton from './components/Buttons/SimpleButton/SimpleButton'
import Heading from './components/Heading/Heading'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Layout from './components/Layout/Layout'
import ReasonSection from './components/Sections/ReasonSection/ReasonSection'
import { HOME_SCREEN_DATA } from './constants/dataContstants'
import WorkflowSection from './components/Sections/WorkflowSection/WorkflowSection'
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom'
import { useScrollIntoView } from './hooks/useScrollIntoView'

function App() {

  const navigation = useNavigate()

  return (
    <Layout contact>
      <Jumbotron data={HOME_SCREEN_DATA.hero} height={'hero'} buttonOnClick={() => useScrollIntoView('#about')}/>
      <section id='about' className='w-full overflow-hidden'>
        <Fade bottom cascade>
          <div className='flex flex-col py-20 mt-20 space-y-20 2xl:py-32 md:flex-row-reverse md:space-y-0 md:responsive md:items-center'>
            <div className="flex flex-col responsive md:w-1/2 md:flex-shrink-0 md:ml-12 lg:ml-0 lg:w-5/12">
              <div className="mb-6">
                <Heading 
                  title={HOME_SCREEN_DATA.about.title}
                  subtitle={HOME_SCREEN_DATA.about.subtitle}
                />
              </div>
              <p>
                {HOME_SCREEN_DATA.about.description.map((abt, idx) => (
                  <span key={`abtDesc-${idx}`} className={idx === 0 ? 'font-semibold text-lg' : 'leading-relaxed'}>{abt}</span>
                ))}            
              </p>
              <div className='mt-8'>
                <SimpleButton className={`text-sm`} buttonOnClick={() => navigation('/about')}>{HOME_SCREEN_DATA.about.button}</SimpleButton>
              </div>
            </div>
            <div className="flex-shrink-0 w-full pr-12 xl:pr-0 lg:w-10/12 xl:mr-20">
              <div className="pt-[72%] relative overflow-hidden md:pt-[80%] lg:pt-[67%]">
                <Parallax speed={-10} className='absolute inset-0'>
                  <img className='object-cover object-center w-full h-full scale-105' src={HOME_SCREEN_DATA.about.image} alt="" />
                </Parallax>
              </div>
            </div>
          </div>
        </Fade>        
      </section>
      <section className='w-full overflow-hidden'>
        <Fade bottom cascade>
          <div className="flex flex-col py-20 space-y-20 2xl:py-32 responsive md:space-y-0 md:flex-row md:items-center md:space-x-12 xl:space-x-40 ">
            <div className="flex flex-col">
              <div className="mb-6">
                <Heading 
                  title={HOME_SCREEN_DATA.service.title}
                  subtitle={HOME_SCREEN_DATA.service.subtitle}
                />
              </div>
              <p className='leading-relaxed'>
                {HOME_SCREEN_DATA.service.description.map((abt, idx) => (
                  <span key={`serviceDesc-${idx}`}>{abt}</span>
                ))}            
              </p>
            </div>
            <div className="w-full md:w-1/2 md:flex-shrink-0 lg:w-2/5">
              <div className="pt-[140%] relative overflow-hidden">
                <Parallax speed={-10} className='absolute inset-0'>
                  <img className='object-cover object-center w-full h-full scale-110' src={HOME_SCREEN_DATA.service.image} alt="" />
                </Parallax>
              </div>
            </div>
          </div>        
        </Fade>               
      </section>
      <ReasonSection/>
      <section className='py-20 mb-20 2xl:py-32 '>
        <Fade bottom cascade>
          <div className="overflow-x-hidden responsive">
            <div className="">
              <Heading 
                title={HOME_SCREEN_DATA.expertise.title}
                headingAlignment={'center'}
              />
            </div>
            <Fade bottom cascade>
              <div className={'my-12 flex flex-wrap justify-center '}>
                  {HOME_SCREEN_DATA.expertise.expertiseList.map((exp) => (
                    <img key={`expertise${exp.id}`} className={`mb-6 w-[25%] md:w-[20%] p-3 md:p-5 lg:w-[12%]`} src={exp.image} alt={exp.name}/>
                  ))}
              </div>
            </Fade>
            <p className='text-center'>{HOME_SCREEN_DATA.expertise.subtitle}</p>
          </div>     
        </Fade>
      </section>
      <Jumbotron 
        id='workflow-jumbotron'
        data={HOME_SCREEN_DATA.jumbotron[0]}
        alignItems={'center'}
        buttonOnClick={() => useScrollIntoView('#workflow')}
      />
      <WorkflowSection/>
      <section className='py-20 2xl:py-32 '>
        <Fade bottom cascade>
          <div className="flex flex-col items-center overflow-hidden responsive lg:flex-row lg:justify-between">
            <div className="lg:hidden">
              <Heading 
                title={HOME_SCREEN_DATA.client.title}
                subtitle={HOME_SCREEN_DATA.client.subtitle}
                headingAlignment={'center'}
              />
            </div>
            <div className="flex-shrink-0 hidden w-1/3 lg:block xl:w-2/5 2xl:w-1/4">
              <Heading 
                title={HOME_SCREEN_DATA.client.title}
                subtitle={HOME_SCREEN_DATA.client.subtitle}
                headingAlignment={'left'}
              />
            </div>
            <Fade bottom cascade>
              <div className={'mt-12 flex flex-wrap justify-center max-w-2xl'}>
                {HOME_SCREEN_DATA.client.clientList.map((clnt) => (
                  <img key={`client${clnt.id}`} className={`w-[25%] md:w-[20%] p-3 lg:w-[24%] object-contain object-center`} src={clnt.image} alt={clnt.name} title={clnt.name}/>
                ))}
              </div>
            </Fade>
          </div>     
        </Fade>        
      </section>
      
    </Layout>
  )
}

export default App
