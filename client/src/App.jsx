// @ts-nocheck
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to={'/'} /> : <Login />}
        />
        {/* <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route> */}
        <Route
          path="/register"
          element={user ? <Navigate replace to={'/'} /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
