import { Route, Routes } from 'react-router-dom';
import Calculadora from './pages/Assessoria/Calculadora';
import Clientes from './pages/MesaRV';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Painel from './pages/Assessoria/Painel';
import Pareto from './pages/Assessoria/Pareto';
import PersistLogin from './components/PersistLogin';
import SlackOAuthAuthorize from './pages/SlackOAuthAuthorize';
import Restrict from './components/Restrict';
import { COMMERCIAL } from './data/GROUPS';
// import { Term, Equity } from './pages/Base';

export default function App() {
  return (
    <Routes>
      <Route path="/slack/oauth/authorize" element={<SlackOAuthAuthorize />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PersistLogin />}>
        <Route index element={<Home />} />
        <Route path="/assessoria/" element={<Restrict to={[COMMERCIAL]} />}>
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="painel" element={<Painel />} />
          <Route path="pareto" element={<Pareto />} />
        </Route>
        <Route path="/mesarv/">
          <Route path="clientes" element={<Clientes />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
