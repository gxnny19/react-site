import './App.css'
import ColorChanger from './component/ColorChanger'
import Counter from './component/Counter'
import InputMirror from './component/InputMirror'
import TodoList from './component/TodoList'
import ToggleButton from './component/ToggleButton'
import WorkLayout from "../compo/WorkLayout";

function Day3_01() {

  return (
    <WorkLayout title="📘 Day3-01 과제">
      <p>Day3-01 과제 내용이 여기에 들어갑니다.</p>
      <Counter />
      <hr />
      <InputMirror />
      <hr />
      <ColorChanger />
      <hr />
      <ToggleButton />
      <hr />
      <TodoList />
      <hr />
    </WorkLayout>

  )
}

export default Day3_01;
