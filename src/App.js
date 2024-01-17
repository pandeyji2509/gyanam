import './App.css';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QuestionPaper from './components/question_paper';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/"
            exact element={<Form />}>
          </Route>
          <Route path="/question_bank"
            exact element={<QuestionPaper />}>
          </Route>
          <Route path="/question_bank/:id"
            exact element={<QuestionPaper />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
