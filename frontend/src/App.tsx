import Home from './pages/Home.tsx'
import Preloader from './widgets/Preloader/Preloader.tsx'

function App() {
  return (
    <div className="App">
      <Preloader />
      <Home />
    </div>
  )
}

export default App