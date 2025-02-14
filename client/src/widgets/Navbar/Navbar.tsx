import React from 'react';
import {Link} from 'react-router';
import {useAppDispatch} from '../../shared/api/lib/hooks';
import {logout} from '../../features/auth/model/redux/authThunk';
import styles from './NavBar.module.css'

export default function Navbar(): React.JSX.Element {
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
        void dispatch(logout());
    };
    return (
        <nav className={styles.container}>
            <div className="nav__links">
                <ul className={styles.list}>
                    <li>
                        <Link to="/" className={styles.oneLink}>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.oneLink} to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link className={styles.oneLink} to="/login">Login</Link>
                    </li>
                    <li>
                        <button className={styles.btn} onClick={logoutHandler}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
