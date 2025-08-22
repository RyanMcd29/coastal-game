import ScenBtn from "./scenBtn"

export default function Scenario({scenario, path, setPath, setPage}) {
    return (
        <div className="stack-sm">
            <em className="text-center text-lg">{scenario.text}</em>
            <div className="stack-xs">
                {scenario.options?.map((option, i) => (
                    <ScenBtn key={i} option={option} path={path} setPath={setPath} />
                ))}
            </div>
        </div>
    )
}