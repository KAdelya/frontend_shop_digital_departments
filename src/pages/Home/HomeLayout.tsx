import styles from './index.module.sass'
import {FC, PropsWithChildren} from "react";
import Sidebar from "./Sidebar/Sidebar";

const HomeLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            {children}
        </div>
    )
}

export default HomeLayout