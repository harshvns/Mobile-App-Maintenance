import React from 'react'
import './Page5.css'
import mobileAppMaintenance from '../assets/mobile-App-maintenance-and-support.png'
import mobileAppDevelopment from '../assets/mobile-app-development-process.png'
import top20 from '../assets/top-15-tools-that-can-make-mobile-app-design-more-effective.png'

const Page5 = () => {
  return (
    <div>
        <div className='Tech'>
        <p className='heading3'>Insights</p>
        <p className='heading2text'>Have a glimpse of our insightful blogs on exciting topics on App Maintenance Services.</p>
        </div>
        <div className='P5img'>
            <div className='p5img'>
                <div>
                <img src={mobileAppMaintenance} width={300} height={160} alt="" />
                </div>
                <div>
                Mobile App Maintenance: A Critical Element In Any App’s Success
                </div>
            </div>
            <div className='p5img'>
                <div>
                    <img src={mobileAppDevelopment} width={300} height={160} alt="" />
                </div>
                <div>
                Mobile App Development Process – How Does an Idea Become an App?
                </div>
            </div>
            <div className='p5img'>
                <div>
                    <img src={top20} width={300} height={160} alt="" />
                </div>
                <div>
                Top 15 Tools That Can Make Mobile App Design More Effective
                </div>
            </div>
        </div>

        <div className='Quote'>
        <p className='QuoteHeading'>Get in touch for detailed discussion.</p>
        <p>Accelerate your business growth with our digital solutions and services.</p>
        <div className='form'>
        <div>
        <input className='fill' type="text" placeholder='Name' />
        </div>
        <div>
        <input className='fill' type="text" placeholder='Email'/>
        </div>
        <div>
        <input className='fill' type="text" placeholder='Mobile No.'/>
        </div>
        <div>
        <input className='fill' type="text" placeholder='Website'/>
        </div>
        <div>
        <button className='started'>LET'S GET STARTED</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Page5
