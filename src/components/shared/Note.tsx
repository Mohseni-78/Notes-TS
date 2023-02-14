import React from "react";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <Link to="edit">
      <div className="text-center border w-64 h-64 flex flex-col justify-center items-center  shadow-md">
        <p>Title</p>
        <div className="flex mt-1">
          <span className="rounded-lg bg-blue-700 text-sm text-white px-1">
            tags
          </span>
          <span className="rounded-lg bg-blue-700 text-sm text-white px-1 ml-1">
            tags
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Note;
