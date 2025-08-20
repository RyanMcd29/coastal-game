import ScenBtn from "./scenBtn"

export default function Scenario({scenarios, path, setPath}) {
    console.log('path', path)
    const scenario = scenarios.layers[path.length][path]
    return (
        <div className="flex flex-col items-center gap-4">
            <em className="text-center text-lg">{scenario.text}</em>
            <div className="flex flex-col items-center gap-2">
                {scenario.options.map((option, i) => (
                    <ScenBtn key={i} option={option} path={path} setPath={setPath} />
                ))}
            </div>
        </div>
    )
}