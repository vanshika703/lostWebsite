import { useState } from "react";

import Gallery from "./Gallery";
import About from "./About";
import Location from "./Location";
import FAQ from "./FAQ";


const HostelDetails = () => {

  return (
    <div>
      <Gallery />
      <About />
      <Location />
      <FAQ/>
      
    </div>
  );
};

export default HostelDetails;
