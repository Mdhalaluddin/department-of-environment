export default function Hero() {
  return (
    <div className="rounded-b-lg">
      <div className="flex items-center bg-slate-100">
        <img
          className="w-3/12 "
          src="/src/components/cover/download-removebg-preview.png"
          alt=""
        />
        <div>
          <h2 className="font-bold text-xl mt-8 drop-shadow-md lg:text-3xl ">
            পরিবেশ অধিদপ্তর
          </h2>
          <h2 className="font-medium text-xl lg:text-2xl">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
          </h2>
        </div>
      </div>
    </div>
  );
}
