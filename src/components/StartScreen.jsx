function StartScreen({ title, luckLevels, onSelect }) {
  return (
    <div className="game">
      <h1 className="game-title">{title}</h1>
      <p>How lucky do you feel today?</p>
      {Object.entries(luckLevels).map(([key, level]) => (
        <button className="luck-button" key={key} onClick={() => onSelect(key)}>
          {level.label}
        </button>
      ))}
    </div>
  )
}

export default StartScreen