export default function Start ({setPage}) {
    return (
        <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Coast Game</h1>
        <div className="flex gap-4">
          <button
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => setPage('game')}
          >
            Start Game
          </button>
          <button
            className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => setPage('leaderboard')}
          >
            Leaderboard
          </button>
        </div>
      </div>
    )
}