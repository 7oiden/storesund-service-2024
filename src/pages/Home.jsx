import Hero from "./home/Hero";
import About from "./home/About";
import StdServices from "./home/StdServices";
import WhyMe from "./home/WhyMe";
import OtherServices from "./home/OtherServices";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyMe />
      <StdServices />
      <OtherServices />
    </>
  );
}
