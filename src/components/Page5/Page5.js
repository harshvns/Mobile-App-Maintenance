import React from 'react'
import './Page5.css'
import mobileAppMaintenance from '../assets/mobile-App-maintenance-and-support.png'
import mobileAppDevelopment from '../assets/mobile-app-development-process.png'
import top20 from '../assets/top-15-tools-that-can-make-mobile-app-design-more-effective.png'

const Page5 = () => {
  return (
    <div>
        <div className='form'>
             <div className='form-text'>
                <p className='formpara'>Get in touch for detailed discussion</p>
                <p className='formpara2'>Accelerate your business growth with our digital solutions and services</p>
            </div>
            <div className='formfill'>
               <div className='formrow'>
                    <div>
                <input className='fill' type='text' placeholder='Name'/>
                </div>
                <div>
                <input className='fill' type='text' placeholder='Business Email'/>
                </div>
                </div>
                <div className='formrow'>
                <input className='fill' type='text' placeholder='Phone'/>
                <input className='fill' type='text' placeholder='Country'/>
                </div>
                <div>
                <input className='message' type='text' placeholder='Message'/>
                </div>

            </div>
        </div> 
    </div>
  )
}

export default Page5
