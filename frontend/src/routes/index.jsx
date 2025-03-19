import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useContext } from "react";
import { UserContext } from "@/contexts";
import RoutineDisplay from "@/components/user/RoutineDisplay";
import { Button } from "@/components/ui/button";

import { About } from "./about";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [username] = useContext(UserContext);
  if (username) {
    return <IndexLoggedIn username={username} />;
  }
  return (
    <div className="flex h-full flex-col items-center">
      <About />
      <Link
        to={"/register"}
        className="bg-darkgreen mt-4 inline-block rounded-lg px-6 py-3 font-bold text-white transition hover:opacity-[0.9]"
      >
        시작하기
      </Link>
    </div>
  );
}

function IndexLoggedIn({ username }) {
  return (
    <div id="index-logged-in" className="flex flex-col items-center">
      <h2 className="py-2 text-center font-[Playfair_Display] text-3xl font-bold italic">
        {username}님, 반갑습니다!
      </h2>
      <div
        id="today-info-display"
        className="flex w-2/3 flex-row justify-center gap-10"
      >
        <div
          id="index-routine-display"
          className="flex w-2/3 flex-col items-center"
        >
          <h2 className="py-2 text-center font-[Playfair_Display] text-3xl font-bold italic">
            오늘의 운동 루틴을 알려드릴게요.
          </h2>
          <Card className="mt-6 self-stretch">
            <CardHeader>
              <CardTitle>3/19 운동 루틴</CardTitle>
              <CardDescription>스트렝스를 키우는 전신 운동</CardDescription>
            </CardHeader>
            <CardContent>
              <RoutineDisplay />
            </CardContent>
            <CardFooter>
              <p>이 식단 정보는 국방 공공데이터를 통해 얻었습니다.</p>
            </CardFooter>
          </Card>
        </div>
        <div
          id="index-meal-display"
          className="flex w-2/3 flex-col items-center"
        >
          <h2 className="py-2 text-center font-[Playfair_Display] text-3xl font-bold italic">
            오늘의 점심 메뉴와 식단이에요.
          </h2>
          <Card className="mt-6 self-stretch">
            <CardHeader>
              <CardTitle>3/19 점심</CardTitle>
              <CardDescription>9사단 정보대대</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                id="routine-suggestion"
                className="flex flex-col items-center self-stretch"
              >
                <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
                  <h3 className="text-xl font-bold">김치볶음밥</h3>
                  <p>100kcal</p>
                </div>
                <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
                  <h3 className="text-xl font-bold">양갈비</h3>
                  <p>0kcal</p>
                </div>
                <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
                  <h3 className="text-xl font-bold">마늘빵</h3>
                  <p>-3kcal</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p>이 식단 정보는 국방 공공데이터를 통해 얻었습니다.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Button
        onClick={() => window.print()}
        className="my-6 px-8 py-6 text-lg font-bold"
      >
        인쇄하기
      </Button>
    </div>
  );
}
