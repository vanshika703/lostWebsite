import React from 'react';

const ManaliPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-hero-bg bg-cover bg-center py-16">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4 text-theme-color">Embrace the Alpine Splendor at The Lost Hostels Manali</h1>
          <p className="text-xl mb-4">Where the mountains whisper ancient tales and every path leads to wonder.</p>
          <button className="bg-theme-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Book Your Mountain Escape
          </button>
        </div>
      </section>

      {/* Why Travel to Manali */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 text-theme-color">Why Travel to Manali</h2>
          <p className="text-lg mb-4">
            Manali is a mosaic of glistening snowcaps, emerald forests, and winding rivers, beckoning adventurers and seekers alike.
            From the adrenaline of mountain sports to the tranquility of hillside temples, Manali is an altitude with an attitude.
          </p>
          <img src="manali-landscape.jpg" alt="Manali Landscape" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Why The Lost Hostels Manali */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 text-theme-color">Why The Lost Hostels Manali</h2>
          <p className="text-lg mb-4">
            The Lost Hostels Manali is your sanctuary in the clouds. Tucked away in the bosom of the Himalayas, our doors open to an experience that transcends the ordinary.
            Here, the spirit of the mountains infuses every story, every interaction.
          </p>
          <img src="hostel-interior.jpg" alt="Hostel Interior" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Story of Lost in Manali */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 text-theme-color">Story of Lost in Manali</h2>
          <p className="text-lg mb-4">
            Manali, where the spirits soar high, became our newest chapter in November 2023. The Lost Hostels has woven a tapestry of comfort and adventure here,
            creating a home for those who chase the stars and the sunrise.
          </p>
          <img src="grand-opening.jpg" alt="Grand Opening Celebration" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Decision-Making Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 text-theme-color">Decision-Making Content</h2>
          {/* Add content for Mountain Adventures, Rooms with Views, Soulful Stories */}
          <button className="bg-theme-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Claim Your Spot in the Clouds
          </button>
        </div>
      </section>
    </div>
  );
};

export default ManaliPage;
