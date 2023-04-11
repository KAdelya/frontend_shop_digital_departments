import styles from './index.module.sass'
import HomeLayout from "./HomeLayout";
import ProductCard from "./ProductCard/ProductCard";
import {ChangeEvent, Key, useState} from 'react';
import {NavLink} from "react-router-dom";


const Home = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const filter = arr.filter((e) => {
        return e.toString().toLowerCase().match(searchValue);
    });
    return (
        <HomeLayout onChange={searchHandler} value={searchValue}>
            <div className={styles.home}>
                {filter.map((card, idx) =>
                    <ProductCard key={idx} id={card}/>
                )}
            </div>
        </HomeLayout>
    )
}

export default Home;