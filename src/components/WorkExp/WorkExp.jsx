import React from 'react'
import { workExp } from '../../data/staticData'
import { BsLink45Deg } from 'react-icons/bs'

function WorkExp() {
    return (
        <div
            className='border-t border-t-gray-600 border-b border-b-gray-600 !text-white flex flex-wrap gap-4 justify-center py-8 px-4 md:p-8 w-full'
        >
            <h1 className='w-full text-center underline underline-offset-[10px] mb-3 text-3xl leading-none'>Work Experience</h1>
            {workExp.map((exp, index) => (
                <div
                    key={index}
                    className='p-4 flex flex-col gap-1 w-full md:w-[calc(75%+32px)] rounded-md border border-gray-600 bg-[#0005]'
                >
                    <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4'>
                        <div className='flex flex-col gap-1.5 md:gap-1'>
                            <div className='text-xl leading-none'>
                                {exp.role} - {exp.location}
                            </div>
                            <div className='text-base md:text-sm tracking-wide'>{exp.company}</div>
                        </div>
                        <div className='text-base md:text-sm tracking-wide italic'>{exp.duration}</div>
                    </div>
                    <hr className='border border-gray-600' />
                    <div className='flex flex-col md:flex-row gap-3 md:items-center pt-2'>
                        <div className='text-base leading-none'>Technology Stack</div>
                        <div className='flex flex-wrap w-full items-center gap-2'>
                            {exp.techStack?.map((tech, ix) => (
                                <div
                                    key={ix}
                                    className='text-base md:text-sm bg-gray-300 rounded text-gray-800 px-2'
                                >{tech}</div>
                            ))}
                        </div>
                    </div>
                    <a
                        href={exp.certificateUrl}
                        target={'_blank'}
                        rel='noreferer'
                        className='text-sm flex gap-1 items-center mt-2'
                    ><BsLink45Deg /> View Certificate</a>
                </div>
            ))}
        </div>
    )
}

export default WorkExp