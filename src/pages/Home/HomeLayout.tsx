import styles from './index.module.sass'
import {FC, PropsWithChildren} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const HomeLayout: FC<PropsWithChildren<any>> = ({children, onChange, value}) => {
    return (
        <div className={styles.layout}>
            <Header onChange={onChange} value={value}/>
            <div className={styles.layout__bar}>
                <Sidebar/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default HomeLayout;