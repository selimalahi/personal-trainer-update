import React from "react";
import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import img4 from "../../../assets/banner/banner4.jpg";
import img5 from "../../../assets/banner/book-min.png";
import "./Banner.css";



const Banner = () => {
  return (
    <div className="carousel w-full mt-10 mb-10 carousel-container ">
      <div id="slide1" className="carousel-item relative w-full  ">
        <img src={img1} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full carousel-img">
        <img src={img4} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="grid grid-cols-2 pl-20">
            <img
              src={img5}
              style={{ width: "80%", paddingLeft: "20px" }}
              alt=""
            ></img>

            <div className="text-left ">
              
                <h2 className=" mt-10 text-green-500 text-3xl font-bold">
                  Happy, Healthy, Young & Beautiful.
                </h2>
                <p className="mt-10 text-lg">
                Start working on your body today, and with our individual
                fitness program, already in 90 days you will see a totally
                different girl in the mirror!
              </p>
            </div>
            {/* <h2 className="text-center">Happy, Healthy, Young & Beautiful.</h2> */}
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;


// import React, { useState } from 'react';
// import img1 from "../../../assets/banner/banner1.jpg";
// import img2 from "../../../assets/banner/banner2.jpg";
// import img3 from "../../../assets/banner/banner3.jpg";
// import img4 from "../../../assets/banner/banner4.jpg";
// import img5 from "../../../assets/banner/book-min.png";

// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5
   
//     // Add more image URLs as needed
//   ];

//   const handlePrevious = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="flex justify-center items-center">
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-gray-500 hover:bg-gray-600 p-2 rounded-full shadow"
//           onClick={handlePrevious}
//         >
//           &lt;
//         </button>
//         <img
//           className="max-h-96 w-auto"
//           src={images[activeIndex]}
//           alt="Carousel Image" 
//         />
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-gray-500 hover:bg-gray-600 p-2 rounded-full shadow"
//           onClick={handleNext}
//         >
//           &gt;
//         </button>
//       </div>
//       <div className="flex justify-center mt-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-4 h-4 mx-2 rounded-full ${
//               index === activeIndex ? 'bg-gray-800' : 'bg-gray-500'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React, { useState } from 'react';
// import img1 from "../../../assets/banner/banner1.jpg";
// import img2 from "../../../assets/banner/banner2.jpg";
// import img3 from "../../../assets/banner/banner3.jpg";
// import img4 from "../../../assets/banner/banner4.jpg";
// import img5 from "../../../assets/banner/book-min.png";

// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//         img1,
//         img2,
//         img3,
//         img4,
//         img5
//     // Add more image URLs as needed
//   ];

//   const handlePrevious = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative max-w-6xl mx-auto">
//       <div className="flex justify-center items-center">
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-primary hover:bg-primary-dark p-2 rounded-full shadow transition duration-300"
//           onClick={handlePrevious}
//         >
//           &lt;
//         </button>
//         <img
//           className="w-full w-auto transform transition duration-500 hover:scale-110"
//           src={images[activeIndex]}
//           alt="Carousel Image"
//         />
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-primary hover:bg-primary-dark p-2 rounded-full shadow transition duration-300"
//           onClick={handleNext}
//         >
//           &gt;
//         </button>
//       </div>
//       <div className="flex justify-center mt-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-4 h-4 mx-2 rounded-full ${
//               index === activeIndex ? 'bg-primary' : 'bg-primary-light'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;

