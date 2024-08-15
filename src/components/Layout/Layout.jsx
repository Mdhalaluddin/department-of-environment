import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";
import SecendNavbar from "../Navbar/SecendNavbar";
import Notice from "../Notice/Notice";
import RealTimeAirQuality from "../RealTime/RealTimeAirQuality";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[97%] mx-auto">
        <Hero />
        <SecendNavbar />
        <div className="md:flex">
          <div className="md:w-2/3 sm:w-full">
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
