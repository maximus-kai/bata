import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
export default function Home() {
  return (
    <main className="relative">
      <Nav/>
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffers/>
      <CustomerReviews/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}
