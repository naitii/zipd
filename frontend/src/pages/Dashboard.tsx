import Chart from "@/components/Dashboard/Chart";
import TopLinks from "@/components/Dashboard/TopLinks";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Link, MousePointerClickIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <>
    <Header/>
    <Card className="mt-20 ml-4 mr-4">
      <h1
        className=" font-semibold text-3xl mt-8
        ml-4"
      >
        Dashboard
      </h1>
      <div className="flex flex-wrap justify-between gap-3 mt-8 ml-8">
        <Card className=" w-[250px]">
          <CardHeader className="flex flex-row gap-5 items-center justify-between">
            <h2 className="font-semibold">Total Links</h2>
            <Link className="w-4 h-4 " />
          </CardHeader>
          <CardContent>
            <p className=" p-3 text-3xl font-semibold">3</p>
          </CardContent>
        </Card>
        <Card className=" w-[250px]">
          <CardHeader className="flex flex-row gap-5 items-center justify-between ">
            <h2 className="font-semibold">Total Clicks</h2>
            <MousePointerClickIcon className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <p className=" p-3 text-3xl font-semibold">30</p>
          </CardContent>
        </Card>
        <Card className=" w-[250px]">
          <CardHeader className="flex flex-row gap-5 items-center justify-between ">
            <h2 className="font-semibold">Active Now</h2>
            <Check className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <p className=" p-3 text-3xl font-semibold">3</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-wrap "> 
      <Card className="mt-4 ml-4 w-[500px] overflow-visible">
        <Chart/>
      </Card>
    
        <Card className="mt-4 ml-4 w-[500px]">
            <TopLinks/>
        </Card>
      </div>
      
    </Card>
    </>
  );
};

export default Dashboard;
