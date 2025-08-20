import { useState } from 'react'
import './App.css'
import BoxList from './components/BoxList'
import Book from './components/Library'
import ConfirmDialog from "./components/ConfirmDialog"
import WorkLayout from "../compo/WorkLayout";

function Day2() {

  return (
    <WorkLayout title="📝 Day2 과제 ↓">
      
      <ConfirmDialog />
      <BoxList />
      <Book />
    </WorkLayout>
  )
}

export default Day2;
