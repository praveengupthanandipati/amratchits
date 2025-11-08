import React from 'react'
import Homeherosection from '../components/Homeherosection';
import Homechitplans from '../components/Homechitplans';

const Home = () => {
  // Features data array
  const featuresData = [
    {
      id: 1,
      icon: "icon-trusted",
      title: "Trusted & Secure",
      subtitle: "Financial Partnerships"
    },
    {
      id: 2,
      icon: "icon-savings",
      title: "Achieve Big Goals",
      subtitle: "with Small Savings"
    },
    {
      id: 3,
      icon: "icon-wallet",
      title: "Flexible Payouts &",
      subtitle: "Loan Facilities"
    },
    {
      id: 4,
      icon: "icon-bonus",
      title: "Bonus Earnings",
      subtitle: "as a Subscriber"
    }
  ];

  return (
    <React.Fragment>
        <section className='herosection'>
          <Homeherosection />
        </section>      
        {/* features */}
        <section className='features py-3'>
          <div className='custom-container'>
             <div className="row">
               {featuresData.map((feature) => (
                 <div key={feature.id} className="col-md-3">
                    <div className='feature-col d-flex py-3'>
                      <div className='feature-icon me-3'>
                         <span className={`${feature.icon} icomoon text-secondarynew`}></span>
                      </div>
                      <p className='align-self-center p-0 m-0'>
                        {feature.title} <br /> {feature.subtitle}
                      </p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>
        {/* chit plans section */}
        <Homechitplans/>  
    </React.Fragment>
  )
}

export default Home
