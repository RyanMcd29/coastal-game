export default function ScenBtn({ option, path, setPath }) {
    return (
        <button
            className="btn btn-primary text-left w-4/5"
            onClick={() => {
                setPath(path + option.target);
            }}
        >
            {option.desc}
        </button>
    );
}
