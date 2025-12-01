import React, { useState } from "react";

const blogs = [
  {
    title: "Mastering JavaScript",
    content: "JavaScript is a powerful language for web development.",
  },
  {
    title: "React in Indian Startups",
    content: "React is widely used in many Indian tech companies.",
  },
  {
    title: "Career in Web Development",
    content: "Explore job roles and growth in web development.",
  },
];

function BlogList() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Blog List</h1>

      {/* Blog Titles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => setSelectedBlog(blog)}
            style={{
              padding: "15px",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor: selectedBlog === blog ? "#4caf50" : "#f5f5f5",
              color: selectedBlog === blog ? "white" : "#333",
              boxShadow:
                selectedBlog === blog
                  ? "0 4px 8px rgba(0,0,0,0.2)"
                  : "0 2px 4px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (selectedBlog !== blog) e.currentTarget.style.backgroundColor = "#e0e0e0";
            }}
            onMouseLeave={(e) => {
              if (selectedBlog !== blog) e.currentTarget.style.backgroundColor = "#f5f5f5";
            }}
          >
            {blog.title}
          </div>
        ))}
      </div>

      {/* Blog Content */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#fafafa",
          borderRadius: "8px",
          minHeight: "100px",
          fontSize: "18px",
        }}
      >
        {selectedBlog ? (
          <>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
          </>
        ) : (
          <p style={{ fontStyle: "italic", color: "#777" }}>
            Select a blog to read
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogList;
