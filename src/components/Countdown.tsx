import cx from 'classnames';

import { useChallenge } from "../hooks/useChallenge";
import { useCountdown } from "../hooks/useCountdown";

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        isActive,
        hasFinished,
        resetCountdown,
        startCountDown,
        minutes,
        seconds
    } = useCountdown();

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <>
            <div className={styles.countdown}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.startCycleButton}
                > Ciclo finalizado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={styles.startCycleButton, styles.startCycleButtonActive)}
                    onClick={resetCountdown}
                    > Abandonar Ciclo
                </button>
            ) : (
            <button
                type="button"
                className={styles.startCycleButton}
                onClick={startCountDown}
                > Iniciar um ciclo
              </button>
            ) }
          </>
        ) }
      </>
    );
  }