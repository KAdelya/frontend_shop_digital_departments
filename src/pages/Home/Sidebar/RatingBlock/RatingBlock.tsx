import RatingRow from "./RatingRow";

const RatingBlock = () => {
    const arr = [1, 2, 3, 4, 5].reverse()
    return (
        <div>
            <h3>Rating</h3>
            {arr.map(el =>
                <RatingRow stars={el} key={el}/>)}
        </div>
    )
}

export default RatingBlock