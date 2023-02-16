import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { simplifiedNote, Ttag } from "../types";
import Note from "./shared/Note";
import ReactSelect from "react-select";

type NoteListProps = {
  availableTags: Ttag[];
  notes: simplifiedNote[];
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTags: (id: string) => void;
};

const NotesList: FC<NoteListProps> = ({
  availableTags,
  notes,
  onDeleteTags,
  onUpdateTag,
}) => {
  const [selectedTags, setSelectedTags] = useState<Ttag[]>([]);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <div className="container p-10 text-center">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-normal">Notes</h1>
        <div>
          <Link
            to="/create"
            className="bg-blue-600 rounded-md text-white px-3 py-2 text-sm"
          >
            Create
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="bg-transparent border rounded-md text-gray-700 px-3 py-2 text-sm ml-2"
          >
            Edit Tags
          </button>
        </div>
      </div>
      {/* Search */}
      <div className="flex items-center justify-center gap-5 mt-10">
        <input
          type="text"
          id="title"
          placeholder="title..."
          className="w-96 p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactSelect
          options={availableTags.map((tag) => {
            return { label: tag.label, value: tag.id };
          })}
          isMulti
          value={selectedTags.map((tag) => {
            return { label: tag.label, value: tag.id };
          })}
          onChange={(tags) => {
            setSelectedTags(
              tags.map((tag) => {
                return { label: tag.label, id: tag.value };
              })
            );
          }}
        />
      </div>
      {/* Badge */}
      <div className="grid grid-cols-2 justify-items-center content-center mt-10 gap-5">
        {filteredNotes.map((note) => (
          <Note
            title={note.title}
            tags={note.tags}
            id={note.id}
            key={note.id}
          />
        ))}
      </div>
      {showModal && (
        <EditTagsModal
          setShowModal={setShowModal}
          availableTags={availableTags}
          onDeleteTags={onDeleteTags}
          onUpdateTag={onUpdateTag}
        />
      )}
    </div>
  );
};

export default NotesList;

type TpropsEMNote = {
  availableTags: Ttag[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTags: (id: string) => void;
};
export const EditTagsModal: FC<TpropsEMNote> = ({
  availableTags,
  setShowModal,
  onDeleteTags,
  onUpdateTag,
}) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Tags</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form action="#" className="flex flex-col">
                {availableTags.map((tag) => (
                  <div key={tag.id} className="w-full">
                    <input
                      type="text"
                      className="border py-1 px-2 my-2 rounded-md"
                      defaultValue={tag.label}
                      onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                    />
                    <button
                      onClick={() => onDeleteTags(tag.id)}
                      className="ml-3 border my-1 border-red-400 px-3 py-1 rounded-md text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </form>
            </div>
            {/*footer*/}
            <button
              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
