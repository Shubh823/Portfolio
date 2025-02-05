import React from 'react'
import { clientReviews } from '../constants'
import { NodeFrame } from 'three/webgpu'

const Achievments = () => {
  return (
    <section className='c-space my-20'>
        {/* Achievments & Experience */}
        <h3 className='head-text'>Achievments & Experience  </h3>
        <div className='client-container'>
            {clientReviews.map(({id,title,description})=>(
                <div key={id} className='client-review'>
                    <div>
                        
                        <div className='client-content'>
                            <div className='flex gap-3'>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-white-800'>{NodeFrame}</p>
                                    <p className='text-white-500 md:text-base head-text text-sm'>{title}</p>
                                    <p className='text-slate-500 md:text-base subtext text-sm'>{description}</p>
                                </div>
                            </div>
                            <div className='flex self-end items-center gap-2'>{Array.from({length:5}).map((_,index)=>(<img key={index} src='/assets/star.png' alt='star' className='w-5 h-5'/>))} </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Achievments
