// Web · Metas / Cofrinhos · Recorrências · Investimentos
// Reusa WebSidebar de pq-web-dashboard.jsx; cada tela é 1280×800.

// ─────────────────────────────────────────────────────────────
// Top bar shared
// ─────────────────────────────────────────────────────────────
function WebTopBar({ theme, title, sub, cta }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontFamily: PQ_T.display, fontSize: 26, color: theme.ink,
          letterSpacing: '-0.02em', lineHeight: 1.05 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 4 }}>{sub}</div>
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button style={{ width: 38, height: 38, borderRadius: 10,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ISearch size={15} />
        </button>
        <button style={{ width: 38, height: 38, borderRadius: 10,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IBell size={16} />
        </button>
        {cta && (
          <button style={{ height: 38, borderRadius: 10, background: theme.ink,
            color: theme.bg, border: 'none', padding: '0 16px', fontSize: 13,
            fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <IPlus size={15} stroke={2.2}/> {cta}
          </button>
        )}
      </div>
    </div>
  );
}

// Sets active nav to a given id by overriding WebSidebar render
function WebSidebarActive({ theme, activeLabel }) {
  const nav = [
    { l: 'Início',         I: IWallet,  m: 'Início' },
    { l: 'Lançamentos',    I: IBolt,    m: 'Lançamentos' },
    { l: 'Gastos',         I: IPie,     m: 'Gastos' },
    { l: 'Investimentos',  I: IInvest,  m: 'Investimentos' },
    { l: 'Metas',          I: ITarget,  m: 'Metas' },
    { l: 'Recorrências',   I: IRepeat,  m: 'Recorrências' },
    { l: 'Jornada',        I: ISparkle, m: 'Jornada' },
  ];
  return (
    <div style={{ width: 232, padding: '22px 18px',
      borderRight: `0.5px solid ${theme.hair}`,
      background: theme.bg, display: 'flex', flexDirection: 'column',
      gap: 24, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8,
          background: theme.ink, color: theme.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: PQ_T.display, fontSize: 18, fontWeight: 600 }}>P</div>
        <div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 18, color: theme.ink,
            lineHeight: 1, letterSpacing: '-0.01em' }}>PoupaQuest</div>
          <div style={{ fontSize: 9.5, color: theme.mute, letterSpacing: '0.12em',
            textTransform: 'uppercase', fontWeight: 600, marginTop: 2 }}>Pessoal · maio</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {nav.map((n, i) => {
          const active = n.m === activeLabel;
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '9px 10px', borderRadius: 9,
              background: active ? theme.bgOff : 'transparent',
              color: active ? theme.ink : theme.mute,
              fontSize: 13, fontWeight: active ? 600 : 500,
            }}>
              <n.I size={16} stroke={1.6} />
              <span>{n.l}</span>
            </div>
          );
        })}
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ padding: 14, borderRadius: 14,
        background: theme.bgOff, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: theme.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Poupi size={30} dark={true} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: theme.ink }}>Lívia M.</div>
            <div style={{ fontSize: 10.5, color: theme.mute }}>Nível 7 · Poupador</div>
          </div>
        </div>
        <PQBar pct={73} theme={theme} height={3.5} color={theme.accent} />
        <div style={{ display: 'flex', gap: 6 }}>
          <PQPill theme={theme} bg={theme.bg} style={{ fontSize: 10 }}>
            <IFlame size={10} /> 12d
          </PQPill>
          <PQPill theme={theme} bg={theme.bg} style={{ fontSize: 10 }}>
            <ITrophy size={10} /> 3/24
          </PQPill>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// WEB · METAS
// ─────────────────────────────────────────────────────────────
function WebGoals({ theme }) {
  const goals = [
    { l: 'Reserva de emergência', sub: '6 meses de despesas · meta dez/26',
      cur: 2900, tgt: 18000, mo: 500, emoji: '🛟', color: theme.positive,
      months: 30, kind: 'Reserva' },
    { l: 'Notebook novo', sub: 'MacBook Air M4 · ago/26',
      cur: 4200, tgt: 8500, mo: 400, emoji: '💻', color: theme.accent,
      months: 11, kind: 'Compra' },
    { l: 'Viagem · Patagônia', sub: 'novembro com Lu · nov/26',
      cur: 3850, tgt: 12000, mo: 500, emoji: '🏔', color: theme.gold,
      months: 18, kind: 'Viagem' },
    { l: 'Aula de cerâmica', sub: '8 encontros · jun/26',
      cur: 280, tgt: 720, mo: 220, emoji: '🏺', color: theme.negative,
      months: 2, kind: 'Curso' },
  ];
  const totalSaved = goals.reduce((s,g)=>s+g.cur,0);
  const totalTarget = goals.reduce((s,g)=>s+g.tgt,0);
  const totalMonthly = goals.reduce((s,g)=>s+g.mo,0);

  return (
    <div style={{ height: '100%', background: theme.bgOff,
      display: 'flex', overflow: 'hidden', color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebarActive theme={theme} activeLabel="Metas" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto',
        display: 'flex', flexDirection: 'column', gap: 20 }}>

        <WebTopBar theme={theme}
          title="Cofrinhos & metas"
          sub="4 ativas · próxima a bater: Aula de cerâmica em jun/26"
          cta="Nova meta" />

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20, background: theme.ink,
            color: theme.bg, border: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.16em',
              textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>Total poupado</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 44, lineHeight: 1,
              letterSpacing: '-0.02em', marginTop: 8 }}>
              R$ 11.230<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>,00</span>
            </div>
            <div style={{ marginTop: 12 }}>
              <PQBar pct={(totalSaved/totalTarget)*100} theme={theme} height={4}
                color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
              <div style={{ fontSize: 11, marginTop: 6, opacity: 0.7 }}>
                de R$ {totalTarget.toLocaleString('pt-BR')} · {Math.round((totalSaved/totalTarget)*100)}%
              </div>
            </div>
            <div style={{ position: 'absolute', right: -10, bottom: -10, opacity: 0.16 }}>
              <Poupi size={120} dark />
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Contribuição automática" value={`R$ ${totalMonthly.toLocaleString('pt-BR')}`} />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              4 metas · todo dia 5
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Esse mês" value="+ R$ 420,00" color={theme.positive} />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              ↑ 12% vs abril
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Próxima a bater" value="Cerâmica" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              em 39% · ~50 dias
            </div>
          </PQCard>
        </div>

        {/* Goals + side */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          {/* Goals grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {goals.map((g, i) => {
              const pct = (g.cur / g.tgt) * 100;
              return (
                <PQCard key={i} theme={theme} style={{ padding: 18, position: 'relative',
                  overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16,
                      background: g.color, color: theme.bg, fontSize: 26,
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {g.emoji}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 9.5, fontWeight: 600,
                        color: theme.mute, letterSpacing: '0.1em',
                        textTransform: 'uppercase' }}>{g.kind}</div>
                      <div style={{ fontFamily: PQ_T.display, fontSize: 20,
                        color: theme.ink, lineHeight: 1.1, letterSpacing: '-0.01em',
                        marginTop: 2 }}>{g.l}</div>
                    </div>
                    <span style={{ fontFamily: PQ_T.mono, fontSize: 13,
                      color: theme.mute, fontWeight: 600 }}>{Math.round(pct)}%</span>
                  </div>

                  <div style={{ marginTop: 14, fontFamily: PQ_T.display, fontSize: 28,
                    color: theme.ink, letterSpacing: '-0.02em' }}>
                    R$ {g.cur.toLocaleString('pt-BR')}
                    <span style={{ color: theme.mute, fontSize: 16 }}> / {g.tgt.toLocaleString('pt-BR')}</span>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <PQBar pct={pct} theme={theme} height={5} color={g.color} />
                  </div>
                  <div style={{ marginTop: 12, display: 'flex',
                    justifyContent: 'space-between', alignItems: 'center' }}>
                    <PQPill theme={theme} bg={theme.bgOff} style={{ fontSize: 11 }}>
                      <IRepeat size={11}/> R$ {g.mo}/mês
                    </PQPill>
                    <span style={{ fontSize: 11, color: theme.mute }}>
                      {g.sub.split(' · ').pop()} · ~{g.months} meses
                    </span>
                  </div>
                </PQCard>
              );
            })}
          </div>

          {/* Right rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PQCard theme={theme} style={{ padding: 18 }}>
              <PQEyebrow theme={theme}>Sugestões do Poupi</PQEyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { t: 'Quase lá: cerâmica',  sub: 'Adiantar R$ 100 = bater 2 semanas antes.', I: ISparkle },
                  { t: 'Reserva no foco',     sub: 'Subir contribuição pra R$ 700 = bate em jul/27.', I: ITarget },
                  { t: 'Cancelar Notion',     sub: 'Realocar R$ 49/mês pra viagem.', I: IBolt },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0',
                    borderTop: i > 0 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8,
                      background: theme.bgOff, color: theme.ink,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0 }}>
                      <s.I size={14}/>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{s.t}</div>
                      <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2,
                        lineHeight: 1.4 }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </PQCard>

            <PQCard theme={theme} style={{ padding: 16 }}>
              <PQEyebrow theme={theme}>Conquistas a destravar</PQEyebrow>
              {[
                { l: 'Primeira meta batida', d: 'Bater qualquer meta', I: ITrophy },
                { l: 'Reserva v1',            d: 'R$ 5.000 na reserva', I: ITarget },
                { l: 'Mochileira',            d: 'Bater uma meta de viagem', I: ISparkle },
              ].map((b, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 0',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14,
                    background: theme.bgOff, color: theme.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

// ─────────────────────────────────────────────────────────────
// WEB · RECORRÊNCIAS
// ─────────────────────────────────────────────────────────────
function WebRecurrings({ theme }) {
  // 31-day calendar with charges per day
  const charges = {
    2: [{ l: 'Netflix', v: 39.9, c: '#E50914' }],
    5: [{ l: 'Energia · Enel', v: 142, c: theme.ink }],
    9: [{ l: 'Spotify', v: 21.9, c: '#1ED760' }],
    12: [
      { l: 'iCloud', v: 11.9, c: theme.ink },
      { l: 'Aluguel', v: 1800, c: theme.ink },
    ],
    14: [{ l: 'Renner 4/6', v: 149.9, c: theme.accent }],
    18: [{ l: 'Notion', v: 49, c: theme.ink }],
    20: [{ l: 'Internet · Vivo', v: 99.9, c: theme.ink }],
    26: [{ l: 'Cerâmica 3/8', v: 80, c: theme.accent }],
    28: [{ l: 'Salário', v: 7420, c: theme.positive, pos: true }],
  };

  return (
    <div style={{ height: '100%', background: theme.bgOff,
      display: 'flex', overflow: 'hidden', color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebarActive theme={theme} activeLabel="Recorrências" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto',
        display: 'flex', flexDirection: 'column', gap: 20 }}>
        <WebTopBar theme={theme}
          title="Recorrências"
          sub="Assinaturas, contas fixas e parcelas — em um só lugar"
          cta="Nova recorrência" />

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Compromisso mensal" value="R$ 2.643,40" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              35,6% da renda líquida
            </div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Assinaturas" value="R$ 122,70" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              4 ativas · 1 em revisão
            </div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Contas fixas" value="R$ 2.041,90" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              3 contas · maior: aluguel
            </div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16, background: theme.ink, color: theme.bg, border: 'none' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase',
              opacity: 0.65, fontWeight: 600 }}>Próxima cobrança</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 22, marginTop: 4,
              letterSpacing: '-0.01em' }}>Netflix · R$ 39,90</div>
            <div style={{ fontSize: 11, opacity: 0.7, marginTop: 6 }}>
              em 2 dias · 17 mai · Nubank
            </div>
          </PQCard>
        </div>

        {/* Calendar */}
        <PQCard theme={theme} style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <PQEyebrow theme={theme}>Calendário · maio 2026</PQEyebrow>
            <div style={{ display: 'flex', gap: 4 }}>
              <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6,
                background: theme.ink, color: theme.bg, fontWeight: 600 }}>Mês</span>
              <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6,
                color: theme.mute, fontWeight: 600 }}>Lista</span>
            </div>
          </div>

          {/* week headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6,
            marginTop: 14 }}>
            {['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map((d) => (
              <div key={d} style={{ fontSize: 10, color: theme.mute, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase' }}>{d}</div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6,
            marginTop: 6 }}>
            {/* offset for maio 2026 starts on friday — show 4 empty cells from previous week */}
            {Array.from({ length: 35 }).map((_, idx) => {
              // Map idx 0..34 to day 1..31 — offset 3 (we start may on idx 3)
              const day = idx - 3;
              if (day < 1 || day > 31) {
                return <div key={idx} style={{ height: 76, borderRadius: 6,
                  background: theme.hairSoft, opacity: 0.4 }} />;
              }
              const today = day === 15;
              const list = charges[day] || [];
              return (
                <div key={idx} style={{
                  height: 76, borderRadius: 8, padding: 8,
                  background: today ? theme.ink : theme.bg,
                  color: today ? theme.bg : theme.ink,
                  border: today ? 'none' : `0.5px solid ${theme.hair}`,
                  display: 'flex', flexDirection: 'column', gap: 4,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, fontWeight: 700,
                      fontFamily: PQ_T.mono }}>{day}</span>
                    {today && <span style={{ fontSize: 9, opacity: 0.7, letterSpacing: '0.05em' }}>hoje</span>}
                  </div>
                  {list.slice(0, 2).map((c, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      fontSize: 9.5, fontWeight: 500, lineHeight: 1.2,
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>
                      <span style={{ width: 4, height: 4, borderRadius: 2,
                        background: today ? 'rgba(255,255,255,0.7)' : c.c, flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis',
                        color: c.pos ? theme.positive : (today ? theme.bg : theme.ink) }}>
                        {c.l}
                      </span>
                    </div>
                  ))}
                  {list.length > 2 && (
                    <span style={{ fontSize: 9, opacity: 0.7 }}>+ {list.length-2}</span>
                  )}
                </div>
              );
            })}
          </div>
        </PQCard>

        {/* Lists */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
          {/* Assinaturas */}
          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ 122,70</span>
            }>Assinaturas</PQEyebrow>
            {[
              { l: 'Netflix',  v: 39.9, c: '#E50914', use: 'usa direto', ok: true },
              { l: 'Spotify',  v: 21.9, c: '#1ED760', use: 'diário',     ok: true, dark: true },
              { l: 'iCloud',   v: 11.9, c: '#0A1F44', use: '94GB de 200', ok: true },
              { l: 'Notion',   v: 49.0, c: '#1A1A1A', use: '2 vezes em abril', ok: false },
            ].map((s, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.c,
                  color: s.dark ? '#000' : '#fff', flexShrink: 0,
                  fontFamily: PQ_T.display, fontWeight: 700, fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.l[0]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{s.l}</div>
                  <div style={{ fontSize: 10.5, color: s.ok ? theme.mute : theme.negative,
                    marginTop: 2 }}>{s.use}</div>
                </div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>
                  R$ {s.v.toFixed(2)}
                </div>
              </div>
            ))}
          </PQCard>

          {/* Contas fixas */}
          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ 2.041,90</span>
            }>Contas fixas</PQEyebrow>
            {[
              { l: 'Aluguel',         v: 1800, k: 'moradia', d: 'dia 12' },
              { l: 'Internet · Vivo', v: 99.9, k: 'moradia', d: 'dia 20' },
              { l: 'Energia · Enel',  v: 142,  k: 'moradia', d: 'dia 26 · variável' },
            ].map((f, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <PQCatChip catKey={f.k} theme={theme} size={32} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{f.l}</div>
                  <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{f.d}</div>
                </div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>
                  R$ {f.v.toLocaleString('pt-BR', {minimumFractionDigits:2})}
                </div>
              </div>
            ))}
          </PQCard>

          {/* Parcelas */}
          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ 229,90</span>
            }>Parcelas em aberto</PQEyebrow>
            {[
              { l: 'Renner · jaqueta',   v: 149.9, k: 'compras',  cur: 3, tot: 6 },
              { l: 'Curso · cerâmica',   v: 80,    k: 'educacao', cur: 2, tot: 8 },
            ].map((p, i, a) => (
              <div key={i} style={{ padding: '10px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <PQCatChip catKey={p.k} theme={theme} size={32} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{p.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2,
                      fontFamily: PQ_T.mono }}>parcela {p.cur} de {p.tot}</div>
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>
                    R$ {p.v.toLocaleString('pt-BR', {minimumFractionDigits:2})}
                  </div>
                </div>
                <div style={{ marginTop: 8, display: 'flex', gap: 3 }}>
                  {Array.from({ length: p.tot }).map((_, k) => (
                    <div key={k} style={{ flex: 1, height: 3, borderRadius: 2,
                      background: k < p.cur ? theme.ink : theme.hair }} />
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 8, padding: 10,
              background: theme.bgOff, borderRadius: 10,
              fontSize: 10.5, color: theme.ink, lineHeight: 1.4 }}>
              <strong>R$ 1.039,10</strong> em parcelas a quitar até nov/26
            </div>
          </PQCard>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// WEB · INVESTIMENTOS
// ─────────────────────────────────────────────────────────────
function WebInvestments({ theme }) {
  // 12-month patrimony line
  const series = [
    24800, 25100, 25400, 25700, 26200, 26500, 26800, 27300, 27600,
    27900, 28100, 28450,
  ];
  const min = Math.min(...series), max = Math.max(...series);
  const W = 760, H = 200;
  const pts = series.map((v, i) => {
    const x = (i / (series.length-1)) * W;
    const y = H - ((v - min) / (max - min)) * (H - 30) - 10;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div style={{ height: '100%', background: theme.bgOff,
      display: 'flex', overflow: 'hidden', color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebarActive theme={theme} activeLabel="Investimentos" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto',
        display: 'flex', flexDirection: 'column', gap: 20 }}>
        <WebTopBar theme={theme}
          title="Investimentos"
          sub="Carteira diversificada · rentab. acumulada 9,4% no ano"
          cta="Nova aplicação" />

        {/* Hero KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20, background: theme.ink,
            color: theme.bg, border: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.16em',
              textTransform: 'uppercase', opacity: 0.6, fontWeight: 600 }}>Patrimônio investido</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 48, lineHeight: 1,
              letterSpacing: '-0.02em', marginTop: 8 }}>
              R$ 28.450<span style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)' }}>,32</span>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 14,
              fontSize: 11.5, opacity: 0.9 }}>
              <span style={{ color: theme.bg }}>↑ R$ 312,40 (1,11%) · mês</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span style={{ color: theme.bg }}>+ R$ 2.450 ano · 9,4%</span>
            </div>
            <div style={{ position: 'absolute', right: 18, top: 18, opacity: 0.85 }}>
              <Poupi size={42} dark />
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Renda passiva · mês" value="R$ 218,30" color={theme.positive} />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              dividendos + juros
            </div>
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
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>
              dia 5 · automático
            </div>
          </PQCard>
        </div>

        {/* Chart + allocation */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <PQEyebrow theme={theme}>Evolução · 12 meses</PQEyebrow>
              <div style={{ display: 'flex', gap: 6 }}>
                {['1m','3m','6m','1a','tudo'].map((p, i) => (
                  <div key={p} style={{
                    padding: '5px 10px', borderRadius: 7, fontSize: 11,
                    background: i === 3 ? theme.ink : 'transparent',
                    color: i === 3 ? theme.bg : theme.mute,
                    fontWeight: 600,
                  }}>{p}</div>
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
                {/* grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                  <line key={i} x1="0" y1={H*p} x2={W} y2={H*p}
                    stroke={theme.hairSoft} strokeWidth="0.5" />
                ))}
                <polygon points={`0,${H} ${pts} ${W},${H}`} fill="url(#invWebFill)" />
                <polyline points={pts} fill="none" stroke={theme.accent} strokeWidth="2" />
                {series.map((v, i) => {
                  const x = (i / (series.length-1)) * W;
                  const y = H - ((v - min) / (max - min)) * (H - 30) - 10;
                  return <circle key={i} cx={x} cy={y} r="2.5" fill={theme.bg} stroke={theme.accent} strokeWidth="1.5"/>;
                })}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                fontSize: 10.5, color: theme.mute, marginTop: 8, fontFamily: PQ_T.mono }}>
                {['mai 25','jul','set','nov','jan 26','mar','mai'].map((m) => <span key={m}>{m}</span>)}
              </div>
            </div>
          </PQCard>

          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme}>Composição</PQEyebrow>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6 }}>
              <div style={{ width: 130, height: 130, borderRadius: 65, flexShrink: 0,
                background: `conic-gradient(
                  ${theme.ink} 0 50%,
                  ${theme.accent} 50% 75%,
                  ${theme.gold} 75% 90%,
                  ${theme.positive} 90% 100%)`,
                position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 18, borderRadius: 60,
                  background: theme.bg, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, color: theme.mute, letterSpacing: '0.1em',
                    textTransform: 'uppercase', fontWeight: 600 }}>Rent. ano</span>
                  <span style={{ fontFamily: PQ_T.display, fontSize: 24, color: theme.positive }}>
                    +9,4%
                  </span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                {[
                  { k: 'Renda fixa', c: theme.ink, pct: 50, v: 14200 },
                  { k: 'FIIs', c: theme.accent, pct: 25, v: 7100 },
                  { k: 'ETFs', c: theme.gold, pct: 15, v: 4250 },
                  { k: 'Reserva', c: theme.positive, pct: 10, v: 2900 },
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8,
                    padding: '4px 0' }}>
                    <div style={{ width: 8, height: 8, borderRadius: 4, background: a.c }} />
                    <div style={{ flex: 1, fontSize: 11.5, color: theme.ink, fontWeight: 500 }}>
                      {a.k}
                    </div>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 10.5, color: theme.mute }}>
                      {a.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PQCard>
        </div>

        {/* Holdings + side */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              padding: '16px 20px', borderBottom: `0.5px solid ${theme.hairSoft}` }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Aplicações</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Tudo','Renda fixa','FIIs','ETFs'].map((f, i) => (
                  <span key={f} style={{ fontSize: 11.5, fontWeight: 500,
                    color: i === 0 ? theme.ink : theme.mute,
                    borderBottom: i === 0 ? `1.5px solid ${theme.ink}` : '1.5px solid transparent',
                    paddingBottom: 2 }}>{f}</span>
                ))}
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse',
              fontSize: 12.5, color: theme.ink }}>
              <thead>
                <tr style={{ color: theme.mute, fontSize: 10, letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontWeight: 600 }}>
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
                  <tr key={i} style={{
                    borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                    <td style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 6, height: 28, borderRadius: 3, background: r.c }} />
                      <span style={{ fontWeight: 500 }}>{r.n}</span>
                    </td>
                    <td style={{ color: theme.mute }}>{r.k}</td>
                    <td style={{ textAlign: 'right', padding: '12px',
                      fontFamily: PQ_T.mono, fontWeight: 500 }}>
                      R$ {r.v.toLocaleString('pt-BR')}
                    </td>
                    <td style={{ textAlign: 'right', padding: '12px',
                      fontFamily: PQ_T.mono,
                      color: r.m >= 0 ? theme.positive : theme.negative }}>
                      {r.m >= 0 ? '↑' : '↓'} {Math.abs(r.m).toFixed(1)}%
                    </td>
                    <td style={{ textAlign: 'right', padding: '12px',
                      fontFamily: PQ_T.mono, color: theme.positive }}>
                      + {r.t.toFixed(1)}%
                    </td>
                    <td style={{ textAlign: 'right', padding: '12px 20px',
                      fontFamily: PQ_T.mono, color: theme.mute }}>
                      {r.p}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </PQCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PQCard theme={theme} style={{ padding: 18 }}>
              <PQEyebrow theme={theme}>Calendário de proventos</PQEyebrow>
              {[
                { d: '17 mai · sex',  src: 'HGLG11',     v: 27.54, est: true },
                { d: '24 mai · sex',  src: 'XPLG11',     v: 22.10, est: true },
                { d: '01 jun · seg',  src: 'CDB Inter',  v: 41.20 },
                { d: '15 jun · seg',  src: 'Tesouro',    v: 68.40 },
              ].map((p, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 0',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10,
                    background: theme.bgOff, color: theme.ink,
                    fontFamily: PQ_T.display, fontSize: 13, fontWeight: 600,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 8.5, opacity: 0.6, lineHeight: 1 }}>{p.d.split(' ')[1]}</span>
                    <span style={{ lineHeight: 1, marginTop: 2 }}>{p.d.split(' ')[0]}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{p.src}
                      {p.est && <span style={{ marginLeft: 6, padding: '1px 5px',
                        borderRadius: 4, background: theme.bgOff, fontSize: 8.5,
                        color: theme.mute, fontWeight: 600, letterSpacing: '0.06em' }}>EST</span>}
                    </div>
                    <div style={{ fontSize: 10, color: theme.mute }}>{p.d.split(' ').slice(2).join(' ')}</div>
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 12, color: theme.positive,
                    fontWeight: 600 }}>+ R$ {p.v.toFixed(2)}</div>
                </div>
              ))}
            </PQCard>

            <PQCard theme={theme} style={{ padding: 16, background: theme.bgOff }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Poupi size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: theme.ink,
                    lineHeight: 1.4 }}>Diversificação OK</div>
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

Object.assign(window, { WebGoals, WebRecurrings, WebInvestments, WebTopBar, WebSidebarActive });
