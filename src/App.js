
import React from 'react'
import './App.css';
// import Nav from './components/Nav'
import Login from './components/Login'
import Categories from './components/Categories'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ProductCategory from './components/ProductCategory'
import DetailsProduct from './components/DetailsProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const logged = useSelector((state) => state.myLogin)
  return (
      <Router>
        <div className="App">
          {/* <h1>hello test app</h1> */}
            
        </div>
        <Routes>
              
              <Route exact  path='/' element={<Login />} />
              <Route path='/categories' element={<Categories  />} />
              <Route path='/productcategory/:id' element={<ProductCategory  />} />
              <Route path='/detailsproduct/:id' element={<DetailsProduct  />} />


          
            </Routes>
      </Router>
  );
}

export default App;
