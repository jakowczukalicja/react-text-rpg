import { useState } from 'react'
import { getNextSceneId } from './engine/gameLogic'
import story from './data/story.json'
import Scene from './components/Scene'
import StartScreen from './components/StartScreen'

function App() {
  const [sceneId, setSceneId] = useState(story.start)
  const [luck, setLuck] = useState(null)

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
  const luckBonus = story.luckLevels[luck].bonus

  function handleChoice(choice) {
    const nextId = getNextSceneId(choice, luckBonus)
    setSceneId(nextId)
  }

  return (
    <div>
      <h1>{story.title}</h1>
      <p>Luck: {story.luckLevels[luck].label}</p>
      <Scene scene={scene} onChoice={handleChoice} />
    </div>
  )
}

export default App