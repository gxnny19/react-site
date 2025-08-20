import React, { useMemo, useState } from 'react';

const users = [
    { id: 1, name: "Kim", active: true },
    { id: 2, name: "Lee", active: false },
    { id: 3, name: "Park", active: true },
    { id: 4, name: "Jang", active: false },
]

const Ex_memo3 = () => {
    const [showActive, setShowAtive] = useState(true)

    const filteredUsers = useMemo(() => {
        console.log("~~ 사용자 필터링 실행")
        return users.filter(user => user.active === showActive);
    }, [showActive])

    return (
        <div>
            <h2>메모 예제 3: 활성 or 비활성 변경하기</h2>
            <br />
        <div>
            <button onClick={() => setShowAtive((a) => !a)}>
                {showActive ? "비활성" : "활성"} 사용자 보기
            </button>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.active ? "활성" : "비활성"})
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Ex_memo3;