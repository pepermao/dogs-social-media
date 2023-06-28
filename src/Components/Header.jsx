import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';
import BASE_URL from '../../BASE_URL';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to={`/${BASE_URL}`} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to={`/${BASE_URL}/conta`}>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to={`/${BASE_URL}/login`}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
