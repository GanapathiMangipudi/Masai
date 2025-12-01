function Section({ title, children }) {
  const sectionStyle = {
    padding: "20px",
    borderBottom: "1px solid #ddd",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
