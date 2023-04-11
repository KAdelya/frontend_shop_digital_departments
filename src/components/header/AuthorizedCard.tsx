import styles from './index.module.sass'
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import BasketIcon from "./BasketIcon/BasketIcon";

const AuthorizedCard = () => {
    return (
        <ul className={styles.authorized}>
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
            <li>
                <NavLink to="/basket">
                    <BasketIcon count={4}/>
                </NavLink>
            </li>
            <li>
                <NavLink to='/profile'>
                    <div className={styles.header__avatar}>
                        <img src={avatar} alt="avatar"/>
                        <div className={styles.header__name}>
                            <h5>Ivan Ivanov</h5>
                            <h6>User</h6>
                        </div>
                    </div>
                </NavLink>
            </li>
        </ul>
    )
}

export default AuthorizedCard