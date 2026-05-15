export function Poupi({ size = 64, dark = false, mood = 'happy' }) {
  const c = dark ? '#F4F2EC' : '#0A1F44';
  const accent = dark ? '#6A8BFF' : '#2F5BFF';
  const eye = dark ? '#0A1226' : '#FFFFFF';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <ellipse cx="50" cy="58" rx="36" ry="30" fill={c} />
      <path d="M 28 32 L 24 18 L 38 26 Z" fill={c} />
      <rect x="34" y="83" width="8" height="8" rx="2" fill={c} />
      <rect x="58" y="83" width="8" height="8" rx="2" fill={c} />
      <rect x="44" y="38" width="22" height="3.5" rx="1.5" fill={accent} />
      <circle cx="86" cy="56" r="4" fill={c} />
      <ellipse cx="22" cy="60" rx="7" ry="6" fill={c} />
      <circle cx="20" cy="59" r="1.4" fill={eye} />
      <circle cx="24" cy="59" r="1.4" fill={eye} />
      <circle cx="46" cy="55" r="2.6" fill={eye} />
      <circle cx="46.5" cy="55" r="1.1" fill={c} />
      {mood === 'happy' && <circle cx="38" cy="66" r="2" fill={accent} opacity="0.5" />}
    </svg>
  );
}
