import React, { useMemo, useState } from 'react';

const Ex_memo5 = () => {
    const [price, setPrice] = useState(1000)
    const [quantity, setQuantity] = useState(1)
    const [discount, setDiscount] = useState(0.1)

    const total = useMemo(() => {
        console.log("~~총액 계산")
        return price * quantity * (1 - discount)

    }, [price, quantity, discount])
    return (
        <div>
            <h2>메모 예제 5: useMemo 활용해서 총액 구하기</h2>
            <br />
            <div style={{ lineHeight: "2rem" }}>
                <label>가격: </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <br />
                <label>수량: </label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <br />
                <label>할인율(%): </label>
                <input
                    type="number"
                    value={discount * 100}
                    onChange={(e) => setDiscount(Number(e.target.value) / 100)}
                />
                <br />

                <h2>총액: {total.toLocaleString()}원 입니다.</h2>
            </div>
        </div>
    );
};

export default Ex_memo5;