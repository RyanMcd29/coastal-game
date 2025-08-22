export default function scenBtn({ decision, path, setPath }) {
    return (
        <button
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => {
                setPath(path + decision.target);
            }}
        >
            {decision.option}
        </button>
    );
}