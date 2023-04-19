import styles from './index.module.sass'
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import product from '../../../assets/images/product.jpg'


const ProductCard: FC<{ id: number , cost: number, path_to_image: string}> = ({id, cost, path_to_image}) => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    return (
        <div className={styles.product}>
            <div className={styles.product__back}>
                <img src={"http://127.0.0.1:8000" + path_to_image.slice(1,-1).toString()} onClick={() => navigate('/product/' + id)}/>
                <button onClick={() => setVisible(!visible)}>
                    <span className="material-icons-outlined">{visible ? "favorite" : "favorite_border"}</span>
                </button>
            </div>
            <aside className={styles.product__info}>
                <h4>{id}</h4>
                <label>Space for a small product description</label>
                <div className={styles.product__bottom}>
                    <h3>{cost} USD</h3>
                    <button onClick={() => navigate('/basket')}>Buy now</button>
                </div>
            </aside>
        </div>
    )
}

export default ProductCard;