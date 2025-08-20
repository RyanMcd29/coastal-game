export default function Leaderboard({ setPage }) {
    return (
        <div>
            <h1>Leaderboard</h1>
            <button onClick={() => setPage('start')}>Back to Start</button>

        </div>
    );
}