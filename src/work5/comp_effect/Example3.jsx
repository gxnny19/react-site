import React, { useEffect, useState } from 'react';

const Example3 = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setSeconds(prev => prev + 1); 
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("타이머 종료");
        };
    }, [isRunning]); 

    const toggleTimer = () => {
        setIsRunning(prev => !prev);
    };

    return (
        <div>
            <h2>예제 3: 타이머</h2>
            <p>{seconds} 초 경과</p>
            <button onClick={toggleTimer}>
                {isRunning ? '정지' : '시작'}
            </button>
        </div>
    );
};

export default Example3;
