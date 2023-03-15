import styles from './index.module.sass'
import {FC, PropsWithChildren} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "../../components/header/Header";

const HomeLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <div className={styles.layout}>
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}

export default HomeLayout