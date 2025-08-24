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
        <div className="stack bg-white p-8 border-4 border-black w-3/5 max-sm:w-full">
            <h1 className="text-2xl font-bold text-center">Leaderboard</h1>
            {sorted.map((item, i) => (
                <p key={i} className="text-black">
                    {item.name}: {item.points}
                </p>
            ))}
            <button
                className="btn btn-secondary"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}
