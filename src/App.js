import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import ProductManagement from './components/ProductManagement';
import Home from './components/Home';
import OrderManagement from './components/OrderManagement';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product-management" component={ProductManagement}/>
          <Route path="/order-management" component={OrderManagement}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
