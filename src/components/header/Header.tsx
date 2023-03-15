import styles from './index.module.sass'
import Search from "../ui/Search/Search";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrap}>
                <h2 className={styles.header__logo}>
                    ExampleNameShop
                </h2>
                <div className={styles.header__search}><Search/></div>
                <ul>
                    <li>
                        <NavLink
                            to="/profile">
                            <span className="material-icons-outlined">person</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/basket">
                            <span className="material-icons-outlined">shopping_basket</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header