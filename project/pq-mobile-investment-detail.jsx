// Mobile · Detalhe de Investimento (HGLG11 — FII)

function InvestmentDetail({ theme }) {
  // sparkline data — 60 daily prices for the chart
  const data = [
    100,101,102,100,99,98,100,103,105,104,106,108,107,109,110,
    112,111,113,115,117,116,118,120,119,121,123,122,121,123,125,
    126,128,127,126,124,125,127,129,131,130,129,128,130,132,133,
    135,134,136,138,137,139,140,142,141,143,142,144,145,143,146,
  ];
  const min = Math.min(...data), max = Math.max(...data);
  const W = 340, H = 120;
  const points = data.map((v, i) => {
    const x = (i / (data.length-1)) * W;
    const y = H - ((v - min) / (max - min)) * H;
    return `${x},${y}`;
  }).join(' ');
  const lastX = W;
  const lastY = H - ((data[data.length-1] - min) / (max - min)) * H;

  return (
    <div style={{ height: '100%', background: theme.bgOff,
      paddingTop: 54, paddingBottom: 28, overflow: 'auto' }}>

      {/* App bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 22px 0' }}>
        <button style={{ width: 34, height: 34, borderRadius: 17,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, transform: 'rotate(180deg)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <IChevR size={16}/>
        </button>
        <span style={{ fontSize: 12, color: theme.mute, fontWeight: 600,
          letterSpacing: '0.08em' }}>FII · imobiliário</span>
        <button style={{ width: 34, height: 34, borderRadius: 17,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, fontSize: 18 }}>⋯</button>
      </div>

      {/* Hero */}
      <div style={{ padding: '14px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16,
            background: theme.accent, color: theme.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: PQ_T.display, fontSize: 24, fontWeight: 700 }}>H</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: PQ_T.display, fontSize: 28, color: theme.ink,
              letterSpacing: '-0.02em', lineHeight: 1 }}>HGLG11</div>
            <div style={{ fontSize: 12, color: theme.mute, marginTop: 2 }}>
              CSHG Logística · galpões logísticos
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: theme.mute, fontWeight: 600 }}>Posição atual</div>
          <PQAmount value={3850.20} theme={theme} size={42} />
          <div style={{ display: 'flex', gap: 8, marginTop: 6, alignItems: 'center' }}>
            <PQPill theme={theme} bg={theme.bg} color={theme.negative}
              style={{ fontSize: 11, fontWeight: 600 }}>
              ↓ 1,2% · mês
            </PQPill>
            <span style={{ fontSize: 11, color: theme.mute }}>· − R$ 46,80</span>
            <span style={{ marginLeft: 'auto', fontSize: 10.5, color: theme.mute,
              fontFamily: PQ_T.mono }}>27 cotas</span>
          </div>
        </div>

        {/* Chart */}
        <PQCard theme={theme} inset={false} style={{ padding: 14, marginTop: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline' }}>
            <PQEyebrow theme={theme}>Cotação · 12 meses</PQEyebrow>
            <div style={{ display: 'flex', gap: 4 }}>
              {['1m','3m','6m','1a','tudo'].map((p, i) => (
                <span key={p} style={{
                  fontSize: 10.5, padding: '4px 8px', borderRadius: 6,
                  background: i === 3 ? theme.ink : 'transparent',
                  color: i === 3 ? theme.bg : theme.mute, fontWeight: 600,
                }}>{p}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 6, position: 'relative' }}>
            <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="invFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={theme.accent} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={`0,${H} ${points} ${W},${H}`} fill="url(#invFill)" />
              <polyline points={points} fill="none" stroke={theme.accent} strokeWidth="2" />
              <circle cx={lastX-1} cy={lastY} r="4" fill={theme.bg} stroke={theme.accent} strokeWidth="2"/>
            </svg>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            fontSize: 10, color: theme.mute, fontFamily: PQ_T.mono, marginTop: 4 }}>
            <span>mai/25</span><span>jul</span><span>set</span><span>nov</span>
            <span>jan/26</span><span>mar</span><span>hoje</span>
          </div>
        </PQCard>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          {[
            { l: 'Preço cota',       v: 'R$ 142,60', sub: 'última 16:55' },
            { l: 'Dividend yield',   v: '9,1% a.a.', sub: 'média 12m' },
            { l: 'Próximo provento', v: 'R$ 1,02',   sub: '30 mai · estimado' },
            { l: 'Rentab. PoupaQuest', v: '+ R$ 312', sub: 'desde 03/2025', color: theme.positive },
          ].map((s, i) => (
            <PQCard key={i} theme={theme} style={{ padding: 12 }}>
              <div style={{ fontSize: 10, color: theme.mute, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.l}</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 22, color: s.color || theme.ink,
                letterSpacing: '-0.02em', marginTop: 4 }}>{s.v}</div>
              <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{s.sub}</div>
            </PQCard>
          ))}
        </div>

        {/* Dividends history */}
        <div style={{ marginTop: 22 }}>
          <PQEyebrow theme={theme} right={<span style={{ color: theme.accent }}>histórico →</span>}>Últimos proventos</PQEyebrow>
          <PQCard theme={theme} inset={false}>
            {[
              { d: 'mai · 2026', v: 'R$ 27,54', n: '27 cotas', est: true },
              { d: 'abr · 2026', v: 'R$ 27,00', n: '27 cotas' },
              { d: 'mar · 2026', v: 'R$ 25,38', n: '26 cotas' },
              { d: 'fev · 2026', v: 'R$ 24,21', n: '26 cotas' },
            ].map((p, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center',
                padding: '12px 14px',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>
                    {p.d} {p.est && (
                      <span style={{ marginLeft: 6, padding: '1px 6px', borderRadius: 4,
                        background: theme.bgOff, fontSize: 9, color: theme.mute,
                        fontWeight: 600, letterSpacing: '0.06em' }}>ESTIMADO</span>
                    )}
                  </div>
                  <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{p.n}</div>
                </div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 13, color: theme.positive,
                  fontWeight: 500 }}>+ {p.v.replace('R$ ', '')}</div>
              </div>
            ))}
          </PQCard>
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{ padding: '18px 22px 0', display: 'flex', gap: 10 }}>
        <button style={{ flex: 1, height: 50, borderRadius: 25,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, fontSize: 13.5, fontWeight: 600 }}>Resgatar</button>
        <button style={{ flex: 1.2, height: 50, borderRadius: 25,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 13.5, fontWeight: 600,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <IPlus size={14} stroke={2.2}/> Aplicar mais
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { InvestmentDetail });
