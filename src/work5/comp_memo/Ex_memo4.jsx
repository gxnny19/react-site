import React, { useMemo, useState } from 'react';

// 자식 컴포넌트: 내부에서 사용할때 export, import 필요없다.
const Child = React.memo(function Child({ config }) {
    console.log("~~ Child 랜더링")
    return <div>테마: {config.theme}</div>
})

const Ex_memo4 = () => {
    const [theme, setTheme] = useState("light")
    const [count, setCount] = useState(0)

    const config = useMemo(
        () => ({ theme }),
        [theme]
    )
    return (
        <div>
            <h2>메모 예제 4: 테마 변경하기, 카운트 활성화 시키기</h2>
            <br />
            <div>
                {/* 컴포넌트 */}
                <Child config={config} />
                <button
                    onClick={() => setTheme(
                        (t) => (t === "light" ? "dark" : "light")
                    )}>
                    테마 변경
                </button>
                <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>
            </div>
        </div>
    );
};

export default Ex_memo4;