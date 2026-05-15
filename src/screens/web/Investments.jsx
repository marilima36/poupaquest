import { useTheme } from '../../context/ThemeContext';
import { WebSidebar } from '../../layout/WebSidebar';
import { PQCard, PQKpi, PQEyebrow, PQBar } from '../../components/ui';
import { Poupi } from '../../components/Poupi';
import { ISearch, IBell, IPlus } from '../../components/icons';
import { PQ_T } from '../../tokens';

const series = [24800,25100,25400,25700,26200,26500,26800,27300,27600,27900,28100,28450];
const min = Math.min(...series), max = Math.max(...series);
const W = 760, H = 200;
const pts = series.map((v, i) => {
  const x = (i / (series.length-1)) * W;
  const y = H - ((v - min) / (max - min)) * (H - 30) - 10;
  return `${x},${y}`;
}).join(' ');

export default function WebInvestments() {
  const { theme } = useTheme();

  return (
    <div style={{ height: '100vh', background: theme.bgOff, display: 'flex', overflow: 'hidden',
      color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebar active="Investimentos" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 26, color: theme.ink, letterSpacing: '-0.02em', lineHeight: 1.05 }}>Investimentos</div>
            <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 4 }}>Carteira diversificada · rentab. acumulada 9,4% no ano</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg, border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ISearch size={15}/></button>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg, border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><IBell size={16}/></button>
            <button style={{ height: 38, borderRadius: 10, background: theme.ink, color: theme.bg, border: 'none', padding: '0 16px', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}><IPlus size={15} stroke={2}/> Nova aplicação</button>
          </div>
        </div>

        {/* Hero KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20, background: theme.ink, color: theme.bg, border: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>Patrimônio investido</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 48, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 8 }}>
              R$ 28.450<span style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)' }}>,32</span>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 11.5, opacity: 0.9 }}>
              <span>↑ R$ 312,40 (1,11%) · mês</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>+ R$ 2.450 ano · 9,4%</span>
            </div>
            <div style={{ position: 'absolute', right: 18, top: 18, opacity: 0.85 }}><Poupi size={42} dark /></div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Renda passiva · mês" value="R$ 218,30" color={theme.positive} />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>dividendos + juros</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Reserva" value="R$ 2.900,00" />
            <div style={{ marginTop: 8 }}>
              <PQBar pct={16} theme={theme} height={3} color={theme.positive} />
              <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 5 }}>16% da meta</div>
            </div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Aporte do mês" value="R$ 1.200,00" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>dia 5 · automático</div>
          </PQCard>
        </div>

        {/* Chart + allocation */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <PQEyebrow theme={theme}>Evolução · 12 meses</PQEyebrow>
              <div style={{ display: 'flex', gap: 6 }}>
                {['1m','3m','6m','1a','tudo'].map((p, i) => (
                  <div key={p} style={{ padding: '5px 10px', borderRadius: 7, fontSize: 11,
                    background: i === 3 ? theme.ink : 'transparent',
                    color: i === 3 ? theme.bg : theme.mute, fontWeight: 600, cursor: 'pointer' }}>{p}</div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="invWebFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={theme.accent} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0,0.25,0.5,0.75,1].map((p, i) => (
                  <line key={i} x1="0" y1={H*p} x2={W} y2={H*p} stroke={theme.hairSoft} strokeWidth="0.5" />
                ))}
                <polygon points={`0,${H} ${pts} ${W},${H}`} fill="url(#invWebFill)" />
                <polyline points={pts} fill="none" stroke={theme.accent} strokeWidth="2" />
                {series.map((v, i) => {
                  const x = (i / (series.length-1)) * W;
                  const y = H - ((v - min) / (max - min)) * (H - 30) - 10;
                  return <circle key={i} cx={x} cy={y} r="2.5" fill={theme.bg} stroke={theme.accent} strokeWidth="1.5"/>;
                })}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: theme.mute, marginTop: 8, fontFamily: PQ_T.mono }}>
                {['mai 25','jul','set','nov','jan 26','mar','mai'].map((m) => <span key={m}>{m}</span>)}
              </div>
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme}>Composição</PQEyebrow>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6 }}>
              <div style={{ width: 130, height: 130, borderRadius: 65, flexShrink: 0,
                background: `conic-gradient(${theme.ink} 0 50%, ${theme.accent} 50% 75%, ${theme.gold} 75% 90%, ${theme.positive} 90% 100%)`,
                position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 18, borderRadius: 60, background: theme.bg,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, color: theme.mute, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Rent. ano</span>
                  <span style={{ fontFamily: PQ_T.display, fontSize: 24, color: theme.positive }}>+9,4%</span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                {[
                  { k: 'Renda fixa', c: theme.ink, pct: 50 },
                  { k: 'FIIs', c: theme.accent, pct: 25 },
                  { k: 'ETFs', c: theme.gold, pct: 15 },
                  { k: 'Reserva', c: theme.positive, pct: 10 },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                    <div style={{ width: 8, height: 8, borderRadius: 4, background: a.c }} />
                    <div style={{ flex: 1, fontSize: 11.5, color: theme.ink, fontWeight: 500 }}>{a.k}</div>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 10.5, color: theme.mute }}>{a.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
          </PQCard>
        </div>

        {/* Holdings + side */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `0.5px solid ${theme.hairSoft}` }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Aplicações</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Tudo','Renda fixa','FIIs','ETFs'].map((f, i) => (
                  <span key={f} style={{ fontSize: 11.5, fontWeight: 500, color: i === 0 ? theme.ink : theme.mute,
                    borderBottom: i === 0 ? `1.5px solid ${theme.ink}` : '1.5px solid transparent',
                    paddingBottom: 2, cursor: 'pointer' }}>{f}</span>
                ))}
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, color: theme.ink }}>
              <thead>
                <tr style={{ color: theme.mute, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  <th style={{ textAlign: 'left', padding: '10px 20px' }}>Aplicação</th>
                  <th style={{ textAlign: 'left', padding: '10px 0' }}>Classe</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px' }}>Posição</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px' }}>Rentab. mês</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px' }}>Rentab. PoupaQ</th>
                  <th style={{ textAlign: 'right', padding: '10px 20px' }}>%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: 'Tesouro Selic 2029', k: 'Renda fixa', v: 8200,  m: 1.04, t: 8.2,  p: 29, c: theme.ink },
                  { n: 'CDB Inter 110%',     k: 'Renda fixa', v: 6000,  m: 1.10, t: 6.5,  p: 21, c: theme.ink },
                  { n: 'HGLG11',             k: 'FII',        v: 3850,  m: -1.2, t: 9.1,  p: 14, c: theme.accent },
                  { n: 'XPLG11',             k: 'FII',        v: 3250,  m: 0.8,  t: 7.4,  p: 11, c: theme.accent },
                  { n: 'IVVB11',             k: 'ETF',        v: 4250,  m: 8.6,  t: 22.4, p: 15, c: theme.gold },
                  { n: 'Reserva · Nu',       k: 'Reserva',    v: 2900,  m: 0.7,  t: 5.2,  p: 10, c: theme.positive },
                ].map((r, i, a) => (
                  <tr key={i} style={{ borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                    <td style={{ padding: '12px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 6, height: 28, borderRadius: 3, background: r.c }} />
                        <span style={{ fontWeight: 500 }}>{r.n}</span>
                      </div>
                    </td>
                    <td style={{ color: theme.mute }}>{r.k}</td>
                    <td style={{ textAlign: 'right', padding: '12px', fontFamily: PQ_T.mono, fontWeight: 500 }}>R$ {r.v.toLocaleString('pt-BR')}</td>
                    <td style={{ textAlign: 'right', padding: '12px', fontFamily: PQ_T.mono, color: r.m >= 0 ? theme.positive : theme.negative }}>{r.m >= 0 ? '↑' : '↓'} {Math.abs(r.m).toFixed(1)}%</td>
                    <td style={{ textAlign: 'right', padding: '12px', fontFamily: PQ_T.mono, color: theme.positive }}>+ {r.t.toFixed(1)}%</td>
                    <td style={{ textAlign: 'right', padding: '12px 20px', fontFamily: PQ_T.mono, color: theme.mute }}>{r.p}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </PQCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PQCard theme={theme} style={{ padding: 18 }}>
              <PQEyebrow theme={theme}>Calendário de proventos</PQEyebrow>
              {[
                { d: '17 mai · sex', src: 'HGLG11',   v: 27.54, est: true },
                { d: '24 mai · sex', src: 'XPLG11',   v: 22.10, est: true },
                { d: '01 jun · seg', src: 'CDB Inter', v: 41.20 },
                { d: '15 jun · seg', src: 'Tesouro',   v: 68.40 },
              ].map((p, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: theme.bgOff, color: theme.ink,
                    fontFamily: PQ_T.display, fontSize: 13, fontWeight: 600,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 8.5, opacity: 0.6, lineHeight: 1 }}>{p.d.split(' ')[1]}</span>
                    <span style={{ lineHeight: 1, marginTop: 2 }}>{p.d.split(' ')[0]}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{p.src}
                      {p.est && <span style={{ marginLeft: 6, padding: '1px 5px', borderRadius: 4,
                        background: theme.bgOff, fontSize: 8.5, color: theme.mute, fontWeight: 600, letterSpacing: '0.06em' }}>EST</span>}
                    </div>
                    <div style={{ fontSize: 10, color: theme.mute }}>{p.d.split(' ').slice(2).join(' ')}</div>
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 12, color: theme.positive, fontWeight: 600 }}>
                    + R$ {p.v.toFixed(2)}
                  </div>
                </div>
              ))}
            </PQCard>

            <PQCard theme={theme} style={{ padding: 16, background: theme.bgOff }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Poupi size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: theme.ink, lineHeight: 1.4 }}>Diversificação OK</div>
                  <div style={{ fontSize: 11, color: theme.mute, marginTop: 4, lineHeight: 1.4 }}>
                    Sua exposição internacional (15%) está abaixo da meta de 25%. Próximo aporte: considere IVVB11.
                  </div>
                </div>
              </div>
            </PQCard>
          </div>
        </div>
      </div>
    </div>
  );
}
