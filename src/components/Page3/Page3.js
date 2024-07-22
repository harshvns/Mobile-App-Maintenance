import React from 'react'
import './Page3.css'
import Contract from '../assets/Contract.jpg'
import Maintenance from '../assets/Maintenance.jpg'
import PartTime from '../assets/PartTime.jpg'
import express from '../assets/express.png'
import laravel from '../assets/laravel.png'
import nodejs from '../assets/node.png'
import net from '../assets/.net.png'
import python from '../assets/python.png'
import nextjs from '../assets/nextjs.jpeg'
import vue from '../assets/vue.png'
import spring from '../assets/spring.png'
import cakephp from '../assets/cakephp.png'
import code from '../assets/codenitter.png'
import mean from '../assets/mean.png'
import rxweb from '../assets/rxweb.png'
import react from '../assets/react.png'
import angular from '../assets/angular.jpg'

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
            <div className='modelimg'>
            <img src={Contract} height={120} width={160} alt="" />
            </div>
            <div>
                <h3>Annual Maintenance Contract</h3>
                <p className='maintenText'>Offering technical support, bug fixing, corrective maintenance, and app version upgrades, etc.</p>
            </div>
            </div>
            </div>

            <div>
            <div className='boximg'>
            <div className='modelimg'>
            <img src={PartTime} height={120} width={160} alt="" />
            </div>
            <div>
                <h3>Part Time / Full Time Person</h3>
                <p className='maintenText'>Our ingenious team manages all maintenance work including app monitoring, app upgrades, and enhancements.</p>
            </div>
            </div>
            </div>

            <div>
            <div className='boximg'>
            <div className='modelimg'>
            <img src={Maintenance} height={120} width={160} alt="" />
            </div>
            <div>
                <h3>Scope Based Maintenance</h3>
                <p className='maintenText'>Having a routine schedule for checking critical app features and performance will increase customer satisfaction and help diminish future problems.</p>
            </div>
            </div>
            </div>
        </div>
        <div className='Tech'>
            <p className='heading2'>Technology & Tools</p>
            <p className='heading2text'>We have expertise in various cutting edge technologies and software tools to elevate your mobile app maintenance process.</p>
        </div>
        <div className='toolsicon'>
        <div className='hide'>
        <img src={express} height={60} width={70} alt="" />
        </div>
        <img src={laravel} height={60} width={70} alt="" />
        <img src={nodejs} height={60} width={70} alt="" />
        <img src={net} height={60} width={70} alt="" />
        <img src={nextjs} height={60} width={70} alt="" />
        <img src={vue} height={60} width={70} alt="" />
        <img src={spring} height={60} width={70} alt="" />
        <img src={code} height={60} width={70} alt="" />
        <img src={cakephp} height={60} width={70} alt="" />
        <img src={mean} height={60} width={70} alt="" />
        <img src={angular} height={60} width={70} alt="" />
        <div className='hide'>
        <img src={react} height={60} width={70} alt="" />
        {/* <img src={rxweb} height={60} width={70} alt="" /> */}
        </div>

        </div>
    </div>
  )
}

export default Page3
