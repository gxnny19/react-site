function Box(props) {
    return (
        <div className={`size-${props.size}`}>박스 {props.name}</div>
    )
}
export default Box