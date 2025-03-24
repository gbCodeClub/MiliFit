import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { useState } from "react";

export default function FullRoutineDisplay({
  className,
  routine,
  displayLink = true,
}) {
  let [day, setDay] = useState(1);
  return (
    <Card className={cn("mt-6 self-stretch", className)}>
      <CardHeader>
        <CardTitle className="flex flex-row items-center">
          <Button
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={() => {
              if (day === 1) return;
              setDay(day - 1);
            }}
          >
            <GoTriangleLeft />
          </Button>
          <div className="inline grow px-3">{day}일차 운동 루틴</div>
          <Button
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={() => {
              if (day === routine.content.length) return;
              setDay(day + 1);
            }}
          >
            <GoTriangleRight />
          </Button>
        </CardTitle>
        <CardDescription>{routine.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          id="routine-suggestion"
          className="flex flex-col items-center self-stretch"
        >
          {routine.content[day - 1].map((item, index) => (
            <div
              className="my-4 self-stretch rounded-lg border p-4 shadow-md"
              key={index}
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p>
                {item.perSet}
                {item.set > 1 ? ", " + item.set + "세트" : null}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <p>⏱️예상 시간: {routine.content[day - 1].length * 8}분</p>
        {displayLink ? (
          <Link
            to="/excercisePlan"
            className="flex items-center gap-2 text-blue-500 underline hover:text-blue-700"
          >
            <FaExternalLinkAlt className="ml-1" /> 새 페이지에서 열기
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}
