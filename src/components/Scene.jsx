function Scene({ scene, onChoice }) {
  return (
    <div>
      {scene.image && <img src={scene.image} alt={scene.location} />}
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