import React, { useEffect, useRef } from 'react';
import './Page4.css';
import mobileApp from '../assets/mobieAppFeaures.png';
import background from '../assets/background_form.jpg'

const Page4 = () => {
  const statsRef = useRef(null);
  const appFeatures = [
    "Reviewing applications online",
    "Incorporating latest trends",
    "Testing apps",
    "Fixing bugs",
    "Improving user interface and experience",
    "Enhancing usability",
    "Timely monitoring applications",
    "Feature extension",
    "Migrating applications to different platforms",
    "Prompt response to all queries",
    "Security maintenance and support"
  ];
  
  useEffect(() => {
    const statsSection = statsRef.current;
    const statsTopOffset = statsSection.offsetTop - 400;

    let statsCounted = false;

    const handleScroll = () => {
      if (!statsCounted && window.pageYOffset > statsTopOffset) {
        statsCounted = true;

        const stats = [
          { selector: '.stat:nth-child(1) .count', finalValue: 98 },
          { selector: '.stat:nth-child(2) .count', finalValue: 340 },
          { selector: '.stat:nth-child(3) .count', finalValue: 4 },
          { selector: '.stat:nth-child(4) .count', finalValue: 8 }
        ];

        stats.forEach(stat => {
          const countElement = statsSection.querySelector(stat.selector);
          const initialValue = parseInt(countElement.textContent, 10);

          let startTime = null;
          const duration = 2000;

          const animateCount = timestamp => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            countElement.textContent = Math.floor(initialValue + percentage * (stat.finalValue - initialValue));

            if (progress < duration) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className='P4'>
        <div>
        <p className='P4h1'>Need App Maintenance Service to Secure Your App?</p>
        <p className='P4h2'>We offer mobile app maintenance and support services that adhere to the <br /> highest levels of security and industry standards.</p>
        </div>
        <div className='p4btn'>
          <button className='P4btn'>Let's Discuss</button>
        </div>
      </div>

      <div className='Tech'>
        <div className='heading2'>Mobile App Maintenance Features</div>
        <div className='heading2text'>Offering app maintenance services for iOS & Android based on comprehensive and persistent strategies. Our immensely well-defined features provide superior user experience when accomplishing our customer’s requirement.</div>
      </div>

      <div className='mobileApp'>
        <div className='P4img'>
          <img src={mobileApp} height={310} width={320} alt="" />
        </div>
        <div>
          <ul>
            {appFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='Tech'>
        <p className='heading2'>Why Choose Mobisoft Infotech?</p>
        <p className='heading2text'>Providing a host of benefits that make your mobile app maintenance and support task hasslefree</p>
        <p className='heading2text'>Our Application Maintenance Services increase businesses’ operational expertise with an enterprise-grade mobile strategy to blend with systems, routes, and platforms.</p>
      </div>

      <div ref={statsRef} className="stats-section">
        <div className="stat">
          <span className="count">0</span>
          <span className="count">%</span>
          <span className="label">Clients Satisfied</span>
        </div>
        <div className="stat">
          <span className="count">0</span>
          <span className="count">+</span>
          <span className="label">Successful Projects</span>
        </div>
        <div className="stat">
          <span className="count">0</span>
          <span className="count">M</span>
          <span className="count">+</span>
          <span className="label">Lines of Code</span>
        </div>
        <div className="stat">
          <span className="count">0</span>
          <span className="count">+</span>
          <span className="label">Years of Excellence</span>
        </div>
      </div>
      

    </div>
  );
};

export default Page4;
