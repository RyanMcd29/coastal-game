import { useEffect, useState } from "react";
import ScenBtn from "./scenBtn";

export default function Scenario({scenario, path, setPath, setPage}) {
    const [showOptions, setShowOptions] = useState(false);
    const letters = scenario.text.split("");

    useEffect(() => {
        setShowOptions(false);
        const duration = scenario.text.length * 50 + 500;
        const timeout = setTimeout(() => setShowOptions(true), duration);
        return () => clearTimeout(timeout);
    }, [scenario.text]);

    return (
        <div className="stack-sm">
            <em className="text-center text-lg block">
                {letters.map((char, i) => (
                    <span
                        key={i}
                        className="opacity-0"
                        style={{
                            animation: "fade-in 0.3s forwards",
                            animationDelay: `${i * 50}ms`,
                        }}
                    >
                        {char}
                    </span>
                ))}
            </em>
            <div className={`stack-xs transition-opacity duration-500 ${showOptions ? "opacity-100" : "opacity-0"}`}>
                {scenario.options?.map((option, i) => (
                    <ScenBtn key={i} option={option} path={path} setPath={setPath} />
                ))}
            </div>
        </div>
    )
}