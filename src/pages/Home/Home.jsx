import React from 'react';
import Categories from '../../components/Categories';
import Slider from '../../components/Slider';

import LatestItems from '../../components/LatestItems';


const Home = () => {
  return( 
  <>
      <Slider/>
      <Categories />
      <LatestItems/>
    
  </>
  )
};

export default Home
