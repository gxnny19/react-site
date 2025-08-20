import React, { useMemo, useState } from 'react';

function heavyCalculation(num) {
    console.log("무거운 계산 실행중...")
    let total = 0
    for (let i = 0; i < 1e3; i++) {
        total = total + num
    }
    return total;
}

const Ex_memo2 = () => {
    const [num, setNum] = useState(1)
    const [theme, setTheme] = useState(false)

    const total = useMemo(() => {
        return heavyCalculation(num)
    }, [num])

    return (
        <div>
            <h2>메모 예제 2: 테마 변경하기</h2>
            <br />

            <div style={{
                background: theme ? "#f40606ff" : "#6fd2fcff",
                color: theme ? "#fff" : "#000000ff",
            }}>

                <input type="number"
                    value={num}
                    onChange={(e) => setNum(Number(e.target.value))} />

                <p>결과: {total}</p>

                <button onClick={() => setTheme(prev => !prev)}>테마 변경</button>

            </div>
        </div>
    );
};

export default Ex_memo2;