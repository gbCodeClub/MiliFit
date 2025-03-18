import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExcerciseGoal, initializeGoalDetails } from "../utils/goalData";

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
    if (name.length === 3) {
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
            <label htmlFor="nameInput" className="my-10 text-2xl font-bold">
              같이 운동하게 돼서 너무 좋아요! 이름이 어떻게 되시나요?
            </label>
            <input
              id="nameInput"
              className="h-20 w-60 rounded border text-center text-2xl tracking-widest"
              value={name}
              onChange={handleNameChange}
            />
          </>
        )}
        {slideNum === 1 && (
          <>
            <label className="my-10 text-2xl font-bold">
              운동 목표가 어떻게 되시나요?
            </label>
            <div id="possibleGoals" className="flex flex-row justify-around">
              {Object.keys(ExcerciseGoal).map((element, index) => (
                <button
                  key={index}
                  className="mx-10 rounded border px-6 py-3 text-black"
                  onClick={() => {
                    updateGoal(ExcerciseGoal[element]);
                    goToNextSlide();
                  }}
                >
                  {ExcerciseGoal[element].description}
                </button>
              ))}
            </div>
          </>
        )}
        {slideNum === 2 &&
          (goal === ExcerciseGoal.PROMOTION ? (
            <>
              <label className="my-10 text-2xl font-bold">
                "진급이라니 군인다운 멋진 목표네요! 현재 계급이 어떻게
                되시나요?"
              </label>
              <div className="grid grid-cols-2 gap-4">
                {["이병", "일병", "상병", "병장"].map((element, index) => (
                  <button
                    key={index}
                    className="mx-10 rounded border px-6 py-3 text-black"
                    onClick={() => {
                      setGoalDetails({ ...goalDetails, currentRank: element });
                      goToNextSlide();
                    }}
                  >
                    {element}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <label className="my-10 text-2xl font-bold">
                "건강만큼 중요한게 없죠! 현재 몸무게와 목표 몸무게가 어떻게
                되시나요?"
              </label>
              <label htmlFor="currentWeightInput">현재 몸무게</label>
              <div className="flex flex-row">
                <input
                  id="currentWeightInput"
                  className="h-20 w-60 rounded border text-center text-2xl"
                  value={goalDetails.currentWeight}
                  onChange={(event) => {
                    setGoalDetails({
                      ...goalDetails,
                      currentWeight: event.target.value,
                    });
                  }}
                />
                kg
              </div>

              <label htmlFor="goalWeightInput">목표 몸무게</label>
              <div className="flex flex-row">
                <input
                  id="goalWeightInput"
                  className="h-20 w-60 rounded border text-center text-2xl"
                  value={goalDetails.goalWeight}
                  onChange={(event) => {
                    setGoalDetails({
                      ...goalDetails,
                      goalWeight: event.target.value,
                    });
                  }}
                />
                kg
              </div>

              <button
                className="mx-10 rounded border px-6 py-3 text-black"
                onClick={() => {
                  goToNextSlide();
                }}
              >
                {goal.shortDescription} 하러 가기!
              </button>
            </>
          ))}
        {slideNum === 3 && (
          <>
            <label className="my-10 text-2xl font-bold">
              체력측정 결과를 알려주세요.
            </label>

            <label htmlFor="pushUpInput">팔굽혀펴기</label>
            <div className="flex flex-row">
              <input
                id="pushUpInput"
                className="h-20 w-60 rounded border text-center text-2xl"
                value={pushUp}
                onChange={(event) => {
                  setPushUp(event.target.value);
                }}
              />
              개
            </div>

            <label htmlFor="sitUpInput">윗몸 일으키기</label>
            <div className="flex flex-row">
              <input
                id="sitUpInput"
                className="h-20 w-60 rounded border text-center text-2xl"
                value={sitUp}
                onChange={(event) => {
                  setSitUp(event.target.value);
                }}
              />
              개
            </div>

            <button
              className="mx-10 my-5 rounded border px-6 py-3 text-black"
              onClick={() => {
                goToNextSlide();
              }}
            >
              나를 위한 맞춤 루틴 확인하기!
            </button>
          </>
        )}
        {slideNum === 4 && (
          <div id="slide-5" className="flex flex-col items-center">
            <h2 className="text-2xl">{name}님 만을 위한 맞춤 루틴이에요!</h2>
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
            <button
              className="mx-10 rounded border px-6 py-3 text-black"
              onClick={() => {
                goToNextSlide();
              }}
            >
              Milifit 시작하기!
            </button>
          </div>
        )}
        {slideNum === 5 && (
          <div id="slide-6" className="flex flex-col items-center">
            <h2 className="text-2xl">
              이제 거의 다 왔어요! {name}님에 대해서 조금만 더 알려주세요.
            </h2>
            <div
              id="final-register-info"
              className="my-4 flex flex-row self-stretch"
            >
              <div
                id="register-labels"
                className="flex grow-1 flex-col content-center gap-3"
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
                <input
                  id="emailInput"
                  type="email"
                  className="h-20 self-stretch rounded border text-center text-2xl"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <input
                  id="passwordInput"
                  type="password"
                  className="h-20 self-stretch rounded border text-center text-2xl"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-darkgreen mt-4 w-40 rounded-lg px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700"
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
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
