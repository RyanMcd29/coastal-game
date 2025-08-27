import { useState, useEffect } from "react";
import outcomes from "../app/outcomes.json"
import Image from "next/image";

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

const getOutcome = (gamepath) => {
    return (Object.values(outcomes).find(
        outcome => {
            if (outcome.paths.includes(gamepath)) {
                return (outcome)
            }
        }
    ) || {
                "text":"no matching outcome found",
                "image": ""
    }) 
}

export default function GameEnd({ path, setPage, outcome }) {
    const points = calcScore(path);
    const endtext = getOutcome(path)
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
        <div className="bg-white max-sm:p-1 md:p-8 border-4 border-black max-sm:w-full flex flex-wrap">
            <div className="image-container mx-auto my-auto p-4 w-2/5">
                <Image 
                    className="mx-auto my-auto max-sm:48 image-fit aspect-square object-cover" 
                    src={`scenario_images/${endtext.image}`} 
                    alt="scenario image" 
                    width={1000} 
                    height={1000}
                />
            </div>
            <div className="mx-auto my-auto w-3/5 max-sm:w-full bg-white text-xs p-8">
                <p style={{"borderBottom": "solid"}} className="text-black text-center p-4 pb-6">{outcome}</p>
                <p className="mt-6">{endtext.text}</p>
                <div className='flex flex-wrap mt-6'>
                <p className="text-black w-full">You Scored: {points}</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-3/5 border-2 border-black p-2"
                    />
                    <button className="w-2/5 btn btn-primary" onClick={submitScore}>
                        Submit Score
                    </button>
                </div>
            </div>
        </div>
    );
}
