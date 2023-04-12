import styles from './index.module.sass'
import {FC, PropsWithChildren} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {useLocation} from 'react-router-dom';

const HomeLayout: FC<PropsWithChildren<any>> = ({children, onChange, value}) => {
    const location = useLocation();
    return (
        <div className={styles.layout}>
            <Header onChange={onChange} value={value}/>
            <div className={styles.layout__bar}>
                {(location.pathname === '/') && <Sidebar/>}
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default HomeLayout;