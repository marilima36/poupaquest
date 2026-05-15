import { useTheme } from '../../context/ThemeContext';
import { WebSidebar } from '../../layout/WebSidebar';
import { PQCard, PQKpi, PQEyebrow, PQBar, PQPill } from '../../components/ui';
import { Poupi } from '../../components/Poupi';
import { ISearch, IBell, IPlus, ISparkle, ITarget, IBolt, IRepeat, ITrophy, ILock } from '../../components/icons';
import { PQ_T } from '../../tokens';

const goals = [
  { l: 'Reserva de emergência', sub: '6 meses de despesas · meta dez/26', cur: 2900, tgt: 18000, mo: 500, emoji: '🛟', color: '#506B41', months: 30, kind: 'Reserva' },
  { l: 'Notebook novo', sub: 'MacBook Air M4 · ago/26', cur: 4200, tgt: 8500, mo: 400, emoji: '💻', color: '#2F5BFF', months: 11, kind: 'Compra' },
  { l: 'Viagem · Patagônia', sub: 'novembro com Lu · nov/26', cur: 3850, tgt: 12000, mo: 500, emoji: '🏔', color: '#B89344', months: 18, kind: 'Viagem' },
  { l: 'Aula de cerâmica', sub: '8 encontros · jun/26', cur: 280, tgt: 720, mo: 220, emoji: '🏺', color: '#B14A2B', months: 2, kind: 'Curso' },
];

export default function WebGoals() {
  const { theme } = useTheme();
  const totalSaved = goals.reduce((s,g)=>s+g.cur,0);
  const totalTarget = goals.reduce((s,g)=>s+g.tgt,0);
  const totalMonthly = goals.reduce((s,g)=>s+g.mo,0);

  return (
    <div style={{ height: '100vh', background: theme.bgOff, display: 'flex', overflow: 'hidden',
      color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebar active="Metas" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 26, color: theme.ink, letterSpacing: '-0.02em', lineHeight: 1.05 }}>Cofrinhos & metas</div>
            <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 4 }}>4 ativas · próxima a bater: Aula de cerâmica em jun/26</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg, border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ISearch size={15}/></button>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg, border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><IBell size={16}/></button>
            <button style={{ height: 38, borderRadius: 10, background: theme.ink, color: theme.bg, border: 'none', padding: '0 16px', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}><IPlus size={15} stroke={2}/> Nova meta</button>
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20, background: theme.ink, color: theme.bg, border: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>Total poupado</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 8 }}>
              R$ 11.230<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>,00</span>
            </div>
            <div style={{ marginTop: 12 }}>
              <PQBar pct={(totalSaved/totalTarget)*100} theme={theme} height={4} color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
              <div style={{ fontSize: 11, marginTop: 6, opacity: 0.7 }}>de R$ {totalTarget.toLocaleString('pt-BR')} · {Math.round((totalSaved/totalTarget)*100)}%</div>
            </div>
            <div style={{ position: 'absolute', right: -10, bottom: -10, opacity: 0.16 }}><Poupi size={120} dark /></div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Contribuição automática" value={`R$ ${totalMonthly.toLocaleString('pt-BR')}`} />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>4 metas · todo dia 5</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Esse mês" value="+ R$ 420,00" color={theme.positive} />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>↑ 12% vs abril</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Próxima a bater" value="Cerâmica" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>em 39% · ~50 dias</div>
          </PQCard>
        </div>

        {/* Goals + side */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {goals.map((g, i) => {
              const pct = (g.cur / g.tgt) * 100;
              return (
                <PQCard key={i} theme={theme} style={{ padding: 18, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: g.color,
                      color: theme.bg, fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{g.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 9.5, fontWeight: 600, color: theme.mute, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{g.kind}</div>
                      <div style={{ fontFamily: PQ_T.display, fontSize: 20, color: theme.ink, lineHeight: 1.1, letterSpacing: '-0.01em', marginTop: 2 }}>{g.l}</div>
                    </div>
                    <span style={{ fontFamily: PQ_T.mono, fontSize: 13, color: theme.mute, fontWeight: 600 }}>{Math.round(pct)}%</span>
                  </div>
                  <div style={{ marginTop: 14, fontFamily: PQ_T.display, fontSize: 28, color: theme.ink, letterSpacing: '-0.02em' }}>
                    R$ {g.cur.toLocaleString('pt-BR')}<span style={{ color: theme.mute, fontSize: 16 }}> / {g.tgt.toLocaleString('pt-BR')}</span>
                  </div>
                  <div style={{ marginTop: 10 }}><PQBar pct={pct} theme={theme} height={5} color={g.color} /></div>
                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <PQPill theme={theme} bg={theme.bgOff} style={{ fontSize: 11 }}><IRepeat size={11}/> R$ {g.mo}/mês</PQPill>
                    <span style={{ fontSize: 11, color: theme.mute }}>{g.sub.split(' · ').pop()} · ~{g.months} meses</span>
                  </div>
                </PQCard>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PQCard theme={theme} style={{ padding: 18 }}>
              <PQEyebrow theme={theme}>Sugestões do Poupi</PQEyebrow>
              {[
                { t: 'Quase lá: cerâmica', sub: 'Adiantar R$ 100 = bater 2 semanas antes.', I: ISparkle },
                { t: 'Reserva no foco', sub: 'Subir contribuição pra R$ 700 = bate em jul/27.', I: ITarget },
                { t: 'Cancelar Notion', sub: 'Realocar R$ 49/mês pra viagem.', I: IBolt },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderTop: i > 0 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: theme.bgOff, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <s.I size={14}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{s.t}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2, lineHeight: 1.4 }}>{s.sub}</div>
                  </div>
                </div>
              ))}
            </PQCard>

            <PQCard theme={theme} style={{ padding: 16 }}>
              <PQEyebrow theme={theme}>Conquistas a destravar</PQEyebrow>
              {[
                { l: 'Primeira meta batida', d: 'Bater qualquer meta', I: ITrophy },
                { l: 'Reserva v1', d: 'R$ 5.000 na reserva', I: ITarget },
                { l: 'Mochileira', d: 'Bater uma meta de viagem', I: ISparkle },
              ].map((b, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: theme.bgOff, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <b.I size={13} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{b.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute }}>{b.d}</div>
                  </div>
                  <ILock size={12} style={{ color: theme.mute }}/>
                </div>
              ))}
            </PQCard>
          </div>
        </div>
      </div>
    </div>
  );
}
