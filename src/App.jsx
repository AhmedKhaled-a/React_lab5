import "bootstrap/dist/css/bootstrap.min.css";

import Products from './Components/Products.jsx';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";



function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter>
          <Navbar />
          <div className="container mt-5">
            <Routes>
                {
                  ['products', '/','home'].map((path, index) => <Route path={path} key={index} element={<Products />} />)
                }
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path="*" element={<ErrorPage />} />



            </Routes>
          </div>
        </BrowserRouter>

      </div>
    </Provider>

  );
}

export default App;
