import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    console.log(props);
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
};

const Statistic = (props) =>{
    let num = props.num;
    if (!props.num) num = 0;
    return (
        <tr>
            <td>{props.text} </td>
            <td>{num}</td>
        </tr>)
};

const Statistics = ({good, neutral, bad, feedback}) =>{
    const total = good + neutral + bad;
    const average = (good + bad*(-1)) / total;
    const positive = (good/total)*100;

    if (!feedback)
        return (<p>No feedback given!</p>);
    return(
        <table>
            <tbody>
            <Statistic text={"Good"} num={good} />
            <Statistic text={"Neutral"} num={neutral} />
            <Statistic text={"Bad"} num={bad} />
            <Statistic text={"total"} num={total} />
            <Statistic text={"average"} num={average} />
            <Statistic text={"positive"} num={positive} />
            </tbody>
        </table>
    )
};


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [feedback, setFeedback] = useState(false);

    const handleGood = () =>{
        setGood(good+1);
        setFeedback(true);
    };

    const handleNeutral = () =>{
        setNeutral(neutral+1);
        setFeedback(true);
    };

    const handleBad = () =>{
        setBad(bad+1);
        setFeedback(true);
    };

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => handleGood()} text="Good" />
            <Button handleClick={() => handleNeutral()} text="Neutral" />
            <Button handleClick={() => handleBad()} text="Bad" />
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} feedback={feedback}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)