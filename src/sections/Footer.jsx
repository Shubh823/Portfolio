import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <div className='social-icon'>
                <Link to={'https://github.com/Shubh823'} target="_blank" rel='noreferrer' > 
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2 ' />
                </Link>
            </div>
            <div className='social-icon'>
                <Link to={''} target="_blank" rel='noreferrer'>
                <img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2 ' />
                </Link>
            </div>
            <div className='social-icon'>
                <Link to={'https://www.instagram.com/patil_shubham04/'} target="_blank" rel='noreferrer'>
                <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2 ' />
                </Link>
            </div>
            <div className='social-icon'>
                <Link to={'https://www.linkedin.com/in/shubham-patil-7a8279242/'} target="_blank" rel='noreferrer'>
                <img src="\assets\linkedin.png" alt="linkedin" className=' invert w-1/2 h-1/2 ' />
                </Link>
            </div>
            <div className='social-icon'>
                <Link to={'https://leetcode.com/u/Shubham82p/'} target="_blank" rel='noreferrer'>
                <img src="\assets\leetcode - Copy.png" alt="leetcode" className=' invert w-1/2 h-1/2 scale-150 ' />
                </Link>
            </div>
        </div>
        <p className='text-gray-700'>© 2025 Shubham. All rights reserved</p>
    </section>
  )
}

export default Footer
