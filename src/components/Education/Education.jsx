import React from 'react'
import { education } from '../../data/staticData'
import { MdLocationOn } from 'react-icons/md'

function Education() {
    return (
        <div
            className='border-t border-t-gray-600 border-b border-b-gray-600 !text-white flex flex-wrap gap-4 justify-center py-8 px-4 md:p-8 w-full'
        >
            <h1 className='w-full text-center underline underline-offset-[10px] mb-3 text-3xl leading-none'>Education</h1>
            {education.map((edu, index) => (
                <div
                    key={index}
                    className='p-4 flex flex-col gap-1 w-full md:w-[calc(75%+32px)] rounded-md border border-gray-600 bg-[#0005]'
                >
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='text-xl md:leading-none leading-6'>{edu.institute}</div>
                            <hr className='border border-gray-700 md:hidden' />
                            <div className='italic tracking-wide'>{edu.courseDegree}</div>
                            <hr className='border border-gray-700 md:hidden' />
                            <div className='text-base md:text-sm flex items-center gap-1'><MdLocationOn />{edu.city}</div>
                        </div>
                        <div className='text-base md:text-sm tracking-wide italic'>{edu.duration}</div>
                    </div>
                    {edu.cgpa.length > 0 ? <hr className='border border-gray-700 mt-1' /> : null}
                    {edu.cgpa.length > 0 ? <div className='pt-1'>CGPA: {edu.cgpa}</div> : null}
                </div>
            ))}
        </div>
    )
}

export default Education