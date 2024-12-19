import AboutUs from "@/components/client/Aboutus/Aboutus";
import Banner from "@/components/client/Banner/Banner";
import Gallery from "@/components/client/Gallery/Gallery";
import Newsletter from "@/components/client/Newsletter/Newsletter";
import Services from "@/components/client/Services/Services";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Services />
      <Gallery />
      <Newsletter />
    </main>
  );
}
