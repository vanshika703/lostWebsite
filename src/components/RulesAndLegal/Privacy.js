import React from "react";

const Privacy = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center my-16">
      <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
        Privacy policy
      </h2>
      <p className="w-2/3 text-[#4c4e4e]">
        <span className="font-semibold">
          At The Lost Hostel, we are committed to protecting your privacy.
        </span>
        <br></br>
        <br></br>
        <span className="font-semibold">
          This policy outlines how we collect, use, and safeguard your personal
          information:
        </span>{" "}
        <br></br>
        <br></br>
        <span className="font-semibold">Information Collection:</span> We
        collect information provided during the reservation process, such as
        name, contact details, and payment information. <br></br>
        <br></br>
        <span className="font-semibold">Use of Information:</span> Your
        information is used to process reservations, communicate with you, and
        improve our services.
        <br></br>
        <br></br>
        <span className="font-semibold">Data Sharing:</span> We may share
        information with third parties for the purpose of providing services
        (e.g., payment processing) or as required by law. <br></br>
        <br></br>
        <span className="font-semibold">Data Security:</span> We implement
        security measures to protect your information from unauthorized access
        or disclosure. <br></br>
        <br></br>
        <span className="font-semibold">Cookies:</span> Our website uses cookies
        to enhance your browsing experience. You can adjust your browser
        settings to manage cookies. <br></br>
        <br></br>
        <span className="font-semibold">Guest Rights:</span> You have the right
        to access, correct, or delete your personal information. Contact us for
        assistance. <br></br>
        <br></br>
        <span className="font-semibold">Policy Changes:</span> Our privacy
        policy may be updated periodically. Check our website for the latest
        version.
      </p>
    </div>
  );
};

export default Privacy;
