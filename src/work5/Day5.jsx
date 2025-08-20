import { useState } from 'react'
import './App.css'
import Example1 from './comp_effect/Example1'
import Example2 from './comp_effect/Example2'
import Example3 from './comp_effect/Example3'
import Example4 from './comp_effect/Example4'
import Example5 from './comp_effect/Example5'
import Ex_memo1 from './comp_memo/Ex_memo1'
import Ex_memo2 from './comp_memo/Ex_memo2'
import Ex_memo3 from './comp_memo/Ex_memo3'
import Ex_memo4 from './comp_memo/Ex_memo4'
import Ex_memo5 from './comp_memo/Ex_memo5'
import WorkLayout from "../compo/WorkLayout";


function Day5() {
  const [count, setCount] = useState(0)

  return (
    <WorkLayout title="💡 Day5 과제">
      <p>Day5 과제 내용이 여기에 들어갑니다.</p>
      <Example1 />
      <hr />
      <br />
      <Example2 />
      <hr />
      <br />
      <Example3 />
      <hr />
      <br />
      <Example4 />
      <hr />
      <br />
      <Example5 />
      <hr />
      <br />

      <br />
      <hr />
      <br />
      <Ex_memo1 />
      <hr />
      <br />
      <Ex_memo2 />
      <br />
      <hr />
      <br />
      <Ex_memo3 />
      <br />
      <hr />
      <br />
      <Ex_memo4 />
      <br />
      <hr />
      <br />
      <Ex_memo5 />
    </WorkLayout>
  )
}

export default Day5;
