"use client";
import React, { useState, useEffect } from "react";
import { NewsAlerts } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "@/lib/lottie/2.json";
// import { unstable_noStore } from "next/cache";

function Cards() {
  // for api purposes
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Data fetching began");
      try {
        const response = await fetch("http://localHost:3001/get");
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  });

  if (loading) {
    return (
      <div>
        <div>
          <Player autoplay loop src={animation} className="w-[320px]"></Player>
        </div>
        <div className="text-center">Loading .....</div>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-col md:grid-col lg:grid-cols-3 gap-10">
      {NewsAlerts.map((item) => (
        <div key={item.id}>
          <Card className="w-[350px] shadow-lg border-solid ">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid items-end justify-center grid-cols gap-7">
                <p>{item.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button>Source</Button>
              <Label>
                {item.alert ? (
                  <p className="text-red-800 font-Poppins font-bold">Alert</p>
                ) : null}
              </Label>
              <Label>Bias rating: {item.bias}</Label>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
