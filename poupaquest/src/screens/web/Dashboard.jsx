import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { WebSidebar } from '../../layout/WebSidebar';
import { PQCard, PQKpi, PQCatChip, PQEyebrow, PQBar, PQ_CATS, PQPill } from '../../components/ui';
import { Poupi } from '../../components/Poupi';
import { ISearch, IBell, IPlus, IWallet, IFlame, ITrophy, IFood, ILock, IRepeat } from '../../components/icons';
import { PQ_T } from '../../tokens';

const cats = [
  { k: 'moradia',     used: 1800, lim: 2000 },
  { k: 'mercado',     used: 612,  lim: 800  },
  { k: 'alimentacao', used: 418,  lim: 450  },
  { k: 'compras',     used: 312,  lim: 400  },
  { k: 'lazer',       used: 196,  lim: 300  },
  { k: 'assinaturas', used: 187,  lim: 200  },
];

const txRows = [
  { d: 'Padaria Pão Quente',   c: 'alimentacao', a: 'Itaú',   t: 'hoje 08:42', v: -18.5 },
  { d: 'Cinema Pateo',         c: 'lazer',       a: 'Nubank', t: 'hoje 21:10', v: -42.0 },
  { d: 'Hortifruti São João',  c: 'mercado',     a: 'Itaú',   t: 'ontem',      v: -82.9 },
  { d: 'Renner · parcela 3/6', c: 'compras',     a: 'Itaú',   t: 'ontem',      v: -149.9, r: true },
  { d: 'Salário maio',         c: null,          a: 'Itaú',   t: '14 mai',     v: 1713.7, p: true },
  { d: 'Aluguel · maio',       c: 'moradia',     a: 'Itaú',   t: '13 mai',     v: -1800, r: true },
  { d: 'Netflix',              c: 'assinaturas', a: 'Nubank', t: '13 mai',     v: -39.9, r: true },
];

function DailySpend({ theme }) {
  const data = [120,60,0,180,40,220,90,150,70,30,0,240,120,60,80,140,90,110,0,220,80,60,130,0,90,180,140,200,60,80];
  const max = Math.max(...data);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 100, width: '100%', overflow: 'hidden' }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, height: `${(v / max) * 100}%`, minHeight: 2, borderRadius: 1.5,
          background: i === 14 ? theme.accent : theme.ink, opacity: i > 14 ? 0.15 : 1 }} />
      ))}
    </div>
  );
}

export default function Dashboard() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', background: theme.bgOff, display: 'flex', overflow: 'hidden',
      color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebar active="Início" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Bom dia, Lívia.</div>
            <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 4 }}>15 de maio · quinta-feira · você está na metade do mês.</div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px',
              background: theme.bg, borderRadius: 10, border: `0.5px solid ${theme.hair}`,
              fontSize: 13, color: theme.mute, width: 240, cursor: 'text' }}>
              <ISearch size={14} /> Buscar lançamento, categoria…
            </div>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg,
              border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <IBell size={16} />
            </button>
            <button onClick={() => navigate('/lancar')} style={{ height: 38, borderRadius: 10, background: theme.ink,
              color: theme.bg, border: 'none', padding: '0 16px', fontSize: 13, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <IPlus size={15} stroke={2}/> Novo lançamento
            </button>
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 18, background: theme.ink, color: theme.bg,
            border: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>Saldo do mês</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 8 }}>
              R$ 4.287<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>,40</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 14, fontSize: 11, opacity: 0.85 }}>
              <span>↑ 12% vs abril</span><span>·</span><span>61% da meta de R$ 7.000</span>
            </div>
            <div style={{ position: 'absolute', right: -16, bottom: -16, opacity: 0.18 }}>
              <Poupi size={130} dark />
            </div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Entradas" value="R$ 7.420,00" color={theme.positive} />
            <div style={{ marginTop: 12, fontSize: 11, color: theme.mute }}>4 lançamentos · salário + freelas</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Saídas" value="R$ 3.132,60" color={theme.negative} />
            <div style={{ marginTop: 12, fontSize: 11, color: theme.mute }}>48 lançamentos · ↓ 6,8%</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Cofre / Reserva" value="R$ 2.900,00" />
            <div style={{ marginTop: 12 }}>
              <PQBar pct={16} theme={theme} height={3} color={theme.positive} />
              <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 5, fontFamily: PQ_T.mono }}>16% da meta · 6 meses</div>
            </div>
          </PQCard>
        </div>

        {/* Middle: chart + categories */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <PQEyebrow theme={theme}>Gastos diários · maio</PQEyebrow>
                <div style={{ fontFamily: PQ_T.display, fontSize: 22, color: theme.ink, letterSpacing: '-0.02em' }}>
                  R$ 3.132<span style={{ color: theme.mute, fontSize: 16 }}>,60</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['7d','30d','3m','12m'].map((p, i) => (
                  <div key={p} style={{ padding: '5px 10px', borderRadius: 7, fontSize: 11,
                    background: i === 1 ? theme.ink : 'transparent',
                    color: i === 1 ? theme.bg : theme.mute,
                    border: i === 1 ? 'none' : `0.5px solid ${theme.hair}`,
                    fontWeight: 600, cursor: 'pointer' }}>{p}</div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 18 }}><DailySpend theme={theme} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: theme.mute, marginTop: 6, fontFamily: PQ_T.mono }}>
              <span>1 mai</span><span>10</span><span style={{ color: theme.accent, fontWeight: 600 }}>hoje · 15</span><span>20</span><span>31 mai</span>
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={<span style={{ color: theme.accent, cursor: 'pointer' }} onClick={() => navigate('/categorias')}>todas</span>}>Categorias</PQEyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cats.map((c, i) => {
                const meta = PQ_CATS[c.k];
                const pct = (c.used / c.lim) * 100;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <PQCatChip catKey={c.k} theme={theme} size={28} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 11.5, color: theme.ink, fontWeight: 500 }}>{meta.short}</span>
                        <span style={{ fontFamily: PQ_T.mono, fontSize: 11, color: theme.mute }}>R$ {c.used}</span>
                      </div>
                      <div style={{ marginTop: 4 }}>
                        <PQBar pct={Math.min(pct, 100)} theme={theme} height={3}
                          color={pct > 95 ? theme.negative : theme.ink} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </PQCard>
        </div>

        {/* Bottom: transactions + journey */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px',
              borderBottom: `0.5px solid ${theme.hairSoft}` }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Últimos lançamentos</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Todos','Gastos','Entradas','Recorrentes'].map((f, i) => (
                  <span key={f} style={{ fontSize: 11.5, fontWeight: 500,
                    color: i === 0 ? theme.ink : theme.mute,
                    borderBottom: i === 0 ? `1.5px solid ${theme.ink}` : '1.5px solid transparent',
                    paddingBottom: 2, cursor: 'pointer' }}>{f}</span>
                ))}
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, color: theme.ink }}>
              <thead>
                <tr style={{ color: theme.mute, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  <th style={{ textAlign: 'left', padding: '10px 20px' }}>Descrição</th>
                  <th style={{ textAlign: 'left', padding: '10px 0' }}>Categoria</th>
                  <th style={{ textAlign: 'left', padding: '10px 0' }}>Conta</th>
                  <th style={{ textAlign: 'left', padding: '10px 0' }}>Data</th>
                  <th style={{ textAlign: 'right', padding: '10px 20px' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {txRows.map((row, i, a) => (
                  <tr key={i} onClick={() => navigate('/lancamentos/editar')} style={{
                    borderBottom: i < a.length - 1 ? `0.5px solid ${theme.hairSoft}` : 'none', cursor: 'pointer' }}>
                    <td style={{ padding: '11px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {row.c ? <PQCatChip catKey={row.c} theme={theme} size={24} /> :
                          <div style={{ width: 24, height: 24, borderRadius: 10, background: theme.positive,
                            color: theme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IWallet size={12}/>
                          </div>}
                        <span style={{ fontWeight: 500 }}>{row.d}</span>
                        {row.r && <span style={{ background: theme.bgOff, padding: '1px 6px', borderRadius: 5,
                          fontSize: 9, color: theme.mute, fontWeight: 600, letterSpacing: '0.06em' }}>RECUR</span>}
                      </div>
                    </td>
                    <td style={{ color: theme.mute }}>{row.c ? PQ_CATS[row.c].label : 'Entrada'}</td>
                    <td style={{ color: theme.mute }}>{row.a}</td>
                    <td style={{ color: theme.mute }}>{row.t}</td>
                    <td style={{ padding: '11px 20px', textAlign: 'right', fontFamily: PQ_T.mono, fontWeight: 500,
                      color: row.p ? theme.positive : theme.ink, fontVariantNumeric: 'tabular-nums' }}>
                      {row.p ? '+' : '−'} R$ {Math.abs(row.v).toLocaleString('pt-BR', {minimumFractionDigits:2})}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </PQCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PQCard theme={theme} style={{ padding: 18, background: theme.ink, color: theme.bg, border: 'none' }}>
              <PQEyebrow theme={{ ...theme, mute: 'rgba(255,255,255,0.6)' }}>Missão semanal</PQEyebrow>
              <div style={{ fontFamily: PQ_T.display, fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.01em' }}>Semana sem delivery</div>
              <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 4 }}>5 de 7 dias · faltam 2</div>
              <div style={{ marginTop: 14 }}>
                <PQBar pct={71} theme={theme} height={4} color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginTop: 8, opacity: 0.8 }}>
                <span>71%</span><span style={{ fontFamily: PQ_T.mono }}>+ 120 XP</span>
              </div>
            </PQCard>

            <PQCard theme={theme} style={{ padding: 16 }}>
              <PQEyebrow theme={theme}>Conquistas recentes</PQEyebrow>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {[
                  { l: 'Maratona 7', I: IFlame, got: true },
                  { l: 'Anti-delivery', I: IFood, got: false, lock: true },
                  { l: 'Mestre', I: ITrophy, got: true },
                ].map((b, i) => (
                  <div key={i} style={{ aspectRatio: '1', borderRadius: 12, padding: 10,
                    background: b.got ? theme.bgOff : theme.bg,
                    border: `0.5px solid ${theme.hair}`,
                    opacity: b.lock ? 0.4 : 1,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ width: 26, height: 26, borderRadius: 13,
                      background: b.got ? theme.ink : theme.bgOff,
                      color: b.got ? theme.bg : theme.mute,
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {b.lock ? <ILock size={13}/> : <b.I size={13}/>}
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: theme.ink }}>{b.l}</div>
                  </div>
                ))}
              </div>
            </PQCard>

            <PQCard theme={theme} style={{ padding: 16 }}>
              <PQEyebrow theme={theme}>Próximas cobranças</PQEyebrow>
              {[
                { l: 'Netflix', d: 'em 2 dias', v: 39.9, k: 'assinaturas' },
                { l: 'Aluguel', d: 'em 28 dias', v: 1800, k: 'moradia' },
                { l: 'Renner 4/6', d: 'em 30 dias', v: 149.9, k: 'compras' },
              ].map((r, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <PQCatChip catKey={r.k} theme={theme} size={26} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{r.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute }}>{r.d}</div>
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>
                    R$ {r.v.toLocaleString('pt-BR',{minimumFractionDigits:2})}
                  </div>
                </div>
              ))}
            </PQCard>
          </div>
        </div>
      </div>
    </div>
  );
}
