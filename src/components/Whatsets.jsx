import React from "react";
import Sectiontitle from "./Sectiontitle";

const Whatsets = () => {
  // What Sets Us Apart data array
  const whatsetsData = [
    {
      id: 1,
      icon: "icon-trustworthy",
      title: "Trustworthy",
      description: "We prioritize trust and integrity in every aspect of our operations. Our track record reflects our commitment to maintaining the highest standards of ethical conduct."
    },
    {
      id: 2,
      icon: "icon-centric",
      title: "Customer-centric Approach",
      description: "Our customers are at the heart of everything we do. We strive to provide personalized services and ensure their financial well-being."
    },
    {
      id: 3,
      icon: "icon-trustworthy",
      title: "Experienced Team",
      description: "Our team comprises seasoned professionals with extensive expertise in the financial industry. We leverage our knowledge to deliver superior services and value to our customers."
    },
    {
      id: 4,
      icon: "icon-agents",
      title: "Regulatory Compliance",
      description: "We operate within the legal framework and comply with all relevant regulations to ensure a secure and compliant environment for our customers."
    }
  ];

  return (
    <React.Fragment>
      <section className="whatsets-section">
        <div className="custom-container">
          <Sectiontitle
            title="What Sets Us Apart"
            titleClass=" text-primarynew text-uppercase font-bold"
          />
          <div className="row py-4">
            {whatsetsData.map((item) => (
              <div key={item.id} className="col-md-3">
                <div className="whatsets-col text-center border rounded-4 mb-4">
                  <span className={`${item.icon} icomoon`}></span>
                  <article>
                    <h4 className="pb-3 font-black text-uppercase">
                      {item.title}
                    </h4>
                    <p>
                      {item.description}
                    </p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Whatsets;
