import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";
import SecendNavbar from "../Navbar/SecendNavbar";
import Notice from "../Notice/Notice";
import RealTimeAirQuality from "../RealTime/RealTimeAirQuality";
import CardSection from "../Card/CardSection";
import Photo from "../Photo/Photo";

export default function Layout() {
  return (
    <>
      <div>
        <div className="bg-white h-11">
          <Navbar />
        </div>
        <div className="bg-green-800">
          <SecendNavbar />
        </div>
        <div className="max-w-[97%]  mx-auto mb-5 rounded-lg">
          <Hero />
        </div>
      </div>

      <div className="max-w-[97%] mx-auto">
        <div className="max-w-full md:flex">
          <div className="md:w-1/4 bg-slate-100 pb-5">
            <RealTimeAirQuality />
          </div>
          <div className="md:w-2/4 pb-5 bg-gray-100 mx-2 mb-2">
            <Photo />
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
