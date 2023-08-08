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
      setHostelData(await import(`./data/${id}.json`));
    })();
  }, []);
  return (
    <div>
      <Gallery hostelData={hostelData?.gallery} />
      <About hostelData={hostelData?.about} />
      <Location hostelData={hostelData} />
      <FAQ/>
    </div>
  );
};

export default HostelDetails;
