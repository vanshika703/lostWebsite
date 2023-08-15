
const Gallery = ({ hostelData }) => {
  return (
    <div className="sm:h-[90vh] flex flex-col sm:flex-row justify-center mx-5 sm:mx-28 mt-[30vh] sm:mt-[10vh]">
      <img
        src={hostelData?.photo1}
        className="sm:w-2/3 sm:h-full p-2 object-cover"
        alt="hostel"
      ></img>
      <div className="sm:w-1/3 h-full">
        <img
          src={hostelData?.photo2}
          className="w-full h-1/3 p-2 object-cover"
          alt="hostel"
        ></img>
        <img
          src={hostelData?.photo3}
          className="w-full h-1/3  p-2 object-cover"
          alt="hostel"
        ></img>
        <img
          src={hostelData?.photo4}
          className="w-full h-1/3  p-2 object-cover"
          alt="hostel"
        ></img>
      </div>
    </div>
  );
};

export default Gallery;
