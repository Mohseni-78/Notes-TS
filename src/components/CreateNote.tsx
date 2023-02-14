import React from "react";

const CreateNote = () => {
  return (
    <div className="container p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-normal">CreateNote</h1>
        <button
          onClick={() => {
            window.history.back();
          }}
          className="bg-transparent border rounded-md text-gray-700 px-3 py-2 text-sm ml-2"
        >
          Back
        </button>
      </div>
      {/* Form */}
      <form action="#" className="p-10">
        <div className="mb-5 inline-block">
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
        <div className="mb-5 inline-block ml-10">
          <label htmlFor="tags" className="block mb-1">
            Tags
          </label>
          <select name="tags" id="tags" className=" p-2 border w-96">
            <option value="test">test</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            className=" p-2 border mb-1 w-full"
            name="description"
            id="description"
            placeholder="description..."
          ></textarea>
        </div>
        <div className="flex mt-4">
          <button
            type="submit"
            className="py-1 px-3 text-sm text-white bg-blue-600 rounded-md mr-2"
          >
            Create
          </button>
          <button className="py-1 px-3 text-sm text-white bg-red-600 rounded-md">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
