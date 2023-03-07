import styles from './index.module.sass'
import Search from "../ui/Search/Search";

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
                        <span className="material-icons-outlined">person</span>
                    </li>
                    <li>
                        <span className="material-icons-outlined">shopping_basket</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header