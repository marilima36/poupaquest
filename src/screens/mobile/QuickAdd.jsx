import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { PQ_CATS, PQPill } from '../../components/ui';
import { ICard, IRepeat, ISparkle, ICheck } from '../../components/icons';
import { PQ_T } from '../../tokens';

export default function QuickAdd() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const amount = 4290;
  const reais = Math.floor(amount / 100).toLocaleString('pt-BR');
  const cents = String(amount % 100).padStart(2, '0');

  const cats = [
    { k: 'alimentacao', active: true },
    { k: 'mercado' }, { k: 'moradia' }, { k: 'lazer' },
    { k: 'compras' }, { k: 'assinaturas' }, { k: 'educacao' }, { k: 'pets' },
  ];

  return (
    <div style={{ height: '100%', background: theme.ink, position: 'relative',
      overflow: 'hidden', fontFamily: PQ_T.sans }}>

      {/* dimmed background peek */}
      <div style={{ position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, ${theme.ink}cc 0%, ${theme.ink}f5 30%, ${theme.ink} 60%)`,
        opacity: 0.95 }} />
      <div style={{ position: 'absolute', top: 54, left: 24, right: 24,
        opacity: 0.18, color: theme.bg, pointerEvents: 'none' }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>PoupaQuest</div>
        <div style={{ fontFamily: PQ_T.display, fontSize: 36, lineHeight: 1, marginTop: 8, letterSpacing: '-0.02em' }}>R$ 4.287,40</div>
      </div>

      {/* Dismiss tap area */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '22%', cursor: 'pointer' }}
        onClick={() => navigate(-1)} />

      {/* Sheet */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        background: theme.bgOff, borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '14px 22px 26px', height: '78%',
        boxShadow: '0 -12px 40px rgba(0,0,0,0.18)',
      }}>
        {/* grabber */}
        <div style={{ width: 40, height: 4, borderRadius: 2, background: theme.hair,
          margin: '0 auto 12px' }} />

        {/* type segmented */}
        <div style={{ display: 'flex', padding: 3, background: theme.hairSoft,
          borderRadius: 100, gap: 2 }}>
          {[
            { id: 'out', l: 'Gasto', active: true },
            { id: 'in',  l: 'Entrada' },
            { id: 'trf', l: 'Transferência' },
          ].map((s) => (
            <div key={s.id} style={{
              flex: 1, textAlign: 'center', padding: '8px 0',
              fontSize: 12, fontWeight: 600, borderRadius: 100,
              background: s.active ? theme.bg : 'transparent',
              color: s.active ? theme.ink : theme.mute,
              boxShadow: s.active ? `0 1px 2px rgba(0,0,0,0.06)` : 'none',
              cursor: 'pointer',
            }}>{s.l}</div>
          ))}
        </div>

        {/* Amount */}
        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: theme.mute, fontWeight: 600 }}>Valor</div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 64, lineHeight: 1,
            color: theme.ink, letterSpacing: '-0.03em', marginTop: 4,
            display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontSize: 22, color: theme.mute, fontFamily: PQ_T.sans, fontWeight: 500 }}>R$</span>
            <span>{reais}</span>
            <span style={{ fontSize: 28, color: theme.mute }}>,{cents}</span>
            <span style={{ fontSize: 28, color: theme.accent, marginLeft: 2 }}>|</span>
          </div>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: 8, marginTop: 18, overflowX: 'auto', paddingBottom: 4 }}>
          {cats.map((c) => {
            const meta = PQ_CATS[c.k];
            const Icon = meta.Icon;
            return (
              <div key={c.k} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '8px 12px 8px 8px', borderRadius: 100,
                background: c.active ? theme.ink : theme.bg,
                color: c.active ? theme.bg : theme.ink,
                border: c.active ? 'none' : `0.5px solid ${theme.hair}`,
                flexShrink: 0, cursor: 'pointer',
              }}>
                <span style={{ width: 24, height: 24, borderRadius: 12,
                  background: c.active ? 'rgba(255,255,255,0.14)' : theme[meta.tone],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c.active ? theme.bg : theme.ink }}>
                  <Icon size={13} stroke={1.8} />
                </span>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{meta.short}</span>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '10px 14px',
            background: theme.bg, borderRadius: 14, border: `0.5px solid ${theme.hair}`,
            fontSize: 12.5, color: theme.ink }}>
            Padaria Pão Quente
            <span style={{ color: theme.accent, marginLeft: 4 }}>|</span>
          </div>
        </div>

        <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
          <PQPill theme={theme} bg={theme.bg}><ICard size={12} /> Cartão Itaú</PQPill>
          <PQPill theme={theme} bg={theme.bg}>Hoje · 08:42</PQPill>
          <PQPill theme={theme} bg={theme.bg}><IRepeat size={12} /> Recorrente</PQPill>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <button style={{ width: 52, height: 52, borderRadius: 26,
            background: theme.bg, border: `0.5px solid ${theme.hair}`,
            color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ISparkle size={20} />
          </button>
          <button onClick={() => navigate(-1)} style={{ flex: 1, height: 52, borderRadius: 26,
            background: theme.ink, color: theme.bg, border: 'none',
            fontSize: 14, fontWeight: 600, letterSpacing: 0.1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}>
            <ICheck size={18} stroke={2.2} /> Lançar gasto · +5 XP
          </button>
        </div>
      </div>
    </div>
  );
}
