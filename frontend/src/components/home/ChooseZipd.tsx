import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ChooseZipd = () => {
    return (
      <div className=" mt-28 ml-8">
        <h2 className="scroll-m-20 pb-5 text-2xl font-semibold tracking-tight">
          Why Choose Zipd instead of urls.zip or duub.co?
        </h2>
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 mr-5">
          <Card className=" w-80">
            <CardHeader>
              <CardTitle> Effortless Simplicity:</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Zipd offers an intuitive and user-friendly interface, making
                link shortening a breeze. With minimal steps, you can transform
                long URLs into short, manageable links in seconds.
              </p>
            </CardContent>
          </Card>
          <Card className=" w-80">
            <CardHeader>
              <CardTitle>Superior Speed:</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Zipd is designed for speed and efficiency. Our optimized
                platform ensures that your links are shortened and ready to
                share almost instantly, saving you valuable time.
              </p>
            </CardContent>
          </Card>
          <Card className=" w-80">
            <CardHeader>
              <CardTitle>Advanced Analytics:</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Get more out of your links with Zipd's comprehensive analytics
                dashboard. Track click-through rates, geographical data, and
                more to gain insights into your audience's behavior.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
};

export default ChooseZipd;