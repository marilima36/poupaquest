// Mobile · Onboarding — 4 telas.
// Welcome → Renda + Orçamento → Contas → Primeira missão

// Generic onboarding chrome: page indicator + skip
function OBStep({ theme, idx, total, children, bg }) {
  return (
    <div style={{ height: '100%', background: bg || theme.bgOff, position: 'relative',
      paddingTop: 54, paddingBottom: 28, display: 'flex', flexDirection: 'column' }}>
      {/* dots */}
      <div style={{ display: 'flex', gap: 6, padding: '14px 22px 0' }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            height: 3, borderRadius: 2, flex: i === idx ? 2 : 1,
            background: i <= idx ? theme.ink : theme.hair,
            transition: 'all .25s',
          }} />
        ))}
      </div>
      {children}
    </div>
  );
}

// ── 1 · Welcome ──
function OB1Welcome({ theme }) {
  return (
    <OBStep theme={theme} idx={0} total={4} bg={theme.ink}>
      <div style={{ flex: 1, padding: '0 28px',
        color: theme.bg, position: 'relative', display: 'flex',
        flexDirection: 'column', justifyContent: 'space-between' }}>

        {/* deco */}
        <div style={{ position: 'absolute', top: 60, right: -40, width: 240, height: 240,
          borderRadius: 120,
          background: `radial-gradient(circle, ${theme.accent}55 0%, transparent 60%)`,
          pointerEvents: 'none' }} />

        <div style={{ position: 'relative', marginTop: 24 }}>
          <div style={{ display: 'inline-block',
            padding: '6px 12px', borderRadius: 100,
            background: 'rgba(255,255,255,0.1)',
            fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            fontWeight: 600 }}>Olá, viajante</div>
        </div>

        <div style={{ position: 'relative', textAlign: 'center', marginTop: -40 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <div style={{ width: 140, height: 140, borderRadius: 70, background: theme.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 24px 60px ${theme.accent}44` }}>
              <Poupi size={120} />
            </div>
          </div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 44, lineHeight: 1.0,
            letterSpacing: '-0.03em' }}>
            Suas finanças<br/>como uma <em>jornada</em>.
          </div>
          <div style={{ fontSize: 14, opacity: 0.7, marginTop: 14, lineHeight: 1.5 }}>
            Sou Poupi. Vou te ajudar a poupar com missões<br/>diárias, conquistas e um plano que faz sentido.
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <button style={{
            width: '100%', height: 52, borderRadius: 26,
            background: theme.bg, color: theme.ink, border: 'none',
            fontSize: 14, fontWeight: 600,
          }}>Começar minha jornada</button>
          <div style={{ textAlign: 'center', fontSize: 12, opacity: 0.6, marginTop: 14 }}>
            Já tenho conta · <span style={{ textDecoration: 'underline' }}>entrar</span>
          </div>
        </div>
      </div>
    </OBStep>
  );
}

// ── 2 · Renda + Orçamento ──
function OB2Budget({ theme }) {
  return (
    <OBStep theme={theme} idx={1} total={4}>
      <div style={{ padding: '14px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: theme.mute, fontWeight: 600 }}>Passo 2 · Renda</div>
        <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
          lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 6 }}>
          Quanto você recebe<br/>por mês, em média?
        </div>
        <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 8, lineHeight: 1.4 }}>
          Usamos isso pra sugerir limites por categoria. Você pode ajustar a qualquer momento.
        </div>

        {/* Big input */}
        <div style={{ marginTop: 32, padding: '22px 18px',
          background: theme.bg, borderRadius: 18,
          border: `0.5px solid ${theme.hair}` }}>
          <div style={{ fontSize: 10.5, color: theme.mute, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>Renda líquida mensal</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
            <span style={{ fontSize: 16, color: theme.mute, fontWeight: 500 }}>R$</span>
            <span style={{ fontFamily: PQ_T.display, fontSize: 44, color: theme.ink,
              letterSpacing: '-0.02em' }}>7.420</span>
            <span style={{ color: theme.accent, fontSize: 32 }}>|</span>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
            {['3.000', '5.000', '7.500', '10.000'].map((v) => (
              <PQPill key={v} theme={theme} bg={theme.bgOff}
                style={{ fontSize: 11, padding: '5px 10px' }}>R$ {v}</PQPill>
            ))}
          </div>
        </div>

        {/* Suggested budget allocation */}
        <div style={{ marginTop: 22 }}>
          <PQEyebrow theme={theme} right={
            <span style={{ color: theme.accent, fontSize: 11, fontWeight: 600 }}>ajustar →</span>
          }>Orçamento sugerido · 50/30/20</PQEyebrow>
          <PQCard theme={theme} inset={false} style={{ padding: 14 }}>
            {[
              { l: 'Essenciais', sub: 'moradia, mercado, transporte', v: 3710, c: theme.ink, pct: 50 },
              { l: 'Desejos', sub: 'lazer, compras, assinaturas', v: 2226, c: theme.accent, pct: 30 },
              { l: 'Poupar e investir', sub: 'cofre + aplicações', v: 1484, c: theme.positive, pct: 20 },
            ].map((r, i, a) => (
              <div key={i} style={{ padding: '10px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{r.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{r.sub}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 13, color: theme.ink,
                      fontWeight: 500 }}>R$ {r.v.toLocaleString('pt-BR')}</div>
                    <div style={{ fontSize: 10, color: theme.mute,
                      fontFamily: PQ_T.mono }}>{r.pct}%</div>
                  </div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <PQBar pct={r.pct * 2} theme={theme} height={3} color={r.c} />
                </div>
              </div>
            ))}
          </PQCard>
        </div>
      </div>

      {/* footer */}
      <div style={{ padding: '0 24px', display: 'flex', gap: 10, marginTop: 14 }}>
        <button style={{ width: 52, height: 52, borderRadius: 26,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, transform: 'rotate(180deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IChevR size={18} />
        </button>
        <button style={{ flex: 1, height: 52, borderRadius: 26,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 14, fontWeight: 600 }}>Continuar</button>
      </div>
    </OBStep>
  );
}

// ── 3 · Conectar contas ──
function OB3Connect({ theme }) {
  const banks = [
    { l: 'Itaú',    color: '#FF6900', selected: true },
    { l: 'Nubank',  color: '#820AD1' },
    { l: 'Inter',   color: '#FF7A00', selected: true },
    { l: 'C6 Bank', color: '#1A1A1A' },
    { l: 'Banco do Brasil', color: '#FFEF38', dark: true },
    { l: 'Bradesco', color: '#CC092F' },
    { l: 'Santander', color: '#EC0000' },
    { l: 'XP Inc.', color: '#FFC72C', dark: true },
    { l: 'Outro',   color: theme.bgOff, dark: true },
  ];
  return (
    <OBStep theme={theme} idx={2} total={4}>
      <div style={{ padding: '14px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: theme.mute, fontWeight: 600 }}>Passo 3 · Contas</div>
        <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
          lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 6 }}>
          Onde estão<br/>suas contas?
        </div>
        <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 8, lineHeight: 1.4 }}>
          Conecte via Open Finance — leitura apenas. Você pode também lançar manualmente.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
          marginTop: 22 }}>
          {banks.map((b, i) => (
            <div key={i} style={{
              aspectRatio: '1', borderRadius: 16,
              background: b.selected ? theme.ink : theme.bg,
              border: b.selected ? 'none' : `0.5px solid ${theme.hair}`,
              padding: 12, display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', position: 'relative',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 16,
                background: b.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: b.dark ? '#000' : '#fff', fontFamily: PQ_T.display, fontSize: 14,
                fontWeight: 700 }}>
                {b.l[0]}
              </div>
              <div style={{ fontSize: 11.5, fontWeight: 600,
                color: b.selected ? theme.bg : theme.ink }}>{b.l}</div>
              {b.selected && (
                <div style={{ position: 'absolute', top: 8, right: 8,
                  width: 18, height: 18, borderRadius: 9, background: theme.accent,
                  color: theme.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center' }}>
                  <ICheck size={11} stroke={3} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, padding: 14, background: theme.bg,
          borderRadius: 14, border: `0.5px solid ${theme.hair}`,
          display: 'flex', alignItems: 'center', gap: 10 }}>
          <ILock size={16} />
          <div style={{ fontSize: 11.5, color: theme.mute, flex: 1 }}>
            Conexão segura via Open Finance. Você pode desconectar a qualquer momento.
          </div>
        </div>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', gap: 10, marginTop: 14 }}>
        <button style={{ flex: 1, height: 52, borderRadius: 26,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, fontSize: 13, fontWeight: 600 }}>Lançar manual</button>
        <button style={{ flex: 1.5, height: 52, borderRadius: 26,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 14, fontWeight: 600 }}>Conectar 2 contas →</button>
      </div>
    </OBStep>
  );
}

// ── 4 · Primeira missão ──
function OB4Quest({ theme }) {
  const options = [
    { l: 'Registrar gastos por 7 dias seguidos', sub: 'Construa o hábito · +120 XP', sel: true, I: IFlame },
    { l: 'Manter o mercado abaixo de R$ 600',    sub: 'Sua principal categoria · +150 XP', I: IMarket },
    { l: 'Guardar R$ 200 no cofre',              sub: 'Comece a poupar · +200 XP', I: ITarget },
  ];
  return (
    <OBStep theme={theme} idx={3} total={4}>
      <div style={{ padding: '14px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: theme.mute, fontWeight: 600 }}>Passo 4 · Missão zero</div>
        <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
          lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 6 }}>
          Escolha sua<br/>primeira missão.
        </div>
        <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 8, lineHeight: 1.4 }}>
          Uma de cada vez. A jornada se desbloqueia conforme você avança.
        </div>

        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {options.map((o, i) => (
            <div key={i} style={{
              padding: 16, borderRadius: 18,
              background: o.sel ? theme.ink : theme.bg,
              color: o.sel ? theme.bg : theme.ink,
              border: o.sel ? 'none' : `0.5px solid ${theme.hair}`,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 22,
                background: o.sel ? 'rgba(255,255,255,0.12)' : theme.bgOff,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <o.I size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{o.l}</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 3 }}>{o.sub}</div>
              </div>
              <div style={{ width: 20, height: 20, borderRadius: 10,
                border: o.sel ? 'none' : `1.5px solid ${theme.hair}`,
                background: o.sel ? theme.accent : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {o.sel && <ICheck size={12} stroke={3} />}
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ marginTop: 16, padding: 14, background: theme.bg,
          borderRadius: 14, border: `0.5px solid ${theme.hair}`,
          display: 'flex', alignItems: 'center', gap: 10 }}>
          <Poupi size={36} />
          <div style={{ fontSize: 11.5, color: theme.mute, flex: 1, lineHeight: 1.4 }}>
            "Vamos começar leve — depois você desbloqueia missões maiores."
          </div>
        </div>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', gap: 10, marginTop: 14 }}>
        <button style={{ flex: 1, height: 52, borderRadius: 26,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 14, fontWeight: 600,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <ISparkle size={16} /> Aceitar missão · começar
        </button>
      </div>
    </OBStep>
  );
}

Object.assign(window, { OB1Welcome, OB2Budget, OB3Connect, OB4Quest });
