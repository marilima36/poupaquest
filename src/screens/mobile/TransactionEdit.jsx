import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { PQ_CATS, PQCatChip, PQEyebrow, PQPill } from '../../components/ui';
import { IChevR, ICard, IRepeat, ISparkle, ITarget } from '../../components/icons';
import { PQ_T } from '../../tokens';

export default function TransactionEdit() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div style={{ height: '100%', background: theme.bgOff, paddingTop: 54,
      paddingBottom: 28, overflow: 'auto', fontFamily: PQ_T.sans }}>

      {/* App bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 22px 0' }}>
        <button onClick={() => navigate(-1)} style={{ width: 34, height: 34, borderRadius: 17,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, transform: 'rotate(180deg)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IChevR size={16}/>
        </button>
        <span style={{ fontSize: 12, color: theme.mute, fontWeight: 600, letterSpacing: '0.08em' }}>
          Detalhe do lançamento
        </span>
        <button style={{ width: 34, height: 34, borderRadius: 17,
          background: theme.bg, border: `0.5px solid ${theme.hair}`,
          color: theme.ink, fontSize: 18, cursor: 'pointer' }}>⋯</button>
      </div>

      {/* Big amount */}
      <div style={{ padding: '18px 22px 0', textAlign: 'center' }}>
        <PQCatChip catKey="mercado" theme={theme} size={60} />
        <div style={{ marginTop: 12, fontFamily: PQ_T.display, fontSize: 50,
          color: theme.ink, letterSpacing: '-0.03em', lineHeight: 1 }}>
          − R$ 82<span style={{ fontSize: 28, color: theme.mute }}>,90</span>
        </div>
        <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 8 }}>
          Hortifruti São João · 14 mai, 19:00 · Itaú
        </div>
      </div>

      {/* Fields */}
      <div style={{ padding: '24px 22px 0' }}>
        <div style={{ background: theme.bg, borderRadius: 16, border: `0.5px solid ${theme.hair}`, overflow: 'hidden' }}>
          {[
            { l: 'Descrição',  v: 'Hortifruti São João', edit: true },
            { l: 'Categoria',  v: 'Mercado', cat: 'mercado' },
            { l: 'Conta',      v: 'Itaú · final 4592', icon: ICard },
            { l: 'Data',       v: '14 mai 2026 · 19:00' },
            { l: 'Tags',       v: 'feira-da-semana, frutas', pill: true },
            { l: 'Anexo',      v: 'cupom-14-05.pdf', link: true },
          ].map((row, i, a) => (
            <div key={i} style={{ padding: '12px 14px',
              borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none',
              display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: theme.mute,
                letterSpacing: '0.06em', width: 84, flexShrink: 0, textTransform: 'uppercase' }}>{row.l}</div>
              <div style={{ flex: 1, fontSize: 13, color: theme.ink, display: 'flex', alignItems: 'center', gap: 8 }}>
                {row.cat && <PQCatChip catKey={row.cat} theme={theme} size={24} />}
                {row.icon && <row.icon size={14} />}
                <span style={{ fontWeight: row.edit ? 600 : 500 }}>{row.v}</span>
                {row.edit && <span style={{ color: theme.accent, fontSize: 14 }}>|</span>}
                {row.pill && <PQPill theme={theme} bg={theme.bgOff} style={{ fontSize: 10, padding: '3px 8px' }}>+ adicionar</PQPill>}
                {row.link && <span style={{ color: theme.accent, fontSize: 12 }}>ver</span>}
              </div>
              <IChevR size={12} style={{ color: theme.mute }}/>
            </div>
          ))}
        </div>

        {/* Toggles */}
        <div style={{ marginTop: 14, background: theme.bg, borderRadius: 16,
          border: `0.5px solid ${theme.hair}`, overflow: 'hidden' }}>
          {[
            { l: 'Recorrente · todo mês', sub: 'Próximo dia 14 · jun', on: false, I: IRepeat },
            { l: 'Dividir com alguém', sub: 'Lu paga 50% · pendente', on: true, sub2: '+ R$ 41,45', I: ISparkle },
            { l: 'Vale como missão', sub: 'Conta na semana sem delivery', on: true, I: ITarget },
          ].map((row, i, a) => (
            <div key={i} style={{ padding: '12px 14px',
              borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none',
              display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: 15,
                background: row.on ? theme.ink : theme.bgOff,
                color: row.on ? theme.bg : theme.mute,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <row.I size={14} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{row.l}</div>
                <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>
                  {row.sub} {row.sub2 && (
                    <span style={{ color: theme.positive, fontWeight: 600, fontFamily: PQ_T.mono, marginLeft: 4 }}>{row.sub2}</span>
                  )}
                </div>
              </div>
              <div style={{ width: 36, height: 22, borderRadius: 11,
                background: row.on ? theme.accent : theme.hair, padding: 2,
                display: 'flex', justifyContent: row.on ? 'flex-end' : 'flex-start', cursor: 'pointer' }}>
                <div style={{ width: 18, height: 18, borderRadius: 9, background: theme.bg }}/>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ marginTop: 14 }}>
          <PQEyebrow theme={theme}>Tags</PQEyebrow>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[
              { l: 'feira-da-semana', sel: true }, { l: 'frutas', sel: true },
              { l: 'orgânico' }, { l: 'entregue-em-casa' }, { l: 'reembolso' }, { l: '+ tag' },
            ].map((tag, i) => (
              <PQPill key={i} theme={theme}
                bg={tag.sel ? theme.ink : theme.bg}
                color={tag.sel ? theme.bg : theme.ink}
                border={tag.sel ? 'none' : `0.5px solid ${theme.hair}`}
                style={{ fontSize: 11.5, cursor: 'pointer' }}>
                {tag.l}
              </PQPill>
            ))}
          </div>
        </div>

        {/* Delete zone */}
        <div style={{ marginTop: 22, padding: 14, background: theme.bg, borderRadius: 14,
          border: `0.5px solid ${theme.hair}`, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <div style={{ width: 30, height: 30, borderRadius: 15, background: theme.negative, opacity: 0.15 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: theme.negative }}>Excluir lançamento</div>
            <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>Você pode desfazer por 7 dias na lixeira.</div>
          </div>
          <IChevR size={14} style={{ color: theme.negative }}/>
        </div>
      </div>

      <div style={{ padding: '18px 22px 0' }}>
        <button onClick={() => navigate(-1)} style={{ width: '100%', height: 52, borderRadius: 26,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Salvar alterações</button>
      </div>
    </div>
  );
}
