import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQCard, PQPill, PQBar, PQEyebrow, PQXpRing } from '../../components/ui';
import { Poupi } from '../../components/Poupi';
import { IBell, ISparkle, IFlame, ITarget, ICheck, ITrophy } from '../../components/icons';
import { PQ_T } from '../../tokens';

function HomeHeader() {
  const { theme } = useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 22px 0' }}>
      <div>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: theme.mute, fontWeight: 600 }}>PoupaQuest</div>
        <div style={{ fontFamily: PQ_T.sans, fontSize: 19, fontWeight: 600, color: theme.ink,
          letterSpacing: '-0.01em', marginTop: 2 }}>Bom dia, Lívia</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 38, height: 38, borderRadius: 19, border: `0.5px solid ${theme.hair}`,
          background: theme.bg, color: theme.ink, display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IBell size={18} stroke={1.6} />
        </button>
        <PQXpRing size={42} pct={64} level={7} theme={theme} />
      </div>
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <MobileScreen active="home">
      <div style={{ height: '100%', overflowY: 'auto', paddingBottom: 8 }}>
        <HomeHeader />
        <div style={{ padding: '14px 22px 0' }}>

          {/* Hero gamified card */}
          <PQCard theme={theme} inset={false} style={{
            padding: 18, background: theme.ink, color: theme.bg, border: 'none',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0,
              background: `radial-gradient(circle at 85% 18%, ${theme.accent}25 0%, transparent 38%)`,
              pointerEvents: 'none' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              position: 'relative' }}>
              <PQPill theme={theme} color={theme.bg} bg={'rgba(255,255,255,0.1)'} border="none">
                <ISparkle size={11}/> Nível 7 · Poupador
              </PQPill>
              <PQPill theme={theme} color={theme.bg} bg={'rgba(255,255,255,0.1)'} border="none">
                <IFlame size={11}/> 12 dias
              </PQPill>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14, position: 'relative' }}>
              <div style={{ width: 76, height: 76, borderRadius: 38,
                background: theme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Poupi size={62} />
              </div>
              <div>
                <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Disponível</div>
                <div style={{ fontFamily: PQ_T.display, fontSize: 38, lineHeight: 1,
                  letterSpacing: '-0.02em', marginTop: 4 }}>
                  R$ 4.287<span style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)' }}>,40</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18, position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                fontSize: 11, marginBottom: 6, color: 'rgba(255,255,255,0.7)' }}>
                <span>Nível 7</span>
                <span style={{ fontFamily: PQ_T.mono }}>1.840 / 2.500 XP</span>
                <span>Nível 8</span>
              </div>
              <PQBar pct={73} theme={theme} height={5}
                color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
            </div>
          </PQCard>

          {/* Active missions */}
          <div style={{ marginTop: 20 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ color: theme.accent, cursor: 'pointer' }} onClick={() => navigate('/jornada')}>
                +8 disponíveis
              </span>
            }>Missões ativas</PQEyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { t: 'Semana sem delivery', sub: '5 de 7 dias', xp: 120, pct: 71, icon: IFlame },
                { t: 'Guardar R$ 200 no cofre', sub: 'R$ 145 guardados', xp: 80, pct: 72, icon: ITarget },
                { t: 'Registrar 5 dias seguidos', sub: 'Streak 12 dias ✓', xp: 50, pct: 100, icon: ICheck },
              ].map((m, i) => {
                const done = m.pct === 100;
                const I = m.icon;
                return (
                  <PQCard key={i} theme={theme} inset={false} style={{ padding: 12,
                    display: 'flex', alignItems: 'center', gap: 12, opacity: done ? 0.6 : 1 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 18,
                      background: done ? theme.positive : theme.bgOff,
                      color: done ? theme.bg : theme.ink,
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <I size={18} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink,
                        textDecoration: done ? 'line-through' : 'none' }}>{m.t}</div>
                      <div style={{ fontSize: 11, color: theme.mute, marginTop: 2 }}>{m.sub}</div>
                      <div style={{ marginTop: 6 }}>
                        <PQBar pct={m.pct} theme={theme} height={3}
                          color={done ? theme.positive : theme.accent} />
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: PQ_T.mono, fontSize: 12, color: theme.accent,
                        fontWeight: 600 }}>+{m.xp}</div>
                      <div style={{ fontSize: 9, letterSpacing: '0.1em',
                        color: theme.mute, fontWeight: 600 }}>XP</div>
                    </div>
                  </PQCard>
                );
              })}
            </div>
          </div>

          {/* Action row */}
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingBottom: 16 }}>
            <PQCard theme={theme} inset={false} style={{ padding: 12, display: 'flex',
              alignItems: 'center', gap: 10, cursor: 'pointer' }}
              onClick={() => navigate('/metas')}>
              <ITrophy size={18} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: theme.ink }}>Cofre semanal</div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 11, color: theme.mute }}>R$ 145 / 200</div>
              </div>
            </PQCard>
            <PQCard theme={theme} inset={false} style={{ padding: 12, display: 'flex',
              alignItems: 'center', gap: 10, cursor: 'pointer' }}
              onClick={() => navigate('/jornada/conquistas')}>
              <ISparkle size={18} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: theme.ink }}>Nova conquista</div>
                <div style={{ fontSize: 11, color: theme.mute }}>Mestre do Mercado</div>
              </div>
            </PQCard>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
