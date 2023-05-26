import React from "react";
import img1 from '../../../assets/logo-success/sss1-before.jpg';
import img2 from '../../../assets/logo-success/sss1-after-.jpg';
import img3 from '../../../assets/logo-success/sss2-before.png';
import img4 from '../../../assets/logo-success/sss-2-after.jpg';

const SuccessStory = () => {
    
  return (
    <div className="mb-12 mt-10 ">
      <div className="">
        <h1 className="text-center hover:text-yellow-400 text-2xl">
          Success Stories
        </h1>
      </div>      
        <div>
        <div className="carousel w-full mx-8 mt-10">
          <div id="item1" className="carousel-item w-full flex flex-col sm:flex-row mx-auto">
           <div className=" flex flex-row">
              <div>
              <img src={img1} alt="" className="" />
              <p className="text-center text-lg">Before</p>
              </div>
              <div>
              <img src={img2} alt="" className="ml-4 mt-4  " />
              <p className="text-center text-lg">After</p>
              </div>
           </div>
           <div className="lg:ml-24 sm:mx-auto">
             <h1 className="text-2xl text-yellow-400 pb-4">Meghan Wolf Lost 90 Pounds and 3 Sizes</h1>
             <p> It all was quite simple but I could Never do that alone. <br />
              <span className="text-2xl text-yellow-400">Physical activity</span> <br />
              94% increased their physical activity(most frequently through walking 90% exercise, on average , about 1 hour per day 62% 
              watch fewer than 10 hours of TV per week.  
             </p>
           </div>
          </div>
          <div id="item2" className="carousel-item w-full flex flex-col sm:flex-row mx-auto">
          <div className=" flex flex-row">
              <div>
              <img src={img3} alt="" className="" />
              <p className="text-center text-lg">Before</p>
              </div>
              <div>
              <img src={img4} alt="" className="ml-4 mt-4  " />
              <p className="text-center text-lg">After</p>
              </div>
           </div>
           <div className="lg:ml-24 sm:mx-auto">
             <h1 className="text-2xl text-yellow-400 pb-4">Linda Mayers
                Lost 80 Pounds and 4 Sizes</h1>
                <p> It all was quite simple but I could Never do that alone.Physical activity
              94% increased their physical activity(most frequently through walking 90% exercise, on average , about 1 hour per day 62% 
              watch fewer than 10 hours of TV per week.  
             </p>
           </div>
         </div> 
        </div> 
        
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
