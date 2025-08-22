export default function Leaderboard({ setPage }) {
    return (
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <button
                className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}