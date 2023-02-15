import { useMemo } from "react";
import { Route, Routes } from "react-router";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import NotesList from "./components/NotesList";
import ShowNote from "./components/ShowNote";
import { useLocalStorage } from "./hooks";
import { INoteData, RawNote, Ttag } from "./types";
import { v4 as uuidV4 } from "uuid";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Ttag[]>("TAGS", []);

  // OnSubmit
  const onCreateNode = ({ tags, ...data }: INoteData) => {    
    setNotes((prev) => {
      return [
        ...prev,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

 
// Add tag
  function addTag(tag: Ttag) {
    setTags((prev) => [...prev, tag]);
  }

  return (
    <div>
      <Routes>
        <Route path="/" index element={<NotesList />} />
        <Route
          path="/create"
          element={
            <CreateNote
              onSubmit={onCreateNode}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/edit" element={<EditNote />} />
        <Route path="/show" element={<ShowNote />} />
      </Routes>
    </div>
  );
}

export default App;
