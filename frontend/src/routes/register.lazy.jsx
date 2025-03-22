import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExcerciseGoal, initializeGoalDetails } from "../utils/goalData";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import RoutineDisplay from "@/components/user/RoutineDisplay";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

function Register() {
  const [slideNum, setSlideNum] = useState(0);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState();
  const [goalDetails, setGoalDetails] = useState();
  const [pushUp, setPushUp] = useState("");
  const [sitUp, setSitUp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // utility functions
  function goToNextSlide() {
    setSlideNum(slideNum + 1);
  }

  function updateGoal(goal) {
    setGoal(goal);
    setGoalDetails(initializeGoalDetails(goal));
  }

  async function handleNameChange(event) {
    setName(event.target.value);

    var korean_pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (name.length === 3 && korean_pattern.test(event.target.value)) {
      await sleep(0.5);
      goToNextSlide();
    }
  }

  return (
    <div className="flex grow flex-col items-center justify-around">
      <div
        id="register-dialogue"
        className="flex grow flex-col items-center justify-center"
      >
        {slideNum === 0 && (
          <>
            <label htmlFor="nameInput" className="my-10 text-3xl font-bold">
              같이 운동하게 돼서 너무 좋아요! 이름이 어떻게 되시나요?
            </label>
            <Input
              id="nameInput"
              className="border-darkgreen h-20 w-60 rounded border-2 text-center !text-2xl tracking-widest"
              value={name}
              onChange={handleNameChange}
            />
          </>
        )}
        {slideNum === 1 && (
          <>
            <label className="my-10 text-3xl font-bold">
              운동 목표가 어떻게 되시나요?
            </label>
            <div id="possibleGoals" className="flex flex-row justify-around">
              {Object.keys(ExcerciseGoal).map((element, index) => (
                <Button
                  key={index}
                  className="mx-10 mt-3 px-8 py-6 text-xl"
                  onClick={() => {
                    updateGoal(ExcerciseGoal[element]);
                    goToNextSlide();
                  }}
                >
                  {ExcerciseGoal[element].description}
                </Button>
              ))}
            </div>
          </>
        )}
        {slideNum === 2 &&
          (goal === ExcerciseGoal.PROMOTION ? (
            <>
              <label className="my-10 text-3xl font-bold">
                진급이라니 군인다운 멋진 목표네요! 현재 계급이 어떻게 되시나요?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {["이병", "일병", "상병", "병장"].map((element, index) => (
                  <Button
                    key={index}
                    className="mx-10 px-8 py-6 text-xl"
                    onClick={() => {
                      setGoalDetails({ ...goalDetails, currentRank: element });
                      goToNextSlide();
                    }}
                  >
                    {element}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <>
              <label className="my-10 text-3xl font-bold">
                건강만큼 중요한게 없죠! 현재 몸무게와 목표 몸무게가 어떻게
                되시나요?
              </label>
              <div
                id="weight-info"
                className="my-4 flex flex-row justify-center self-stretch"
              >
                <div
                  id="weight-labels"
                  className="mr-4 flex flex-col content-center gap-3"
                >
                  <label
                    htmlFor="currentWeightInput"
                    className="flex grow items-center justify-center text-xl"
                  >
                    현재 몸무게
                  </label>
                  <label
                    htmlFor="goalWeightInput"
                    className="flex grow items-center justify-center text-xl"
                  >
                    목표 몸무게
                  </label>
                </div>
                <div
                  id="weight-inputs"
                  className="flex flex-col content-center gap-3"
                >
                  <Input
                    id="currentWeightInput"
                    className="border-darkgreen h-20 w-60 rounded border-2 text-center !text-2xl"
                    value={goalDetails.currentWeight}
                    onChange={(event) => {
                      setGoalDetails({
                        ...goalDetails,
                        currentWeight: event.target.value,
                      });
                    }}
                  />
                  <Input
                    id="goalWeightInput"
                    className="border-darkgreen h-20 w-60 rounded border-2 text-center !text-2xl"
                    value={goalDetails.goalWeight}
                    onChange={(event) => {
                      setGoalDetails({
                        ...goalDetails,
                        goalWeight: event.target.value,
                      });
                    }}
                  />
                </div>
                <div
                  id="weight-labels-after"
                  className="ml-4 flex flex-col content-center gap-3"
                >
                  <label
                    htmlFor="pushUpInput"
                    className="flex grow items-center justify-center text-xl"
                  >
                    kg
                  </label>
                  <label
                    htmlFor="sitUpInput"
                    className="flex grow items-center justify-center text-xl"
                  >
                    kg
                  </label>
                </div>
              </div>
              <Button
                className="mx-10 my-5 px-8 py-6 text-xl"
                onClick={() => {
                  goToNextSlide();
                }}
              >
                {goal.shortDescription} 하러 가기!
              </Button>
            </>
          ))}
        {slideNum === 3 && (
          <>
            <label className="my-10 text-3xl font-bold">
              체력측정 결과를 알려주세요.
            </label>
            <div id="stamina-info" className="my-4 flex flex-row self-stretch">
              <div
                id="stamina-labels"
                className="mr-4 flex grow-1 flex-col content-center gap-3"
              >
                <label
                  htmlFor="pushUpInput"
                  className="flex grow items-center justify-center text-xl"
                >
                  팔굽혀펴기
                </label>
                <label
                  htmlFor="sitUpInput"
                  className="flex grow items-center justify-center text-xl"
                >
                  윗몸 일으키기
                </label>
              </div>
              <div
                id="stamina-inputs"
                className="flex grow-2 flex-col content-center gap-3"
              >
                <div className="flex flex-row self-stretch">
                  <Input
                    id="pushUpInput"
                    className="border-darkgreen h-20 w-60 rounded border-2 text-center !text-2xl"
                    value={pushUp}
                    onChange={(event) => {
                      setPushUp(event.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row self-stretch">
                  <Input
                    id="sitUpInput"
                    className="border-darkgreen h-20 w-60 rounded border-2 text-center !text-2xl"
                    value={sitUp}
                    onChange={(event) => {
                      setSitUp(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                id="stamina-labels-after"
                className="flex grow-1 flex-col content-center gap-3"
              >
                <label
                  htmlFor="pushUpInput"
                  className="flex grow items-center justify-center text-xl"
                >
                  개
                </label>
                <label
                  htmlFor="sitUpInput"
                  className="flex grow items-center justify-center text-xl"
                >
                  개
                </label>
              </div>
            </div>

            <Button
              className="mx-10 my-5 px-8 py-6 text-xl"
              onClick={() => {
                goToNextSlide();
              }}
            >
              나를 위한 맞춤 루틴 확인하기!
            </Button>
          </>
        )}
        {slideNum === 4 && (
          <div id="slide-5" className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">
              {name}님을 위한 맞춤 루틴이에요!
            </h2>
            <RoutineDisplay displayLink={false} />
            <Button
              className="mx-10 my-6 px-8 py-6 text-xl"
              onClick={() => {
                goToNextSlide();
              }}
            >
              Milifit 시작하기!
            </Button>
          </div>
        )}
        {slideNum === 5 && (
          <div id="slide-6" className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">
              이제 거의 다 왔어요! {name}님에 대해서 조금만 더 알려주세요.
            </h2>
            <div
              id="final-register-info"
              className="mt-8 flex flex-row self-stretch"
            >
              <div
                id="register-labels"
                className="flex grow-1 flex-col content-center gap-3 text-lg"
              >
                <label
                  htmlFor="emailInput"
                  className="flex grow items-center justify-center"
                >
                  이메일
                </label>
                <label
                  htmlFor="passwordInput"
                  className="flex grow items-center justify-center"
                >
                  비밀번호
                </label>
              </div>
              <div
                id="register-inputs"
                className="flex grow-2 flex-col content-center gap-3"
              >
                <Input
                  id="emailInput"
                  type="email"
                  className="border-darkgreen h-20 self-stretch rounded border-2 text-center !text-2xl"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <Input
                  id="passwordInput"
                  type="password"
                  className="border-darkgreen h-20 self-stretch rounded border-2 text-center !text-2xl"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-darkgreen mt-4 w-40 rounded-lg px-8 py-4 text-center text-xl font-bold text-white transition hover:opacity-[0.9]"
            >
              가입하기
            </Link>
          </div>
        )}
      </div>
      <div id="register-navbar" className="flex flex-row py-3">
        {[...Array(6).keys()].map((element, index) => (
          <div
            key={index}
            className={`mx-1 h-4 w-4 rounded-full ${
              slideNum >= element ? "bg-darkgreen" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => setSlideNum(element)}
          ></div>
        ))}
      </div>
    </div>
  );
}
