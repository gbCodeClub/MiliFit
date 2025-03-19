import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import fitnessPhoto from "/src/assets/fitness.jpg";
import { useContext } from "react";
import { UserContext } from "@/contexts";
import RoutineDisplay from "@/components/user/RoutineDisplay";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [username] = useContext(UserContext);
  if (username) {
    return <IndexLoggedIn username={username} />;
  }
  return <IndexNoLogin />;
}

function IndexNoLogin() {
  return (
    <div className="flex h-full flex-col items-center">
      <h2 className="py-2 text-center font-[Playfair_Display] text-3xl font-bold italic">
        Built for the army, fit for your body.
      </h2>

      <div
        id="milifit-introduction"
        className="my-5 flex flex-row items-center"
      >
        <p className="grow-1 py-2 text-center font-[Playfair_Display] text-3xl font-bold text-gray-700">
          군 생활 내내 함께하는 <br />
          당신만의 Personal Trainer, Milifit.
        </p>
        <img
          src={fitnessPhoto}
          alt="Fitness"
          className="my-4 w-1/2 grow-3 rounded-lg"
        />
      </div>
      <Accordion type="multiple" collapsible className="w-2/3">
        <AccordionItem value="item-1" className="border-gray-400">
          <AccordionTrigger className="text-2xl font-bold">
            기존 운동 앱과 뭐가 다른가요?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-black">
            Milifit은 <span className="font-bold">군인</span>을 위한, 그리고
            <span className="font-bold"> 당신만의 목표</span>를 위한 맞춤형 운동
            앱입니다.
            <ul className="list-disc pl-4">
              <li className="list-none">☑ 처음부터 군인을 대상으로 설계</li>
              <li className="list-none">
                ☑ 진급, 벌크업, 다이어트 등을 위한 맞춤 운동 루틴
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-400">
          <AccordionTrigger className="text-2xl font-bold">
            구체적으로 어떤 기능이 있나요?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-black">
            <ol className="ml-4 list-decimal pl-4">
              <li className="my-2">
                <span className="font-bold">목표</span>와{" "}
                <span className="font-bold">운동 능력</span>에 기반한{" "}
                <span className="font-bold">맞춤형 운동 계획</span>을
                세워줍니다.
                <ul className="list-disc pl-4">
                  <li className="my-0.7">
                    이때, 체단실 기구와 훈련 등의 일정을 고려합니다.
                  </li>
                </ul>
              </li>
              <li className="my-2">
                <span className="font-bold">국방부 식단과 연계</span>하여{" "}
                <span className="font-bold">식단 계획</span>을 세워줍니다.
              </li>
              <li className="my-2">
                <span className="font-bold">커뮤니티 기능</span>을 통해 친구를
                추가하고 추가적인 운동 조언을 얻을 수 있습니다.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="borde</AccordionContent>r-gray-400"
        >
          <AccordionTrigger className="text-2xl font-bold">
            유료인가요?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-black">
            <ul className="list-disc pl-4">
              <li className="my-1">
                <span className="font-bold">대부분</span>의 기능은{" "}
                <span className="font-bold">무료</span>입니다!
              </li>
              <li className="my-1">
                <span className="font-bold">월 9900원</span>에{" "}
                <span className="font-bold">
                  강력한 AI 운동 스케줄링 기능, AI 챗봇, 광고 제거
                </span>
                를 지원하는 멤버십을 가입할 수 있습니다.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
    <div id="index-logged-in">
      <h2 className="py-2 text-center font-[Playfair_Display] text-3xl font-bold italic">
        {username}님, 반갑습니다! 오늘의 운동 루틴을 알려드릴게요.
      </h2>
      <RoutineDisplay />
      <button
        onClick={() => window.print()}
        className="bg-darkgreen mt-4 inline-block rounded-lg px-6 py-3 font-bold text-white transition hover:opacity-[0.9]"
      >
        운동 루틴 인쇄하기
      </button>
    </div>
  );
}
