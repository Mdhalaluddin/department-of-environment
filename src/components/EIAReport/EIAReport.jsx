import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["বিভাগের নাম", "সামাজিক যোগাযোগ", "তথ্য বাতায়ন"];
const TABLE_ROWS = [
  {
    division: "ঢাকা",
    distic:
      "ঢাকা অঞ্চল / ঢাকা মহানগর / ঢাকা গবেষণাগার / ঢাকা জেলা / নারায়ণগঞ্জ / নরসিংদী / টাঙ্গাইল / মুন্সীগঞ্জ / গাজীপুর /  ফরিদপুর / মানিকগঞ্জ / কিশোরগঞ্জ / গোপালগঞ্জ / শরীয়তপুর",
    upazila:
      "ঢাকা অঞ্চল / ঢাকা মহানগর / ঢাকা গবেষণাগার / ঢাকা জেলা / নারায়ণগঞ্জ / নরসিংদী / টাঙ্গাইল / মুন্সীগঞ্জ / গাজীপুর / ফরিদপুর / মানিকগঞ্জ / কিশোরগঞ্জ / গোপালগঞ্জ / শরীয়তপুর",
  },
  {
    division: "চট্টগ্রাম ",
    distic:
      "চট্টগ্রাম অঞ্চল / চট্টগ্রাম মহানগর / চট্টগ্রাম জেলা / চট্টগ্রাম গবেষণাগার / কুমিল্লা / চাঁদপুর / ব্রাহ্মণবাড়িয়া / নোয়াখালী/ ফেনী / কক্সবাজার / বান্দরবান / লক্ষিপুর ",
    upazila:
      "চট্টগ্রাম অঞ্চল / চট্টগ্রাম মহানগর / চট্টগ্রাম জেলা / চট্টগ্রাম গবেষণাগার / কুমিল্লা / চাঁদপুর / ব্রাহ্মণবাড়িয়া / নোয়াখালী /ফেনী / কক্সবাজার / বান্দরবান / লক্ষিপুর",
  },
  {
    division: "রাজশাহী ",
    distic:
      "রাজশাহী বিভাগ (বগুড়া) / রাজশাহী জেলা / পাবনা / নওগাঁ / সিরাজগঞ্জ / বগুড়া জেলা / জয়পুরহাট / চাপাইনবাবগঞ্জ / নাটোর",
    upazila:
      "রাজশাহী বিভাগ (বগুড়া) / রাজশাহী জেলা / পাবনা / নওগাঁ / সিরাজগঞ্জ / বগুড়া জেলা  / জয়পুরহাট / চাপাইনবাবগঞ্জ / নাটোর",
  },
  {
    division: "খুলনা",
    distic:
      "খুলনা বিভাগ / খুলনা জেলা / যশোর / বাগেরহাট / কুষ্টিয়া / সাতক্ষীরা / ঝিনাইদহ / নড়াইল ",
    upazila:
      "খুলনা / খুলনা জেলা / যশোর / বাগেরহাট / কুষ্টিয়া / সাতক্ষীরা / ঝিনাইদহ / নড়াইল  ",
  },
  {
    division: "ময়মনসিংহ",
    distic: "ময়মনসিংহ বিভাগ / ময়মনসিংহ জেলা / নেত্রকোনা / শেরপুর / জামালপুর",
    upazila:
      " / শেরপুর / জামালপুর	ময়মনসিংহ বিভাগ / ময়মনসিংহ জেলা / নেত্রকোনা / শেরপুর / জামালপুর",
  },
  {
    division: "বরিশাল",
    distic: "বরিশাল বিভাগ / বরিশাল জেলা / পটুয়াখালি / ভোলা",
    upazila: "বরিশাল বিভাগ / বরিশাল জেলা / পটুয়াখালি / ভোলা",
  },
  {
    division: "সিলেট",
    distic: "সিলেট বিভাগ / সিলেট জেলা / মৌলভীবাজার / হবিগঞ্জ",
    upazila: "সিলেট বিভাগ / সিলেট জেলা / মৌলভীবাজার / হবিগঞ্জ",
  },
  {
    division: "রংপুর ",
    distic:
      "রংপুর বিভাগ / রংপুর জেলা / কুড়িগ্রাম / পঞ্চগড় / দিনাজপুর / নীলফামারী",
    upazila:
      "রংপুর বিভাগ / রংপুর জেলা / কুড়িগ্রাম / পঞ্চগড় / দিনাজপুর / নীলফামারী",
  },
];

export default function EIAReport() {
  return (
    <div className="px-5">
      <h2 className="text-3xl text-center text-white p-2 rounded-md bg-green-600">
        DoE in National portal and Social Media
      </h2>
      <Card className="h-full p-5 w-full overflow-scroll">
        <table className="w-full border border-blue-gray-100 min-w-max table-auto text-left">
          <thead className="">
            <tr className="">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ division, distic, upazila }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border border-blue-gray-50";

              return (
                <tr key={division}>
                  <td
                    className={`{classes} border border-blue-gray-100 p-2 w-28`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {division}
                    </Typography>
                  </td>
                  <td className={`${classes} p-2  w-96 bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {distic}
                    </Typography>
                  </td>
                  <td
                    className={`{classes} border p-2 border-blue-gray-100 w-80`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {upazila}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
