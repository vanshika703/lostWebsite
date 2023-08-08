import img from "../../img/COMING SOON.png";

const Gallery = ({hostelData}) => {
  return (
    <div className="h-[90vh] flex flex-col sm:flex-row justify-center sm:mx-28 mt-[10vh]">
      <img src={hostelData?.photo1} className="sm:w-2/3 sm:h-full p-2 object-cover"></img>
      <div className="sm:w-1/3 h-full">
        <img src={hostelData?.photo1} className="w-full h-1/3 p-2 object-cover"></img>
        <img src={hostelData?.photo1} className="w-full h-1/3  p-2 object-cover"></img>
        <img src={hostelData?.photo1} className="w-full h-1/3  p-2 object-cover"></img>
      </div>
    </div>
  );
};

export default Gallery;
