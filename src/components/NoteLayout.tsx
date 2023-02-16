import { FC } from "react";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Tnote } from "../types";

type NoteLayoutProps = {
  notes: Tnote[];
};
export const NoteLayout: FC<NoteLayoutProps> = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note === null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Tnote>();
}
