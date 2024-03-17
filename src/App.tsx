import { useState } from 'react'
import './App.css'
import {Switch, Table} from "antd"
import {Button} from "antd"
import axios from 'axios'
import { ColumnsType } from 'antd/es/table'

import Page1 from './Page1.tsx'
import Page2 from './Page2.tsx'
import Page3 from './Page3.tsx'
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import DataTable from './Table.tsx'
import AuthorizeButton from './Authorize.tsx'


export default function App() {
  return (
    <>
      <Router>
          <nav className="navBar">
            <ol>
              <li className='page'>
                <Button>
                  <Link to="/page1">Page1</Link>
                </Button>
              </li>
              <li className='page'>
                <Button>
                  <Link to="/page2">Page2</Link>
                </Button>
              </li>
              <li className='page'>
                <Button>
                  <Link to="/page3">Page3</Link>
                </Button>
              </li>
              <li className='page'>
                <Button>
                  <Link to="/table">Table</Link>
                </Button>
              </li>
              <li className='page'>
                <AuthorizeButton/>
              </li>
            </ol>
          </nav>

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
       </Router>
    </>
  )
}
