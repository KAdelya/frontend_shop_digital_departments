import styles from './index.module.sass'
import RatingRow from "../../Home/Sidebar/RatingBlock/RatingRow";
import CountInput from "../../../components/ui/CountInput/CountInput";
import ProductInfo from "../../Product/ProductInfo/ProductInfo";
import {FC} from "react";

const BasketCard: FC<{ title: string, price: string }> = ({title, price}) => {
    return (
        <div className={styles.basket_crd}>
            <div className={styles.basket_crd__btns}>
                <div className={styles.basket_crd__img}></div>
                <div className={styles.basket_crd__btn}>
                    <span className='material-icons-outlined'>tune</span>
                    <label>Compare</label>
                </div>
                <div className={styles.basket_crd__btn}>
                    <span className='material-icons-outlined'>close</span>
                    <label>Remove</label>
                </div>
            </div>
            <div className={styles.basket_crd__info}>
                <h3>{title}</h3>
                <RatingRow stars={4} checkbox={false}/>
                <ProductInfo brand="Apple" stock="In stock"/>
                <h2>{price} USD</h2>
            </div>
            <div className={styles.basket_crd__count}>
                <CountInput/>
            </div>
        </div>
    )
}

export default BasketCard