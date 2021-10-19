import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handelChange = (event) => {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  function submitNote(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
