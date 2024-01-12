import './App.css';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/"
            exact element={<Form />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
