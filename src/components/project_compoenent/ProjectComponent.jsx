import React from 'react'

function ProjectComponent({ image, link, title, description }) {
    return (
        <div className="overflow-hidden lg:h-96 md:h-80 h-48 rounded-xl col-span-1 flex flex-col shadow">
            <div className="bg-gray-50 rounded-t-xl flex-1 justify-center items-center overflow-hidden">
                <img src={image} alt="real estate indicator" className='h-auto' style={{
                    objectFit: 'cover',
                    flexShrink: 0,
                    minWidth: '100%',
                    minHeight: '100%'
                }} />
            </div>
            <div className="bg-white rounded-b-xl md:px-6 px-4 py-4 flex flex-row justify-between">
                <p className='md:text-lg text-sm font-semibold text-blue-900 capitalize'>{title}</p>
                <p className='text-indigo-500 border-b-2 font-bold md:text-sm text-xs border-yellow-300'>Visit Platform</p>
            </div>
        </div>
    )
}

export default ProjectComponent
