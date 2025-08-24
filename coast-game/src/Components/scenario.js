import { useEffect, useState } from "react";
import ScenBtn from "./scenBtn";
import Image from "next/image";

export default function Scenario({scenario, path, setPath, setPage}) {
    const [showOptions, setShowOptions] = useState(false);
    const letters = scenario.text.split("");
    const animKey = `${path}::${scenario.text}`;

    useEffect(() => {
        setShowOptions(false);
        const duration = scenario.text.length * 20 + 500;
        const timeout = setTimeout(() => setShowOptions(true), duration);
        return () => clearTimeout(timeout);
    }, [scenario.text]);

    return (
        <div className="flex flex-wrap w-full border-4 border-black bg-white flex-auto whitespace-pre-line
text-xs">
            <Image 
                className="mx-auto w-2/5 max-sm:48 image-fit aspect-square object-cover" 
                src={scenario.image} 
                alt="scenario image" 
                width={1000} 
                height={1000}
            />
            <div className="mx-auto w-3/5 max-sm:w-full bg-white p-8">
                <p key={animKey} style={{"borderBottom": "solid"}} className="text-black text-center p-4 pb-2">
                    {letters.map((char, i) => (
                        <span
                            key={i}
                            className="opacity-0"
                            style={{
                                animation: "fade-in 0.1s forwards",
                                animationDelay: `${i * 20}ms`,
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </p>
                <div className={`stack-xs text-black pt-8 transition-opacity duration-500 ${showOptions ? "opacity-100" : "opacity-0"}`}>
                    {(() => {
                        const shuffledOptions = [...(scenario.options || [])].sort(() => Math.random() - 0.5);
                        return shuffledOptions.map((option, i) => (
                            <ScenBtn key={i} option={option} path={path} setPath={setPath} />
                        ));
                    })()}
                </div>
            </div>
        </div>
    )
}