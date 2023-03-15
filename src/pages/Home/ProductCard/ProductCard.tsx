import styles from './index.module.sass'
import {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";

const ProductCard = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    return (
        <div className={styles.product}>
            <div className={styles.product__back}>
                <button onClick={() => setVisible(!visible)}>
                    <span className="material-icons-outlined">{visible ? "favorite" : "favorite_border"}</span>
                </button>
            </div>
            <aside className={styles.product__info}>
                <h4>Product title</h4>
                <label>Space for a small product description</label>
                <div className={styles.product__bottom}>
                    <h3>36.99 USD</h3>
                    <button onClick={() => navigate('/basket')}>Buy now</button>
                </div>
            </aside>
        </div>
    )
}

export default ProductCard