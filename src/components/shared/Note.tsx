import { FC } from "react";
import { Link } from "react-router-dom";
import { simplifiedNote } from "../../types";

const Note: FC<simplifiedNote> = ({ id, title, tags }) => {
  return (
    <Link to={`/${id}`}>
      <div className="text-center border w-64 h-64 flex flex-col justify-center items-center  shadow-md">
        <p>{title}</p>
        <div className="flex mt-1">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-lg bg-blue-700 text-sm text-white px-1 mr-1"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Note;
