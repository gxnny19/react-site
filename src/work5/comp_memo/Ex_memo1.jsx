import React, { useMemo, useState } from 'react';

const Ex_memo1 = () => {
    const [count, setCount] = useState(0)

    const double = useMemo(() => {
        console.log("double 값 계산중...")

        return count * 2

    }, [count])

    return (
        <div>
            <h2>메모 예제 1: 더블 값 구하기</h2>
           <h1>Count: {count}</h1>
           <h2>Double Count: {double}</h2>
           <button onClick={() => setCount(count + 1)}>+1 증가</button>
           <button onClick={() => setCount(count - 1)}>-1 감소</button>
        </div>
    );
};

export default Ex_memo1;