import './App.css'
import Page1 from './Page1.tsx'
import Page2 from './Page2.tsx'
import Page3 from './Page3.tsx'
import { Routes, Route } from 'react-router-dom'
import DataTable from './Table.tsx'


export default function MyRouting() {
  return (
    <>
          <Routes>
            <Route path="/Page1" element={<Page1/>}/>
          </Routes>

          <Routes>
            <Route path="/Page2" element={<Page2/>}/>
          </Routes>

          <Routes>
            <Route path="/Page3" element={<Page3/>}/>
          </Routes>

          <Routes>
            <Route path="/Table" element={<DataTable/>}/>
          </Routes>
    </>
  )
}
