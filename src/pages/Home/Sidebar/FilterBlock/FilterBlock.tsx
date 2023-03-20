import styles from './index.module.sass'
import {FC} from "react";

interface IFilterBlock{
    placeholder: string,
    type?: "link" | "checkbox"
}
const FilterBlock:FC<IFilterBlock> = ({placeholder, type}) => {
    const arr = [1, 2, 3, 4]
    return (
        <div className={styles.filters}>
            <h3>{placeholder}</h3>
            <ul>{arr.map(el =>
                <li key={el}>
                    {type === 'checkbox' && <input type="checkbox"/>}
                    {placeholder}
                </li>
            )}
            </ul>
        </div>
    )
}

export default FilterBlock