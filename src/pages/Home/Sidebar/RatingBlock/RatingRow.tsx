import styles from './index.module.sass'
import {FC} from "react";
import {findStar} from "./findStar";

const RaringRow: FC<{ stars: number }> = ({stars}) => {
    const arr = Array(stars).fill(0);
    const newArr = findStar(arr)
    return (
        <div className={styles.rating_row}>
            <input type='checkbox'/>
            {arr.map(el =>
                <span className="material-icons-outlined" key={el}>star</span>)}
            {newArr.map(el=>
                <span className="material-icons-outlined" key={el}>star_border</span>)}
        </div>
    )
}

export default RaringRow