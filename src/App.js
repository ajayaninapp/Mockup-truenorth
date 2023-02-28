import logo from './logo.svg';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import AuthLayout from './Layouts/AuthLayout';
import RouterContainer from './views/Router/RouterContainer';

function App() {
  return (
    <div className="App">
      <RouterContainer/>
    </div>
  );
}

export default App;
