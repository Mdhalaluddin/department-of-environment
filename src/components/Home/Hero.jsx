export default function Hero() {
  return (
    <>
      <div className="rounded-lg bg-cover sm:mb-10">
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/XbK0fVp/download.jpg"
            alt="image 1"
            className="max-h-96 w-full bg-no-repeat"
          />
          <div className="absolute inset-0 grid place-items-center bg-black/75">
            <div className="px-5 w-full">
              <div className="flex items-center">
                <img
                  className="w-3/12 "
                  src="https://i.ibb.co/QHNRxf8/download-removebg-preview.png"
                  alt=""
                />
                <div>
                  <h2 className="font-bold text-xl mt-8 text-white drop-shadow-md lg:text-3xl ">
                    Department of Environment
                  </h2>
                  <h2 className="font-medium text-white text-sm pt-2 lg:text-2xl">
                    Government of the People's Republic of Bangladesh
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lg:hidden rounded-b-lg">
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
      </div> */}
      {/*  */}
    </>
  );
}
