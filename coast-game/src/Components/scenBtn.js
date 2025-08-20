export default function scenBtn ({decision, path, setPath}) {
    return (
        <button 
            onClick={()=>{
                setPath(path + decision.target)
            }}
        >
            {decision.option}
        </button>
    )
}