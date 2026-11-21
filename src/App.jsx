import { useState } from 'react'
import { getNextSceneId } from './engine/gameLogic'
import story from './data/story.json'
import Scene from './components/Scene'

function App() {
  const [sceneId, setSceneId] = useState(story.start)
  const scene = story.scenes[sceneId]

    function handleChoice(choice) {
      const nextId = getNextSceneId(choice)
      setSceneId(nextId)
    }

  return (
    <div>
      <h1>{story.title}</h1>
      <Scene scene={scene} onChoice={handleChoice} />
    </div>
  )
}

export default App