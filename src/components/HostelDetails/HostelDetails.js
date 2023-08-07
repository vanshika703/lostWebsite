import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Location from "./Location";
import FAQ from "./FAQ";
import { useEffect, useState } from "react";

const HostelDetails = () => {
  const params = useParams();

  const [hostelData, setHostelData] = useState(null);
  const id = params.id;

  useEffect(() => {
    (async () => {
      setHostelData((await import(`./data/${id}.json`)).name);
    })();
  }, []);
  return (
    <div>
      <Gallery hostelData={hostelData} />
      <About hostelData={hostelData} />
      <Location hostelData={hostelData} />
      <FAQ hostelData={hostelData} />
    </div>
  );
};

export default HostelDetails;
