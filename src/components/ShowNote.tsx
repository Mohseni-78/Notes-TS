import React from "react";
import { Link } from "react-router-dom";

const ShowNote = () => {
  return (
    <div className="container p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-normal">Note Title</h1>
          <span className="rounded-lg bg-blue-700 text-sm text-white px-1">
            tags
          </span>
        </div>
        <div>
          <Link
            to="/edit"
            className="rounded-md text-white px-8 py-2 text-sm ml-2 bg-blue-600 "
          >
            Edit
          </Link>
          <button className="border rounded-md text-gray-700 px-5 py-2 text-sm ml-2 border-red-600">
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
