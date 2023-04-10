import styles from './index.module.sass'

const PriceBlock = () => {
    return (
        <div className={styles.price}>
            <div className={styles.price__info}>
                <span>36,25 USD</span>
            </div>
            <div className={styles.price__btn}>
                <div className={styles.price__count}></div>
                <div className={styles.price__add}></div>
            </div>
        </div>
    )
}

export default PriceBlock