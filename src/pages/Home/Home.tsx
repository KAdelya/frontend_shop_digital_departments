import styles from './index.module.sass'
import HomeLayout from "./HomeLayout";
import ProductCard from "./ProductCard/ProductCard";

const Home = () => {
    return (
        <HomeLayout>
            <div className={styles.home}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </HomeLayout>
    )
}

export default Home