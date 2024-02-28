import './App.css'
import { Who } from './components/Who'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
        <Header />
        <Who />
        <Projects />
        <About />
        {/*<Contact />*/}
    </>
  )
}

export default App
