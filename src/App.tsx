import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './NavBarWrapper.tsx'
import MyRouting from './MyRouting.tsx'
import GlobalStyle from './global-styles.tsx'


export default function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>

        <Navbar/>

        <MyRouting/>

       </Router>
    </>
  )
}
