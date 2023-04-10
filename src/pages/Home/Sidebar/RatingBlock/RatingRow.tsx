import styles from './index.module.sass'
import {FC} from "react";
import {findStar} from "./findStar";

const RatingRow: FC<{ stars: number, checkbox: boolean }> = ({stars, checkbox}) => {
    const arr = Array(stars).fill(0);
    const newArr = findStar(arr)
    return (
        <div className={styles.rating_row}>
            {checkbox && <input type='checkbox'/>}
            {arr.map((el, idx) =>
                <span key={idx} className="material-icons-outlined">star</span>)}
            {newArr.map((el, idx) =>
                <span key={idx} className="material-icons-outlined">star_border</span>)}
        </div>
    )
}

export default RatingRow;