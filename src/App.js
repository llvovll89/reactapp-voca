import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Daylist } from './components/Daylist';
import { Header } from './components/Header';
import { Createword } from './pages/Createword';
import { Dayword } from './components/Dayword';
import { Emptypage } from './pages/Emptypage';
import { CreateDay } from './pages/CreateDay';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Daylist />} />
          <Route path="/word/:day" element={<Dayword />} />
          <Route path="/createday" element={<CreateDay />} />
          <Route path="/createword" element={<Createword />} />
          <Route path="*" element={<Emptypage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
