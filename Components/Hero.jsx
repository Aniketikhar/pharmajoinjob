import React from "react";
import Searchbar from "./Searchbar";

import {assets} from '@/Assets/assets'
const Hero = () => {
  
  // const style = {
  //   backgroundImage: `url('Assets/bgimg.jpeg')`, // Correct background image syntax
  //   backgroundPosition: 'center', // Correct background position
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover', // Ensures the background image covers the entire section
  // };

  return (
    <section
      id="hero"
      className=" py-10 text-center md:text-left"
    >
      <div className=" container mx-auto">
        <div>
          <h1 className="font-bold text-3xl pt-10 pb-5">
            Find Your New Job Today
          </h1>
          <p>
            Thousand Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, repellendus?
          </p>
        </div>
        <div className="py-10">
          <Searchbar />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
