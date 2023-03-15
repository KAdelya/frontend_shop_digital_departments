import styles from './index.module.sass'
import HomeLayout from "./HomeLayout";
import ProductCard from "./ProductCard/ProductCard";

const Home = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <HomeLayout>
            <div className={styles.home}>
                {arr.map(card =>
                    <ProductCard key={card}/>)}
            </div>
        </HomeLayout>
    )
}

export default Home