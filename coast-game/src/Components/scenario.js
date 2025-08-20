import ScenBtn from "./scenBtn"

export default function Scenario({scenarios, path, setPath}) {
    console.log('path', path)
    const scenario = scenarios.layers[path.length][path]
    return (
        <div>
            <em>{scenario.text}</em>
            {scenario.options.map((decision, i) => (
                <ScenBtn key={i} decision={decision} path={path} setPath={setPath} />
            ))}
        </div>
    )
}