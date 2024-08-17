import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";
import SecendNavbar from "../Navbar/SecendNavbar";
import Notice from "../Notice/Notice";
import RealTimeAirQuality from "../RealTime/RealTimeAirQuality";
import CardSection from "../Card/CardSection";
import Photo from "../Photo/Photo";
import Footer from "../Footer/Footer";
import EIAReport from "../EIAReport/EIAReport";
import Help from "../Help/Help";

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
      </div>
      <div className="max-w-[97%]  mx-auto mb-5 rounded-lg">
        <Hero />
      </div>

      <div className="max-w-[97%] mx-auto">
        <div className="max-w-full md:flex">
          <div className="md:w-1/4 bg-slate-100 pb-5">
            <RealTimeAirQuality />
          </div>
          <div className="md:w-2/4 pb-5 bg-gray-100 mx-2 mb-2">
            <Photo />
          </div>
          <div className="md:w-1/4 w-full bg-slate-100 pb-5">
            <Notice />
          </div>
        </div>
        {/* card section */}
        <div className="bg-slate-100 md:mt-0 mt-5 rounded-lg mb-20">
          <CardSection />
        </div>
      </div>
      {/* table */}
      <div className="max-w-[97%] bg-slate-100 md:flex justify-between mx-auto">
        <div className="md:w-3/4 w-full mt-10 rounded-lg">
          <EIAReport />
        </div>
        <div className="md:w-1/4 mt-10 w-full">
          <Help />
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}
