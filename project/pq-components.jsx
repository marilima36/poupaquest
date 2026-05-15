// Shared visual primitives for PoupaQuest.
// Keep each piece small and composable; icons use stroke 1.6 consistently.

// ─────────────────────────────────────────────────────────────
// Icons — minimal, monoline. Stroke is currentColor.
// ─────────────────────────────────────────────────────────────
const pqIcon = (paths, vb = '0 0 24 24') => ({ size = 18, stroke = 1.6, ...rest }) => (
  <svg width={size} height={size} viewBox={vb} fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>{paths}</svg>
);

const IFood = pqIcon(<g><path d="M7 3v8a3 3 0 0 0 3 3v7"/><path d="M4 3v5"/><path d="M10 3v5"/><path d="M7 8h0"/><path d="M17 3c-2 0-3 2-3 5s1 5 3 5v8"/></g>);
const IMarket = pqIcon(<g><path d="M3 6h2l2 11h12l2-8H7"/><circle cx="10" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></g>);
const IHome = pqIcon(<g><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></g>);
const IFun = pqIcon(<g><path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12"/><circle cx="6" cy="9" r=".8"/><circle cx="6" cy="12" r=".8"/><circle cx="6" cy="15" r=".8"/><circle cx="18" cy="9" r=".8"/><circle cx="18" cy="12" r=".8"/><circle cx="18" cy="15" r=".8"/></g>);
const IEdu = pqIcon(<g><path d="M3 5h14a3 3 0 0 1 3 3v12H6a3 3 0 0 1-3-3z"/><path d="M3 5v12a3 3 0 0 1 3-3h14"/></g>);
const ISubs = pqIcon(<g><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></g>);
const IShop = pqIcon(<g><path d="M5 8h14l-1 12H6z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></g>);
const IPets = pqIcon(<g><circle cx="7" cy="9" r="2"/><circle cx="17" cy="9" r="2"/><circle cx="5" cy="14" r="1.8"/><circle cx="19" cy="14" r="1.8"/><path d="M12 13c-3 0-5 3-5 5a2 2 0 0 0 2 2c1 0 1.5-.6 3-.6s2 .6 3 .6a2 2 0 0 0 2-2c0-2-2-5-5-5z"/></g>);
const IInvest = pqIcon(<g><path d="M3 17l5-6 4 4 8-9"/><path d="M14 6h6v6"/></g>);
const IPlus = pqIcon(<g><path d="M12 5v14M5 12h14"/></g>);
const IBolt = pqIcon(<g><path d="M13 3L4 14h6l-1 7 9-11h-6z"/></g>);
const ITrophy = pqIcon(<g><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M5 5H3v3a3 3 0 0 0 3 3M19 5h2v3a3 3 0 0 1-3 3"/><path d="M9 13v3h6v-3M7 20h10"/></g>);
const ITarget = pqIcon(<g><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></g>);
const IFlame = pqIcon(<g><path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/></g>);
const IChevR = pqIcon(<g><path d="M9 6l6 6-6 6"/></g>);
const IChevD = pqIcon(<g><path d="M6 9l6 6 6-6"/></g>);
const ISearch = pqIcon(<g><circle cx="11" cy="11" r="7"/><path d="M16 16l4 4"/></g>);
const IBell = pqIcon(<g><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></g>);
const IRepeat = pqIcon(<g><path d="M4 8l3-3 3 3"/><path d="M7 5v6a4 4 0 0 0 4 4h6"/><path d="M20 16l-3 3-3-3"/><path d="M17 19v-6a4 4 0 0 0-4-4H7"/></g>);
const ICard = pqIcon(<g><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></g>);
const IWallet = pqIcon(<g><path d="M4 7v11a2 2 0 0 0 2 2h14V9H6a2 2 0 0 1-2-2zm0 0a2 2 0 0 1 2-2h12v4"/><circle cx="17" cy="14.5" r="1.2" fill="currentColor"/></g>);
const IPie = pqIcon(<g><path d="M12 3v9l8 4a9 9 0 1 1-8-13z"/></g>);
const ISparkle = pqIcon(<g><path d="M12 4l1.5 5L19 10.5 13.5 12 12 17l-1.5-5L5 10.5 10.5 9z"/></g>);
const ICheck = pqIcon(<g><path d="M5 12l5 5L20 7"/></g>);
const ILock = pqIcon(<g><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></g>);

// Category map
const PQ_CATS = {
  alimentacao: { label: 'Alimentação', short: 'Comida', Icon: IFood, tone: 'catFood' },
  mercado:     { label: 'Mercado',     short: 'Mercado', Icon: IMarket, tone: 'catMarket' },
  moradia:     { label: 'Moradia',     short: 'Moradia', Icon: IHome, tone: 'catHome' },
  lazer:       { label: 'Lazer',       short: 'Lazer', Icon: IFun, tone: 'catFun' },
  educacao:    { label: 'Educação',    short: 'Estudo', Icon: IEdu, tone: 'catEdu' },
  assinaturas: { label: 'Assinaturas', short: 'Subs', Icon: ISubs, tone: 'catSubs' },
  compras:     { label: 'Compras',     short: 'Compras', Icon: IShop, tone: 'catShop' },
  pets:        { label: 'Pets',        short: 'Pets', Icon: IPets, tone: 'catPets' },
};

// ─────────────────────────────────────────────────────────────
// Building blocks
// ─────────────────────────────────────────────────────────────
function PQCard({ theme, children, style = {}, inset = true, ...rest }) {
  return (
    <div style={{
      background: theme.bg,
      border: `0.5px solid ${theme.hair}`,
      borderRadius: 18,
      padding: inset ? 16 : 0,
      ...style,
    }} {...rest}>{children}</div>
  );
}

function PQCatChip({ catKey, theme, size = 36 }) {
  const c = PQ_CATS[catKey];
  if (!c) return null;
  const Icon = c.Icon;
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2.4,
      background: theme[c.tone], color: theme.ink,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}><Icon size={size * 0.5} stroke={1.6} /></div>
  );
}

// Section eyebrow (uppercase, tracked label)
function PQEyebrow({ theme, children, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      fontFamily: PQ_T.sans, fontSize: 10.5, fontWeight: 600,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: theme.mute, marginBottom: 10,
    }}>
      <span>{children}</span>{right}
    </div>
  );
}

// Big serif amount, with R$ and decimals styled smaller
function PQAmount({ value, theme, size = 56, color, neg }) {
  const { int, dec, neg: n } = pqBRLParts(value);
  const showNeg = neg ?? n;
  const col = color || theme.ink;
  return (
    <div style={{
      fontFamily: PQ_T.display, color: col, lineHeight: 0.95,
      letterSpacing: '-0.02em', display: 'flex', alignItems: 'baseline', gap: 4,
    }}>
      <span style={{ fontSize: size * 0.32, fontFamily: PQ_T.sans, fontWeight: 500,
        letterSpacing: '0.04em', color: theme.mute, transform: 'translateY(-12%)' }}>R$</span>
      <span style={{ fontSize: size }}>
        {showNeg ? '−' : ''}{int}
      </span>
      <span style={{ fontSize: size * 0.36, fontFamily: PQ_T.display,
        color: theme.mute, transform: 'translateY(-22%)' }}>,{dec}</span>
    </div>
  );
}

// Progress bar with subtle ticks
function PQBar({ pct, theme, height = 6, color, bg }) {
  const p = Math.max(0, Math.min(100, pct));
  return (
    <div style={{
      width: '100%', height, borderRadius: height,
      background: bg || theme.hairSoft, overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        width: `${p}%`, height: '100%', background: color || theme.accent,
        borderRadius: height,
      }} />
    </div>
  );
}

// Stacked horizontal bar (categories)
function PQStackBar({ segments, theme, height = 8 }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  return (
    <div style={{
      width: '100%', height, borderRadius: height,
      background: theme.hairSoft, overflow: 'hidden', display: 'flex', gap: 2,
    }}>
      {segments.map((s, i) => (
        <div key={i} style={{ width: `${(s.value/total)*100}%`, background: s.color, height: '100%' }} />
      ))}
    </div>
  );
}

// Small kpi label-value pair
function PQKpi({ label, value, theme, color }) {
  return (
    <div>
      <div style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: theme.mute, marginBottom: 4, fontWeight: 600 }}>{label}</div>
      <div style={{ fontFamily: PQ_T.sans, fontSize: 18, fontWeight: 600,
        color: color || theme.ink, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
    </div>
  );
}

// Big circular XP ring
function PQXpRing({ size = 64, pct = 60, level = 7, theme }) {
  const r = size / 2 - 4;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={theme.hair} strokeWidth="3" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={theme.accent} strokeWidth="3"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct/100)} strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: PQ_T.display, fontSize: size * 0.42, color: theme.ink, lineHeight: 1,
      }}>{level}</div>
    </div>
  );
}

// Pill (badges / chips)
function PQPill({ theme, children, color, bg, border, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 100,
      background: bg || 'transparent',
      color: color || theme.ink,
      border: border || `0.5px solid ${theme.hair}`,
      fontSize: 11, fontWeight: 500, letterSpacing: 0.1,
      lineHeight: 1.2,
      ...style,
    }}>{children}</span>
  );
}

// Empty-image placeholder (striped)
function PQImageSlot({ w = '100%', h = 80, label = 'IMAGE', theme }) {
  return (
    <div style={{
      width: w, height: h, position: 'relative',
      background: `repeating-linear-gradient(135deg, ${theme.hairSoft}, ${theme.hairSoft} 6px, ${theme.bgOff} 6px, ${theme.bgOff} 12px)`,
      borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: PQ_T.mono, fontSize: 10, letterSpacing: '0.15em',
      color: theme.mute,
    }}>{label}</div>
  );
}

Object.assign(window, {
  PQ_CATS,
  IFood, IMarket, IHome, IFun, IEdu, ISubs, IShop, IPets,
  IInvest, IPlus, IBolt, ITrophy, ITarget, IFlame,
  IChevR, IChevD, ISearch, IBell, IRepeat, ICard, IWallet, IPie, ISparkle, ICheck, ILock,
  PQCard, PQCatChip, PQEyebrow, PQAmount, PQBar, PQStackBar, PQKpi, PQXpRing, PQPill, PQImageSlot,
});
