import React from 'react'
import './LoadingBox.css'
import { FullWhiteLogo } from '../../assets/logo'

const LoadingBox = () => {
    return (
        <div id="loading" className="loading-box">
            <FullWhiteLogo className="h-10 md:h-16 animate-pulse"/>
        </div>
    )
}

export default LoadingBox
