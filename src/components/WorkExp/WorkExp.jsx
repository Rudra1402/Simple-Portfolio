import React from 'react'
import { workExp } from '../../data/staticData'
import { BsLink45Deg } from 'react-icons/bs'
import { GoOrganization } from "react-icons/go";

function WorkExp() {
    return (
        <code
            className='border-t border-t-gray-600 border-b border-b-gray-600 !text-white flex flex-wrap gap-4 justify-center py-8 px-4 md:p-8 w-full'
        >
            <h1 className='w-full text-center underline underline-offset-[10px] mb-3 text-3xl leading-none'>Work Experience</h1>
            {workExp.map((exp, index) => (
                <div
                    key={index}
                    className='p-4 flex flex-col gap-2 w-full md:w-[calc(75%+32px)] rounded-md border border-gray-600 bg-[#fffd] text-gray-800'
                >
                    <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4'>
                        <div className='flex flex-col gap-1.5 md:gap-1'>
                            <div className='text-xl leading-none mb-1'>
                                {exp.role} - {exp.location}
                            </div>
                            <hr className='border border-gray-400 md:hidden' />
                            <div className='text-base md:text-base mt-1 tracking-wide flex items-center gap-1.5'>
                                <GoOrganization />{exp.company}
                            </div>
                        </div>
                        <div className='text-base tracking-wider'>
                            {exp.duration}
                        </div>
                    </div>
                    <hr className='border border-gray-400' />
                    <ul className='list-disc px-4'>
                        {exp.desc.map((d, index) => (
                            <li key={index}>{d}</li>
                        ))}
                    </ul>
                    <hr className='border border-gray-400' />
                    <div className='flex flex-col md:flex-row gap-3 md:items-center pt-2'>
                        <div className='text-base leading-none whitespace-nowrap'>Technology Stack</div>
                        <div className='flex flex-wrap w-full items-center gap-2'>
                            {exp.techStack?.map((tech, ix) => (
                                <div
                                    key={ix}
                                    className='text-base md:text-sm text-gray-300 rounded bg-gray-800 px-2 py-1 leading-none'
                                >{tech}</div>
                            ))}
                        </div>
                    </div>
                    <a
                        href={exp.certificateUrl}
                        target={'_blank'}
                        rel="noreferrer"
                        className='text-sm flex gap-1 items-center mt-2'
                    ><BsLink45Deg /> View Certificate</a>
                </div>
            ))}
        </code>
    )
}

export default WorkExp