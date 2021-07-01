import './App.css';
import { Switch, Route } from 'react-router-dom';

// Screens
import Layout from './Shared/Layout/Layout';
import Main from './Components/Main/Main'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Clients from './Components/Clients/Clients'
import Wall from './Components/Wall/Wall'


function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Wall /> */}
        <Services />
        <Main />
        <About />
        <Clients />
      </Layout>
    </div>
  );
}

export default App;
