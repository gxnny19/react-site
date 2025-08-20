import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'
import Libray from './Libray'
import WorkLayout from "../compo/WorkLayout";

function Day1() {

  return (
    <WorkLayout title="📘 Day1 과제 ↓">
      <Libray />
      <Book />
    </WorkLayout>
  );
}
export default Day1;