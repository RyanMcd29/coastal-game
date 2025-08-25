export default function ScenBtn({ option, path, setPath }) {
    return (
        <button
            className="hover:text-cyan-400 mt-4 text-left w-4/5 flex max-sm:w-full max-sm:p-1"
            onClick={() => {
                setPath(path + option.target);
            }}
        >
            <p className="inline my-auto text-sm mx-4">{">"}</p>
            <p>{option.desc}</p>
            
        </button>
    );
}
