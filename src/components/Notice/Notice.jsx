import { BsBoxArrowInRight } from "react-icons/bs";

export default function Notice() {
  return (
    <div className="rounded-b-lg">
      <div className=" items-center w-full bg-slate-200">
        <div className="mx-20 lg:mx-0">
          <h1 className="text-xl lg:text-2xl pt-5 justify-center lg:justify-start flex  items-center">
            নোটিস বোর্ড
          </h1>
        </div>
        <div>
          <div className="grid  items-center text-xs lg:text-base ml-24 px-4">
            <div className="flex space-x-2">
              <BsBoxArrowInRight />
              <a href="">
                পরিবেশ অধিদপ্তর কর্তৃক বাস্তবায়নাধীন ২০২৪-২৫ সালের এডিপিভুক্ত
                চলমান প্রকল্প ও ২০২৩-২৪...
              </a>
            </div>
            <div className="flex space-x-2">
              <BsBoxArrowInRight />
              <a href="">দরপত্র বিজ্ঞপ্তি (ইসলামিক ফাউন্ডেশন) (০৪/০৮/২০২৪)</a>
            </div>
            <div className="flex space-x-2">
              <BsBoxArrowInRight />
              <a href="">দরপত্র বিজ্ঞপ্তি (ইসলামিক ফাউন্ডেশন) (০৪/০৮/২০২৪)</a>
            </div>
            <div className="flex space-x-2">
              <BsBoxArrowInRight />
              <a href="">চাকরি হতে অব্যাহতি প্রদান (১৮/০৭/২০২৪)</a>
            </div>
            <div className="flex space-x-2">
              <BsBoxArrowInRight />
              <a href="">উন্মুক্ত নিলাম বিজ্ঞপ্তি (১৯/১২/২০২৩)</a>
            </div>
            <div className="flex space-x-2">
              <BsBoxArrowInRight />
              <a href="">প্রথম শ্রেণির বদলী আদেশ (7/09/2023) </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
