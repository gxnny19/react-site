import Button from "./Button"
// import Button from "./css/Style.css"

function ConfirmDialog(props) {
    return (
        <div>
            <Button color="green" children="test">확인 </Button>
            <Button color="red" children="test">취소 </Button>
            <Button color="blue" children="test">결과 </Button>
        </div>
    )
}
export default ConfirmDialog