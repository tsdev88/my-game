import React from 'react';
import styles from './NotFaundPage.module.css';
// ./NotFoundPage.module.css

export default function NotFoundPage(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Дорога в никуда... Ты потерялся!</p>
      <button
        onClick={() => {
          window.history.back();
        }}
        className={styles.button}
      >
        Вернуться домой
      </button>
    </div>
  );
}
