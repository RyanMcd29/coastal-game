export default function scenBtn ({option, path, setPath}) {
    return (
        <button
            className="btn btn-primary"
            onClick={()=>{
                setPath(path + option.target)
            }}
        >
            {option.desc}
        </button>
    )
}