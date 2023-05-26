import React, { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart/ServicesCart";
import Banner from './../../Banner/Banner';
import { Helmet } from "react-helmet";

const Services = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-site-selimalahi.vercel.app/all-services")
    .then((res) => res.json())
    .then((data) => setServices(data))
  }, []);
  return (
    <div>
       <Helmet>           
           <title>AddReview</title>          
       </Helmet>
        <div>
        <Banner></Banner>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-orange-600">Our Services</p>
        <p className=" w-1/2 m-auto my-4">
          Start working on your body today, and with our individual fitness
          program, already in 90 days you will see a totally different girl in
          the mirror!
        </p>
      </div>
      <div  className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart> )
                }
      </div>
    </div>
  );
};

export default Services;
