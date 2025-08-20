import { useState } from "react"

export default function ColorChanger(){
    const [color, setColor] = useState("purple")

    return(
        <>
        <h3>스타일 속성값의 상태 변화 체크</h3>
        <h2 style={{color}}>색상 변경</h2>
        <button onClick={() => setColor("red")}>빨강</button>
        <button onClick={() => setColor("blue")}>파랑</button>
        <button onClick={() => setColor("yellow")}>노랑</button>
        <button onClick={() => setColor("green")}>초록</button>
        </>
    )
}