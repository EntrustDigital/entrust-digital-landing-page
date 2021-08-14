import React from 'react'

const ContactHolder = ({contact}) => {
    const contactToHandler = (type, contactTo) => {
        if(type === 'call') {
            window.open(`https://api.whatsapp.com/send?phone=${contactTo}`)
        } else {
            window.open(`mailto:${contactTo}`)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <p className="mb-2 font-semibold md:mb-4 md:text-lg">{contact.title}</p>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            {
                contact.subtitle.map((subtitle, index) => 
                    <div key={`contact${index}`} onClick={()=>{contactToHandler(contact.type, subtitle)}} className="flex w-full h-10 transition duration-300 transform bg-white border-2 rounded-md cursor-pointer lg:h-12 hover:scale-105 text-entrust-blue hover:shadow-xl">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-full border-r-2 lg:w-12">
                            {contact.icon}
                        </div>
                        <div className="flex items-center w-full h-full px-3 lg:px-4">
                            <h3 className="w-full text-sm font-semibold tracking-wider text-center lg:text-base">{subtitle}</h3>
                        </div>
                    </div>             
                )
            }
            </div>
        </div>     
    )
}

export default ContactHolder
