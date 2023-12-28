import React from 'react'
import { MdMail } from 'react-icons/md'
import { socials } from '../../data/staticData'

function Footer() {
    return (
        <code
            className='border-t border-t-gray-600 text-white flex flex-col items-center gap-4 w-full'
        >
            <div className='text-lg md:text-xl leading-6 py-6 px-2 text-center w-full md:w-[calc(75%+32px)] tracking-wide'>
                Thank you for having a look at my portfolio!
            </div>
            <div className='bg-[#fffd] flex flex-col items-center py-8 px-4 gap-4 w-full'>
                <div className='flex items-center gap-4 text-gray-800'>
                    {socials.map((s, index) => (
                        <a
                            key={index}
                            href={s.url}
                            target={'_blank'}
                            rel="noreferrer"
                            title={s.name}
                            className='text-2xl md:text-xl leading-none'
                        >
                            <s.Component />
                        </a>
                    ))}
                    <a
                        target={'_blank'}
                        title='Email'
                        rel="noreferrer"
                        href='mailto:rudrapatel0214@gmail.com'
                        className='text-2xl md:text-xl leading-none'
                    >
                        <MdMail />
                    </a>
                </div>
                <div className='text-gray-600 text-base'>&copy; 2023 Rudra Patel</div>
            </div>
        </code>
    )
}

export default Footer