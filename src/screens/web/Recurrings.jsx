import { useTheme } from '../../context/ThemeContext';
import { WebSidebar } from '../../layout/WebSidebar';
import { PQCard, PQKpi, PQCatChip, PQEyebrow } from '../../components/ui';
import { ISearch, IBell, IPlus } from '../../components/icons';
import { PQ_T } from '../../tokens';

const charges = {
  2:  [{ l: 'Netflix', v: 39.9, c: '#E50914' }],
  5:  [{ l: 'Energia · Enel', v: 142, c: '#0A1F44' }],
  9:  [{ l: 'Spotify', v: 21.9, c: '#1ED760' }],
  12: [{ l: 'iCloud', v: 11.9, c: '#0A1F44' }, { l: 'Aluguel', v: 1800, c: '#0A1F44' }],
  14: [{ l: 'Renner 4/6', v: 149.9, c: '#2F5BFF' }],
  18: [{ l: 'Notion', v: 49, c: '#0A1F44' }],
  20: [{ l: 'Internet · Vivo', v: 99.9, c: '#0A1F44' }],
  26: [{ l: 'Cerâmica 3/8', v: 80, c: '#2F5BFF' }],
  28: [{ l: 'Salário', v: 7420, pos: true }],
};

export default function WebRecurrings() {
  const { theme } = useTheme();

  return (
    <div style={{ height: '100vh', background: theme.bgOff, display: 'flex', overflow: 'hidden',
      color: theme.ink, fontFamily: PQ_T.sans }}>
      <WebSidebar active="Recorrências" />

      <div style={{ flex: 1, padding: '20px 28px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 26, color: theme.ink, letterSpacing: '-0.02em', lineHeight: 1.05 }}>Recorrências</div>
            <div style={{ fontSize: 12.5, color: theme.mute, marginTop: 4 }}>Assinaturas, contas fixas e parcelas — em um só lugar</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg, border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ISearch size={15}/></button>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: theme.bg, border: `0.5px solid ${theme.hair}`, color: theme.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><IBell size={16}/></button>
            <button style={{ height: 38, borderRadius: 10, background: theme.ink, color: theme.bg, border: 'none', padding: '0 16px', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}><IPlus size={15} stroke={2}/> Nova recorrência</button>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Compromisso mensal" value="R$ 2.643,40" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>35,6% da renda líquida</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Assinaturas" value="R$ 122,70" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>4 ativas · 1 em revisão</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16 }}>
            <PQKpi theme={theme} label="Contas fixas" value="R$ 2.041,90" />
            <div style={{ fontSize: 11, color: theme.mute, marginTop: 8 }}>3 contas · maior: aluguel</div>
          </PQCard>
          <PQCard theme={theme} style={{ padding: 16, background: theme.ink, color: theme.bg, border: 'none' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.65, fontWeight: 600 }}>Próxima cobrança</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 22, marginTop: 4, letterSpacing: '-0.01em' }}>Netflix · R$ 39,90</div>
            <div style={{ fontSize: 11, opacity: 0.7, marginTop: 6 }}>em 2 dias · 17 mai · Nubank</div>
          </PQCard>
        </div>

        {/* Calendar */}
        <PQCard theme={theme} style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <PQEyebrow theme={theme}>Calendário · maio 2026</PQEyebrow>
            <div style={{ display: 'flex', gap: 4 }}>
              <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, background: theme.ink, color: theme.bg, fontWeight: 600, cursor: 'pointer' }}>Mês</span>
              <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, color: theme.mute, fontWeight: 600, cursor: 'pointer' }}>Lista</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginTop: 14 }}>
            {['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map((d) => (
              <div key={d} style={{ fontSize: 10, color: theme.mute, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{d}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginTop: 6 }}>
            {Array.from({ length: 35 }).map((_, idx) => {
              const day = idx - 3;
              if (day < 1 || day > 31) return (
                <div key={idx} style={{ height: 76, borderRadius: 6, background: theme.hairSoft, opacity: 0.4 }} />
              );
              const today = day === 15;
              const list = charges[day] || [];
              return (
                <div key={idx} style={{ height: 76, borderRadius: 8, padding: 8,
                  background: today ? theme.ink : theme.bg,
                  color: today ? theme.bg : theme.ink,
                  border: today ? 'none' : `0.5px solid ${theme.hair}`,
                  display: 'flex', flexDirection: 'column', gap: 4, overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, fontFamily: PQ_T.mono }}>{day}</span>
                    {today && <span style={{ fontSize: 9, opacity: 0.7, letterSpacing: '0.05em' }}>hoje</span>}
                  </div>
                  {list.slice(0, 2).map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9.5,
                      fontWeight: 500, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      <span style={{ width: 4, height: 4, borderRadius: 2,
                        background: today ? 'rgba(255,255,255,0.7)' : (c.c || theme.positive), flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis',
                        color: c.pos ? theme.positive : (today ? theme.bg : theme.ink) }}>{c.l}</span>
                    </div>
                  ))}
                  {list.length > 2 && <span style={{ fontSize: 9, opacity: 0.7 }}>+ {list.length-2}</span>}
                </div>
              );
            })}
          </div>
        </PQCard>

        {/* Three columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
          {/* Assinaturas */}
          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={<span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ 122,70</span>}>Assinaturas</PQEyebrow>
            {[
              { l: 'Netflix', v: 39.9, c: '#E50914', use: 'usa direto', ok: true },
              { l: 'Spotify', v: 21.9, c: '#1ED760', use: 'diário', ok: true, dark: true },
              { l: 'iCloud',  v: 11.9, c: '#0A1F44', use: '94GB de 200', ok: true },
              { l: 'Notion',  v: 49.0, c: '#1A1A1A', use: '2 vezes em abril', ok: false },
            ].map((s, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.c,
                  color: s.dark ? '#000' : '#fff', flexShrink: 0, fontFamily: PQ_T.display,
                  fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.l[0]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{s.l}</div>
                  <div style={{ fontSize: 10.5, color: s.ok ? theme.mute : theme.negative, marginTop: 2 }}>{s.use}</div>
                </div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>R$ {s.v.toFixed(2)}</div>
              </div>
            ))}
          </PQCard>

          {/* Contas fixas */}
          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={<span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ 2.041,90</span>}>Contas fixas</PQEyebrow>
            {[
              { l: 'Aluguel', v: 1800, k: 'moradia', d: 'dia 12' },
              { l: 'Internet · Vivo', v: 99.9, k: 'moradia', d: 'dia 20' },
              { l: 'Energia · Enel', v: 142, k: 'moradia', d: 'dia 26 · variável' },
            ].map((f, i, a) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <PQCatChip catKey={f.k} theme={theme} size={32} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{f.l}</div>
                  <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{f.d}</div>
                </div>
                <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>R$ {f.v.toLocaleString('pt-BR', {minimumFractionDigits:2})}</div>
              </div>
            ))}
          </PQCard>

          {/* Parcelas */}
          <PQCard theme={theme} style={{ padding: 18 }}>
            <PQEyebrow theme={theme} right={<span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ 229,90</span>}>Parcelas em aberto</PQEyebrow>
            {[
              { l: 'Renner · jaqueta', v: 149.9, k: 'compras', cur: 3, tot: 6 },
              { l: 'Curso · cerâmica', v: 80, k: 'educacao', cur: 2, tot: 8 },
            ].map((p, i, a) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <PQCatChip catKey={p.k} theme={theme} size={32} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{p.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2, fontFamily: PQ_T.mono }}>parcela {p.cur} de {p.tot}</div>
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 12, fontWeight: 500 }}>R$ {p.v.toLocaleString('pt-BR', {minimumFractionDigits:2})}</div>
                </div>
                <div style={{ marginTop: 8, display: 'flex', gap: 3 }}>
                  {Array.from({ length: p.tot }).map((_, k) => (
                    <div key={k} style={{ flex: 1, height: 3, borderRadius: 2, background: k < p.cur ? theme.ink : theme.hair }} />
                  ))}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: 10, background: theme.bgOff, borderRadius: 10, fontSize: 10.5, color: theme.ink, lineHeight: 1.4 }}>
              <strong>R$ 1.039,10</strong> em parcelas a quitar até nov/26
            </div>
          </PQCard>
        </div>
      </div>
    </div>
  );
}
