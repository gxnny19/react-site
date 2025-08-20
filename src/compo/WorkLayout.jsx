function WorkLayout({ title, children }) {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>{children}</div>
    </section>
  );
}

export default WorkLayout;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: { marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: "bold", textAlign: "center", color: "#333" },
  content: { display: "grid", gap: "1.5rem" },
};
