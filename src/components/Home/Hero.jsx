export default function Hero() {
  return (
    <>
      <div className="rounded-b-lg">
        <div className="flex items-center bg-slate-100">
          <img
            className="w-3/12 "
            src="/src/components/cover/download-removebg-preview.png"
            alt=""
          />
          <div>
            <h2 className="font-bold text-xl mt-8 drop-shadow-md lg:text-3xl ">
              Department of Environment
            </h2>
            <h2 className="font-medium text-xl pt-2 lg:text-2xl">
              Government of the People's Republic of Bangladesh
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
