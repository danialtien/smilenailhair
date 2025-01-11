import AboutUs from "@/components/client/Aboutus/Aboutus";
import Gallery from "@/components/client/Gallery/Gallery";
import Newsletter from "@/components/client/Newsletter/Newsletter";
import Services from "@/components/client/Services/Services";
import Slider from "@/components/client/Slider/Slider";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <Slider />
      <AboutUs />
      <Services />
      <Gallery />
      <Newsletter />
    </main>
  );
}
