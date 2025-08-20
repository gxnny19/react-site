import { useState } from "react";
import Day1 from "../work1/Day1";
import Day2 from "../work2/Day2";
import Day3_01 from "../work3_01/Day3_01";
import Day3_02 from "../work3_02/Day3_02";
import Day5 from "../work5/Day5";
import "./Works.css";

const works = [
  { path: "day1", title: "📘 Day1 과제", component: <Day1 /> },
  { path: "day2", title: "📝 Day2 과제", component: <Day2 /> },
  {
    path: "day3",
    title: "🎯 Day3 과제",
    subtasks: [
      { title: "Day3-01 과제", component: <Day3_01 /> },
      { title: "Day3-02 과제", component: <Day3_02 /> },
    ],
  },
  { path: "day5", title: "💡 Day5 과제", component: <Day5 /> },
];

function Works() {
  const [openDay, setOpenDay] = useState(null);
  const handleToggle = (path) => setOpenDay(openDay === path ? null : path);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>과제 모음</h2>
      <div style={styles.list}>
        {works.map((work) => (
          <section key={work.path} style={styles.item}>
            <div className="work-link" onClick={() => handleToggle(work.path)}>
              {work.title} {openDay === work.path ? "▲" : "▼"}
            </div>

            {openDay === work.path && (
              <div style={styles.content}>
                {work.component}
                {work.subtasks &&
                  work.subtasks.map((sub, idx) => (
                    <div key={idx} style={styles.subtask}>
                      <strong>{sub.title}</strong>
                      {sub.component}
                    </div>
                  ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Works;

const styles = {
  container: { padding: "2rem", fontFamily: "'Segoe UI', sans-serif" },
  heading: { marginBottom: "1rem", fontSize: "1.8rem" },
  list: { display: "flex", flexDirection: "column", gap: "0.8rem" },
  item: { border: "1px solid #ccc", borderRadius: "8px", padding: "0.8rem 1rem", backgroundColor: "#fafafa" },
  content: { marginTop: "0.8rem" },
  subtask: { borderTop: "1px solid #ddd", marginTop: "0.6rem", paddingTop: "0.6rem" },
};
