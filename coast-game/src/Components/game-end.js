import { useState, useEffect } from "react";
import OutCome from "./outcome";

const calcScore = (path) => {
    let points = 0;
    path.split("").forEach((char) => {
        switch (char) {
            case "a":
                points = points + 1000;
                break;
            case "b":
                points = points + 500;
                break;
            case "c":
                points = points + 250;
                break;
        }
    });
    return points;
};

export default function GameEnd({ path, setPage }) {
    const points = calcScore(path);
    const [name, setName] = useState("");
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        setLeaderboard(JSON.parse(localStorage.getItem("leaderboard")) || []);
    }, []);

    const submitScore = () => {
        const newLeaderboard = [...leaderboard, { name, points }];
        setLeaderboard(newLeaderboard);
        localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard));
        setPage("start");
    };
    return (
        <div className="stack bg-white p-8 border-4 border-black w-3/5 max-sm:w-full">
            <p className="text-black">You Scored: {points}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border-2 border-black p-2"
            />
            <button className="btn btn-primary" onClick={submitScore}>
                Submit Score
            </button>
            <OutCome points={points} />
        </div>
    );
}
