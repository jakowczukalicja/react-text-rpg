function rollDice(chance, luckBonus) {
  const finalChance = chance + luckBonus
  const roll = Math.random()
  return roll < finalChance
}

export function getNextSceneId(choice, luckBonus) {
  if (choice.chance !== undefined) {
    if (rollDice(choice.chance, luckBonus)) {
      return choice.success
    } else {
      return choice.failure
    }
  }

  return choice.goto
}