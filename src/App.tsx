import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CadastroVendedor } from './pages/SignUp/Layout/index';
import { CadastroProduto } from './pages/SignUp/Layout/CadastroProduto';
import { ListagemProdutos } from './pages/SignUp/Layout/ListagemProdutos';
import  CadastroLoja  from './pages/SignUp/Layout/CadastroLoja';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroVendedor />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/produtos" element={<ListagemProdutos />} />
        <Route path="/cadastro-loja" element={<CadastroLoja />} />
      </Routes>
    </Router>
  );
}

export default App;
