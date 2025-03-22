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

export default function RoutineDisplay({ className, displayLink = true }) {
  return (
    <Card className={cn("mt-6 self-stretch", className)}>
      <CardHeader>
        <CardTitle>3/19 운동 루틴</CardTitle>
        <CardDescription>스트렝스를 키우는 전신 운동</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          id="routine-suggestion"
          className="flex flex-col items-center self-stretch"
        >
          <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
            <h3 className="text-xl font-bold">턱걸이</h3>
            <p>3세트, 8-12회</p>
          </div>
          <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
            <h3 className="text-xl font-bold">스쿼트</h3>
            <p>4세트, 10-15회, 50kg</p>
          </div>
          <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
            <h3 className="text-xl font-bold">벤치 프레스</h3>
            <p>4세트, 8-12회, 40kg</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <p>⏱️예상 시간: 20분</p>
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
