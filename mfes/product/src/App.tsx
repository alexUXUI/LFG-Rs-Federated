import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//@ts-ignore
import Service from 'service/Service';

const Product = () => (
  <div className="content">
    <Router basename="product">
      <nav>
        <Link to="/">Prouct Home</Link>
        <Link to="/service">Service</Link>
      </nav>
      <Routes>
        <Route
          path="/service"
          element={
            <div className="content">
              <Service />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="content">
              <h1>Product 📦</h1>
              <p>
                A Product is a SPA application (Vertical MFE). SPA Applications
                are synonymous with Products because they responsible for a
                given collection of Services, which make up a user experience.
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  </div>
);

export default Product;
