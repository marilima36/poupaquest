// Mobile · Metas / Cofrinhos — lista + criar nova meta

function GoalsList({ theme }) {
  const goals = [
    { l: 'Reserva de emergência', sub: '6 meses de despesas', cur: 2900, tgt: 18000,
      due: 'meta: dez/2026', emoji: '🛟', color: theme.positive, kind: 'reserva' },
    { l: 'Notebook novo', sub: 'MacBook Air M4', cur: 4200, tgt: 8500,
      due: 'ago/2026', emoji: '💻', color: theme.accent, kind: 'compra' },
    { l: 'Viagem · Patagônia', sub: 'novembro com Lu',  cur: 3850, tgt: 12000,
      due: 'nov/2026', emoji: '🏔', color: theme.gold, kind: 'viagem' },
    { l: 'Aula de cerâmica',    sub: '8 encontros',     cur: 280,  tgt: 720,
      due: 'jun/2026', emoji: '🏺', color: theme.negative, kind: 'curso' },
  ];
  const totalSaved = goals.reduce((s, g) => s + g.cur, 0);
  const totalTarget = goals.reduce((s, g) => s + g.tgt, 0);

  return (
    <div style={{ height: '100%', background: theme.bg,
      paddingTop: 54, paddingBottom: 90, overflow: 'auto' }}>
      <div style={{ padding: '14px 22px 0' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: theme.mute, fontWeight: 600 }}>Cofrinhos</div>
            <PQAmount value={totalSaved} theme={theme} size={42} />
            <div style={{ fontSize: 11.5, color: theme.mute, marginTop: 4 }}>
              guardados de R$ {totalTarget.toLocaleString('pt-BR')}
            </div>
          </div>
          <button style={{ width: 40, height: 40, borderRadius: 20,
            background: theme.ink, color: theme.bg, border: 'none',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <IPlus size={20} stroke={2.2}/>
          </button>
        </div>

        {/* Overall mini bar */}
        <div style={{ marginTop: 18 }}>
          <PQBar pct={(totalSaved/totalTarget)*100} theme={theme} height={4} color={theme.ink} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6,
            fontSize: 10.5, color: theme.mute, fontFamily: PQ_T.mono }}>
            <span>{Math.round((totalSaved/totalTarget)*100)}% completo</span>
            <span>+ R$ 420 esse mês</span>
          </div>
        </div>

        {/* Goals stack */}
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {goals.map((g, i) => {
            const pct = (g.cur / g.tgt) * 100;
            return (
              <PQCard key={i} theme={theme} inset={false} style={{ padding: 16,
                position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14,
                    background: g.color, color: theme.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: PQ_T.display, fontSize: 22 }}>
                    {g.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: theme.ink,
                      letterSpacing: '-0.01em' }}>{g.l}</div>
                    <div style={{ fontSize: 11, color: theme.mute, marginTop: 2 }}>
                      {g.sub} · {g.due}
                    </div>
                  </div>
                  <span style={{ fontFamily: PQ_T.mono, fontSize: 12,
                    color: theme.mute, fontWeight: 600 }}>{Math.round(pct)}%</span>
                </div>

                <div style={{ marginTop: 12, display: 'flex',
                  justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: PQ_T.display, fontSize: 20, color: theme.ink,
                    letterSpacing: '-0.02em' }}>
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

      <HomeTabBar theme={theme} active="quest" />
    </div>
  );
}

// Criar nova meta — formulário
function GoalCreate({ theme }) {
  return (
    <div style={{ height: '100%', background: theme.bgOff,
      paddingTop: 54, paddingBottom: 28, overflow: 'auto' }}>
      <div style={{ padding: '8px 22px 0' }}>
        {/* Close + title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{ width: 34, height: 34, borderRadius: 17,
            background: theme.bg, border: `0.5px solid ${theme.hair}`,
            color: theme.ink, fontSize: 18, lineHeight: 1 }}>×</button>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: theme.ink }}>Nova meta</span>
          <span style={{ width: 34 }} />
        </div>

        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: theme.mute, fontWeight: 600 }}>Pra quê é essa meta?</div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
            lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 6 }}>
            Viagem · Patagônia
            <span style={{ color: theme.accent, fontSize: 26 }}>|</span>
          </div>
        </div>

        {/* Emoji + categoria */}
        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: theme.gold,
            color: theme.bg, fontSize: 32, display: 'flex',
            alignItems: 'center', justifyContent: 'center' }}>🏔</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['🏖','🛟','🏠','💻','🎮','🎓','🎁','🐾','🚗','✈️','📷','🏺'].map((e) => (
                <span key={e} style={{ width: 30, height: 30, borderRadius: 8,
                  background: theme.bg, border: `0.5px solid ${theme.hair}`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16 }}>{e}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Valor alvo */}
        <div style={{ marginTop: 24, padding: 16, background: theme.bg,
          borderRadius: 16, border: `0.5px solid ${theme.hair}` }}>
          <div style={{ fontSize: 10.5, color: theme.mute, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase' }}>Valor alvo</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
            <span style={{ fontSize: 16, color: theme.mute }}>R$</span>
            <span style={{ fontFamily: PQ_T.display, fontSize: 40, color: theme.ink,
              letterSpacing: '-0.02em' }}>12.000</span>
            <span style={{ color: theme.mute, fontSize: 22 }}>,00</span>
          </div>
        </div>

        {/* Prazo */}
        <div style={{ marginTop: 14, padding: 16, background: theme.bg,
          borderRadius: 16, border: `0.5px solid ${theme.hair}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 10.5, color: theme.mute, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase' }}>Quando você quer alcançar</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 22, color: theme.ink,
              marginTop: 4, letterSpacing: '-0.01em' }}>Novembro · 2026</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10.5, color: theme.mute }}>em</div>
            <div style={{ fontFamily: PQ_T.mono, fontSize: 14, color: theme.ink,
              fontWeight: 600 }}>18 meses</div>
          </div>
        </div>

        {/* Contribuição automática */}
        <div style={{ marginTop: 14, padding: 16, background: theme.ink,
          color: theme.bg, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10.5, opacity: 0.6, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase' }}>Sugestão · todo dia 5</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 28, marginTop: 4,
                letterSpacing: '-0.02em' }}>R$ 500 / mês</div>
            </div>
            <div style={{ width: 44, height: 26, borderRadius: 13,
              background: theme.accent, padding: 3, display: 'flex',
              justifyContent: 'flex-end' }}>
              <div style={{ width: 20, height: 20, borderRadius: 10, background: theme.bg }} />
            </div>
          </div>
          <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 8, lineHeight: 1.4 }}>
            Vou transferir esse valor pro cofre todo mês. Você pode pausar a qualquer hora.
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
            {['R$ 300', 'R$ 500', 'R$ 800', 'Personalizar'].map((v, i) => (
              <PQPill key={i} theme={theme}
                color={theme.bg}
                bg={i === 1 ? theme.accent : 'rgba(255,255,255,0.1)'}
                border="none"
                style={{ fontSize: 11, padding: '5px 12px' }}>{v}</PQPill>
            ))}
          </div>
        </div>

        {/* Reward preview */}
        <div style={{ marginTop: 14, padding: 14, background: theme.bg, borderRadius: 14,
          border: `0.5px solid ${theme.hair}`,
          display: 'flex', alignItems: 'center', gap: 12 }}>
          <ITrophy size={20} />
          <div style={{ flex: 1, fontSize: 12, color: theme.ink, lineHeight: 1.4 }}>
            Você ganha <strong>+800 XP</strong> ao bater a meta e a conquista <em>Viajante Sério</em>.
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ padding: '16px 22px 0' }}>
        <button style={{ width: '100%', height: 52, borderRadius: 26,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 14, fontWeight: 600,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <ICheck size={18} stroke={2.4} /> Criar meta
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { GoalsList, GoalCreate });
