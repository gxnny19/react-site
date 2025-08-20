function Car(props) {
    return (
        <div className="{`car-${props.label}`}">
            {props.name}자동차
        </div>
    )
}
export default Car