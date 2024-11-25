import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent text="ED ECCO IL BOTTONE" />
        <ButtonComponent text="UN ALTRO BOTTONE" />
        <ButtonComponent text="U NTERZO BOTTONE" />
      </header>
    </div>
  )
}

export default App
