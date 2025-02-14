import React from 'react';
import { useNavigate } from 'react-router';
import styles from './HelloPage.module.css';

export default function HelloPage(): React.JSX.Element {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Начало Игры</h1>
      </div>

      <div>
        <button className={styles.button} onClick={handlerClick}>
          Играть
        </button>
      </div>
    </div>
  );
}
