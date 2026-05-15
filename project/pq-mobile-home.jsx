// Mobile · Home — 3 variations.
// A — Neo-bank classic   B — Editorial    C — Gamified-forward

// Shared header bar (status-bar safe top padding handled by IOSDevice)
function HomeHeader({ theme, name = 'Lívia', level = 7, xp = 64 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 22px 0' }}>
      <div>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: theme.mute, fontWeight: 600 }}>PoupaQuest</div>
        <div style={{ fontFamily: PQ_T.sans, fontSize: 19, fontWeight: 600, color: theme.ink,
          letterSpacing: '-0.01em', marginTop: 2 }}>Bom dia, {name}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 38, height: 38, borderRadius: 19, border: `0.5px solid ${theme.hair}`,
          background: theme.bg, color: theme.ink, display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center' }}>
          <IBell size={18} stroke={1.6} />
        </button>
        <div style={{ position: 'relative' }}>
          <PQXpRing size={42} pct={xp} level={level} theme={theme} />
        </div>
      </div>
    </div>
  );
}

// Bottom tab bar
function HomeTabBar({ theme, active = 'home' }) {
  const tabs = [
    { id: 'home', label: 'Início', Icon: IWallet },
    { id: 'cat',  label: 'Gastos', Icon: IPie },
    { id: 'add',  label: '',       Icon: IPlus, fab: true },
    { id: 'quest',label: 'Jornada',Icon: ITarget },
    { id: 'inv',  label: 'Invest', Icon: IInvest },
  ];
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '8px 14px 22px',
      background: `linear-gradient(to top, ${theme.bg} 70%, transparent)`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      borderTop: `0.5px solid ${theme.hair}`,
    }}>
      {tabs.map((t) => t.fab ? (
        <button key={t.id} style={{
          width: 56, height: 56, borderRadius: 28, background: theme.ink,
          color: theme.bg, border: 'none', boxShadow: `0 8px 20px ${theme.ink}40, 0 2px 0 ${theme.accent}`,
          marginTop: -28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <IPlus size={26} stroke={2.2} />
        </button>
      ) : (
        <button key={t.id} style={{
          background: 'none', border: 'none', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 3, padding: '4px 8px',
          color: active === t.id ? theme.ink : theme.mute,
        }}>
          <t.Icon size={20} stroke={1.6} />
          <span style={{ fontSize: 9.5, fontWeight: 500, letterSpacing: '0.02em' }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Home A — Neo-bank classic
// ─────────────────────────────────────────────────────────────
function HomeA({ theme }) {
  return (
    <div style={{ height: '100%', background: theme.bgOff, position: 'relative',
      paddingTop: 54, paddingBottom: 90, overflow: 'hidden' }}>
      <HomeHeader theme={theme} />

      <div style={{ padding: '18px 22px 0' }}>
        {/* Saldo */}
        <div>
          <PQEyebrow theme={theme} right={
            <span style={{ fontSize: 10.5, color: theme.positive, fontWeight: 600 }}>
              ↑ 12% vs mês passado
            </span>
          }>Saldo disponível</PQEyebrow>
          <PQAmount value={4287.4} theme={theme} size={54} />
          <div style={{ marginTop: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              fontSize: 11, color: theme.mute, marginBottom: 6 }}>
              <span>Orçamento usado</span>
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>62% · R$ 2.612</span>
            </div>
            <PQBar pct={62} theme={theme} color={theme.ink} />
          </div>
        </div>

        {/* Quick categories */}
        <div style={{ marginTop: 22 }}>
          <PQEyebrow theme={theme} right={<span style={{ color: theme.accent }}>Ver todas →</span>}>Limites do mês</PQEyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {[
              { k: 'mercado',  used: 412, lim: 600 },
              { k: 'alimentacao', used: 318, lim: 350 },
              { k: 'lazer',    used: 96, lim: 200 },
            ].map((c) => {
              const pct = (c.used/c.lim) * 100;
              const danger = pct > 85;
              return (
                <PQCard key={c.k} theme={theme} inset={false} style={{ padding: 12 }}>
                  <PQCatChip catKey={c.k} theme={theme} size={30} />
                  <div style={{ marginTop: 10, fontSize: 11, color: theme.mute, fontWeight: 500 }}>
                    {PQ_CATS[c.k].short}
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 12, color: theme.ink,
                    fontWeight: 500, marginTop: 2 }}>
                    {Math.round(c.used)}<span style={{ color: theme.mute }}>/{c.lim}</span>
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <PQBar pct={pct} theme={theme} height={4}
                      color={danger ? theme.negative : theme.ink} />
                  </div>
                </PQCard>
              );
            })}
          </div>
        </div>

        {/* Active mission card */}
        <PQCard theme={theme} style={{ marginTop: 18, padding: 16,
          background: theme.ink, color: theme.bg, border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <PQPill theme={theme} color={theme.bg}
              bg={'rgba(255,255,255,0.1)'} border="none">
              <IFlame size={11} /> Streak 12 dias
            </PQPill>
            <span style={{ fontFamily: PQ_T.mono, fontSize: 11, opacity: 0.75 }}>+ 120 XP</span>
          </div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 22, lineHeight: 1.1,
            marginTop: 14, letterSpacing: '-0.01em' }}>
            Semana sem delivery
          </div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
            Faltam 2 dias · 5/7 dias cumpridos
          </div>
          <div style={{ marginTop: 12 }}>
            <PQBar pct={71} theme={theme} height={5}
              color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
          </div>
        </PQCard>

        {/* Recent transactions */}
        <div style={{ marginTop: 22 }}>
          <PQEyebrow theme={theme} right={<span style={{ color: theme.accent }}>Tudo →</span>}>Hoje</PQEyebrow>
          <PQCard theme={theme} inset={false}>
            {[
              { cat: 'alimentacao', desc: 'Padaria Pão Quente', val: -18.5, when: '08:42' },
              { cat: 'mercado',     desc: 'Hortifruti São João', val: -82.9, when: 'Ontem' },
              { cat: 'assinaturas', desc: 'Netflix · mensal',    val: -39.9, when: 'Ontem', recur: true },
            ].map((t, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 14px', borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <PQCatChip catKey={t.cat} theme={theme} size={36} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: theme.ink,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {t.desc} {t.recur && <IRepeat size={11} style={{ marginLeft: 4, verticalAlign: 'middle' }} />}
                  </div>
                  <div style={{ fontSize: 11, color: theme.mute, marginTop: 2 }}>
                    {PQ_CATS[t.cat].label} · {t.when}
                  </div>
                </div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 13, fontWeight: 500,
                  color: theme.ink, fontVariantNumeric: 'tabular-nums' }}>
                  {pqBRL(t.val, { decimals: 2 })}
                </div>
              </div>
            ))}
          </PQCard>
        </div>
      </div>

      <HomeTabBar theme={theme} active="home" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Home B — Editorial · big serif, mais ar, mascote sutil
// ─────────────────────────────────────────────────────────────
function HomeB({ theme }) {
  return (
    <div style={{ height: '100%', background: theme.bg, position: 'relative',
      paddingTop: 54, paddingBottom: 90, overflow: 'hidden' }}>
      <HomeHeader theme={theme} />

      <div style={{ padding: '22px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: PQ_T.display, fontStyle: 'italic',
              fontSize: 14, color: theme.mute, letterSpacing: 0.2 }}>
              maio · 15
            </div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 72, color: theme.ink,
              lineHeight: 0.9, letterSpacing: '-0.04em', marginTop: 8 }}>
              4.287<span style={{ fontSize: 32, color: theme.mute }}>,40</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: theme.mute, marginTop: 8 }}>
              Disponível em maio
            </div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <Poupi size={56} />
          </div>
        </div>

        {/* Two-up KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 28 }}>
          <PQCard theme={theme} style={{ background: theme.bgOff, padding: 14 }}>
            <PQKpi theme={theme} label="Entradas" value="R$ 7.420" color={theme.positive} />
            <div style={{ marginTop: 10 }}>
              <PQBar pct={100} theme={theme} height={3} color={theme.positive} />
            </div>
          </PQCard>
          <PQCard theme={theme} style={{ background: theme.bgOff, padding: 14 }}>
            <PQKpi theme={theme} label="Saídas" value="R$ 3.132" color={theme.negative} />
            <div style={{ marginTop: 10 }}>
              <PQBar pct={42} theme={theme} height={3} color={theme.negative} />
            </div>
          </PQCard>
        </div>

        {/* Quest line */}
        <div style={{ marginTop: 26 }}>
          <PQEyebrow theme={theme}>Sua jornada · nível 7</PQEyebrow>
          <PQCard theme={theme} style={{ padding: 0, overflow: 'hidden' }} inset={false}>
            <div style={{ padding: 16, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 22,
                background: theme.bgOff, color: theme.ink,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ITarget size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: theme.mute }}>Missão semanal</div>
                <div style={{ fontFamily: PQ_T.display, fontSize: 22, color: theme.ink,
                  letterSpacing: '-0.01em', marginTop: 2 }}>
                  Manter mercado ≤ R$ 600
                </div>
                <div style={{ marginTop: 10 }}>
                  <PQBar pct={68} theme={theme} height={4} color={theme.accent} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6,
                  fontSize: 11, color: theme.mute, fontFamily: PQ_T.mono }}>
                  <span>R$ 412 / 600</span>
                  <span>+150 XP</span>
                </div>
              </div>
            </div>
          </PQCard>
        </div>

        {/* Recents */}
        <div style={{ marginTop: 24 }}>
          <PQEyebrow theme={theme} right={<span style={{ color: theme.accent }}>Ver tudo</span>}>Últimos lançamentos</PQEyebrow>
          {[
            { cat: 'alimentacao', desc: 'Padaria Pão Quente', val: -18.5, when: 'hoje 08:42' },
            { cat: 'mercado',     desc: 'Hortifruti São João', val: -82.9, when: 'ontem' },
            { cat: 'compras',     desc: 'Renner — 3/6',        val: -149.9, when: 'ontem', recur: true },
          ].map((t, i, a) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 0', borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
              <PQCatChip catKey={t.cat} theme={theme} size={32} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: theme.ink }}>{t.desc}</div>
                <div style={{ fontSize: 11, color: theme.mute }}>{t.when}</div>
              </div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 18, color: theme.ink,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em' }}>
                {pqBRL(t.val).replace('R$ ', '')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <HomeTabBar theme={theme} active="home" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Home C — Gamified-forward · Poupi protagonista
// ─────────────────────────────────────────────────────────────
function HomeC({ theme }) {
  return (
    <div style={{ height: '100%', background: theme.bgOff, position: 'relative',
      paddingTop: 54, paddingBottom: 90, overflow: 'hidden' }}>
      <HomeHeader theme={theme} />

      <div style={{ padding: '14px 22px 0' }}>
        {/* Hero card: Poupi + level + saldo */}
        <PQCard theme={theme} inset={false} style={{
          padding: 18, background: theme.ink, color: theme.bg, border: 'none', position: 'relative',
          overflow: 'hidden',
        }}>
          {/* deco grid */}
          <div style={{ position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 85% 18%, ${theme.accent}25 0%, transparent 38%)`,
            pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            position: 'relative' }}>
            <PQPill theme={theme} color={theme.bg}
              bg={'rgba(255,255,255,0.1)'} border="none">
              <ISparkle size={11}/> Nível 7 · Poupador
            </PQPill>
            <PQPill theme={theme} color={theme.bg}
              bg={'rgba(255,255,255,0.1)'} border="none">
              <IFlame size={11}/> 12 dias
            </PQPill>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14,
            position: 'relative' }}>
            <div style={{ width: 76, height: 76, borderRadius: 38,
              background: theme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Poupi size={62} />
            </div>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Disponível</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 38, lineHeight: 1,
                letterSpacing: '-0.02em', marginTop: 4 }}>
                R$ 4.287<span style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)' }}>,40</span>
              </div>
            </div>
          </div>

          {/* XP progress */}
          <div style={{ marginTop: 18, position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              fontSize: 11, marginBottom: 6, color: 'rgba(255,255,255,0.7)' }}>
              <span>Nível 7</span>
              <span style={{ fontFamily: PQ_T.mono }}>1.840 / 2.500 XP</span>
              <span>Nível 8</span>
            </div>
            <PQBar pct={73} theme={theme} height={5}
              color={theme.accent} bg={'rgba(255,255,255,0.15)'} />
          </div>
        </PQCard>

        {/* Missions stack */}
        <div style={{ marginTop: 20 }}>
          <PQEyebrow theme={theme} right={<span style={{ color: theme.accent }}>+8 disponíveis</span>}>Missões ativas</PQEyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { t: 'Semana sem delivery', sub: '5 de 7 dias', xp: 120, pct: 71, icon: IFlame },
              { t: 'Guardar R$ 200 no cofre', sub: 'R$ 145 guardados', xp: 80, pct: 72, icon: ITarget },
              { t: 'Registrar 5 dias seguidos', sub: 'Streak 12 dias ✓', xp: 50, pct: 100, icon: ICheck },
            ].map((m, i) => {
              const done = m.pct === 100;
              const I = m.icon;
              return (
                <PQCard key={i} theme={theme} inset={false} style={{ padding: 12,
                  display: 'flex', alignItems: 'center', gap: 12,
                  opacity: done ? 0.6 : 1 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18,
                    background: done ? theme.positive : theme.bgOff,
                    color: done ? theme.bg : theme.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <I size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink,
                      textDecoration: done ? 'line-through' : 'none' }}>{m.t}</div>
                    <div style={{ fontSize: 11, color: theme.mute, marginTop: 2 }}>{m.sub}</div>
                    <div style={{ marginTop: 6 }}>
                      <PQBar pct={m.pct} theme={theme} height={3}
                        color={done ? theme.positive : theme.accent} />
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 12, color: theme.accent,
                      fontWeight: 600 }}>+{m.xp}</div>
                    <div style={{ fontSize: 9, letterSpacing: '0.1em',
                      color: theme.mute, fontWeight: 600 }}>XP</div>
                  </div>
                </PQCard>
              );
            })}
          </div>
        </div>

        {/* Action row */}
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <PQCard theme={theme} inset={false} style={{ padding: 12, display: 'flex',
            alignItems: 'center', gap: 10 }}>
            <ITrophy size={18} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: theme.ink }}>Cofre semanal</div>
              <div style={{ fontFamily: PQ_T.mono, fontSize: 11, color: theme.mute }}>R$ 145 / 200</div>
            </div>
          </PQCard>
          <PQCard theme={theme} inset={false} style={{ padding: 12, display: 'flex',
            alignItems: 'center', gap: 10 }}>
            <ISparkle size={18} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: theme.ink }}>Nova conquista</div>
              <div style={{ fontSize: 11, color: theme.mute }}>Mestre do Mercado</div>
            </div>
          </PQCard>
        </div>
      </div>

      <HomeTabBar theme={theme} active="home" />
    </div>
  );
}

Object.assign(window, { HomeA, HomeB, HomeC, HomeHeader, HomeTabBar });
