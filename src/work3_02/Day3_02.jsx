import { useState } from "react";
import './App.css'
import Comment from './chapter_05/Comment'
import CommentList from './chapter_05/CommentList'
import WorkLayout from "../compo/WorkLayout";

function Day3_02() {
  const [count, setCount] = useState(0)

  return (
    <WorkLayout title="📘 Day3-02 과제">
      
      <Comment />
      <CommentList />
    </WorkLayout>
  )
}

export default Day3_02;
