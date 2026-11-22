function Scene({ scene, onChoice }) {
  return (
    <div className="scene">
      {scene.image && <img className="scene-image" src={scene.image} alt={scene.location} />}
      <p className="scene-text">{scene.text}</p>
      <div className="choices">
      {scene.choices.map((choice, index) => (
        <button className="choice-button" key={index} onClick={() => onChoice(choice)}>
          {choice.text}
        </button>
      ))}
      </div>
    </div>
  )
}

export default Scene