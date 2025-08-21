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
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            {sorted.map((item, i)=>
                <p key={i}>{item.name}: {item.points}</p>
            )}
            <button
                className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}