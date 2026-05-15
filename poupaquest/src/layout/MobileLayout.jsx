import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { IWallet, IPie, IPlus, ITarget, IInvest } from '../components/icons';
import { PQ_T } from '../tokens';

export function HomeTabBar({ active }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const tabs = [
    { id: 'home',  path: '/home',        label: 'Início',  Icon: IWallet },
    { id: 'cat',   path: '/categorias',  label: 'Gastos',  Icon: IPie },
    { id: 'add',   path: '/lancar',      label: '',        Icon: IPlus, fab: true },
    { id: 'quest', path: '/jornada',     label: 'Jornada', Icon: ITarget },
    { id: 'inv',   path: '/investimentos', label: 'Invest', Icon: IInvest },
  ];

  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '8px 14px 22px',
      background: `linear-gradient(to top, ${theme.bg} 70%, transparent)`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      borderTop: `0.5px solid ${theme.hair}`,
      fontFamily: PQ_T.sans,
    }}>
      {tabs.map((t) => t.fab ? (
        <button key={t.id} onClick={() => navigate(t.path)} style={{
          width: 56, height: 56, borderRadius: 28, background: theme.ink,
          color: theme.bg, border: 'none',
          boxShadow: `0 8px 20px ${theme.ink}40, 0 2px 0 ${theme.accent}`,
          marginTop: -28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <IPlus size={26} stroke={2.2} />
        </button>
      ) : (
        <button key={t.id} onClick={() => navigate(t.path)} style={{
          background: 'none', border: 'none', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 3, padding: '4px 8px', cursor: 'pointer',
          color: active === t.id ? theme.ink : theme.mute,
        }}>
          <t.Icon size={20} stroke={1.6} />
          <span style={{ fontSize: 9.5, fontWeight: 500, letterSpacing: '0.02em' }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

export function MobileScreen({ children, active, bg, noPadBottom = false }) {
  const { theme } = useTheme();
  return (
    <div style={{
      height: '100%', background: bg || theme.bgOff, position: 'relative',
      paddingTop: 54, paddingBottom: noPadBottom ? 0 : 90,
      overflow: 'hidden', fontFamily: PQ_T.sans,
    }}>
      {children}
      <HomeTabBar active={active} />
    </div>
  );
}
