import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  return (
    <div className="md:w-full sm:w-full mx-auto bg-[#683091]">
      <nav className="grid md:grid-flow-col justify-between  rounded-t-lg  px-2 py-2">
        <div className="flex items-center space-x-3">
          <h2 className="font-semibold text-xs lg:text-sm ml-3 text-center text-white">
            বাংলাদেশ জাতীয় তথ্য বাতায়ন
          </h2>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="অফিসের ধরণ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="w-55 pr-2">
                <SelectLabel>অফিসের ধরণ</SelectLabel>
                <SelectItem value="#">মন্ত্রণালয়/বিভাগ</SelectItem>
                <SelectItem value="#">অধিদপ্তর বাতায়ন</SelectItem>
                <SelectItem value="#">বিভাগীয় বাতায়ন</SelectItem>
                <SelectItem value="#">জেলা বাতায়ন</SelectItem>
                <SelectItem value="#">উপজেলা বাতায়ন</SelectItem>
                <SelectItem value="#">জেলা বাতায়ন</SelectItem>
                <SelectItem value="#">ইউনিয়ন বাতায়ন</SelectItem>
                <SelectItem value="#">অন্যান্য</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button className="bg-green-500 p-2 px-3 font-medium text-white rounded-xl ">
            Go
          </button>
        </div>
        <div className="flex space-x-5 md:mt-0 mt-5 mx-5">
          <input className="p-1 sm:mr-8  rounded-lg" type="text" />
          <button className="bg-green-500 font-medium ml-2 text-white mr-7 p-2 rounded-lg">
            Search
          </button>
          <button className="bg-red-500 p-2 font-medium text-white rounded-lg">
            English
          </button>
        </div>
      </nav>
    </div>
  );
}
