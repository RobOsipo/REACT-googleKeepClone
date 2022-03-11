import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "./notes"

const noteComponents = notes.map((note) => {
    return <Note 
    key={note.key}
    title={note.title}
    content={note.content}
    />
})


function App() {
   return (
       <div>
        <Header />
        {noteComponents}
        <Footer />
       </div>
       
   )
}


export default App;