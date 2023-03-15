import styles from './index.module.sass'

const ProductCard = () => {
    return (
        <div className={styles.product}>
            <div className={styles.product__back}></div>
            <aside className={styles.product__info}>
                <h4>Product title</h4>
                <label>Space for a small product description</label>
                <h3>36.99 USD</h3>
            </aside>
        </div>
    )
}

export default ProductCard