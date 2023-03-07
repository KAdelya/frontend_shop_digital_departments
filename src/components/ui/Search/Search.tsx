import styles from './index.module.sass'
import {ChangeEvent, FC, useState} from "react";

const Search: FC<any> = () => {
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    }

    return (
        <div className={styles.search}>
            <input type='text'
                   onChange={searchHandler}
                   value={searchValue}
                   placeholder='Search Products, categories ...'/>
            <span className='material-icons-outlined'>search</span>
        </div>
    )
}

export default Search