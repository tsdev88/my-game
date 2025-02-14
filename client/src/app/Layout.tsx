import React from 'react'
import Navbar from '../widgets/Navbar/Navbar'
import {Outlet} from 'react-router'
import styles from './Layout.module.css'

export default function Layout(): React.JSX.Element {
    return (
        <>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
            <Outlet/>
        </>

    )
}
