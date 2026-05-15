// Mobile · Investimentos
// Carteira, distribuição, lista de aplicações + reserva de emergência

function InvestmentsView({ theme }) {
  const total = 28450.32;
  const allocs = [
    { k: 'Renda fixa',   v: 14200, c: theme.ink,    pct: 50 },
    { k: 'FIIs',         v: 7100,  c: theme.accent, pct: 25 },
    { k: 'ETFs / Intl',  v: 4250,  c: theme.gold,   pct: 15 },
    { k: 'Reserva',      v: 2900,  c: theme.positive, pct: 10 },
  ];
  const holdings = [
    { name: 'Tesouro Selic 2029', kind: 'Renda fixa', v: 8200,  d: 5.4, color: theme.ink },
    { name: 'CDB Inter 110%',     kind: 'Renda fixa', v: 6000,  d: 3.1, color: theme.ink },
    { name: 'HGLG11',             kind: 'FII',        v: 3850,  d: -1.2, color: theme.accent },
    { name: 'XPLG11',             kind: 'FII',        v: 3250,  d: 0.8,  color: theme.accent },
    { name: 'IVVB11',             kind: 'ETF',        v: 4250,  d: 8.6,  color: theme.gold },
    { name: 'Reserva · Nu',       kind: 'Reserva',    v: 2900,  d: 0.7,  color: theme.positive },
  ];

  return (
    <div style={{ height: '100%', background: theme.bgOff,
      paddingTop: 54, paddingBottom: 90, overflow: 'auto' }}>
      <div style={{ padding: '14px 22px 0' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: theme.mute, fontWeight: 600 }}>Patrimônio investido</div>
            <PQAmount value={total} theme={theme} size={52} />
            <div style={{ display: 'flex', gap: 10, marginTop: 8, alignItems: 'center' }}>
              <PQPill theme={theme} bg={theme.bg}
                color={theme.positive}>
                ↑ R$ 312,40 (1,11%) · mês
              </PQPill>
              <span style={{ fontSize: 11, color: theme.mute }}>· 30 dias</span>
            </div>
          </div>
        </div>

        {/* Allocation pie + legend */}
        <PQCard theme={theme} inset={false} style={{ marginTop: 18, padding: 16 }}>
          <PQEyebrow theme={theme}>Composição</PQEyebrow>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            {/* Donut from CSS conic-gradient */}
            <div style={{ width: 110, height: 110, borderRadius: 55, flexShrink: 0,
              background: `conic-gradient(
                ${theme.ink} 0 50%,
                ${theme.accent} 50% 75%,
                ${theme.gold} 75% 90%,
                ${theme.positive} 90% 100%)`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 16, borderRadius: 50,
                background: theme.bg, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 9, color: theme.mute, letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontWeight: 600 }}>Rent. ano</span>
                <span style={{ fontFamily: PQ_T.display, fontSize: 22, color: theme.positive }}>
                  +9,4%
                </span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              {allocs.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8,
                  padding: '4px 0' }}>
                  <div style={{ width: 8, height: 8, borderRadius: 4, background: a.c }} />
                  <div style={{ flex: 1, fontSize: 11.5, color: theme.ink, fontWeight: 500 }}>{a.k}</div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 11, color: theme.mute }}>
                    {a.pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PQCard>

        {/* Reserva de emergência highlight */}
        <PQCard theme={theme} inset={false} style={{ marginTop: 14, padding: 14,
          background: theme.ink, color: theme.bg, border: 'none', overflow: 'hidden',
          position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.18em',
                textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>Reserva de emergência</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 28, lineHeight: 1.05,
                marginTop: 4, letterSpacing: '-0.02em' }}>
                R$ 2.900 <span style={{ color: 'rgba(255,255,255,0.5)' }}>/ 18.000</span>
              </div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>
                Meta: 6 meses de despesas · faltam R$ 15.100
              </div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Poupi size={42} />
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <PQBar pct={16} theme={theme} height={5}
              color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
          </div>
        </PQCard>

        {/* Holdings list */}
        <div style={{ marginTop: 20 }}>
          <PQEyebrow theme={theme} right={<span style={{ color: theme.accent }}>+ aplicar</span>}>Aplicações</PQEyebrow>
          <PQCard theme={theme} inset={false}>
            {holdings.map((h, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 14px',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ width: 6, height: 36, borderRadius: 3,
                  background: h.color, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {h.name}
                  </div>
                  <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2,
                    letterSpacing: '0.04em' }}>{h.kind}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 13, color: theme.ink,
                    fontWeight: 500 }}>R$ {h.v.toLocaleString('pt-BR')}</div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 10.5,
                    color: h.d >= 0 ? theme.positive : theme.negative, marginTop: 2 }}>
                    {h.d >= 0 ? '↑' : '↓'} {Math.abs(h.d).toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
          </PQCard>
        </div>
      </div>

      <HomeTabBar theme={theme} active="inv" />
    </div>
  );
}

Object.assign(window, { InvestmentsView });
