function StartScreen({ title, luckLevels, onSelect }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>How lucky do you feel today?</p>
      {Object.entries(luckLevels).map(([key, level]) => (
        <button key={key} onClick={() => onSelect(key)}>
          {level.label}
        </button>
      ))}
    </div>
  )
}

export default StartScreen