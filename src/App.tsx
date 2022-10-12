import React from 'react';
import {ProgressBar, TokenTable} from "./components";
import './App.css';

function App() {
    const progressbarItems = [
        {name: 'Sold', color: '#BD1FBE', value: 100},
        {name: 'Got free', color: '#6a61ee', value: 100},
        {name: 'Burned', color: '#64e584', value: 100},
        {name: 'Free float', color: '#a9a9a9', value: 100},
        {name: 'Ops', color: '#c22525', value: 0},
    ];

    const tableTokenItems = [
        {
            id: 1,
            name: 'Pyshky.net',
            status: 'green',
            type: 'TRST',
            conditions: 'x2,6 months',
            volume: 120000,
            roi: 4,
            free: 20,
            hedge: 20
        },
        {
            id: 2,
            name: 'NFT-Flowershop',
            status: 'yellow',
            type: 'THT',
            conditions: 'x4,2 years',
            volume: 80000,
            roi: 23,
            free: 12,
            hedge: 0
        },
        {
            id: 4,
            name: 'Web3 P2P University',
            status: 'red',
            type: 'TRST',
            conditions: 'x2,1 years',
            volume: 200000,
            roi: 6,
            free: 1,
            hedge: 0
        },
    ];

    return (
        <>
            <div className='wrapper'>
                <ProgressBar items={progressbarItems} width={800} height={50} />
            </div>
            <div className='wrapper'>
                <TokenTable items={tableTokenItems} />
            </div>
        </>
    );
}

export default App;
