export const PQ_LIGHT = {
  bg: '#FFFFFF',
  bgOff: '#F6F5F1',
  bgInk: '#EFEDE6',
  ink: '#0A1F44',
  inkSoft: '#1B3163',
  mute: '#6F7891',
  hair: '#E5E2D9',
  hairSoft: '#EFECE4',
  accent: '#2F5BFF',
  accentDeep: '#1E40E8',
  positive: '#506B41',
  negative: '#B14A2B',
  warn: '#C99543',
  gold: '#B89344',
  catFood: '#E9C8B5',
  catMarket: '#D8C7A3',
  catHome: '#BFC7D8',
  catFun: '#CFD7C2',
  catEdu: '#C8C7DE',
  catSubs: '#DFCBD3',
  catShop: '#E1D0B7',
  catPets: '#D6C2B2',
};

export const PQ_DARK = {
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

export const PQ_T = {
  display: '"Instrument Serif", "Times New Roman", serif',
  sans: '"Geist", system-ui, -apple-system, sans-serif',
  mono: '"Geist Mono", ui-monospace, "SF Mono", monospace',
};

export function pqTheme(dark) { return dark ? PQ_DARK : PQ_LIGHT; }

export function pqBRL(n, opts = {}) {
  const { sign = false, decimals = 2 } = opts;
  const abs = Math.abs(n);
  const s = abs.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const prefix = sign ? (n < 0 ? '−' : '+') : (n < 0 ? '−' : '');
  return `${prefix}R$ ${s}`;
}

export function pqBRLParts(n) {
  const abs = Math.abs(n);
  const [intP, decP] = abs.toFixed(2).split('.');
  const intF = parseInt(intP, 10).toLocaleString('pt-BR');
  return { int: intF, dec: decP, neg: n < 0 };
}
