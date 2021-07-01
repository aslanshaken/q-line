import './App.css';
import { Switch, Route } from 'react-router-dom';

// Screens
import Layout from './Shared/Layout/Layout';
import Main from './Components/Main/Main'


function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
