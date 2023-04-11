import styles from './index.module.sass'

const CountInput = () => {
    return (
        <div className={styles.count}>
            <input placeholder='1 psc'/>
            <span>|</span>
            <label>Psc</label>
        </div>
    )
}

export default CountInput