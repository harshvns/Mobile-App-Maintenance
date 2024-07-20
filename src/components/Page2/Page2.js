import React, { useState } from 'react';
import './Page2.css';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import client7 from '../assets/client7.png';
import client8 from '../assets/client8.png';
import client9 from '../assets/client9.png';
import client10 from '../assets/client10.png';
import Marquee from "react-fast-marquee";

const Page2 = () => {
    const [activeService, setActiveService] = useState('monitoring'); // Default to monitoring service
    const [activeButton, setActiveButton] = useState('monitoring'); // Default to monitoring button

    const handleServiceClick = (service, buttonID) => {
        setActiveService(service);
        setActiveButton(buttonID);
    };

    return (
        <div>
            <div className='client'>
                <Marquee>
                <img src={client1} height={100} alt="" />
                <img src={client2} height={100} alt="" />
                <img src={client3} height={100} alt="" />
                <img src={client4} height={100} alt="" />
                <img src={client5} height={100} alt="" />
                <img src={client6} height={100} alt="" />
                <img src={client7} height={100} alt="" />
                <img src={client8} height={100} alt="" />
                <img src={client9} height={100} alt="" />
                <img src={client10} height={100} alt="" />
                </Marquee>
            </div>
            <div className='p2'>
            <p className='heading2'>Our Mobile App Maintenance & Support Services</p>
            <p className='heading2text'>We deliver customized mobile app maintenance services that accomplish all your mobility needs.</p>
            </div>
            <div className='services'>
                <div className='buttons'>
                    <button className={`btn ${activeButton === 'monitoring' ? 'active' : ''}`} onClick={() => handleServiceClick('monitoring', 'monitoring')}>
                        App Monitoring Services
                    </button>
                    <button className={`btn ${activeButton === 'upgrade' ? 'active' : ''}`} onClick={() => handleServiceClick('upgrade', 'upgrade')}>
                        App Upgrade Services
                    </button>
                    <button className={`btn ${activeButton === 'maintenance' ? 'active' : ''}`} onClick={() => handleServiceClick('maintenance', 'maintenance')}>
                        Mobile App Maintenance and Enhancement Services
                    </button>
                    <button className={`btn ${activeButton === 'support' ? 'active' : ''}`} onClick={() => handleServiceClick('support', 'support')}>
                        App Support, Maintenance & Optimization Services
                    </button>
                </div>

                <div className='section'>
                    {activeService === 'monitoring' && (
                        <>
                            <p className='heading-section'>App Monitoring Services</p>
                            <p className='p-section'>Application monitoring for evaluating the end-user experience and component-level performance of the mobile application.</p>
                            <div className='bullet'>
                            <div>
                                <li>Server monitoring</li>
                                <li>Analytics monitoring</li>
                                <li>Security reviews</li>
                                <li>Performance monitoring</li>
                                <li>Hosting & third party payment monitoring</li>
                            </div>
                            <div>
                                <li>App crash monitoring</li>
                                <li>App feedback monitoring</li>
                                <li>Third party integration update reviews</li>
                                <li>App store management & monitoring</li>
                                <li>Source code repository & versioning</li>
                            </div>
                            </div>
                        </>
                    )}
                    {activeService === 'upgrade' && (
                        <>
                            <h2 className='heading-section'>App Upgrade Services</h2>
                            <p className='p-section'>We provide smart ways of maintaining the user interface and upgrading it to new OS advances user functionality outperforms the application efficiency.</p>
                            <div className='bullet'>
                            <div>
                                <li>Mobile app performance optimization</li>
                                <li>Correct errors</li>
                                <li>Upgrade to support upcoming OS and devices</li>
                                <li>Operational level support</li>
                                <li>Support new library versions</li>
                            </div>
                            <div>
                                <li>Refactoring deprecated code ( If required )</li>
                                <li>Improve the app interfaces and interactions</li>
                                <li>Perfecting existing acceptable functions</li>
                                <li>Major upgrades and additions</li>
                                <li>Data model migrations between update</li>
                            </div>
                            </div>
                        </>
                    )}
                    {activeService === 'maintenance' && (
                        <>
                            <h2 className='heading-section'>Mobile App Maintenance and Enhancement Services</h2>
                            <p className='p-section'>Integrated maintenance & enhancement support services to streamline, manage & maximize all systems and applications within your organization.</p>
                            <div className='bullet'>
                            <div>
                                <li>Feature extension</li>
                                <li>Release plan and management</li>
                                <li>Minor, incremental and major enhancements</li>
                                <li>Security enhancement</li>
                                <li>App porting</li>
                            </div>
                            <div>
                                <li>Migration script and backend server modification</li>
                                <li>Performance enhancement</li>
                                <li>Usability enhancement</li>
                                <li>Continuous testing</li>
                            </div>
                            </div>
                        </>
                    )}
                    {activeService === 'support' && (
                        <>
                            <h2 className='heading-section'>App Support, Maintenance & Optimization Services</h2>
                            <p className='p-section'>From productivity enhancement, feature enrichment, to regular functionality updates, our mobile app maintenance & support services help you make your app convenient to use.</p>
                            <div className='bullet'>
                            <div>
                                <li>Responding to customer queries</li>
                                <li>Providing enterprise training programs</li>
                            </div>
                            <div>
                                <li>Deploying the apps to app stores/enterprise stores</li>
                                <li>Integrating to complex corporate systems</li>
                            </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default Page2;
