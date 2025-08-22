'use client';
import Start from '@/Components/start';
import Game from '../Components/game';
import Leaderboard from '../Components/leaderboard';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('start');
  return (
    <div className="card w-full max-w-md">
      {page === 'start' && <Start setPage={setPage} />}
      {page === 'game' && <Game setPage={setPage} />}
      {page === 'leaderboard' && <Leaderboard setPage={setPage} />}
    </div>
  );
}
