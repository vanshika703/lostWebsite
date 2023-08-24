const Gallery = ({ hostelData }) => {
  return (
    <div className="sm:h-[90vh] flex flex-col justify-center w-11/12 md:w-10/12 mx-auto mt-[14vh] sm:mt-[10vh]">
      <div className="h-1/2 w-full flex">
        <img src={hostelData?.photo1} className="w-1/2 p-1 object-cover" />
        <img src={hostelData?.photo2} className="w-1/2 p-1 object-cover" />
      </div>
      <div className="h-1/2 w-full flex">
        <img src={hostelData?.photo3} className="w-1/3 p-1 object-cover" />
        <img src={hostelData?.photo4} className="w-1/3 p-1 object-cover" />
        <img src={hostelData?.photo5} className="w-1/3 p-1 object-cover" />
      </div>
    </div>
  );
};

export default Gallery;
