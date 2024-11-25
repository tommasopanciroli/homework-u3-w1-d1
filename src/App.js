
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImgComponent from './components/ImgComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent text="ED ECCO IL BOTTONE" />
        <ButtonComponent text="UN ALTRO BOTTONE" />
        <ButtonComponent text="U NTERZO BOTTONE" />
      </header>
      <main>
        <ImgComponent src="https://placecats.com/500/500" />
        <ImgComponent src="https://placecats.com/300/300" />
        <ImgComponent src="https://placecats.com/400/400" />
      </main>
    </div>
  )
}

export default App
