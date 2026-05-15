import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { PQBar, PQPill } from '../components/ui';
import { Poupi } from '../components/Poupi';
import { IWallet, IBolt, IPie, IInvest, ITarget, IRepeat, ISparkle, IFlame, ITrophy } from '../components/icons';
import { PQ_T } from '../tokens';

const NAV = [
  { l: 'Início',        I: IWallet,  path: '/web' },
  { l: 'Lançamentos',   I: IBolt,    path: '/lancamentos' },
  { l: 'Gastos',        I: IPie,     path: '/categorias' },
  { l: 'Investimentos', I: IInvest,  path: '/web/investimentos' },
  { l: 'Metas',         I: ITarget,  path: '/web/metas' },
  { l: 'Recorrências',  I: IRepeat,  path: '/web/recorrencias' },
  { l: 'Jornada',       I: ISparkle, path: '/jornada' },
];

export function WebSidebar({ active }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div style={{ width: 232, padding: '22px 18px',
      borderRight: `0.5px solid ${theme.hair}`,
      background: theme.bg, display: 'flex', flexDirection: 'column',
      gap: 24, flexShrink: 0 }}>
      {/* Wordmark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
        onClick={() => navigate('/web')}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: theme.ink, color: theme.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: PQ_T.display, fontSize: 18, fontWeight: 600 }}>P</div>
        <div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 18, color: theme.ink, lineHeight: 1, letterSpacing: '-0.01em' }}>PoupaQuest</div>
          <div style={{ fontSize: 9.5, color: theme.mute, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginTop: 2 }}>Pessoal · maio</div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV.map((n, i) => {
          const isActive = n.l === active;
          return (
            <div key={i} onClick={() => navigate(n.path)} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '9px 10px', borderRadius: 9,
              background: isActive ? theme.bgOff : 'transparent',
              color: isActive ? theme.ink : theme.mute,
              fontSize: 13, fontWeight: isActive ? 600 : 500,
              cursor: 'pointer',
            }}>
              <n.I size={16} stroke={1.6} />
              <span>{n.l}</span>
            </div>
          );
        })}
      </div>

      <div style={{ flex: 1 }} />

      {/* Player card */}
      <div style={{ padding: 14, borderRadius: 14, background: theme.bgOff,
        display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: theme.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Poupi size={30} dark={true} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: theme.ink }}>Lívia M.</div>
            <div style={{ fontSize: 10.5, color: theme.mute }}>Nível 7 · Poupador</div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: theme.mute, marginBottom: 4, fontFamily: PQ_T.mono }}>
            <span>1.840 XP</span><span>2.500 XP</span>
          </div>
          <PQBar pct={73} theme={theme} height={3.5} color={theme.accent} />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <PQPill theme={theme} bg={theme.bg} style={{ fontSize: 10 }}><IFlame size={10} /> 12d</PQPill>
          <PQPill theme={theme} bg={theme.bg} style={{ fontSize: 10 }}><ITrophy size={10} /> 3/24</PQPill>
        </div>
      </div>
    </div>
  );
}
