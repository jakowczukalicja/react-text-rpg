function rollDice(chance) {
  const roll = Math.random()
  return roll < chance
}

export function getNextSceneId(choice) {
  if (choice.chance !== undefined) {
    if (rollDice(choice.chance)) {
      return choice.success
    } else {
      return choice.failure
    }
  }

  return choice.goto
}