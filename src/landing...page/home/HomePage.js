import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OPenAccount from '../OpenAccount';

 function HomePage() {
    return ( 
        <>
         <Hero/>
         <Awards/>
         <Stats/>
         <Pricing/>
         <Education/>
         <OPenAccount/>
        </>
     );
 }
 
 export default HomePage;