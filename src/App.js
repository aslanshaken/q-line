import './App.css';
import { Switch, Route } from 'react-router-dom';

// Screens
import Layout from './Shared/Layout/Layout';
import Main from './Components/Main/Main'
import Services from './Components/Services/Services'


function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
        <Services />
      </Layout>
    </div>
  );
}

export default App;
