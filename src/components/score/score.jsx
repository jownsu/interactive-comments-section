import styles from "./score.module.scss";
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";

const Score = (props) => {
    const { 
        score = 0,
        onPlusClick = () => {},
        onMinusClick = () => {}
    } = props;

    return (
        <div className={styles.upvote}>
            <button onClick={onPlusClick}>
                <img src={PlusIcon} alt="plus icon" />
            </button>
            <p>{score}</p>
            <button onClick={onMinusClick}>
                <img src={MinusIcon} alt="minus icon" />
            </button>
        </div>
    )
}

export default Score