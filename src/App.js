import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editorState, setEditorState] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmit = () => {
    // Validate title and description before submitting
    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }

    if (description.trim() === "") {
      alert("Please enter a description.");
      return;
    }

    const contentState = editorState.getCurrentContent();
    const contentHtml = draftToHtml(convertToRaw(contentState));

    // Submit the blog post with title, description, and contentHtml
    // ...

    // Clear the form after successful submission
    setTitle("");
    setDescription("");
    setEditorState("");
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />

      <label>Content:</label>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
