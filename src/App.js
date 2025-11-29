import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { NavbarWithMegaMenu } from "./components/pages/Navbar/Navbar";
import { CarouselCustomNavigation } from "./components/pages/Slider/Slider";
import { CardDefault } from "./components/pages/Card/Card";
import SliderWithContent from "./components/pages/SideSlideContent/SlideContent";
import { DefaultStepper } from "./components/pages/StepperImg/Stepper";
import { FooterWithSitemap } from "./components/pages/Footer/Footer";
import { toast } from "react-toastify";
function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("success") === "true") {
      toast.success("Your details were submitted !", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      // remove ?success=true from URL
      setTimeout(() => {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }, 3000);
    }
  }, []);

  return (
    <>
      <NavbarWithMegaMenu />
      <CarouselCustomNavigation />
      <CardDefault />
      <SliderWithContent />
      <DefaultStepper />
      <FooterWithSitemap />
    </>
  );
}

export default App;
