import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

// an enum
const ExcerciseGoal = {
  UNDEFINED: {},
  PROMOTION: {
    description: "진급을 위해 체력을 기르고 싶어요",
    shortDescription: "진급",
    currentRank: undefined,
  },
  BULKUP: {
    description: "벌크업을 하고 싶어요",
    shortDescription: "벌크업",
    currentWeight: undefined,
    goalWeight: undefined,
  },
  DIET: {
    description: "다이어트를 하고 싶어요",
    shortDescription: "다이어트",
    currentWeight: undefined,
    goalWeight: undefined,
  },
};
Object.freeze(ExcerciseGoal); // this is a "shallow freeze"

function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

function Register() {
  const [slideNum, setSlideNum] = useState(0);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(ExcerciseGoal.UNDEFINED);
  const [pushUp, setPushUp] = useState("");
  const [sitUp, setSitUp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // slide 1
  const nameDialogue = (
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
  );
  async function handleNameChange(event) {
    setName(event.target.value);
    if (name.length === 3) {
      await sleep(0.5);
      setSlideNum(slideNum + 1);
    }
  }

  // slide 2
  const goalDialogue = (
    <>
      <label className="my-10 text-2xl font-bold">
        운동 목표가 어떻게 되시나요?
      </label>
      <div id="possibleGoals" className="flex flex-row justify-around">
        {Object.keys(ExcerciseGoal)
          .filter(
            (element) => ExcerciseGoal[element] !== ExcerciseGoal.UNDEFINED,
          )
          .map((element, index) => (
            <button
              key={index}
              className="mx-10 rounded border px-6 py-3 text-black"
              onClick={() => {
                updateGoal(ExcerciseGoal[element]);
              }}
            >
              {ExcerciseGoal[element].description}
            </button>
          ))}
      </div>
    </>
  );
  function updateGoal(goal) {
    setGoal(goal);
    setSlideNum(slideNum + 1);
  }

  // slide 3
  const additionalDialogue =
    goal === ExcerciseGoal.PROMOTION ? (
      <>
        <label className="my-10 text-2xl font-bold">
          "진급이라니 군인다운 멋진 목표네요! 현재 계급이 어떻게 되시나요?"
        </label>

        {["이병", "일병", "상병", "병장"].map((element, index) => (
          <button
            key={index}
            className="mx-10 rounded border px-6 py-3 text-black"
            onClick={() => {
              updateRank(element);
            }}
          >
            {element}
          </button>
        ))}
      </>
    ) : (
      <>
        <label className="my-10 text-2xl font-bold">
          "건강만큼 중요한게 없죠! 현재 몸무게와 목표 몸무게가 어떻게 되시나요?"
        </label>
        <label htmlFor="currentWeightInput">현재 몸무게</label>
        <div className="flex flex-row">
          <input
            id="currentWeightInput"
            className="h-20 w-60 rounded border text-center text-2xl"
            value={goal.currentWeight}
            onChange={(event) => {
              goal.currentWeight = event.target.value;
            }}
          />
          kg
        </div>

        <label htmlFor="goalWeightInput">목표 몸무게</label>
        <div className="flex flex-row">
          <input
            id="goalWeightInput"
            className="h-20 w-60 rounded border text-center text-2xl"
            value={goal.goalWeight}
            onChange={(event) => {
              goal.goalWeight = event.target.value;
            }}
          />
          kg
        </div>

        <button
          className="mx-10 rounded border px-6 py-3 text-black"
          onClick={() => {
            setSlideNum(slideNum + 1);
          }}
        >
          {goal.shortDescription} 하러 가기!
        </button>
      </>
    );
  function updateRank(rank) {
    goal.currentRank = rank;
    setSlideNum(slideNum + 1);
  }

  // slide 4
  const physicalAbilityDialogue = (
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
        className="mx-10 rounded border px-6 py-3 text-black"
        onClick={() => {
          setSlideNum(slideNum + 1);
        }}
      >
        나를 위한 맞춤 루틴 확인하기!
      </button>
    </>
  );

  // slide 5
  const routineDisplay = (
    <>
      <h2 className="text-2xl">{name}님 만을 위한 맞춤 루틴이에요!</h2>
      여기 들어갈 내용 생각해보기
      <button
        className="mx-10 rounded border px-6 py-3 text-black"
        onClick={() => {
          setSlideNum(slideNum + 1);
        }}
      >
        Milifit 시작하기!
      </button>
    </>
  );
  // slide 6
  const registerInfoPage = (
    <>
      <h2 className="text-2xl">
        이제 거의 다 왔어요! {name}님에 대해서 조금만 더 알려주세요.
      </h2>
      <div>
        <label htmlFor="disabledNameInput">이름</label>
        <input
          id="disabledNameInput"
          className="h-20 w-60 rounded border text-center text-2xl"
          value={name}
          disabled
        />
      </div>
      <div>
        <label htmlFor="emailInput">이메일</label>
        <input
          id="emailInput"
          type="email"
          className="h-20 w-60 rounded border text-center text-2xl"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="passwordInput">비밀번호</label>
        <input
          id="passwordInput"
          type="password"
          className="h-20 w-60 rounded border text-center text-2xl"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <Link
        to={"/"}
        className="bg-darkgreen mt-4 inline-block rounded-lg px-6 py-3 font-bold text-white transition hover:bg-blue-700"
      >
        가입하기
      </Link>
    </>
  );

  const slides = [
    nameDialogue,
    goalDialogue,
    additionalDialogue,
    physicalAbilityDialogue,
    routineDisplay,
    registerInfoPage,
  ];
  return (
    <div className="flex grow flex-col items-center justify-around">
      <div
        id="register-dialogue"
        className="flex grow flex-col items-center justify-center"
      >
        {slides[slideNum]}
      </div>
      <div id="register-navbar" className="flex-none py-3">
        진행상황 바 추가 예정
      </div>
    </div>
  );
}
