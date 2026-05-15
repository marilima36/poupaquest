import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Onboarding       from './screens/mobile/Onboarding';
import Home             from './screens/mobile/Home';
import QuickAdd         from './screens/mobile/QuickAdd';
import Transactions     from './screens/mobile/Transactions';
import TransactionEdit  from './screens/mobile/TransactionEdit';
import Categories       from './screens/mobile/Categories';
import Investments      from './screens/mobile/Investments';
import InvestmentDetail from './screens/mobile/InvestmentDetail';
import Journey          from './screens/mobile/Journey';
import Achievements     from './screens/mobile/Achievements';
import Recurrings       from './screens/mobile/Recurrings';
import Goals            from './screens/mobile/Goals';
import GoalCreate       from './screens/mobile/GoalCreate';

import Dashboard      from './screens/web/Dashboard';
import WebGoals       from './screens/web/Goals';
import WebRecurrings  from './screens/web/Recurrings';
import WebInvestments from './screens/web/Investments';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"                      element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding"            element={<Onboarding />} />
          <Route path="/home"                  element={<Home />} />
          <Route path="/lancar"                element={<QuickAdd />} />
          <Route path="/lancamentos"           element={<Transactions />} />
          <Route path="/lancamentos/editar"    element={<TransactionEdit />} />
          <Route path="/categorias"            element={<Categories />} />
          <Route path="/investimentos"         element={<Investments />} />
          <Route path="/investimentos/detalhe" element={<InvestmentDetail />} />
          <Route path="/jornada"               element={<Journey />} />
          <Route path="/jornada/conquistas"    element={<Achievements />} />
          <Route path="/recorrencias"          element={<Recurrings />} />
          <Route path="/metas"                 element={<Goals />} />
          <Route path="/metas/criar"           element={<GoalCreate />} />
          <Route path="/web"                   element={<Dashboard />} />
          <Route path="/web/metas"             element={<WebGoals />} />
          <Route path="/web/recorrencias"      element={<WebRecurrings />} />
          <Route path="/web/investimentos"     element={<WebInvestments />} />
          <Route path="*"                      element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
