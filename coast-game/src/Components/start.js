export default function Start({ setPage }) {
    return (
        <div className="stack bg-white p-8 border-4 border-black w-3/5 max-sm:w-full">
            <h1 className="text-4xl font-bold text-center">Coast Game</h1>
            <div className="flex gap-4">
                <button
                    className="btn btn-primary"
                    onClick={() => setPage('game')}
                >
                    Start Game
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => setPage('leaderboard')}
                >
                    Leaderboard
                </button>
            </div>
        </div>
    );
}
