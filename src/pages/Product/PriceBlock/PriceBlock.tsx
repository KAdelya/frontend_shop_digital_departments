import styles from './index.module.sass'
import CountInput from "../../../components/ui/CountInput/CountInput";
import {useNavigate} from "react-router-dom";
import ProductInfo from "../ProductInfo/ProductInfo";

const PriceBlock = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.price}>
            <div className={styles.price__info}>
                <span>36,25 USD</span>
            </div>
            <div className={styles.price__btn}>
                <div className={styles.price__count}>
                    <CountInput/>
                </div>
                <div className={styles.price__add} onClick={() => navigate('/basket')}>
                    <span className='material-icons-outlined'>shopping_cart</span>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default PriceBlock