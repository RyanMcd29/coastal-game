export default function Start ({setPage}) {
    return (
        <div className="stack">
        <h1 className="text-4xl font-bold">Coast Game</h1>
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
    )
}