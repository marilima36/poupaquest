import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQ_CATS, PQCatChip } from '../../components/ui';
import { ISearch, IRepeat, IWallet } from '../../components/icons';
import { PQ_T } from '../../tokens';

const days = [
  { day: 'Hoje · 15 mai', total: -86.4, items: [
    { cat: 'alimentacao', desc: 'Padaria Pão Quente', val: -18.5, when: '08:42', card: 'Itaú' },
    { cat: 'lazer',       desc: 'Cinema Pateo', val: -42.0, when: '21:10', card: 'Nubank' },
    { cat: 'mercado',     desc: 'Mercado Bom Preço', val: -25.9, when: '17:30', card: 'Itaú', swipe: true },
  ]},
  { day: 'Ontem · 14 mai', total: 1480.9, items: [
    { cat: 'mercado', desc: 'Hortifruti São João', val: -82.9, when: '19:00', card: 'Itaú' },
    { cat: 'compras', desc: 'Renner · parcela 3/6', val: -149.9, when: '12:14', card: 'Itaú', recur: true },
    { cat: null,      desc: 'Salário Maio', val: 1713.7, when: '08:00', positive: true },
  ]},
  { day: '13 mai', total: -218.8, items: [
    { cat: 'moradia',     desc: 'Aluguel · maio', val: -1800, when: '07:00', recur: true },
    { cat: 'assinaturas', desc: 'Netflix mensal', val: -39.9, when: '06:00', recur: true },
    { cat: 'pets',        desc: 'Petz · ração', val: -129, when: '15:21' },
  ]},
];

export default function Transactions() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <MobileScreen active="home" bg={theme.bgOff}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ padding: '12px 22px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: theme.mute, fontWeight: 600 }}>Lançamentos · maio</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 32, color: theme.ink,
                letterSpacing: '-0.02em', lineHeight: 1, marginTop: 4 }}>48 movimentos</div>
            </div>
            <button style={{ width: 38, height: 38, borderRadius: 19,
              background: theme.bg, border: `0.5px solid ${theme.hair}`,
              color: theme.ink, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer' }}>
              <ISearch size={18} />
            </button>
          </div>

          {/* Filter chips */}
          <div style={{ marginTop: 14, display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
            {['Todos','Gastos','Entradas','Recorrentes','Mercado','Lazer'].map((f, i) => (
              <div key={i} style={{
                padding: '7px 14px', borderRadius: 100,
                background: i === 0 ? theme.ink : theme.bg,
                color: i === 0 ? theme.bg : theme.ink,
                border: i === 0 ? 'none' : `0.5px solid ${theme.hair}`,
                fontSize: 11.5, fontWeight: 600, flexShrink: 0, cursor: 'pointer',
              }}>{f}</div>
            ))}
          </div>
        </div>

        {/* Day groups */}
        <div style={{ padding: '12px 0 8px' }}>
          {days.map((d, di) => (
            <div key={di} style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                padding: '0 22px 8px', alignItems: 'baseline' }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: theme.ink,
                  letterSpacing: '0.04em' }}>{d.day}</span>
                <span style={{ fontFamily: PQ_T.mono, fontSize: 11,
                  color: d.total >= 0 ? theme.positive : theme.mute, fontWeight: 500 }}>
                  {d.total >= 0 ? '+ ' : '− '}R$ {Math.abs(d.total).toLocaleString('pt-BR', {minimumFractionDigits:2})}
                </span>
              </div>

              <div style={{ background: theme.bg, margin: '0 18px',
                borderRadius: 16, border: `0.5px solid ${theme.hair}`, overflow: 'hidden' }}>
                {d.items.map((t, ti, all) => (
                  <div key={ti} style={{ position: 'relative', overflow: 'hidden' }}
                    onClick={() => navigate('/lancamentos/editar')}>
                    {t.swipe && (
                      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0,
                        width: 90, background: theme.negative, color: theme.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 600 }}>Excluir</div>
                    )}
                    <div style={{
                      transform: t.swipe ? 'translateX(-90px)' : 'none',
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 14px', background: theme.bg,
                      borderBottom: ti < all.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none',
                      cursor: 'pointer',
                    }}>
                      {t.cat
                        ? <PQCatChip catKey={t.cat} theme={theme} size={36} />
                        : <div style={{ width: 36, height: 36, borderRadius: 14,
                            background: theme.positive, color: theme.bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IWallet size={18} />
                          </div>
                      }
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13.5, fontWeight: 500, color: theme.ink,
                          display: 'flex', alignItems: 'center', gap: 6,
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {t.desc}
                          {t.recur && <span style={{
                            background: theme.bgOff, border: `0.5px solid ${theme.hair}`,
                            padding: '1px 6px', borderRadius: 6, fontSize: 9,
                            color: theme.mute, fontWeight: 600, letterSpacing: '0.06em' }}>RECUR</span>}
                        </div>
                        <div style={{ fontSize: 11, color: theme.mute, marginTop: 2 }}>
                          {t.cat ? PQ_CATS[t.cat].label : 'Entrada'} · {t.when}
                          {t.card && ` · ${t.card}`}
                        </div>
                      </div>
                      <div style={{ fontFamily: PQ_T.mono, fontSize: 13.5,
                        fontWeight: 500, color: t.positive ? theme.positive : theme.ink,
                        fontVariantNumeric: 'tabular-nums' }}>
                        {t.positive ? '+' : '−'} {Math.abs(t.val).toLocaleString('pt-BR', {minimumFractionDigits:2})}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileScreen>
  );
}
