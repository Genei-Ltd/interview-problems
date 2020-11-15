import recon from './assets/recon.json'
import nlp from './assets/nlp.json'
import JsonToReact from './components/JsonToReact'

function App() {
  return (
    <JsonToReact
      recon={recon}
      nlp={nlp}
    />
  )
}

export default App
