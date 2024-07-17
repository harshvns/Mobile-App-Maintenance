import React, { useState } from 'react';
import './Faq.css'; // Assuming you have CSS for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "Why Do I Need A Mobile App Maintenance Contract?",
    "What's The Cost To Maintain An App?",
    "What Are The Benefits Of App Maintenance?",
    "What Is The Process Of Mobile App Maintenance That You Follow?"
  ];

  const answers = [
    "Smartphones aren't like the other development platforms. A mix of business drivers, innovation changes, and use attributes cause mobile applications to experience the ill effects of a much higher rate of progress than web or desktop applications. These progressions are started by gadget makers and working framework proprietors like Apple and Google, and are completely outside the ability to control of application developers.Here is a rundown of regular incessant mobile platform changes:",
    "The cost of a mobile app maintenance contract fluctuates a lot depending upon needed support level and application criticality. Regularly it is 15-20% of the cost of the development while ascertaining the amount it will cost to maintain mobile app. If your initial application development cost is $40,000, you can reasonably expect to spend about approx $6000 every year on mobile application maintenance.",
    "Listed down are the benefits of mobile app maintainance: Cost reduction and greater Return On Investment (ROI)Increased predictabilityPerformance optimizationFlexible capacityGlobal operation scalabilityDemand flexibility enablement",
    "Our mobile app maintenance service includes: Analysis of the problemerformance monitoring, management and testingPreventive maintenance and supportFunctional uplift of the appStrategic app upgrade (for accomplishing the goal of the project)"
  ];

  return (
    <div className='faq'>
        
      {questions.map((question, index) => (
        <div key={index} className='Faq'>
          <button onClick={() => toggleAnswer(index)} className="faq-question">
            Q: {question}
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{answers[index]}</p>
              {/* Additional content for each answer */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
