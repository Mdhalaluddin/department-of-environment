import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";
import SecendNavbar from "../Navbar/SecendNavbar";
import Notice from "../Notice/Notice";
import RealTimeAirQuality from "../RealTime/RealTimeAirQuality";

export default function Layout() {
  return (
    <>
      <div className="bg-white h-11">
        <Navbar />
      </div>
      <div className="bg-green-800">
        <SecendNavbar />
      </div>
      <div className="max-w-[97%] mx-auto">
        <Hero />

        <div className="md:flex">
          <div className="md:w-3/4 sm:w-full">
            <Notice />
          </div>
          <div className="">
            <RealTimeAirQuality />
          </div>
        </div>
      </div>
    </>
  );
}
