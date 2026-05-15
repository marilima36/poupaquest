// Mobile · Jornada (mapa) + Missões / Conquistas
// Mapa vertical de capítulos; cada capítulo abre quests.

function JourneyMap({ theme }) {
  const chapters = [
    { id: 1, title: 'Primeiro mês organizado', status: 'done',
      sub: 'Você registrou 30 dias seguidos', xp: 400 },
    { id: 2, title: 'Domando o delivery', status: 'done',
      sub: 'Reduziu gastos em 38%', xp: 320 },
    { id: 3, title: 'Mestre do Mercado', status: 'active',
      sub: '4 de 6 missões · 2 dias restantes', xp: 540,
      missions: [
        { l: 'Manter mercado abaixo de R$ 600', done: true },
        { l: 'Comprar fora dos horários de pico', done: true },
        { l: 'Lista antes de cada compra', done: false, pct: 70 },
        { l: '0 desperdícios na semana', done: false, pct: 20 },
      ]
    },
    { id: 4, title: 'A reserva começa aqui', status: 'locked',
      sub: 'Desbloqueia ao concluir o capítulo 3', xp: 800 },
    { id: 5, title: 'Investidor iniciante', status: 'locked',
      sub: 'Primeiros R$ 1.000 em renda fixa', xp: 1200 },
  ];

  return (
    <div style={{ height: '100%', background: theme.bgOff,
      paddingTop: 54, paddingBottom: 90, overflow: 'auto' }}>
      {/* Hero */}
      <div style={{ padding: '14px 22px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: theme.mute, fontWeight: 600 }}>Sua jornada</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
              letterSpacing: '-0.02em', lineHeight: 1.05, marginTop: 4 }}>
              Mestre do Mercado
            </div>
            <div style={{ fontSize: 12, color: theme.mute, marginTop: 4 }}>
              Capítulo 3 de 12 · nível 7
            </div>
          </div>
          <Poupi size={56} />
        </div>

        {/* Overall progress */}
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
          <PQXpRing size={62} pct={26} level={7} theme={theme} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: theme.mute, marginBottom: 4 }}>
              26% concluído · 660 / 2.500 XP
            </div>
            <PQBar pct={26} theme={theme} height={5} color={theme.accent} />
          </div>
        </div>
      </div>

      {/* Chapter timeline */}
      <div style={{ padding: '4px 22px 0', position: 'relative' }}>
        {/* connecting line */}
        <div style={{ position: 'absolute', left: 44, top: 22, bottom: 22,
          width: 1.5, background: `repeating-linear-gradient(to bottom, ${theme.hair} 0 4px, transparent 4px 8px)` }} />

        {chapters.map((c, idx) => {
          const isActive = c.status === 'active';
          const isDone = c.status === 'done';
          const isLocked = c.status === 'locked';
          return (
            <div key={c.id} style={{ display: 'flex', gap: 14, position: 'relative',
              marginBottom: 14 }}>
              {/* node */}
              <div style={{
                width: 44, height: 44, borderRadius: 22, flexShrink: 0,
                background: isDone ? theme.positive : isActive ? theme.ink : theme.hairSoft,
                color: isDone || isActive ? theme.bg : theme.mute,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 1,
                boxShadow: isActive ? `0 0 0 6px ${theme.bg}, 0 0 0 7px ${theme.ink}` : 'none',
              }}>
                {isDone && <ICheck size={20} stroke={2.4} />}
                {isActive && <span style={{ fontFamily: PQ_T.display, fontSize: 20 }}>{c.id}</span>}
                {isLocked && <ILock size={16} />}
              </div>

              {/* card */}
              <div style={{ flex: 1 }}>
                <PQCard theme={theme} inset={false} style={{
                  padding: 14,
                  background: isActive ? theme.ink : theme.bg,
                  color: isActive ? theme.bg : theme.ink,
                  border: isActive ? 'none' : `0.5px solid ${theme.hair}`,
                  opacity: isLocked ? 0.6 : 1,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10.5, letterSpacing: '0.14em',
                        textTransform: 'uppercase', fontWeight: 600,
                        opacity: 0.6 }}>
                        Capítulo {c.id}
                      </div>
                      <div style={{ fontFamily: PQ_T.display, fontSize: 18,
                        letterSpacing: '-0.01em', marginTop: 2 }}>{c.title}</div>
                      <div style={{ fontSize: 11.5, marginTop: 4, opacity: 0.75 }}>
                        {c.sub}
                      </div>
                    </div>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 11,
                      opacity: 0.8, paddingLeft: 8 }}>
                      +{c.xp} XP
                    </div>
                  </div>

                  {isActive && c.missions && (
                    <div style={{ marginTop: 12, paddingTop: 12,
                      borderTop: `0.5px solid rgba(255,255,255,0.12)` }}>
                      {c.missions.map((m, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center',
                          gap: 10, padding: '6px 0' }}>
                          <div style={{ width: 16, height: 16, borderRadius: 8,
                            border: `1.5px solid rgba(255,255,255,0.4)`,
                            background: m.done ? theme.accent : 'transparent',
                            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {m.done && <ICheck size={10} stroke={3} />}
                          </div>
                          <div style={{ flex: 1, fontSize: 12.5,
                            opacity: m.done ? 0.6 : 1,
                            textDecoration: m.done ? 'line-through' : 'none' }}>{m.l}</div>
                          {!m.done && m.pct !== undefined && (
                            <div style={{ width: 50 }}>
                              <PQBar pct={m.pct} theme={theme} height={3}
                                color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </PQCard>
              </div>
            </div>
          );
        })}
      </div>

      <HomeTabBar theme={theme} active="quest" />
    </div>
  );
}

// Missões + Conquistas (grid de badges)
function MissionsAndAchievements({ theme }) {
  const badges = [
    { l: 'Primeiro passo',  sub: 'Registrou 1º gasto', got: true,  icon: ISparkle },
    { l: 'Maratona 7',      sub: '7 dias seguidos',    got: true,  icon: IFlame },
    { l: 'Mestre Mercado',  sub: '3 meses no orçamento', got: true, icon: ITrophy },
    { l: 'Anti-delivery',   sub: 'Mês sem iFood',      got: false, icon: IFood, lock: true },
    { l: 'Cofre cheio',     sub: 'R$ 1.000 guardados', got: false, icon: ITarget },
    { l: 'Investidor v1',   sub: 'Primeira aplicação', got: false, icon: IInvest, lock: true },
    { l: 'Disciplinado',    sub: '30 dias de streak',  got: false, icon: ICheck },
    { l: 'Lvl 10',          sub: 'Alcance o nível 10', got: false, icon: ISparkle, lock: true },
  ];

  return (
    <div style={{ height: '100%', background: theme.bg,
      paddingTop: 54, paddingBottom: 90, overflow: 'auto' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10, marginTop: 18 }}>
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} style={{
                aspectRatio: '1', borderRadius: 14,
                background: b.got ? theme.ink : theme.bgOff,
                color: b.got ? theme.bg : theme.mute,
                padding: 10, display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: b.lock ? 0.45 : 1,
                position: 'relative',
                border: b.got ? 'none' : `0.5px solid ${theme.hair}`,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 18,
                  background: b.got ? theme.accent : theme.bg,
                  color: b.got ? theme.bg : theme.mute,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
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

        {/* Missões semana */}
        <div style={{ marginTop: 24 }}>
          <PQEyebrow theme={theme} right={
            <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>2 / 5</span>
          }>Missões da semana</PQEyebrow>

          {[
            { t: 'Registrar lançamento todo dia', pct: 71, xp: 50, done: false, sub: '5 de 7 dias' },
            { t: 'Manter mercado ≤ R$ 600',       pct: 68, xp: 150, done: false, sub: 'R$ 412 / 600' },
            { t: 'Adicionar 1 categoria favorita', pct: 100, xp: 30, done: true,  sub: 'Concluído' },
          ].map((m, i, a) => (
            <div key={i} style={{
              padding: '14px 0', borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 22, height: 22, borderRadius: 11,
                border: `1.5px solid ${m.done ? theme.positive : theme.mute}`,
                background: m.done ? theme.positive : 'transparent',
                color: theme.bg, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{m.done && <ICheck size={12} stroke={3}/>}</div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink,
                  textDecoration: m.done ? 'line-through' : 'none',
                  opacity: m.done ? 0.55 : 1 }}>{m.t}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  fontSize: 10.5, color: theme.mute, marginTop: 4 }}>
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

      <HomeTabBar theme={theme} active="quest" />
    </div>
  );
}

Object.assign(window, { JourneyMap, MissionsAndAchievements });
