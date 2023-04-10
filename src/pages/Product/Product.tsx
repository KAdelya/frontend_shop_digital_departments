import styles from './index.module.sass'
import HomeLayout from "../Home/HomeLayout";
import defaultImg from '../../assets/images/product.jpg'
import RatingRow from "../Home/Sidebar/RatingBlock/RatingRow";
import ProductInfo from "./ProductInfo/ProductInfo";
import PriceBlock from "./PriceBlock/PriceBlock";

const Product = () => {
    return (
        <HomeLayout>
            <div className={styles.product}>
                <aside className={styles.product__info}>
                    <div className={styles.product__img}>
                        <img src={defaultImg}/>
                    </div>
                    <div>
                        <h1>iPhone 13 Pro MAX</h1>
                        <RatingRow stars={4} checkbox={false}/>
                        <p>У новой телефотокамеры фокусное расстояние 77 мм и трёхкратный оптический зум — идеальные
                            параметры для классических портретных кадров или съёмки фото и видео издалека.</p>
                        <ProductInfo brand="Apple" category="Telephone" sku="1" stock="In stock"/>
                        <div className={styles.product__price}>
                            <PriceBlock/>
                        </div>
                    </div>

                </aside>
            </div>
        </HomeLayout>
    )
}

export default Product