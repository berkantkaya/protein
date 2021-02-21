import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Product from './pages/Product';
import Detail from './pages/Detail';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/product" component={Product} />
         <Route path="/detail/:id/"  component={Detail}/>
       </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
