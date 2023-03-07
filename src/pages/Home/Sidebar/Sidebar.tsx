import styles from './index.module.sass'
import FilterBlock from "./FilterBlock/FilterBlock";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <FilterBlock placeholder="Categories"/>
            <FilterBlock placeholder="Brands" type="checkbox"/>
            <FilterBlock placeholder="Rating" type="checkbox"/>
        </div>
    )
}

export default Sidebar