import React from 'react'

const Home = () => {
  return (
    <div className="home-page">
      <div className="custom-container">
        <div className="home-content">
          <h1 className="roboto-bold">Welcome to AmratChits</h1>
          <p className="roboto-regular">Your Trusted Partner in Chit Fund Management</p>
          <div className="home-intro">
            <h2 className="lato-bold">About Our Services</h2>
            <p className="roboto-regular">
              We provide comprehensive chit fund services with transparency, trust, and reliability. 
              Our platform offers various chit plans designed to meet your financial goals.
            </p>
          </div>
          
          <div className="home-features">
            <div className="feature-card">
              <h3 className="lato-bold">Monthly Plans</h3>
              <p className="roboto-light">Flexible monthly chit plans for steady savings</p>
            </div>
            <div className="feature-card">
              <h3 className="lato-bold">Investment Advisory</h3>
              <p className="roboto-light">Expert guidance for your financial investments</p>
            </div>
            <div className="feature-card">
              <h3 className="lato-bold">Customer Support</h3>
              <p className="roboto-light">24/7 support for all your queries and needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
