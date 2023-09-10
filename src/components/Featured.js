import Marquee from "react-fast-marquee";

const featuredIn = [
  {
    name: "Business Stndard",
    backlink:
      "https://www.business-standard.com/content/press-releases-ani/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya-123082401098_1.html",
    imagelink:
      "https://blog.reculta.com/wp-content/uploads/2017/10/Business-Standard-logo.png",
  },
  {
    name: "Hindustan Times",
    backlink:
      "https://www.hindustantimes.com/brand-stories/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-weligama-and-hiriketiya-sri-lanka-101692966634501.html",
    imagelink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hindustan_Times_logo.svg/2560px-Hindustan_Times_logo.svg.png",
  },
  {
    name: "The Print",
    backlink:
      "https://theprint.in/ani-press-releases/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya/1729379/",
    imagelink:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/ThePrint_logo.png",
  },
  {
    name: "Zee5",
    backlink:
      "https://www.zee5.com/articles/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya",
    imagelink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Zee5_Official_logo.svg/1200px-Zee5_Official_logo.svg.png",
  },
  {
    name: "British Columbia",
    backlink:
      "https://www.britishcolumbiatimes.com/news/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya20230824195622/",
    imagelink:
      "https://worldnewsn.s3.amazonaws.com/media/images/British_Columbia_Times_nZMtEVb.png",
  },
  {
    name: "Sri Lanka Island News",
    backlink:
      "https://www.srilankaislandnews.com/news/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya20230824195622/",
    imagelink:
      "https://worldnewsn.s3.amazonaws.com/media/images/Srilanka_island.png",
  },
  {
    name: "US World",
    backlink:
      "https://www.usworldtoday.com/news/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya20230824195622/",
    imagelink:
      "https://worldnewsn.s3.amazonaws.com/media/images/US_World_Today.png",
  },
  {
    name: "LatestLY",
    backlink:
      "https://www.latestly.com/agency-news/business-news-yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya-5362295.html",
    imagelink:
      "https://stfe.latestly.com/images/logo.png",
  },
  {
    name: "World News",
    backlink:
      "https://www.worldnewsnetwork.net/news/yoga-surf-soul-and-serenity-the-lost-hostels-launches-in-sri-lanka-promising-backpacker-bliss-and-mental-wellbeing-in-weligama-and-hiriketiya20230824195622/",
    imagelink:
      "https://worldnewsn.s3.amazonaws.com/media/images/brand_logo.jpg",
  },
];

const Featured = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <p className="text-3xl font-playfair font-semibold text-[#116b89]">
        As Featured In
      </p>
      <Marquee
      pauseOnHover={true}
      speed={70}
      className="py-10">
        {featuredIn?.map((feature) => (
          <a target="_blank" href={feature.backlink}>
            <img
              src={feature.imagelink}
              className="h-20 object-contain w-52 px-5"
            ></img>
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default Featured;
