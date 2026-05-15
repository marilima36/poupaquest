// PoupaQuest design tokens, palette and Poupi mascot
// Neo-bancário aesthetic: branco puro + navy profundo + tipografia forte.

const PQ_LIGHT = {
  bg: '#FFFFFF',
  bgOff: '#F6F5F1',        // off-white surface
  bgInk: '#EFEDE6',        // deeper card surface
  ink: '#0A1F44',          // navy primário
  inkSoft: '#1B3163',
  mute: '#6F7891',         // muted text
  hair: '#E5E2D9',         // hairlines
  hairSoft: '#EFECE4',
  accent: '#2F5BFF',       // azul vivo
  accentDeep: '#1E40E8',
  positive: '#506B41',     // verde sage profundo (entradas)
  negative: '#B14A2B',     // terracota (gastos / alertas)
  warn: '#C99543',         // ouro suave
  gold: '#B89344',
  // category tints
  catFood: '#E9C8B5',
  catMarket: '#D8C7A3',
  catHome: '#BFC7D8',
  catFun: '#CFD7C2',
  catEdu: '#C8C7DE',
  catSubs: '#DFCBD3',
  catShop: '#E1D0B7',
  catPets: '#D6C2B2',
};

const PQ_DARK = {
  bg: '#0A1226',
  bgOff: '#0F1A33',
  bgInk: '#142042',
  ink: '#F4F2EC',
  inkSoft: '#D7DBE7',
  mute: '#7E89A6',
  hair: '#1B2647',
  hairSoft: '#15203F',
  accent: '#6A8BFF',
  accentDeep: '#3F66FF',
  positive: '#8FB07A',
  negative: '#E59171',
  warn: '#E0B764',
  gold: '#E0B764',
  catFood: '#7A5746',
  catMarket: '#6F5F3D',
  catHome: '#3F4A6A',
  catFun: '#536048',
  catEdu: '#525071',
  catSubs: '#6D4E5C',
  catShop: '#6D5B40',
  catPets: '#604B3D',
};

const PQ_T = {
  // typography helpers
  display: '"Instrument Serif", "Times New Roman", serif',
  sans: '"Geist", system-ui, -apple-system, sans-serif',
  mono: '"Geist Mono", ui-monospace, "SF Mono", monospace',
};

function pqTheme(dark) { return dark ? PQ_DARK : PQ_LIGHT; }

// BRL formatter
function pqBRL(n, opts = {}) {
  const { sign = false, decimals = 2 } = opts;
  const abs = Math.abs(n);
  const s = abs.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const prefix = sign ? (n < 0 ? '−' : '+') : (n < 0 ? '−' : '');
  return `${prefix}R$ ${s}`;
}

// Split into "integer" + "decimal" parts for display typography
function pqBRLParts(n) {
  const abs = Math.abs(n);
  const [intP, decP] = abs.toFixed(2).split('.');
  const intF = parseInt(intP, 10).toLocaleString('pt-BR');
  return { int: intF, dec: decP, neg: n < 0 };
}

// Poupi mascot — geometric cofrinho. Avoids over-detailed SVG.
function Poupi({ size = 64, dark = false, mood = 'happy' }) {
  const c = dark ? '#F4F2EC' : '#0A1F44';
  const accent = dark ? '#6A8BFF' : '#2F5BFF';
  const eye = dark ? '#0A1226' : '#FFFFFF';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {/* body */}
      <ellipse cx="50" cy="58" rx="36" ry="30" fill={c} />
      {/* ear */}
      <path d="M 28 32 L 24 18 L 38 26 Z" fill={c} />
      {/* foot front */}
      <rect x="34" y="83" width="8" height="8" rx="2" fill={c} />
      <rect x="58" y="83" width="8" height="8" rx="2" fill={c} />
      {/* coin slot */}
      <rect x="44" y="38" width="22" height="3.5" rx="1.5" fill={accent} />
      {/* tail */}
      <circle cx="86" cy="56" r="4" fill={c} />
      {/* snout */}
      <ellipse cx="22" cy="60" rx="7" ry="6" fill={c} />
      <circle cx="20" cy="59" r="1.4" fill={eye} />
      <circle cx="24" cy="59" r="1.4" fill={eye} />
      {/* eye */}
      <circle cx="46" cy="55" r="2.6" fill={eye} />
      <circle cx="46.5" cy="55" r="1.1" fill={c} />
      {/* cheek */}
      {mood === 'happy' && <circle cx="38" cy="66" r="2" fill={accent} opacity="0.5" />}
    </svg>
  );
}

Object.assign(window, { PQ_LIGHT, PQ_DARK, PQ_T, pqTheme, pqBRL, pqBRLParts, Poupi });
