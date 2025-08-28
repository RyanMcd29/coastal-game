'use client';
import Start from '@/Components/start';
import Game from '../Components/game';
import Leaderboard from '../Components/leaderboard';
import Credits from '@/Components/credits';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('start');
  return (
    <div className="sm:w-full md:p-8 page-container pixel-ui rounded-xs mx-auto">
      {page === 'start' &&
        <Start setPage={setPage} />
      }
      {page === 'game' && (
        <Game setPage={setPage} />
      )}
      {page === 'leaderboard' && (
        <Leaderboard setPage={setPage} />
      )}
      {page === 'credits' && (
        <Credits setPage={setPage} />
      )}
    </div>
  );
}
