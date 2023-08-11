import React from "react";
import Header from "./Header";
import Section from "./Section";
import ContactForm from "./ContactForm";
import investor from "../../img/investor.svg"
import property from "../../img/property.svg"
import creator from "../../img/creator.svg"
import volunteer from "../../img/volunteer.svg"
import tour from "../../img/tour.svg"

const sectionsData = [
  {
    title: "As an Investor",
    text: "Invest in Lost Hostel and be part of a unique hospitality experience. By contributing to our vision, you'll not only gain potential financial returns but also play a vital role in creating a welcoming and memorable environment for travelers from around the world.",
    buttonLabel: "Join as an Investor",
    image: investor,
  },
  {
    title: "As a Property Partner",
    text: "Do you own a property that aligns with our hostel concept? Collaborate with Lost Hostel to transform your space into an exciting destination for adventurers. By partnering with us, you can bring your property to life in a new and vibrant way.",
    buttonLabel: "Partner with Us",
    image: property,
  },
  {
    title: "As a Content Creator",
    text: "Are you an influencer with a passion for travel and exploration? Let's team up to share the Lost Hostel experience with the world. Collaborate with us to create captivating content that inspires others to embark on their own exciting journeys.",
    buttonLabel: "Collaborate with Us",
    image: creator,
  },
  {
    title: "As a Volunteer",
    text: "Join the Lost Hostel family as a volunteer and contribute to the vibrant atmosphere we offer to our guests. Whether it's helping with events, providing local insights, or simply sharing your positivity, your contribution as a volunteer enhances the overall hostel experience.",
    buttonLabel: "Volunteer with Us",
    image: volunteer,
  },
  {
    title: "As a Tour Agency",
    text: "Are you a tour agency seeking exciting and offbeat travel experiences for your clients? Partner with Lost Hostel to offer unique stays that complement your itineraries. By collaborating, you'll provide travelers with more than accommodation – you'll provide them with unforgettable memories.",
    buttonLabel: "Partner with Us",
    image: tour,
  },

  // Add more sections similarly
];

const WorkWithUsPage = () => {
  return (
    <div className="">
      <Header />
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          text={section.text}
          buttonLabel={section.buttonLabel}
          image={section.image}
          isImageRight={index % 2 === 0}
        />
      ))}
      <ContactForm />
    </div>
  );
};

export default WorkWithUsPage;
