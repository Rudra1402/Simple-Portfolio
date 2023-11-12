import React from 'react'
import { socials } from '../../data/staticData'
import rpimg from '../../assets/rp.JPG'

function Homepage() {

    return (
        <div className='flex flex-col items-center justify-center gap-y-12 h-full w-full md:flex-row md:gap-x-12 p-6'>
            <img src={rpimg} alt="Rudra" className='h-72 w-auto rounded-md md:h-3/5' />
            <div className='text-white flex flex-col items-start gap-2 intro'>
                <div className='leading-6 text-[22px] md:text-[20px]'>Hello,</div>
                <div className='text-5xl leading-[3.5rem] md:leading-[4rem]'>I'm a Developer<br className='m-0' />Rudra Patel</div>
                <div className='leading-8 text-[22px] md:text-[20px]'>A passionate developer who likes to plan, <br className='hidden md:block' />develop, and deliver user-centric solutions!</div>
                <div className='contain-links mt-8 flex justify-center w-full md:w-fit gap-4'>
                    {socials.map((s, index) => (
                        <a
                            key={index}
                            href={s.url}
                            target={'_blank'}
                            title={s.name}
                        >
                            <s.Component className='h-7 w-7 md:h-6 md:w-6 text-white' />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Homepage