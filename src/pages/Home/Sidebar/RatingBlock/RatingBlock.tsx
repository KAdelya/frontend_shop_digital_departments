import RatingRow from "./RatingRow";

const RatingBlock = () => {
    const arr = [1, 2, 3, 4, 5].reverse()
    return (
        <div>
            <h3>Rating</h3>
            {arr.map((el, idx) =>
                <RatingRow stars={el} key={idx}/>)}
        </div>
    )
}

export default RatingBlock