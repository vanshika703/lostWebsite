import { useState } from "react";

const FAQs = [
  {
    question:
      "What is the check out time & where we can leave our baggage after that ?",
    answer:
      "Our standard checkout time is 11 AM & you can leave your baggage at reception & can use our common facilities till 6 PM.",
  },
  {
    question: "Can we also bring our Pet ?",
    answer:
      "We also love pets & they allowed in our common space area but not inside the room or dorms.",
  },
  {
    question: "Do you have Parking?",
    answer:
      "Sorry, we don’t provide parking facility. You can park your scooter outside of our property in a specific area & there is a Car Parking just 200 Meters just opposite Sai Family Restaurant & Dhaba. Please note that we will not be responsible for any loss.",
  },
  {
    question: "Can we make our own food in hostel ?",
    answer:
      "We have common kitchen & water purifier free to use for our guests.Anyhow you can use our kitchen to make Tea/Coffe/ Maggie & some light meals. We have inhouse Cafe where you can enjoy tasty & affordable meals.",
  },
];

const FAQ = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const handleToggleFaq = (index) => {
    let newFAQs = [...openFaqs];
    const found = openFaqs.indexOf(index);
    if (found === -1) {
      newFAQs.push(index);
    } else {
      console.log("foind", newFAQs);
      newFAQs.splice(found, 1);
      console.log("foind new", newFAQs);
    }
    setOpenFaqs(newFAQs);
  };

  return (
    <div className="flex flex-col justify-center items-center text-left w-[100vw] p-5 my-10">
      <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
        FAQs
      </h1>
      {FAQs.map((faq, index) => {
        return (
          <div
            className="border-b-2 border-[#afd1dc] p-2 m-2 w-full sm:w-1/2"
            onClick={() => handleToggleFaq(index)}
          >
            <div className="flex justify-between py-2">
              <h3 className="font-semibold text-[#116b89] font-playfair text-lg">
                {faq.question}
              </h3>
              {openFaqs?.indexOf(index) === -1 ? (
                <button>
                  <svg
                    stroke="#116b89"
                    fill="#116b89"
                    stroke-width="0"
                    t="1551322312294"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                  </svg>
                </button>
              ) : (
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </button>
              )}
            </div>
            {openFaqs.indexOf(index) === -1 ? (
              ""
            ) : (
              <p className="text-[#4c4e4e]">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
