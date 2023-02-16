import { FC } from "react";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";

type TpropsSNote = {
  onDeleteNote: (id: string) => void;
};
const ShowNote: FC<TpropsSNote> = ({ onDeleteNote }) => {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <div className="container p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-normal">{note.title}</h1>
          <div className="flex gap-1 items-center">
            {note.tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-lg bg-blue-700 text-sm text-white px-1"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Link
            to={`/${note.id}/edit`}
            className="rounded-md text-white px-8 py-2 text-sm ml-2 bg-blue-600 "
          >
            Edit
          </Link>
          <button
            onClick={() => {
              onDeleteNote(note.id);
              navigate("/");
            }}
            className="border rounded-md text-gray-700 px-5 py-2 text-sm ml-2 border-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => {
              window.history.back();
            }}
            className="bg-transparent border rounded-md text-gray-700 px-4 py-2 text-sm ml-2"
          >
            Back
          </button>
        </div>
      </div>
      {/* Preview */}
      <div className="mt-5 ">
        <ReactMarkdown>{note.description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ShowNote;
