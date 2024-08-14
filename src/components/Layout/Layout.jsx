import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";
import SecendNavbar from "../Navbar/SecendNavbar";

export default function Layout() {
  return (
    <div className="max-w-[97%] mx-auto">
      <Navbar></Navbar>
      <Hero />
      <SecendNavbar />
    </div>
  );
}
