export default function scenBtn ({option, path, setPath}) {
    return (
        <button
            className="text-left text-black hover:text-cyan-400 w-100 "
            onClick={()=>{
                setPath(path + option.target)
            }}
        >
            {option.desc}
        </button>
    )
}