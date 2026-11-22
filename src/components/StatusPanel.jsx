function StatusPanel({ luckLabel, luckBonus, location, steps, onRestart }) {
  const bonusPercent = Math.round(luckBonus * 100)
  const bonusText = bonusPercent > 0 ? `+${bonusPercent}%` : `${bonusPercent}%`

  return (
    <div className="status-panel">
      {location && <p> {location}</p>}
      <p>Luck bonus: {luckLabel} ({bonusText})</p>
      <p>Steps: {steps}</p>
      <button className="restart-button" onClick={onRestart}>Restart</button>
    </div>
  )
}

export default StatusPanel