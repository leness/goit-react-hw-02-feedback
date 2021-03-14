import Notification from '../Notification'
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={styles.statistics}>
            {total > 0 ? (<>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
                </>)
                :<Notification message="No feedback given"></Notification>
                }
               
        </div>
    ) 
}

export default Statistics
