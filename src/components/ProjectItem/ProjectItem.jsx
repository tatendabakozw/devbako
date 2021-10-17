import React from 'react'
import image from '../../images/logo.png'

function ProjectItem() {
    return (
        <div className="flex flex-col max-w-xl">
            <img src={image} alt="product item source" className="h-full flex-w w-full" />
            <p>Social media app</p>
        </div>
    )
}

export default ProjectItem
