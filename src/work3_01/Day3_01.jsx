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
