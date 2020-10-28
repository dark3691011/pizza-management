import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import ProductManagement from './components/ProductManagement';
import Home from './components/Home';
import OrderManagement from './components/OrderManagement';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product-management" component={ProductManagement}/>
          <Route path="/order-management" component={OrderManagement}/>
          <Route path="/update-product" component={UpdateProduct}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
