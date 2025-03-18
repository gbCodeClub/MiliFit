// goal object
const ExcerciseGoal = {
  PROMOTION: {
    description: "진급을 위해 체력을 기르고 싶어요",
    shortDescription: "진급",
  },
  BULKUP: {
    description: "벌크업을 하고 싶어요",
    shortDescription: "벌크업",
  },
  DIET: {
    description: "다이어트를 하고 싶어요",
    shortDescription: "다이어트",
  },
};
for (let key of Object.keys(ExcerciseGoal)) {
  Object.freeze(ExcerciseGoal[key]);
}
Object.freeze(ExcerciseGoal);

// function generating the goal details
function initializeGoalDetails(goal) {
  switch (goal) {
    case ExcerciseGoal.PROMOTION:
      return {
        currentRank: undefined,
      };
    case ExcerciseGoal.BULKUP:
    case ExcerciseGoal.DIET:
      return {
        currentWeight: undefined,
        goalWeight: undefined,
      };
  }
}

export { ExcerciseGoal, initializeGoalDetails };
