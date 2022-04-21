import styles from '../styles/Temporizador.module.css'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#41cf2b', '#f7f701', '#ed7474', '#ea2112']}
                colorsTime={[60, 30, 15, 0]}
                >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}

