import { useState, useEffect} from "react";
import OutCome from "./outcome";

const calcScore = (path) => {
    let points = 0    
    path.split("").forEach(char => {
        switch (char){
            case 'a':
                points = points + 1000
            break;
            case 'b':
                points = points + 500
            break;
            case 'c':
                points = points + 250
            break;
        }
    });
    return points

}

export default function GameEnd ({path, setPage}) {
    const points = calcScore(path)
    const [name, setName] = useState('')
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(()=>{
        setLeaderboard(JSON.parse(localStorage.getItem('leaderboard')) || []);
    }, [])

    const submitScore = () => {
        const newLeaderboard = [...leaderboard, { name, points }];
        setLeaderboard(newLeaderboard);
        localStorage.setItem('leaderboard', JSON.stringify(newLeaderboard));
        setPage('start')
    }
    return(
        <div>
            <p>You Scored: {points}</p>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
            />
            <button
                onClick={() => submitScore()
                }
            >
                Submit Score
            </button>
            <OutCome points={points}/>
        </div>
    )
}