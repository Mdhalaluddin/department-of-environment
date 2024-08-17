import { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaTimesCircle } from "react-icons/fa";

export default function SecendNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  console.log(click);
  const content = (
    <>
      <div className="lg:hidden block absolute z-10 w-full left-0 bottom-0 top-20 right-0 bg-green-900 transition">
        <ul className="text-center text-xl p-10 -mt-5">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 border-b border-slate-900 hover:bg-rose-400 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Air">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              Air
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Land">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              Land
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Water">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              Water
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Climate">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              Climate
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Permits">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              Permits
            </li>
          </Link>
          <Link spy={true} smooth={true} to="ContactUs">
            <li className="my-4 border-b border-slate-800 hover:bg-rose-400 hover:rounded">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10 z-50 flex items-center justify-between text-white lg:py-5 px-20 py-4">
        <div className="flex-1 items-center flex">
          <span className="font-bold flex items-center ">
            Department of the Environment
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition hover:border-fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Air">
                <li className="hover:text-fuchsia-600 transition hover:border-fuchsia-600 cursor-pointer">
                  Air
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Land">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer">
                  Land
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Water">
                <li className="hover:text-fuchsia-600 transition hover:border-fuchsia-600 cursor-pointer">
                  Water
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Climate">
                <li className="hover:text-fuchsia-600 transition hover:border-fuchsia-600 cursor-pointer">
                  Climate
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Permits">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer">
                  Permits
                </li>
              </Link>
              <Link spy={true} smooth={true} to="ContactUs">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block md:hidden transition" onClick={handleClick}>
          {click ? <FaTimesCircle /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>
    </nav>
  );
}
