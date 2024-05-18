import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Update from './components/Update/Update'
import Animation from './components/Animation/Animation'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/anim' element={<Animation/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/createUser' element={<Create/>} />
          <Route path='/updateUser/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
