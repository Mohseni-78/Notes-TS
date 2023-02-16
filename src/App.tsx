import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import NotesList from "./components/NotesList";
import ShowNote from "./components/ShowNote";
import { useLocalStorage } from "./hooks";
import { INoteData, RawNote, Ttag } from "./types";
import { v4 as uuidV4 } from "uuid";
import { NoteLayout } from "./components/NoteLayout";

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
  
  // Notes With Tags for show in show notes by tags
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

  // Update note
  function onUpdate(id: string, { tags, ...data }: INoteData) {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
  }

  // Delete note
  function onDeleteNote(id: string) {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  }

  // onUpdataTag
  function onUpdateTag(id: string, label: string) {
    setTags((prev) => {
      return prev.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }
  // Delete tags
  function onDeleteTags(id: string) {
    setTags((prev) => {
      return prev.filter((tag) => tag.id !== id);
    });
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <NotesList
              notes={notesWithTags}
              availableTags={tags}
              onDeleteTags={onDeleteTags}
              onUpdateTag={onUpdateTag}
            />
          }
        />

        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<ShowNote onDeleteNote={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onUpdate={onUpdate}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
        </Route>

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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
