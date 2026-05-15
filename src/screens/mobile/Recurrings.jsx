import { useTheme } from '../../context/ThemeContext';
import { MobileScreen } from '../../layout/MobileLayout';
import { PQCard, PQCatChip, PQAmount, PQEyebrow } from '../../components/ui';
import { Poupi } from '../../components/Poupi';
import { IPlus } from '../../components/icons';
import { PQ_T } from '../../tokens';

const subs = [
  { l: 'Netflix',      v: 39.9,  k: 'assinaturas', next: 'em 2 dias',  paid: true,  color: '#E50914' },
  { l: 'Spotify',      v: 21.9,  k: 'assinaturas', next: 'em 9 dias',  paid: true,  color: '#1ED760', dark: true },
  { l: 'iCloud 200GB', v: 11.9,  k: 'assinaturas', next: 'em 12 dias', paid: true,  color: '#0A1F44' },
  { l: 'Notion',       v: 49.0,  k: 'assinaturas', next: 'em 18 dias', paid: false, color: '#1A1A1A' },
];
const fixed = [
  { l: 'Aluguel',          v: 1800, k: 'moradia', next: 'em 28 dias', day: 'dia 12' },
  { l: 'Internet · Vivo',  v: 99.9, k: 'moradia', next: 'em 5 dias',  day: 'dia 20' },
  { l: 'Energia · Enel',   v: 142,  k: 'moradia', next: 'variável',    day: 'dia 26' },
];
const parcelas = [
  { l: 'Renner · jaqueta', v: 149.9, k: 'compras',  cur: 3, tot: 6 },
  { l: 'Curso · cerâmica', v: 80,    k: 'educacao', cur: 2, tot: 8 },
];

export default function Recurrings() {
  const { theme } = useTheme();
  const total = [...subs, ...fixed, ...parcelas].reduce((s, x) => s + x.v, 0);

  return (
    <MobileScreen active="home" bg={theme.bg}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: theme.mute, fontWeight: 600 }}>Cobranças recorrentes</div>
              <PQAmount value={total} theme={theme} size={42} />
              <div style={{ fontSize: 11.5, color: theme.mute, marginTop: 4 }}>
                compromisso mensal · {subs.length + fixed.length + parcelas.length} itens
              </div>
            </div>
            <button style={{ width: 40, height: 40, borderRadius: 20,
              background: theme.ink, color: theme.bg, border: 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <IPlus size={20} stroke={2.2}/>
            </button>
          </div>

          {/* Calendar strip */}
          <div style={{ marginTop: 18, padding: 12, background: theme.bgOff, borderRadius: 14 }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: theme.mute, fontWeight: 600 }}>Próximos 30 dias</div>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-end', marginTop: 10, gap: 3, height: 64 }}>
              {Array.from({ length: 30 }).map((_, i) => {
                const heights = { 2: 40, 5: 24, 9: 22, 12: 36, 18: 30, 20: 28, 26: 32, 28: 100 };
                const h = heights[i] || 0;
                const accent = h === 100 || i === 2;
                return (
                  <div key={i} style={{ flex: 1, height: `${Math.max(h, 4)}%`,
                    background: accent ? theme.ink : theme.hair, borderRadius: 1.5, minHeight: 4 }} />
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              fontSize: 9.5, color: theme.mute, marginTop: 6, fontFamily: PQ_T.mono }}>
              <span>hoje</span><span>+7d</span><span>+14d</span><span>+21d</span><span>+30d</span>
            </div>
          </div>

          {/* Assinaturas */}
          <div style={{ marginTop: 22 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ {subs.reduce((s,x)=>s+x.v,0).toFixed(2)}</span>
            }>Assinaturas</PQEyebrow>
            <PQCard theme={theme} inset={false}>
              {subs.map((s, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: s.color,
                    color: s.dark ? '#000' : '#fff', flexShrink: 0,
                    fontFamily: PQ_T.display, fontWeight: 700, fontSize: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {s.l[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{s.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{s.next} · mensal</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 13, color: theme.ink, fontWeight: 500 }}>R$ {s.v.toFixed(2)}</div>
                    <div style={{ width: 32, height: 18, borderRadius: 9,
                      background: s.paid ? theme.accent : theme.hair, padding: 2,
                      display: 'flex', justifyContent: s.paid ? 'flex-end' : 'flex-start',
                      marginTop: 4, marginLeft: 'auto', cursor: 'pointer' }}>
                      <div style={{ width: 14, height: 14, borderRadius: 7, background: theme.bg }}/>
                    </div>
                  </div>
                </div>
              ))}
            </PQCard>
          </div>

          {/* Contas fixas */}
          <div style={{ marginTop: 22 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ {fixed.reduce((s,x)=>s+x.v,0).toFixed(2)}</span>
            }>Contas fixas</PQEyebrow>
            <PQCard theme={theme} inset={false}>
              {fixed.map((f, i, a) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <PQCatChip catKey={f.k} theme={theme} size={36} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{f.l}</div>
                    <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2 }}>{f.next} · {f.day}</div>
                  </div>
                  <div style={{ fontFamily: PQ_T.mono, fontSize: 13, color: theme.ink, fontWeight: 500 }}>
                    R$ {f.v.toLocaleString('pt-BR', {minimumFractionDigits:2})}
                  </div>
                </div>
              ))}
            </PQCard>
          </div>

          {/* Parcelas */}
          <div style={{ marginTop: 22 }}>
            <PQEyebrow theme={theme} right={
              <span style={{ fontFamily: PQ_T.mono, color: theme.ink }}>R$ {parcelas.reduce((s,x)=>s+x.v,0).toFixed(2)}</span>
            }>Parcelas em aberto</PQEyebrow>
            <PQCard theme={theme} inset={false}>
              {parcelas.map((p, i, a) => (
                <div key={i} style={{ padding: '12px 14px',
                  borderBottom: i < a.length-1 ? `0.5px solid ${theme.hairSoft}` : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <PQCatChip catKey={p.k} theme={theme} size={32} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{p.l}</div>
                      <div style={{ fontSize: 10.5, color: theme.mute, marginTop: 2, fontFamily: PQ_T.mono }}>
                        parcela {p.cur} de {p.tot}
                      </div>
                    </div>
                    <div style={{ fontFamily: PQ_T.mono, fontSize: 13, fontWeight: 500 }}>
                      R$ {p.v.toLocaleString('pt-BR', {minimumFractionDigits:2})}
                    </div>
                  </div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 3 }}>
                    {Array.from({ length: p.tot }).map((_, k) => (
                      <div key={k} style={{ flex: 1, height: 3, borderRadius: 2,
                        background: k < p.cur ? theme.ink : theme.hair }} />
                    ))}
                  </div>
                </div>
              ))}
            </PQCard>
          </div>

          {/* Poupi nudge */}
          <div style={{ marginTop: 18, marginBottom: 8, padding: 14, borderRadius: 14,
            background: theme.bgOff, display: 'flex', gap: 12, alignItems: 'center' }}>
            <Poupi size={36} />
            <div style={{ fontSize: 12, color: theme.ink, flex: 1, lineHeight: 1.4 }}>
              <strong>Notion</strong> custa R$ 49/mês — você usou só 2 vezes em abril. Quer pausar?
              <span style={{ color: theme.accent, fontWeight: 600, marginLeft: 4, cursor: 'pointer' }}>Revisar →</span>
            </div>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
