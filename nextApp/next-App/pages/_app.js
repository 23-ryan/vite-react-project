import { useEffect } from 'react';
import styles from '../styles/App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/NavbarComp';

import useCart from './inventories/useCart';

function App({ Component, pageProps }) {

    const {list, totalCost, updateCart} = useCart(); // the custom HOOK
    return (
        <div className={styles.root}>
            <NavbarComp />
            <Component {...pageProps} list={list} totalCost={totalCost} updateCart={updateCart} />
        </div>
        );
}

export default App