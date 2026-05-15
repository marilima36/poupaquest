import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQ_CATS, PQCatChip, PQAmount, PQEyebrow, PQBar, PQStackBar } from '../../components/ui';
import { IChevR } from '../../components/icons';
import { PQ_T } from '../../tokens';

const cats = [
  { k: 'moradia',     used: 1800, lim: 2000, change: -2 },
  { k: 'mercado',     used: 612,  lim: 800,  change: 8  },
  { k: 'alimentacao', used: 418,  lim: 450,  change: 24 },
  { k: 'compras',     used: 312,  lim: 400,  change: -12 },
  { k: 'lazer',       used: 196,  lim: 300,  change: 4  },
  { k: 'assinaturas', used: 187,  lim: 200,  change: 0  },
  { k: 'pets',        used: 129,  lim: 200,  change: 0  },
  { k: 'educacao',    used: 99,   lim: 250,  change: -38 },
];

export default function Categories() {
  const { theme } = useTheme();
  const totalUsed = cats.reduce((s, c) => s + c.used, 0);
  const segments = cats.map((c) => ({ color: theme[PQ_CATS[c.k].tone], value: c.used }));

  return (
    <MobileScreen active="cat" bg={theme.bg}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: theme.mute, fontWeight: 600 }}>Gastos · maio</div>
              <PQAmount value={totalUsed} theme={theme} size={48} />
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10.5, color: theme.mute, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase' }}>vs abril</div>
              <div style={{ fontFamily: PQ_T.mono, fontSize: 14,
                color: theme.positive, fontWeight: 600, marginTop: 4 }}>↓ 6,8%</div>
            </div>
          </div>

          {/* Month switcher */}
          <div style={{ marginTop: 16, display: 'flex', gap: 8,
            alignItems: 'center', justifyContent: 'space-between',
            padding: '8px 12px', background: theme.bgOff, borderRadius: 12 }}>
            <button style={{ background: 'none', border: 'none', color: theme.ink,
              opacity: 0.6, cursor: 'pointer', transform: 'rotate(180deg)', display: 'flex' }}>
              <IChevR size={18} />
            </button>
            <div style={{ display: 'flex', gap: 6 }}>
              {['fev','mar','abr','mai','jun'].map((m, i) => (
                <div key={m} style={{ padding: '6px 10px', borderRadius: 8,
                  background: i === 3 ? theme.ink : 'transparent',
                  color: i === 3 ? theme.bg : theme.mute, fontSize: 11, fontWeight: 600,
                  cursor: 'pointer' }}>{m}</div>
              ))}
            </div>
            <button style={{ background: 'none', border: 'none', color: theme.ink,
              opacity: 0.6, cursor: 'pointer', display: 'flex' }}>
              <IChevR size={18} />
            </button>
          </div>

          {/* Stacked bar */}
          <div style={{ marginTop: 20 }}>
            <PQStackBar segments={segments} theme={theme} height={12} />
            <div style={{ display: 'flex', justifyContent: 'space-between',
              fontSize: 11, color: theme.mute, marginTop: 6, fontFamily: PQ_T.mono }}>
              <span>R$ 0</span><span>R$ 5.000 · meta</span>
            </div>
          </div>

          {/* Category list */}
          <div style={{ marginTop: 22, paddingBottom: 8 }}>
            <PQEyebrow theme={theme}>Por categoria</PQEyebrow>
            {cats.map((c, i) => {
              const meta = PQ_CATS[c.k];
              const pct = (c.used / c.lim) * 100;
              const over = c.used > c.lim;
              return (
                <div key={i} style={{ padding: '12px 0',
                  borderBottom: i < cats.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none',
                  display: 'flex', alignItems: 'center', gap: 12 }}>
                  <PQCatChip catKey={c.k} theme={theme} size={36} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{meta.label}</div>
                      <div style={{ fontFamily: PQ_T.mono, fontSize: 12.5,
                        color: over ? theme.negative : theme.ink, fontWeight: 500 }}>
                        R$ {c.used.toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between',
                      fontSize: 10.5, color: theme.mute, marginTop: 2, fontFamily: PQ_T.mono }}>
                      <span>limite R$ {c.lim.toLocaleString('pt-BR')}</span>
                      <span style={{ color: c.change > 0 ? theme.negative : c.change < 0 ? theme.positive : theme.mute }}>
                        {c.change === 0 ? '—' : `${c.change > 0 ? '↑' : '↓'} ${Math.abs(c.change)}%`}
                      </span>
                    </div>
                    <div style={{ marginTop: 7 }}>
                      <PQBar pct={Math.min(pct, 100)} theme={theme} height={3.5}
                        color={over ? theme.negative : theme.ink} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
