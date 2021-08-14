import React from 'react'

const BlueBackgrounds = (props) => {
    return (
        <section id={props.id} className="relative flex w-full bg-gradient-to-br from-entrust-cyan to-entrust-blue">
            <div className="flex items-center justify-center w-full bg-left bg-cover general-spacing " style={{backgroundImage: `url('/assets/img/background/dots_background.png')`}}>
                {props.children}
            </div>
        </section>    
    )
}

export default BlueBackgrounds
