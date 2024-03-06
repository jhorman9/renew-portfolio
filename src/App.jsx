import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './assets/Pages/HomePage'
import AboutPage from './assets/Pages/AboutPage'
import ContactPage from './assets/Pages/ContactPage'
import NavComponent from './assets/Components/NavComponent'
import FooterComponent from './assets/Components/FooterComponent'
import { useTheme } from './assets/store/useTheme'

function App() {

  const themeState = useTheme(state => state.theme);

  return (
    <div className={themeState}>
      <HashRouter>
        <NavComponent />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about-me' element={<HomePage />}/>
          <Route path='/projects' element={<AboutPage />}/>
          <Route path='/contacts' element={<ContactPage />}/>
        </Routes>
        <FooterComponent />
      </HashRouter>
    </div>
  )
}

export default App;
