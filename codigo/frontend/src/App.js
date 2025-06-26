import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlunoForm from './pages/AlunosPage/AlunoForm';
import EmpresaForm from './pages/EmpresasPage/EmpresaForm';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/aluno" element={<AlunoForm />} />
          <Route path="/empresa" element={<EmpresaForm />} />
          <Route path="*" element={<AlunoForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
