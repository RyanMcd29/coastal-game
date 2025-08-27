import { useEffect, useState } from "react";
import ScenBtn from "./scenBtn";
import Image from "next/image";

export default function Scenario({scenario, path, setPath, outcome, setOutcome}) {
    const [showOptions, setShowOptions] = useState(false);

    const letters = ((outcome ? outcome + '\n\n' : '') + scenario.text).split("");

    const animKey = `${path}::${scenario.text}`;

    useEffect(() => {
        setShowOptions(false);
        const duration = (scenario.text+outcome).length * 20 + 500;
        const timeout = setTimeout(() => setShowOptions(true), duration);
        return () => clearTimeout(timeout);
    }, [scenario.text, outcome]);

    return (
        <div className="flex flex-wrap w-full border-4 border-black bg-white flex-auto whitespace-pre-line text-xs max-sm:border-none">
            <div className="image-container mx-auto my-auto p-4 w-2/5">
                <Image 
                    className="mx-auto my-auto max-sm:48 image-fit aspect-square object-cover" 
                    src={`scenario_images/${scenario.image}`} 
                    alt="scenario image" 
                    width={1024} 
                    height={1024}
                />
            </div>
            <div className="mx-auto my-auto w-3/5 max-sm:w-full bg-white max-sm:p-2 md:p-8">
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
                <div className={`stack-xs text-black max-sm:pt-2 pt-8 transition-opacity duration-500 ${showOptions ? "opacity-100" : "opacity-0"}`}>
                    {(() => {
                        const shuffledOptions = [...(scenario.options || [])].sort(() => Math.random() - 0.5);
                        return shuffledOptions.map((option, i) => (
                            <ScenBtn key={i} option={option} path={path} setPath={setPath} setOutcome={setOutcome}/>
                        ));
                    })()}
                </div>
            </div>
        </div>
    )
}