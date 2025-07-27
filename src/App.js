import logo from './logo.svg';
import './App.css';
import React from "react";
import { NavbarWithMegaMenu } from './components/pages/Navbar/Navbar';
import { CarouselCustomNavigation } from './components/pages/Slider/Slider';
import { CardDefault } from './components/pages/Card/Card';
import SliderWithContent from './components/pages/SideSlideContent/SlideContent';
import { DefaultStepper } from './components/pages/StepperImg/Stepper';
import { FooterWithSitemap } from './components/pages/Footer/Footer';
function App() {
  return (
  <>
 
<NavbarWithMegaMenu/>
<CarouselCustomNavigation/>
<CardDefault/>
<SliderWithContent/>
<DefaultStepper/>
<FooterWithSitemap/>
  </>
  );
}     

export default App;
