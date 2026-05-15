import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQCard, PQAmount, PQPill, PQBar } from '../../components/ui';
import { IPlus, IRepeat, ICheck } from '../../components/icons';
import { PQ_T } from '../../tokens';

export default function Goals() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const goals = [
    { l: 'Reserva de emergência', sub: '6 meses de despesas', cur: 2900, tgt: 18000, due: 'meta: dez/2026', emoji: '🛟', color: theme.positive },
    { l: 'Notebook novo', sub: 'MacBook Air M4', cur: 4200, tgt: 8500, due: 'ago/2026', emoji: '💻', color: theme.accent },
    { l: 'Viagem · Patagônia', sub: 'novembro com Lu', cur: 3850, tgt: 12000, due: 'nov/2026', emoji: '🏔', color: theme.gold },
    { l: 'Aula de cerâmica', sub: '8 encontros', cur: 280, tgt: 720, due: 'jun/2026', emoji: '🏺', color: theme.negative },
  ];
  const totalSaved = goals.reduce((s, g) => s + g.cur, 0);
  const totalTarget = goals.reduce((s, g) => s + g.tgt, 0);

  return (
    <MobileScreen active="quest" bg={theme.bg}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: theme.mute, fontWeight: 600 }}>Cofrinhos</div>
              <PQAmount value={totalSaved} theme={theme} size={42} />
              <div style={{ fontSize: 11.5, color: theme.mute, marginTop: 4 }}>
                guardados de R$ {totalTarget.toLocaleString('pt-BR')}
              </div>
            </div>
            <button onClick={() => navigate('/metas/criar')} style={{ width: 40, height: 40, borderRadius: 20,
              background: theme.ink, color: theme.bg, border: 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <IPlus size={20} stroke={2.2}/>
            </button>
          </div>

          <div style={{ marginTop: 18 }}>
            <PQBar pct={(totalSaved/totalTarget)*100} theme={theme} height={4} color={theme.ink} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6,
              fontSize: 10.5, color: theme.mute, fontFamily: PQ_T.mono }}>
              <span>{Math.round((totalSaved/totalTarget)*100)}% completo</span>
              <span>+ R$ 420 esse mês</span>
            </div>
          </div>

          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 8 }}>
            {goals.map((g, i) => {
              const pct = (g.cur / g.tgt) * 100;
              return (
                <PQCard key={i} theme={theme} inset={false} style={{ padding: 16, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 14,
                      background: g.color, color: theme.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: PQ_T.display, fontSize: 22 }}>{g.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: theme.ink, letterSpacing: '-0.01em' }}>{g.l}</div>
                      <div style={{ fontSize: 11, color: theme.mute, marginTop: 2 }}>{g.sub} · {g.due}</div>
                    </div>
                    <span style={{ fontFamily: PQ_T.mono, fontSize: 12, color: theme.mute, fontWeight: 600 }}>
                      {Math.round(pct)}%
                    </span>
                  </div>
                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: PQ_T.display, fontSize: 20, color: theme.ink, letterSpacing: '-0.02em' }}>
                      R$ {g.cur.toLocaleString('pt-BR')}
                      <span style={{ color: theme.mute, fontSize: 14 }}> / {g.tgt.toLocaleString('pt-BR')}</span>
                    </span>
                    <PQPill theme={theme} bg={theme.bgOff} style={{ fontSize: 10.5 }}>
                      <IRepeat size={11} /> R$ 200/mês
                    </PQPill>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <PQBar pct={pct} theme={theme} height={4} color={g.color} />
                  </div>
                </PQCard>
              );
            })}
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
