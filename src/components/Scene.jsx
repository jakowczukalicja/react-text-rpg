function Scene({ scene, onChoice }) {
  return (
    <div>
      <p>{scene.text}</p>
      {scene.choices.map((choice, index) => (
        <button key={index} onClick={() => onChoice(choice)}>
          {choice.text}
        </button>
      ))}
    </div>
  )
}

export default Scene