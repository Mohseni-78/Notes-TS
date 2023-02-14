import { Route, Routes } from "react-router";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<NotesList />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit" element={<EditNote />} />
      </Routes>
    </div>
  );
}

export default App;
