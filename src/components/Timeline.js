import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <div className="sm:w-1/2 mx-auto text-center mt-20">
      <h1 className="text-3xl font-playfair font-semibold text-[#116b89] mt-16 sm:my-5 mb-4">
        Our Story
      </h1>
      <Chrono
        items={[
          {
            title: "2017",
            cardTitle: "Where It All Began",
            url: "http://google.com",
            cardSubtitle: "May",
            cardDetailedText:
              "The first chapter unfolds in Varkala, a surfers' paradise in Kerala. The Lost Hostels opens its doors with a mission to bring together the global travel community.",
          },
          {
            title: "2018",
            cardTitle: "Expanding Horizons",
            url: "",
            cardSubtitle: "The Community Grows",
            cardDetailedText:
              "As stories spread of our unique ethos, new locations spring up in Madurai, Kovalam, Munnar, and Kochi. A tribe of travelers starts to form.",
          },
          {
            title: "2019",
            cardTitle: "Celebrating Love and Friendship",
            url: "",
            cardSubtitle: "Weddings and Reunions",
            cardDetailedText:
              "The hostels become a stage for life's grand events—weddings celebrated, lifelong friendships forged.",
          },
          {
            title: "2020",
            cardTitle: "The Test of Time",
            url: "",
            cardSubtitle: "Pandemic Shutdown",
            cardDetailedText:
              "The world changes overnight. With heavy hearts, we close several of our homes, holding on to the memories created.",
          },
          {
            title: "2021",
            cardTitle: "Resilience and Rebirth",
            url: "",
            cardSubtitle: "Reopening and Reimagining",
            cardDetailedText:
              "Varkala and Goa welcome back old friends and new souls, while the birth of Bir adds a fresh chapter to our story.",
          },
          {
            title: "2022",
            cardTitle: "A Year of Renewal",
            url: "",
            cardSubtitle: "Soul by the Lost",
            cardDetailedText:
              "Our sister property in Varkala touches 30,000 lives, becoming a sanctuary for those seeking peace.",
          },
          {
            title: "2023",
            cardTitle: "New Adventures, New Memories",
            url: "",
            cardSubtitle: "May",
            cardDetailedText:
              "We embrace the island spirit, bringing The Lost Hostels' magic to Weligama and Hiriketiya in Sri Lanka.",
          },
          {
            title: "2023",
            cardTitle: "New Adventures, New Memories",
            url: "",
            cardSubtitle: "November",
            cardDetailedText:
              "The Lost Hostels Manali opens, inviting travelers to the Himalayas.",
          },
          {
            title: "2024 and Beyond",
            cardTitle: "The Lost Wave Yoga Festival",
            url: "",
            cardSubtitle: "On the Horizon",
            cardDetailedText:
              "The upcoming Lost Wave Yoga Festival at Varkala promises a confluence of energy, tranquility, and community.",
          },
        ]}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#116b89",
          secondary: "#ffde1a",
          cardBgColor: "#e7f0f3",
          cardForeColor: "#e7f0f3",
          titleColor: "#116b89",
          titleColorActive: "#116b89",
          cardTitleColor: "#116b89",
        }}
      />
    </div>
  );
};

export default Timeline;
