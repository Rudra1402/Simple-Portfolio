import React from 'react'
import { techSkills } from '../../data/staticData'

function Skills() {
    return (
        <code
            className='border-t border-t-gray-600 border-b border-b-gray-600 !text-white flex flex-wrap gap-4 justify-center py-8 px-2 md:p-8'
        >
            <h1 className='w-full text-center underline underline-offset-[10px] mb-3 text-3xl leading-none'>Skills</h1>
            <div className='flex flex-wrap justify-center gap-3 w-full md:w-[calc(75%+32px)]'>
                {techSkills.map((skill, index) => (
                    <div
                        key={index}
                        className='w-[45%] md:w-[calc(25%-12px)] border border-gray-600 bg-[#fffd] px-2 md:px-3 py-2 rounded flex gap-2 items-center text-gray-800'
                    >
                        <skill.Component className='text-2xl md:text-xl leading-none' /> {skill.sname}
                    </div>
                ))}
            </div>
        </code>
    )
}

export default Skills