function Book(props) {
    return (
        <div>
            <h1>책 이름 {props.name}</h1>
            <h3>책 가격 {props.numOfPage}</h3>
        </div>
    )
}
export default Book