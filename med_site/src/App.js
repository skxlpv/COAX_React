import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import SideBar from './components/sideBar';
import Base from './components/base';
import Login from './components/login';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div style={{"display": "flex", "flex-direction": "row"}}>
            <SideBar />
          </div>
          <Routes>
                <Route exact path='/' element={<Base />}/>
                <Route exact path='/login' element={<Login />}/>
            </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;