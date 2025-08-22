import { useEffect, useState } from "react";

export default function Leaderboard({ setPage }) {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(()=>{
        setLeaderboard(JSON.parse(localStorage.getItem('leaderboard')) || [])
    }, [])

    const sorted = leaderboard.sort((a,b) => {
        return b.points - a.points
    })

    return (
        <div className="stack">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            {sorted.map((item, i)=>
                <p key={i}>{item.name}: {item.points}</p>
            )}
            <button
                className="btn btn-secondary"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}