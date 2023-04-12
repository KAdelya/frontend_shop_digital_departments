import styles from './index.module.sass';
import Input from "../ui/Input/Input";
import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import AuthorizedCard from "./AuthorizedCard";
import UnauthorizedCard from "./UnauthorizedCard";
import {NavLink} from "react-router-dom";


const Header: FC<any> = ({onChange, value}) => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    return (
        <header className={styles.header}>
            <div className={styles.header__wrap}>
                <NavLink to='/'>
                    <h2 className={styles.header__logo}>
                        DigitalShop
                    </h2>
                </NavLink>
                <div className={styles.header__search}>
                    <Input onChange={onChange}
                           value={value}
                           icon="search"
                           placeholder="Search Products, categories"/>
                </div>
            </div>
            {isAuth ? <AuthorizedCard/> : <UnauthorizedCard/>}
        </header>
    )
}

export default Header;