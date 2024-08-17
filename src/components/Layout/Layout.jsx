import PhotoGelary from "@/lib/PhotoGalary/PhotoGalary";
import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";
import SecendNavbar from "../Navbar/SecendNavbar";
import Notice from "../Notice/Notice";
import RealTimeAirQuality from "../RealTime/RealTimeAirQuality";
import CardSection from "../Card/CardSection";

export default function Layout() {
  return (
    <>
      <div className="bg-white h-11">
        <Navbar />
      </div>
      <div className="bg-green-900">
        <SecendNavbar />
      </div>
      <div className="max-w-[97%] mx-auto">
        <Hero />
        <div className="max-w-full md:flex">
          <div className="md:w-1/4 bg-slate-100 pb-5">
            <RealTimeAirQuality />
          </div>
          <div className="md:w-2/4 pb-5">
            <PhotoGelary />
          </div>
          <div className="md:w-1/4 sm:w-full bg-slate-100 pb-5">
            <Notice />
          </div>
        </div>
        {/* card section */}
        <div className="bg-slate-100 mb-20">
          <CardSection />
        </div>
      </div>
    </>
  );
}
