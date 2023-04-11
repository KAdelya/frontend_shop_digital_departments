import styles from './index.module.sass'
import {FC} from "react";

const BasketIcon: FC<{ count?: number }> = ({count}) => {
    return (
        <div className={styles.basket}>
            <span className="material-icons-outlined">shopping_basket</span>
            {count && (<div className={styles.basket__circle}>
                <div className={styles.basket__count}>{count}</div>
            </div>)}
        </div>
    )
}

export default BasketIcon