import styles from './index.module.sass'
import {ChangeEvent, FC, Key, useState} from "react";
import ProductCard from "../../../pages/Home/ProductCard/ProductCard";
import HomeLayout from "../../../pages/Home/HomeLayout";

const Search: FC<any> = ({onChange, value}) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header__wrap}>
                    <div className={styles.header__search}>
                        <div className={styles.search}>
                            <input type='text'
                                   onChange={onChange}
                                   value={value}
                                   placeholder='Search Products, categories ...'/>
                            <span className='material-icons-outlined'>search</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Search;