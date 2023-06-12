import { Routes } from '@shared/model/routes';
import { Navigation } from './Navigation';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Navigation pages={Routes} />
      </div>
    </div>
  );
};
