import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { PQCard, PQPill } from '../../components/ui';
import { ICheck, ITrophy } from '../../components/icons';
import { PQ_T } from '../../tokens';

export default function GoalCreate() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div style={{ height: '100%', background: theme.bgOff, paddingTop: 54,
      paddingBottom: 28, overflow: 'auto', fontFamily: PQ_T.sans }}>
      <div style={{ padding: '8px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => navigate(-1)} style={{ width: 34, height: 34, borderRadius: 17,
            background: theme.bg, border: `0.5px solid ${theme.hair}`,
            color: theme.ink, fontSize: 18, lineHeight: 1, cursor: 'pointer' }}>×</button>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: theme.ink }}>Nova meta</span>
          <span style={{ width: 34 }} />
        </div>

        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: theme.mute, fontWeight: 600 }}>Pra quê é essa meta?</div>
          <div style={{ fontFamily: PQ_T.display, fontSize: 30, color: theme.ink,
            lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 6 }}>
            Viagem · Patagônia
            <span style={{ color: theme.accent, fontSize: 26 }}>|</span>
          </div>
        </div>

        {/* Emoji picker */}
        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: theme.gold,
            color: theme.bg, fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🏔</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['🏖','🛟','🏠','💻','🎮','🎓','🎁','🐾','🚗','✈️','📷','🏺'].map((e) => (
                <span key={e} style={{ width: 30, height: 30, borderRadius: 8,
                  background: theme.bg, border: `0.5px solid ${theme.hair}`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, cursor: 'pointer' }}>{e}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Target value */}
        <div style={{ marginTop: 24, padding: 16, background: theme.bg,
          borderRadius: 16, border: `0.5px solid ${theme.hair}` }}>
          <div style={{ fontSize: 10.5, color: theme.mute, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase' }}>Valor alvo</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
            <span style={{ fontSize: 16, color: theme.mute }}>R$</span>
            <span style={{ fontFamily: PQ_T.display, fontSize: 40, color: theme.ink, letterSpacing: '-0.02em' }}>12.000</span>
            <span style={{ color: theme.mute, fontSize: 22 }}>,00</span>
          </div>
        </div>

        {/* Deadline */}
        <div style={{ marginTop: 14, padding: 16, background: theme.bg,
          borderRadius: 16, border: `0.5px solid ${theme.hair}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
          <div>
            <div style={{ fontSize: 10.5, color: theme.mute, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase' }}>Quando você quer alcançar</div>
            <div style={{ fontFamily: PQ_T.display, fontSize: 22, color: theme.ink, marginTop: 4, letterSpacing: '-0.01em' }}>
              Novembro · 2026
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10.5, color: theme.mute }}>em</div>
            <div style={{ fontFamily: PQ_T.mono, fontSize: 14, color: theme.ink, fontWeight: 600 }}>18 meses</div>
          </div>
        </div>

        {/* Auto contribution */}
        <div style={{ marginTop: 14, padding: 16, background: theme.ink,
          color: theme.bg, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10.5, opacity: 0.6, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase' }}>Sugestão · todo dia 5</div>
              <div style={{ fontFamily: PQ_T.display, fontSize: 28, marginTop: 4, letterSpacing: '-0.02em' }}>R$ 500 / mês</div>
            </div>
            <div style={{ width: 44, height: 26, borderRadius: 13,
              background: theme.accent, padding: 3, display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
              <div style={{ width: 20, height: 20, borderRadius: 10, background: theme.bg }} />
            </div>
          </div>
          <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 8, lineHeight: 1.4 }}>
            Vou transferir esse valor pro cofre todo mês. Você pode pausar a qualquer hora.
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
            {['R$ 300', 'R$ 500', 'R$ 800', 'Personalizar'].map((v, i) => (
              <PQPill key={i} theme={theme}
                color={theme.bg}
                bg={i === 1 ? theme.accent : 'rgba(255,255,255,0.1)'}
                border="none"
                style={{ fontSize: 11, padding: '5px 12px', cursor: 'pointer' }}>{v}</PQPill>
            ))}
          </div>
        </div>

        {/* Reward */}
        <div style={{ marginTop: 14, padding: 14, background: theme.bg, borderRadius: 14,
          border: `0.5px solid ${theme.hair}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <ITrophy size={20} />
          <div style={{ flex: 1, fontSize: 12, color: theme.ink, lineHeight: 1.4 }}>
            Você ganha <strong>+800 XP</strong> ao bater a meta e a conquista <em>Viajante Sério</em>.
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 22px 0' }}>
        <button onClick={() => navigate(-1)} style={{ width: '100%', height: 52, borderRadius: 26,
          background: theme.ink, color: theme.bg, border: 'none',
          fontSize: 14, fontWeight: 600, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <ICheck size={18} stroke={2.4} /> Criar meta
        </button>
      </div>
    </div>
  );
}
