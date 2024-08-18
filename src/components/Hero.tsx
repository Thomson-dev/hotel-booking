/* eslint-disable @next/next/no-img-element */
import NavBar from "./NavBar";
import HeroSlider from "./ui/HeroSlider";

const Hero = () => {
  return (
    <section className="w-screen h-screen">
      <NavBar />
      <div className="hero-holder w-full h-full">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
