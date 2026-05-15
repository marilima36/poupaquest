import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQCard, PQXpRing, PQBar } from '../../components/ui';
import { Poupi } from '../../components/Poupi';
import { ICheck, ILock } from '../../components/icons';
import { PQ_T } from '../../tokens';

const chapters = [
  { id: 1, title: 'Primeiro mês organizado', status: 'done', sub: 'Você registrou 30 dias seguidos', xp: 400 },
  { id: 2, title: 'Domando o delivery', status: 'done', sub: 'Reduziu gastos em 38%', xp: 320 },
  { id: 3, title: 'Mestre do Mercado', status: 'active', sub: '4 de 6 missões · 2 dias restantes', xp: 540,
    missions: [
      { l: 'Manter mercado abaixo de R$ 600', done: true },
      { l: 'Comprar fora dos horários de pico', done: true },
      { l: 'Lista antes de cada compra', done: false, pct: 70 },
      { l: '0 desperdícios na semana', done: false, pct: 20 },
    ]},
  { id: 4, title: 'A reserva começa aqui', status: 'locked', sub: 'Desbloqueia ao concluir o capítulo 3', xp: 800 },
  { id: 5, title: 'Investidor iniciante', status: 'locked', sub: 'Primeiros R$ 1.000 em renda fixa', xp: 1200 },
];

export default function Journey() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <MobileScreen active="quest" bg={theme.bgOff}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        {/* Hero */}
        <div style={{ padding: '14px 22px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: theme.mute, fontWeight: 600 }}>Sua jornada</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
                letterSpacing: '-0.02em', lineHeight: 1.05, marginTop: 4 }}>Mestre do Mercado</div>
              <div style={{ fontSize: 12, color: theme.mute, marginTop: 4 }}>Capítulo 3 de 12 · nível 7</div>
            </div>
            <Poupi size={56} />
          </div>
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
            <PQXpRing size={62} pct={26} level={7} theme={theme} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: theme.mute, marginBottom: 4 }}>26% concluído · 660 / 2.500 XP</div>
              <PQBar pct={26} theme={theme} height={5} color={theme.accent} />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ padding: '4px 22px 8px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 44, top: 22, bottom: 22, width: 1.5,
            background: `repeating-linear-gradient(to bottom, ${theme.hair} 0 4px, transparent 4px 8px)` }} />

          {chapters.map((c) => {
            const isActive = c.status === 'active';
            const isDone = c.status === 'done';
            const isLocked = c.status === 'locked';
            return (
              <div key={c.id} style={{ display: 'flex', gap: 14, position: 'relative', marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 22, flexShrink: 0,
                  background: isDone ? theme.positive : isActive ? theme.ink : theme.hairSoft,
                  color: isDone || isActive ? theme.bg : theme.mute,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', zIndex: 1,
                  boxShadow: isActive ? `0 0 0 6px ${theme.bg}, 0 0 0 7px ${theme.ink}` : 'none' }}>
                  {isDone && <ICheck size={20} stroke={2.4} />}
                  {isActive && <span style={{ fontFamily: PQ_T.display, fontSize: 20 }}>{c.id}</span>}
                  {isLocked && <ILock size={16} />}
                </div>
                <div style={{ flex: 1 }}>
                  <PQCard theme={theme} inset={false} style={{ padding: 14,
                    background: isActive ? theme.ink : theme.bg,
                    color: isActive ? theme.bg : theme.ink,
                    border: isActive ? 'none' : `0.5px solid ${theme.hair}`,
                    opacity: isLocked ? 0.6 : 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
                          fontWeight: 600, opacity: 0.6 }}>Capítulo {c.id}</div>
                        <div style={{ fontFamily: PQ_T.display, fontSize: 18, letterSpacing: '-0.01em', marginTop: 2 }}>{c.title}</div>
                        <div style={{ fontSize: 11.5, marginTop: 4, opacity: 0.75 }}>{c.sub}</div>
                      </div>
                      <div style={{ fontFamily: PQ_T.mono, fontSize: 11, opacity: 0.8, paddingLeft: 8 }}>+{c.xp} XP</div>
                    </div>
                    {isActive && c.missions && (
                      <div style={{ marginTop: 12, paddingTop: 12, borderTop: `0.5px solid rgba(255,255,255,0.12)` }}>
                        {c.missions.map((m, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
                            <div style={{ width: 16, height: 16, borderRadius: 8,
                              border: `1.5px solid rgba(255,255,255,0.4)`,
                              background: m.done ? theme.accent : 'transparent',
                              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {m.done && <ICheck size={10} stroke={3} />}
                            </div>
                            <div style={{ flex: 1, fontSize: 12.5,
                              opacity: m.done ? 0.6 : 1, textDecoration: m.done ? 'line-through' : 'none' }}>{m.l}</div>
                            {!m.done && m.pct !== undefined && (
                              <div style={{ width: 50 }}>
                                <PQBar pct={m.pct} theme={theme} height={3}
                                  color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </PQCard>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements link */}
        <div style={{ padding: '4px 22px 8px' }}>
          <button onClick={() => navigate('/jornada/conquistas')} style={{
            width: '100%', padding: '14px', borderRadius: 14,
            background: theme.bg, border: `0.5px solid ${theme.hair}`,
            color: theme.ink, fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>Ver conquistas e missões →</button>
        </div>
      </div>
    </MobileScreen>
  );
}
