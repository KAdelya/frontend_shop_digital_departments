import styles from './index.module.sass'
import {NavLink} from "react-router-dom";

const UnauthorizedCard = () => {
    return (
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
    )
}

export default UnauthorizedCard