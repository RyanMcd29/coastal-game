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
        <div className="flex flex-wrap w-full flex-auto">
            <Image 
                className="mx-auto image-fit md:w-2/5  sm:w-full aspect-square object-cover border-4 border-black" 
                src={scenario.image} 
                alt="scenario image" 
                width={500} 
                height={500}
            />
            <div className="mx-auto md:w-3/5 sm:w-full bg-white p-8 border-4 border-black">
                <p key={animKey} className="text-black text-center text-lg block">
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
                <div className={`stack-xs pt-8 transition-opacity duration-500 ${showOptions ? "opacity-100" : "opacity-0"}`}>
                    {scenario.options?.map((option, i) => (
                        <ScenBtn key={i} option={option} path={path} setPath={setPath} />
                    ))}
                </div>
            </div>
        </div>
    )
}