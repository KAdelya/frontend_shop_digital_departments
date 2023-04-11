import styles from './index.module.sass'
import CountInput from "../CountInput/CountInput";

const PriceBlock = () => {
    return (
        <div className={styles.price}>
            <div className={styles.price__info}>
                <span>36,25 USD</span>
            </div>
            <div className={styles.price__btn}>
                <div className={styles.price__count}>
                    <CountInput/>
                </div>
                <div className={styles.price__add}>
                    <span className='material-icons-outlined'>shopping_cart</span>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default PriceBlock