import React from "react";
import Book from "./Book";

function Libray(props) {
    return (
        <div>
            <Book name=" 처음 만난 파이썬" numOFPage={300} />
            <Book name=" 처음 만난 Node" numOFPage={50} />
            <Book name=" 처음 만난 DOS" numOFPage={1000} />
        </div>
    )
}
export default Libray;
