import  { useState, useRef, FormEvent } from "react";
import { INoteData, Ttag } from "../types";
import { useNote } from "./NoteLayout";
import CreatableReactSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

type TPropsENote = {
  onUpdate: (id: string, data: INoteData) => void;
  onAddTag: (tag: Ttag) => void;
  availableTags: Ttag[];
};

const EditNote = ({ onUpdate, onAddTag, availableTags }: TPropsENote) => {
  const note = useNote();
  const [selectedTags, setSelectedTags] = useState<Ttag[]>(note.tags);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onUpdate(note.id, {
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  };

  return (
    <div className="container p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-normal">EditNote</h1>
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
      <form action="#" className="p-10" onSubmit={handleSubmit}>
        <div className="mb-5 inline-block">
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="title..."
            className="w-96 p-2 border"
            defaultValue={note.title}
            ref={titleRef}
          />
        </div>
        <CreatableReactSelect
          options={availableTags.map((tag) => {
            return { label: tag.label, value: tag.id };
          })}
          onCreateOption={(label) => {
            const newTag = { id: uuidV4(), label };
            onAddTag(newTag);
            setSelectedTags((prev) => [...prev, newTag]);
          }}
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
        <div className="mt-4">
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            className=" p-2 border mb-1 w-full"
            name="description"
            id="description"
            placeholder="description..."
            defaultValue={note.description}
            ref={descriptionRef}
            rows={15}
          ></textarea>
        </div>
        <div className="flex mt-4">
          <button
            type="submit"
            className="py-1 px-3 text-sm text-white bg-blue-600 rounded-md mr-2"
          >
            Save
          </button>
          <button className="py-1 px-3 text-sm text-white bg-red-600 rounded-md">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
