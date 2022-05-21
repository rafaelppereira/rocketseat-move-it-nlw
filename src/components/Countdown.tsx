import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';



export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);
  
  //Vai verificar se tem dois caracteres e se sim vai dividir em dois: '2' '5'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <div className={styles.countdownContainer}>
        
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
        Ciclo encerrado <CheckCircleIcon/>
        </button>
      ) : (
        <>
        { isActive ? (
          <button
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
          Abandonar ciclo
          </button>
        ) : (
          <button
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
          Iniciar ciclo
          </button>
        ) }
        </>
      )}
    </div>
    
  )
}