import styles from './index.module.sass'
import FilterBlock from "./FilterBlock/FilterBlock";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <FilterBlock placeholder="Categories"/>
            <FilterBlock placeholder="Brands" type="checkbox"/>
            <FilterBlock placeholder="Rating" type="checkbox"/>
            <aside className={styles.sidebar__buttons}>
                <div className={styles.sidebar__buttons__block}>
                <button>Apply</button>
                <button>Reset</button>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar