import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
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

const router = createBrowserRouter([
  { path: '/',                      loader: () => redirect('/onboarding') },
  { path: '/onboarding',            element: <Onboarding /> },
  { path: '/home',                  element: <Home /> },
  { path: '/lancar',                element: <QuickAdd /> },
  { path: '/lancamentos',           element: <Transactions /> },
  { path: '/lancamentos/editar',    element: <TransactionEdit /> },
  { path: '/categorias',            element: <Categories /> },
  { path: '/investimentos',         element: <Investments /> },
  { path: '/investimentos/detalhe', element: <InvestmentDetail /> },
  { path: '/jornada',               element: <Journey /> },
  { path: '/jornada/conquistas',    element: <Achievements /> },
  { path: '/recorrencias',          element: <Recurrings /> },
  { path: '/metas',                 element: <Goals /> },
  { path: '/metas/criar',           element: <GoalCreate /> },
  { path: '/web',                   element: <Dashboard /> },
  { path: '/web/metas',             element: <WebGoals /> },
  { path: '/web/recorrencias',      element: <WebRecurrings /> },
  { path: '/web/investimentos',     element: <WebInvestments /> },
  { path: '*',                      loader: () => redirect('/onboarding') },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
