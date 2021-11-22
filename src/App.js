import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './DetailPage.jsx/DetailPage';
import Menu from './Menu';
import { routeData } from './routeData';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu routeData={routeData} />
        <Routes>
          <Route path="/:id" element={<DetailPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
