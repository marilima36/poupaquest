import { PQ_T, pqBRLParts } from '../tokens';
import {
  IFood, IMarket, IHome, IFun, IEdu, ISubs, IShop, IPets,
} from './icons';

export const PQ_CATS = {
  alimentacao: { label: 'Alimentação', short: 'Comida',  Icon: IFood,   tone: 'catFood' },
  mercado:     { label: 'Mercado',     short: 'Mercado', Icon: IMarket, tone: 'catMarket' },
  moradia:     { label: 'Moradia',     short: 'Moradia', Icon: IHome,   tone: 'catHome' },
  lazer:       { label: 'Lazer',       short: 'Lazer',   Icon: IFun,    tone: 'catFun' },
  educacao:    { label: 'Educação',    short: 'Estudo',  Icon: IEdu,    tone: 'catEdu' },
  assinaturas: { label: 'Assinaturas', short: 'Subs',    Icon: ISubs,   tone: 'catSubs' },
  compras:     { label: 'Compras',     short: 'Compras', Icon: IShop,   tone: 'catShop' },
  pets:        { label: 'Pets',        short: 'Pets',    Icon: IPets,   tone: 'catPets' },
};

export function PQCard({ theme, children, style = {}, inset = true, ...rest }) {
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

export function PQCatChip({ catKey, theme, size = 36 }) {
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

export function PQEyebrow({ theme, children, right }) {
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

export function PQAmount({ value, theme, size = 56, color, neg }) {
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

export function PQBar({ pct, theme, height = 6, color, bg }) {
  const p = Math.max(0, Math.min(100, pct));
  return (
    <div style={{
      width: '100%', height, borderRadius: height,
      background: bg || theme.hairSoft, overflow: 'hidden',
    }}>
      <div style={{
        width: `${p}%`, height: '100%', background: color || theme.accent,
        borderRadius: height,
      }} />
    </div>
  );
}

export function PQStackBar({ segments, theme, height = 8 }) {
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

export function PQKpi({ label, value, theme, color }) {
  return (
    <div>
      <div style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: theme.mute, marginBottom: 4, fontWeight: 600 }}>{label}</div>
      <div style={{ fontFamily: PQ_T.sans, fontSize: 18, fontWeight: 600,
        color: color || theme.ink, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
    </div>
  );
}

export function PQXpRing({ size = 64, pct = 60, level = 7, theme }) {
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

export function PQPill({ theme, children, color, bg, border, style = {} }) {
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
