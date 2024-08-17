import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Photo() {
  return (
    <div className="mx-2 mb-2 rounded-lg bg-slate-100">
      <div>
        <h1 className="text-center p-3 rounded-lg mb-4 bg-red-400 font-semibold text-3xl">
          Updated information
        </h1>
        <div className="grid grid-flow-col gap-4">
          <div>
            <h1 className="bg-green-600 my-3 text-white font-bold text-2xl rounded px-2">
              Honorable Adviser
            </h1>
            <Card className="w-64 grid bg-white">
              <CardHeader floated={false}>
                <img
                  className="w-full h-52 p-2"
                  src="/src/components/Photo/advisser/head.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center text-black">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="my-2 text-lg underline cursor-pointer "
                >
                  Syeda Rizwana Hasan
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-semibold text-base px-2"
                  textGradient
                >
                  Honorable Adviser
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium p-2"
                  textGradient
                >
                  Ministry of Environment, Forest and Climate Change
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="flex justify-center">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center hover:bg-green-600 hover:text-white rounded-lg p-2 my-2 gap-2"
                  >
                    Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          {/* Secretary */}
          <div className="">
            <h1 className="bg-green-600 my-3 text-white font-bold text-2xl rounded px-2">
              Secretary
            </h1>
            <Card className="w-64 grid bg-white">
              <CardHeader floated={false}>
                <img
                  className="w-full h-52"
                  src="/src/components/Photo/advisser/Secretary.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center text-black">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="my-2 text-lg underline cursor-pointer "
                >
                  Dr. Farhina Ahmed
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-semibold text-base px-2"
                  textGradient
                >
                  Secretary
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium p-2"
                  textGradient
                >
                  Ministry of Environment, Forest and Climate Change
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="flex justify-center">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center hover:bg-green-600 hover:text-white rounded-lg p-2 my-2 gap-2"
                  >
                    Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
