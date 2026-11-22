import { useState } from 'react'
import { getNextSceneId } from './engine/gameLogic'
import story from './data/story.json'
import Scene from './components/Scene'
import StartScreen from './components/StartScreen'
import StatusPanel from './components/StatusPanel'
import './App.css'

function App() {
  const [sceneId, setSceneId] = useState(story.start)
  const [luck, setLuck] = useState(null)
  const [steps, setSteps] = useState(0)

  function handleRestart() {
    setSceneId(story.start)
    setLuck(null)
    setSteps(0)
  }

  if (luck === null) {
    return (
      <StartScreen
        title={story.title}
        luckLevels={story.luckLevels}
        onSelect={setLuck}
      />
    )
  }

  const scene = story.scenes[sceneId]
  const luckLevel = story.luckLevels[luck]

  function handleChoice(choice) {
    const nextId = getNextSceneId(choice, luckLevel.bonus)
    setSceneId(nextId)
    setSteps(steps + 1)
  }

  return (
    <div className="game">
      <h1 className="game-title">{story.title}</h1>
      <StatusPanel
        luckLabel={luckLevel.label}
        luckBonus={luckLevel.bonus}
        location={scene.location}
        steps={steps}
        onRestart={handleRestart}
      />
      <Scene scene={scene} onChoice={handleChoice} />
    </div>
  )
}

export default App