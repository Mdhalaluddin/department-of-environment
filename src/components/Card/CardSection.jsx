import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function CardSection() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-20">
        ​​What We Can Do For You
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <Card className="w-96  grid bg-green-800">
          <CardHeader floated={false} className="h-80">
            <img
              className=""
              src="/src/components/Card/card-img/6.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-white">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-4 underline cursor-pointer "
            >
              Emergency
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium p-2"
              textGradient
            >
              Report spills, fish kills, air pollution violations, underground
              tank leaks.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96 grid bg-green-800">
          <CardHeader floated={false} className="h-80">
            <img
              className=""
              src="/src/components/Card/card-img/5.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-white">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-4 underline cursor-pointer "
            >
              Recyclin​g
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium p-2"
              textGradient
            >
              Find out what programs are available to recycle, reuse, and
              reinvent.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96 grid bg-green-800">
          <CardHeader floated={false} className="h-80">
            <img
              className=""
              src="/src/components/Card/card-img/4.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-white">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-4 underline cursor-pointer "
            >
              Air Quality​
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium p-2"
              textGradient
            >
              Get the latest conditions, warnings​, watches, and health
              recommendations.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96 grid bg-green-800">
          <CardHeader floated={false} className="h-80">
            <img
              className=""
              src="/src/components/Card/card-img/2.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-white">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-4 underline cursor-pointer "
            >
              Community Calendar
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium p-2"
              textGradient
            >
              Find out about upcoming meetings and events in your neighborhood.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96 grid bg-green-800">
          <CardHeader floated={false} className="h-80">
            <img
              className=""
              src="/src/components/Card/card-img/1.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-white">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-4 underline cursor-pointer "
            >
              I​nv​oices​​
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium p-2"
              textGradient
            >
              Use our electronic portal to pay fees and charges by credit
              card.​​
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96 grid bg-green-800">
          <CardHeader floated={false} className="h-80">
            <img
              className=""
              src="/src/components/Card/card-img/3.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center text-white">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-4 underline cursor-pointer "
            >
              Search Permits​
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium p-2"
              textGradient
            >
              Find out the details of a nearby project or any project in the
              state.
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
