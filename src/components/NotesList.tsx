import React from "react";
import { Link } from "react-router-dom";
import Note from "./shared/Note";

const NotesList = () => {
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
          <button className="bg-transparent border rounded-md text-gray-700 px-3 py-2 text-sm ml-2">
            Edit Tags
          </button>
        </div>
      </div>
      {/* Search */}
      <div className="mt-5 text-center">
        <div className="inline-block">
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="title..."
            className="w-96 p-2 border"
          />
        </div>
        <div className="inline-block ml-10">
          <label htmlFor="tags" className="block mb-1">
            Tags
          </label>
          <select name="tags" id="tags" className=" p-2 border w-96">
            <option value="test">test</option>
          </select>
        </div>
      </div>
      {/* Badge */}
      <div className="grid grid-cols-2 justify-items-center content-center mt-10 gap-5">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
};

export default NotesList;
