import React from 'react';
import { useState } from 'react';
import Scenario from './scenario';
import scenarios from '../app/scenarios.json';

export default function Game({ setPage }) {
    const [path, setPath] = useState('')
    const [score, setScore] = useState(0);
    return (
        <div>
            <Scenario scenarios={scenarios} path={path} setPath={setPath}/>
            <button onClick={() => setPage('start')}>Back to Start</button>
        </div>
    );
}