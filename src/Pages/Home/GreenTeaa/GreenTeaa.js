import React from 'react';
import img from '../../../assets/green-teaa.jpg';

const GreenTeaa = () => {
    return (
        <div className="card   shadow-xl image-full h-[350px]">
        <figure><img src={img} alt="Shoes" className='w-full '/></figure>
        <div className="card-body mt-24">
          <h2 className="card-title mx-auto">Huge Selection Of Green Coffees and Herbal Teas!</h2>
          <p className='mx-auto'>Only our shop will take care of that you get the highest quality of goods aimed at correction of your shape and improving .</p>
          
        </div>
      </div>
    );
};

export default GreenTeaa;