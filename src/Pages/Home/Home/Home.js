import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HealthyTips from "../HealthyTips/HealthyTips";
import NewsArticle from "../NewsArticle/NewsArticle";
import 'react-photo-view/dist/react-photo-view.css';
import "./Home.css";
import { Helmet } from "react-helmet";
import SuccessStory from "../SuccessStory/SuccessStory";
import GreenTeaa from "../GreenTeaa/GreenTeaa";
import Contract from "../Contract/Contract";



const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      
      <Helmet>           
           <title>home page</title>          
       </Helmet>
      <Banner></Banner>
      <div className="text-center">
        <p className="text-3xl font-bold text-orange-600">Our Services</p>
        <p className=" w-1/2 m-auto my-4">
          Start working on your body today, and with our individual fitness
          program, already in 90 days you will see a totally different girl in
          the mirror!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pt-10 pb-12 ">
        {services.map((service) => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl  hover:scale-105 duration-500 ">
          <figure>
            <PhotoProvider>
              <PhotoView src={service.img}>
              <img src={service.img} alt=""></img>
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <h2 className="card-title">Services Fee : {service.fee}</h2>
            <p> {service.description.slice(0, 100)}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${service._id}`}><button className="btn btn-info">Details</button></Link>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-10">
        <Link to='/all-services' ><button className="btn btn-info btn-container w-1/2 ">See-All</button></Link>
      </div>
      <div>
      <HealthyTips></HealthyTips>
      <NewsArticle></NewsArticle>
       <GreenTeaa></GreenTeaa>
      <SuccessStory></SuccessStory>
      <Contract></Contract>
      </div>
    </div>
  );
};

export default Home;
