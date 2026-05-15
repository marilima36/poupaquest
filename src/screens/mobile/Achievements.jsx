import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQEyebrow, PQBar } from '../../components/ui';
import { ISparkle, IFlame, ITrophy, IFood, ITarget, IInvest, ICheck, ILock } from '../../components/icons';
import { PQ_T } from '../../tokens';

const badges = [
  { l: 'Primeiro passo',  sub: 'Registrou 1º gasto',    got: true,  icon: ISparkle },
  { l: 'Maratona 7',      sub: '7 dias seguidos',        got: true,  icon: IFlame },
  { l: 'Mestre Mercado',  sub: '3 meses no orçamento',   got: true,  icon: ITrophy },
  { l: 'Anti-delivery',   sub: 'Mês sem iFood',          got: false, icon: IFood, lock: true },
  { l: 'Cofre cheio',     sub: 'R$ 1.000 guardados',     got: false, icon: ITarget },
  { l: 'Investidor v1',   sub: 'Primeira aplicação',     got: false, icon: IInvest, lock: true },
  { l: 'Disciplinado',    sub: '30 dias de streak',      got: false, icon: ICheck },
  { l: 'Lvl 10',          sub: 'Alcance o nível 10',     got: false, icon: ISparkle, lock: true },
];

export default function Achievements() {
  const { theme } = useTheme();

  return (
    <MobileScreen active="quest" bg={theme.bg}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: theme.mute, fontWeight: 600 }}>Conquistas</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
            <div style={{ fontFamily: PQ_T.display, fontSize: 44, lineHeight: 1,
              color: theme.ink, letterSpacing: '-0.02em' }}>
              <span>3</span><span style={{ color: theme.mute, fontSize: 26 }}>/24</span>
            </div>
            <span style={{ fontSize: 13, color: theme.positive, fontWeight: 600 }}>+2 esse mês</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 18 }}>
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} style={{ aspectRatio: '1', borderRadius: 14,
                  background: b.got ? theme.ink : theme.bgOff,
                  color: b.got ? theme.bg : theme.mute,
                  padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  opacity: b.lock ? 0.45 : 1, border: b.got ? 'none' : `0.5px solid ${theme.hair}` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18,
                    background: b.got ? theme.accent : theme.bg,
                    color: b.got ? theme.bg : theme.mute,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {b.lock ? <ILock size={16} /> : <Icon size={18} />}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>{b.l}</div>
                    <div style={{ fontSize: 9.5, opacity: 0.75, marginTop: 2 }}>{b.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weekly missions */}
          <div style={{ marginTop: 24, paddingBottom: 8 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>2 / 5</span>
            }>Missões da semana</PQEyebrow>

            {[
              { t: 'Registrar lançamento todo dia', pct: 71, xp: 50,  done: false, sub: '5 de 7 dias' },
              { t: 'Manter mercado ≤ R$ 600',       pct: 68, xp: 150, done: false, sub: 'R$ 412 / 600' },
              { t: 'Adicionar 1 categoria favorita', pct: 100, xp: 30, done: true, sub: 'Concluído' },
            ].map((m, i, a) => (
              <div key={i} style={{ padding: '14px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none',
                display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: 11,
                  border: `1.5px solid ${m.done ? theme.positive : theme.mute}`,
                  background: m.done ? theme.positive : 'transparent',
                  color: theme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {m.done && <ICheck size={12} stroke={3}/>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink,
                    textDecoration: m.done ? 'line-through' : 'none', opacity: m.done ? 0.55 : 1 }}>{m.t}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: theme.mute, marginTop: 4 }}>
                    <span>{m.sub}</span>
                    <span style={{ fontFamily: PQ_T.mono }}>+{m.xp} XP</span>
                  </div>
                  {!m.done && (
                    <div style={{ marginTop: 6 }}>
                      <PQBar pct={m.pct} theme={theme} height={3} color={theme.ink} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
