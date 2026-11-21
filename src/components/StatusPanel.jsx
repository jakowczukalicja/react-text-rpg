function StatusPanel({ luckLabel, luckBonus, location, steps, onRestart }) {
  const bonusPercent = Math.round(luckBonus * 100)
  const bonusText = bonusPercent > 0 ? `+${bonusPercent}%` : `${bonusPercent}%`

  return (
    <div>
      {location && <p> {location}</p>}
      <p>Luck: {luckLabel} ({bonusText})</p>
      <p>Steps: {steps}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  )
}

export default StatusPanel