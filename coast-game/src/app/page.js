'use client';

import Game from '../Components/game';
import Leaderboard from '../Components/leaderboard';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('start');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      {page === 'start' && (
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
      )}
      {page === 'game' && (
        <Game setPage={setPage} />
      )}
      {page === 'leaderboard' && (
        <Leaderboard setPage={setPage} />
      )}
    </div>
  );
}
