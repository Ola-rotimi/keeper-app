import React from "react";
import Footer from "./Footer";
import Note from "./Note";
import Header from "./Header";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteDetails) => (
        <Note
          key={noteDetails.key}
          title={noteDetails.title}
          content={noteDetails.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
