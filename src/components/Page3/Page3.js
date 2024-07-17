import React from 'react'
import './Page3.css'
import Contract from '../assets/Contract.jpg'
import Maintenance from '../assets/Maintenance.jpg'
import PartTime from '../assets/PartTime.jpg'
import javascript from '../assets/Javascript_icon.png'
import laravel from '../assets/laravel.png'
import nodejs from '../assets/nodejs.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import nextjs from '../assets/nextjs.jpeg'
import vue from '../assets/vue_icon'

const Page3 = () => {
  return (
    <div>
        <div className='p3'>
            <div className='heading2'>Mobile Application Maintenance & Support Services Model</div>
            <p className='heading2text'>Our Android & iOS app maintenance services support model enables better and faster software maintenance, increases app productivity, and result in higher app ROI.</p>
        </div>
        <div className='boximgrow'>
            <div>
            <div className='boximg'>
            <div>
            <img src={Contract} height={120} width={160} alt="" />
            </div>
            <div>
                <h3>Annual Maintenance Contract</h3>
                <p>Offering technical support, bug fixing, corrective maintenance, and app version upgrades, etc.</p>
            </div>
            </div>
            </div>

            <div>
            <div className='boximg'>
            <div>
            <img src={PartTime} height={120} width={160} alt="" />
            </div>
            <div>
                <h3>Part Time / Full Time Person</h3>
                <p>Our ingenious team manages all maintenance work including app monitoring, app upgrades, and enhancements.</p>
            </div>
            </div>
            </div>

            <div>
            <div className='boximg'>
            <div>
            <img src={Maintenance} height={120} width={160} alt="" />
            </div>
            <div>
                <h3>Scope Based Maintenance</h3>
                <p>Having a routine schedule for checking critical app features and performance will increase customer satisfaction and help diminish future problems.</p>
            </div>
            </div>
            </div>
        </div>
        <div className='Tech'>
            <p className='heading3'>Technology & Tools</p>
            <p className='heading2text'>We have expertise in various cutting edge technologies and software tools to elevate your mobile app maintenance process.</p>
        </div>
        <div className='toolsicon'>
        <img src={javascript} height={100} width={120} alt="" />
        <img src={laravel} height={100} width={160} alt="" />
        <img src={nodejs} height={100} width={150} alt="" />
        <img src={php} height={100} width={150} alt="" />
        <img src={python} height={100} width={140} alt="" />
        <img src={nextjs} height={100} width={130} alt="" />
        <img src={vue} height={100} width={120} alt="" />
        </div>
    </div>
  )
}

export default Page3
