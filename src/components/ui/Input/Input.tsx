import styles from './index.module.sass'
import {FC} from "react";

const Input: FC<any> = ({onChange, value, icon, placeholder, label}) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header__wrap}>
                    <div className={styles.header__search}>
                        <div className={styles.search}>
                            <input type='text'
                                   onChange={onChange}
                                   value={value}
                                   placeholder={placeholder}/>
                            {icon && <span className='material-icons-outlined'>{icon}</span>}
                            {label && <button>{label}</button>}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Input;