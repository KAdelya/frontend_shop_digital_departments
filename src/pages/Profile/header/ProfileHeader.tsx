import styles from './index.module.sass'
import avatar from '../../../assets/images/avatar.jpg'
import {NavLink} from "react-router-dom";

const ProfileHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrap}>
                <h2 className={styles.header__logo}>
                    ExampleNameShop
                </h2>
                <ul>
                    <li>
                        <NavLink
                            to="/analysis">
                            <h4>Analysis</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/orders">
                            <h4>Last Orders</h4>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink
                            to="/basket">
                            <span className="material-icons-outlined">shopping_basket</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className={styles.header__avatar}>
                            <img src={avatar} alt="avatar"/>
                            <div className={styles.header__name}>
                                <h5>Ivan Ivanov</h5>
                                <h6>User</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default ProfileHeader