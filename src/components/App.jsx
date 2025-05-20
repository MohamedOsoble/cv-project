import '../styles/App.css'
import General from './General'
import Multiwork from './MultiWork'
import Education from './Education'
import Singlework from './Singlework'

function App() {

  return (

    <div id='parent-container' className='container'>
      <h1>CV Application</h1>
      <General>
        <h2 id='general-label'>General Information: </h2>
        </General>
      <Education>
        <h2 id='education-label'>Education: </h2>
        </Education>
      <Singlework>
        <h2 id='work-label'>Work History: </h2>
        </Singlework>
    </div>
  )
}

export default App
