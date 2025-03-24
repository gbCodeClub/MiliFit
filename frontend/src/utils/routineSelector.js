import { ExcerciseGoal } from "./goalData";

export default function routineSelector(goal, proficiency, daysPerWeek = 6) {
  let routine;
  let description;
  if (goal === ExcerciseGoal.PROMOTION) {
    routine = promotionRoutine(proficiency);
    description =
      "맨몸운동에 집중하여 진급 요건인 팔굽혀펴기, 윗몸일으키기, 달리기를 대비하는 루틴";
  } else if (goal === ExcerciseGoal.BULKUP) {
    routine = bulkupRoutine(proficiency);
    description = "벌크업을 위한 웨이트트레이닝에 특화된 루틴";
  } else if (goal === ExcerciseGoal.DIET) {
    routine = dietRoutine(proficiency);
    description = "다이어트를 위한 칼로리 소모에 특화된 루틴";
  }

  let adjustedRoutine = adjustRoutine(routine, daysPerWeek);
  return {
    description,
    content: adjustedRoutine,
  };
}

function adjustRoutine(fullRoutine, daysPerWeek) {
  const totalDays = fullRoutine.length;
  if (daysPerWeek >= totalDays) return fullRoutine;

  let reducePlan;
  if (daysPerWeek === 2) {
    reducePlan = [
      [1, 2, 3],
      [4, 5, 6],
    ];
  } else if (daysPerWeek === 3) {
    reducePlan = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
  } else if (daysPerWeek === 4) {
    reducePlan = [[1], [2], [3, 4], [5, 6]];
  } else {
    reducePlan = [[1], [2], [3], [4], [5, 6]];
  }

  let reducedRoutine = [];
  for (let arrIdx in reducePlan) {
    let dayRoutine = [];
    for (let idx in reducePlan[arrIdx]) {
      dayRoutine.push(...fullRoutine[reducePlan[arrIdx][idx] - 1]);
    }
    reducedRoutine.push(dayRoutine);
  }

  // just select 3 (index 0, 1, 3) or 4 (index 0,1,3,4) from merged days
  for (let i = 0; i < daysPerWeek; ++i) {
    if (reducedRoutine[i].length > 3) {
      if (daysPerWeek > 3) {
        reducedRoutine[i] = [
          reducedRoutine[i][0],
          reducedRoutine[i][1],
          reducedRoutine[i][3],
        ];
      } else {
        reducedRoutine[i] = [
          reducedRoutine[i][0],
          reducedRoutine[i][1],
          reducedRoutine[i][3],
          reducedRoutine[i][4],
        ];
      }
    }
  }
  console.log(reducedRoutine);
  return reducedRoutine;
}

function promotionRoutine(proficiency) {
  return [
    [
      customizedItem("팔굽혀펴기", [4, 5, 6], [20, 25, 30], proficiency),
      customizedItem("클로즈그립 푸쉬업", [3, 4, 5], [15, 20, 25], proficiency),
      customizedItem("딥스", [3, 4, 5], [10, 12, 15], proficiency),
    ],
    [
      routineItem("가볍게 걷기 + 동적 스트레칭", 1, "5분"),
      customizedItem(
        "3km 페이스 런",
        [1, 1, 1],
        ["느린 페이스", "중간 페이스", "목표 페이스"],
        proficiency,
      ),
      routineItem("천천히 걷기 + 정적 스트레칭", 1, "5분"),
    ],
    [
      customizedItem("윗몸 일으키기", [4, 5, 6], [20, 25, 30], proficiency),
      customizedItem("러시안 트위스트", [3, 4, 5], [15, 20, 25], proficiency),
      customizedItem("레그 레이즈", [3, 4, 5], [15, 20, 25], proficiency),
    ],
    [
      routineItem("가볍게 걷기 + 동적 스트레칭", 1, "5분"),
      customizedItem(
        "인터벌 러닝",
        [4, 5, 6],
        [
          "1분 빠르게 달리고 2분 걷기",
          "1분 30초 빠르게 달리고 1분 30초 걷기",
          "2분 빠르게 달리고 1분 걷기",
        ],
        proficiency,
      ),
      routineItem("천천히 걷기 + 정적 스트레칭", 1, "5분"),
    ],
    [
      customizedItem("스쿼트", [3, 4, 5], [20, 25, 30], proficiency),
      customizedItem("런지", [3, 4, 5], [10, 12, 15], proficiency),
      customizedItem(
        "브릿지",
        [3, 3, 4],
        ["20초", "30초", "40초"],
        proficiency,
      ),
    ],
    [
      routineItem("가볍게 걷기 + 동적 스트레칭", 1, "5분"),
      customizedItem(
        "3km 페이스 런",
        [1, 1, 1],
        ["중간 페이스", "빠른 페이스", "목표 페이스"],
        proficiency,
      ),
      routineItem("천천히 걷기 + 정적 스트레칭", 1, "5분"),
    ],
  ];
}

function bulkupRoutine(proficiency) {
  return [
    [
      customizedItem(
        "벤치 프레스",
        [4, 5, 6],
        ["40kg x 8", "50kg x 10", "60kg x 12"],
        proficiency,
      ),
      customizedItem("딥스", [3, 4, 5], [8, 10, 12], proficiency),
      customizedItem("푸쉬업", [3, 4, 5], [12, 15, 20], proficiency),
    ],
    [
      customizedItem(
        "데드리프트",
        [4, 5, 6],
        ["60kg x 6", "80kg x 8", "100kg x 10"],
        proficiency,
      ),
      customizedItem("턱걸이", [3, 4, 5], [5, 8, 10], proficiency),
      customizedItem(
        "바벨 로우",
        [3, 4, 5],
        ["40kg x 8", "50kg x 10", "60kg x 12"],
        proficiency,
      ),
    ],
    [
      customizedItem(
        "스쿼트",
        [4, 5, 6],
        ["60kg x 8", "80kg x 10", "100kg x 12"],
        proficiency,
      ),
      customizedItem(
        "레그 프레스",
        [4, 5, 6],
        ["100kg x 10", "120kg x 12", "140kg x 15"],
        proficiency,
      ),
      customizedItem("카프 레이즈", [4, 5, 6], [12, 15, 20], proficiency),
    ],
    [
      customizedItem(
        "숄더 프레스",
        [4, 5, 6],
        ["20kg x 8", "30kg x 10", "40kg x 12"],
        proficiency,
      ),
      customizedItem(
        "사이드 레터럴 레이즈",
        [3, 4, 5],
        ["5kg x 10", "7.5kg x 12", "10kg x 15"],
        proficiency,
      ),
      customizedItem(
        "리어 델트 플라이",
        [3, 4, 5],
        ["5kg x 10", "7.5kg x 12", "10kg x 15"],
        proficiency,
      ),
    ],
    [
      customizedItem(
        "이두 컬",
        [3, 4, 5],
        ["10kg x 10", "12.5kg x 12", "15kg x 15"],
        proficiency,
      ),
      customizedItem(
        "해머 컬",
        [3, 4, 5],
        ["10kg x 10", "12.5kg x 12", "15kg x 15"],
        proficiency,
      ),
      customizedItem(
        "삼두 익스텐션",
        [3, 4, 5],
        ["15kg x 10", "20kg x 12", "25kg x 15"],
        proficiency,
      ),
    ],
    [
      customizedItem("크런치", [3, 4, 5], [15, 20, 25], proficiency),
      customizedItem(
        "플랭크",
        [3, 3, 4],
        ["30초", "40초", "50초"],
        proficiency,
      ),
      customizedItem("레그 레이즈", [3, 4, 5], [15, 20, 25], proficiency),
    ],
  ];
}

function dietRoutine(proficiency) {
  const cardioDay = [
    routineItem("가볍게 걷기 + 동적 스트레칭", 1, "5분"),
    customizedItem(
      "인터벌 러닝",
      [4, 5, 6],
      [
        "1분 달리기 + 2분 걷기",
        "1분 30초 달리기 + 1분 30초 걷기",
        "2분 달리기 + 1분 걷기",
      ],
      proficiency,
    ),
    routineItem("천천히 걷기 + 정적 스트레칭", 1, "5분"),
  ];

  const fullBodyWorkout = [
    customizedItem("버피 테스트", [3, 4, 5], [10, 12, 15], proficiency),
    customizedItem(
      "마운틴 클라이머",
      [3, 4, 5],
      ["30초", "40초", "50초"],
      proficiency,
    ),
    customizedItem("점프 스쿼트", [3, 4, 5], [12, 15, 20], proficiency),
    customizedItem("플랭크", [3, 3, 4], ["30초", "40초", "50초"], proficiency),
  ];

  const lightStrengthDay = [
    customizedItem("스쿼트", [3, 4, 5], [15, 20, 25], proficiency),
    customizedItem("푸쉬업", [3, 4, 5], [12, 15, 20], proficiency),
    customizedItem("크런치", [3, 4, 5], [20, 25, 30], proficiency),
    customizedItem("브릿지", [3, 3, 4], ["20초", "30초", "40초"], proficiency),
  ];

  return [
    cardioDay,
    fullBodyWorkout,
    lightStrengthDay,
    cardioDay,
    fullBodyWorkout,
    lightStrengthDay,
  ];
}

function routineItem(name, set, perSet) {
  if (perSet === parseInt(perSet, 10)) {
    perSet = perSet + "회";
  }
  return { name, set, perSet };
}

function customizedItem(name, sets, perSets, proficiency) {
  return routineItem(name, sets[proficiency], perSets[proficiency]);
}
