import { Link } from "react-scroll";

export default function RealTimeAirQuality() {
  return (
    <>
      <div className="ml-12 rounded lg:mx-0">
        <div className="ml-12 rounded lg:mx-0">
          <h1 className="text-2xl w-full font-medium p-2 px-5 rounded-lg text-yellow-400  bg-green-800 mb-4 pt-5 justify-center lg:justify-start flex  items-center">
            Quick Links
          </h1>
        </div>
        <div className="grid grid-flow-row  items-center ml-4 px-4">
          <div className="flex-10 space-y-7">
            <ul className="gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="EnvironmentalJustice">
                <li className="hover:text-black my-2 transition hover:bg-yellow-400 cursor-pointer">
                  Environmental Justice
                </li>
              </Link>
              <Link spy={true} smooth={true} to="SundarbanForest">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  sundarban forest
                </li>
              </Link>
              <Link spy={true} smooth={true} to="BandarbanForest">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  Bandarban forest
                </li>
              </Link>
              <Link spy={true} smooth={true} to="FiveMillionTrees">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  Five Million Trees
                </li>
              </Link>
              <Link spy={true} smooth={true} to="BDGreenRegistry">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  BD Green Registry
                </li>
              </Link>
              <Link spy={true} smooth={true} to="CivilRightsComplaints">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  Civil Rights Complaints
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Newsroom">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  Newsroom
                </li>
              </Link>
              <Link spy={true} smooth={true} to="MonitoringCall">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  Monitoring Call for Air Pollution Control
                </li>
              </Link>
              <Link spy={true} smooth={true} to="LowAndActs">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  Low and Acts
                </li>
              </Link>
              <Link spy={true} smooth={true} to="AllMANPOWER">
                <li className="hover:text-black my-2 hover:bg-yellow-400 transition cursor-pointer">
                  All MANPOWER
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
