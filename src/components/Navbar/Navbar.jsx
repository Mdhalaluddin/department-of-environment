import { MdLanguage } from "react-icons/md";
import { BsBagDashFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="pb-5 bg-slate-200">
      <nav className="mx-5 flex items-center justify-between  rounded-t-lg  px-2 py-2">
        <div>
          <div className="flex-1 items-center flex">
            <span className="font-bold flex items-center ">
              <img
                className="w-10 h-7 mr-3"
                src="https://i.ibb.co/1Rn2Rmx/logo.png"
                alt=""
              />
              Environment.gov
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <h2 className="flex lg:text-xl items-center font-normal text-lg mr-3 text-center text-black">
            <BsBagDashFill className="mr-2" />
            bd state jobs
          </h2>
          <h2 className="flex lg:text-xl items-center font-normal text-lg ml-3 text-center text-black">
            <MdLanguage className="mr-2 " />
            Translate
          </h2>
        </div>
      </nav>
    </div>
  );
}
