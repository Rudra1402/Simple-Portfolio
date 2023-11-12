import React, { useState } from 'react'
import { projects } from '../../data/staticData'
import { BiExpandAlt } from 'react-icons/bi'

function Projects() {

    const [p, setP] = useState(null);
    const [expandProject, setExpandProject] = useState(false);

    const floater = (
        <div className='bg-[#000b] fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center'>
            <div className='flex flex-col gap-5 w-4/5 h-4/5 md:w-3/5 md:h-3/5 rounded-md bg-gray-200 text-gray-800 overflow-auto relative p-4'>
                <div className='flex flex-col gap-4 md:gap-2 md:flex-row justify-between'>
                    <div className='text-2xl underline underline-offset-8 leading-none font-medium'>{p?.name}</div>
                    <small className='border border-gray-500 text-gray-800 px-2 rounded w-fit'>
                        {p?.category}
                    </small>
                </div>
                <div className='flex gap-1.5 flex-wrap pt-1'>
                    {p?.techStack.map((ts, ix) => (
                        <div
                            key={ix}
                            className='bg-green-400 py-0.5 px-2 rounded text-gray-800 text-sm'
                        >{ts}</div>
                    ))}
                </div>
                <p className='leading-5'>{p?.desc}</p>
                <p>
                    &bull;&nbsp;{p?.isOnGithub
                        ? "Code is available on Github!"
                        : "Soon code will be available on Github!"
                    }
                </p>
                <div
                    className='absolute bottom-2 right-2 bg-red-600 text-gray-100 rounded py-1 md:py-0.5 cursor-pointer px-3 md:px-2'
                    onClick={() => {
                        setExpandProject(false)
                        setP(null)
                    }}
                >
                    Close
                </div>
            </div>
        </div>
    )

    return (
        <div
            className='border-t border-t-gray-600 border-b border-b-gray-600 !text-white flex flex-wrap gap-x-4 gap-y-6 justify-center py-8 px-4 md:p-8 w-full'
        >
            {expandProject ? floater : null}
            <h1 className='w-full text-center underline underline-offset-[10px] mb-3 text-3xl leading-none'>Projects</h1>
            {projects.map((p, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-2 p-4 rounded-md w-full md:w-1/4 border border-gray-600 bg-[#0005]'
                >
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl md:text-xl leading-none'>{p.name}</h2>
                        <BiExpandAlt
                            title='Expand'
                            className='cursor-pointer hover:transition-all hover:duration-150 hover:rotate-180'
                            onClick={() => {
                                setP(p)
                                setExpandProject(true)
                            }}
                        />
                    </div>
                    <small className='text-lg leading-none md:text-base border border-gray-200 text-gray-200 px-2 py-1 md:py-0.5 rounded w-fit'>
                        {p.category}
                    </small>
                    <div className='flex gap-2 md:gap-1.5 flex-wrap pt-2 pb-1'>
                        {p.techStack.map((ts, ix) => (
                            <div
                                key={ix}
                                className='bg-gray-300 px-2 rounded text-gray-800 md:text-sm'
                            >{ts}</div>
                        ))}
                    </div>
                    <p className='leading-5 text-ellipsis overflow-hidden line-clamp-4'>{p.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default Projects