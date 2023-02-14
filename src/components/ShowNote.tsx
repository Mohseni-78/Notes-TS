import React from "react";
import { Link } from "react-router-dom";

const ShowNote = () => {
  return (
    <div className="container p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-normal">Note Title</h1>
        <span className="rounded-lg bg-blue-700 text-sm text-white px-1">
          tags
        </span>
        <button
          onClick={() => {
            window.history.back();
          }}
          className="bg-transparent border rounded-md text-gray-700 px-3 py-2 text-sm ml-2"
        >
          Back
        </button>
        <Link
          to="/edit"
          className=" py-1 px-3 text-sm text-white bg-blue-600 rounded-md mr-2"
        >
          Edit
        </Link>
        <button className="py-1 px-3 text-sm text-white bg-red-600 rounded-md mr-2">
          Delete
        </button>
      </div>
      {/* Preview */}
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eaque id
        sed voluptatum maxime asperiores? Asperiores incidunt tenetur sunt
        officia laboriosam eius, ipsum enim, quaerat minus voluptates,
        praesentium aliquid esse. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quis eaque id sed voluptatum maxime asperiores?
        Asperiores incidunt tenetur sunt officia laboriosam eius, ipsum enim,
        quaerat minus voluptates, praesentium aliquid esse. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Quis eaque id sed voluptatum
        maxime asperiores? Asperiores incidunt tenetur sunt officia laboriosam
        eius, ipsum enim, quaerat minus voluptates, praesentium aliquid esse.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eaque id
        sed voluptatum maxime asperiores? Asperiores incidunt tenetur sunt
        officia laboriosam eius, ipsum enim, quaerat minus voluptates,
        praesentium aliquid esse. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quis eaque id sed voluptatum maxime asperiores?
        Asperiores incidunt tenetur sunt officia laboriosam eius, ipsum enim,
        quaerat minus voluptates, praesentium aliquid esse. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Quis eaque id sed voluptatum
        maxime asperiores? Asperiores incidunt tenetur sunt officia laboriosam
        eius, ipsum enim, quaerat minus voluptates, praesentium aliquid esse.
      </div>
    </div>
  );
};

export default ShowNote;
