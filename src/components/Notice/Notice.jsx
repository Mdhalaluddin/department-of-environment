import { AiFillAlert } from "react-icons/ai";

export default function Notice() {
  return (
    <div className="">
      <div className="items-center bg-slate-100">
        <div className="ml-12 rounded lg:mx-0">
          <h1 className="text-2xl w-full font-medium p-2 px-5 rounded-lg text-rose-600  bg-green-800 mb-4 pt-5 justify-center lg:justify-start flex  items-center">
            Notice Board
          </h1>
        </div>
        <div>
          <div className="grid grid-flow-row items-center ml-4 px-4">
            <div className="flex border-b-2 my-2 pb-3 items-center text-sm space-x-2">
              <AiFillAlert />
              <a
                className="  hover:text-black hover:bg-red-400 transition cursor-pointer"
                href=""
              >
                পরিবেশ অধিদপ্তর কর্তৃক বাস্তবায়নাধীন
              </a>
            </div>
            <div className="flex border-b-2 my-2 pb-3 items-center space-x-2">
              <AiFillAlert />
              <a
                className=" hover:text-black hover:bg-red-400 transition cursor-pointer"
                href=""
              >
                দরপত্র বিজ্ঞপ্তি (ইসলামিক ফাউন্ডেশন)
              </a>
            </div>
            <div className="flex border-b-2 my-2 pb-3 items-center space-x-2">
              <AiFillAlert />
              <a
                className="hover:text-black hover:bg-red-400 transition cursor-pointer"
                href=""
              >
                দরপত্র বিজ্ঞপ্তি (ইসলামিক ফাউন্ডেশন)
              </a>
            </div>
            <div className="flex border-b-2 my-2 pb-3 items-center  space-x-2">
              <AiFillAlert />
              <a
                className=" hover:text-black hover:bg-red-400 transition cursor-pointer"
                href=""
              >
                চাকরি হতে অব্যাহতি প্রদান (১৮/০৭/২০২৪)
              </a>
            </div>
            <div className="flex border-b-2 my-2 pb-3 items-center space-x-2">
              <AiFillAlert />
              <a
                className=" hover:text-black hover:bg-red-400 transition cursor-pointer"
                href=""
              >
                উন্মুক্ত নিলাম বিজ্ঞপ্তি (১৯/১২/২০২৩)
              </a>
            </div>
            <div className="flex border-b-2 my-2 pb-3 items-center space-x-2">
              <AiFillAlert />
              <a
                className="hover:text-black hover:bg-red-400 transition cursor-pointer"
                href=""
              >
                প্রথম শ্রেণির বদলী আদেশ (7/09/2023){" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
