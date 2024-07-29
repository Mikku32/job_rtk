
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Post from './pages/Post'

function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className='min-h-screen w-screen overflow-x-hidden bg-black text-white '>
              <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path='/post' element={<Post />} />

                </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
