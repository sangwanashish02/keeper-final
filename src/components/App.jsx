import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes,setNote] = React.useState([]);

  function addNote(note){
    setNote( notes=> [...notes,note]);
  }
  function deleteNote(id){
    setNote( prevNotes=>{
      return prevNotes.filter((note, index)=>{
        return index !== id;
      } );
    } );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index)=> <Note id={index} title={note.title} content={note.content} onDelete={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
