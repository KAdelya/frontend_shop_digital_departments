import styles from './index.module.sass'
import {FC} from "react";
import {useLocation} from "react-router-dom";

const BasketIcon: FC<{ count?: number }> = ({count}) => {
    const location = useLocation();
    return (
        <div className={styles.basket}>
            <span className="material-icons-outlined"
                  style={(location.pathname === '/basket') ? {color: '#0223ec'} : {color: 'black'}}>
                shopping_basket
            </span>
            {count && (<div className={styles.basket__circle}>
                <div className={styles.basket__count}>{count}</div>
            </div>)}
        </div>
    )
}

export default BasketIcon