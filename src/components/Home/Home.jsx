import React from 'react'
import Timer from '../Timer/Timer';

export default function Home() {
    return (
        <div> 
            <div className='text-white py-5' style={{ backgroundColor: 'black' }}>
                <h1 className='text-center'>Zeitgeist'25</h1>
                <h4 className='text-center head'>Computing Meets Creativity, Aura Greets Amity</h4>
                <h4 className='text-center head mt-4'>Department of Computer Science And Engineering</h4>
                <h4 className='text-center head mt-4'>University College of Engineering Kakinada(A), JNTUK</h4>
            </div>
            <Timer />
        </div>
    );
}
