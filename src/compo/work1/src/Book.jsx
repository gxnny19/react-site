
function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
            <h2>{`이 책은 ${props.numOFPage}p로 이루어져 있습니다.`}</h2>
        </div>
        )
}
export default Book;