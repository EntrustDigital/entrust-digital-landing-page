import React from 'react'

const ListWithNumber = ({data, width, number}) => {
  const CHECK_WIDTH = width || `100%`
  return (
    <div className='relative flex flex-col md:flex-row responsive md:mb-8 lg:mb-16 xl:mb-20 md:mx-0 md:px-4 lg:px-5 xl:px-10' style={{width: CHECK_WIDTH}}>
      <div className="absolute top-0 left-6 md:left-0">
        {number ? <span className='font-semibold leading-none text-transparent opacity-20 text-[9rem] bg-clip-text bg-gradient-to-tr from-etd-secondary to-etd-quaternary'>0{data.id}</span> : ''}
      </div>
      <div className="relative z-10 flex flex-col w-full mt-12">
        <div className='flex w-full mb-4 text-3xl font-medium'>
          <span>{data.title}</span>
        </div>
        <p className='flex flex-col space-y-2 leading-relaxed'>
          {
            typeof data.description === 'object' ? (
              data.description.map((desc, descIdx) => (
                <span key={`workflow-${descIdx+1}`}>
                  {desc.length > 1 ? (
                      desc.map((subDesc, subIdx) => (
                        <span key={`workflow-${subIdx+1}`} className='flex space-x-2'>
                          <span>•</span>
                          <span>{subDesc}</span>
                        </span>
                      ))
                    ) : (
                      <span>{desc}</span>
                    )
                  }
                </span>
              ))
            ) : data.description
          }
        </p>
      </div>
    </div>
  )
}

export default ListWithNumber