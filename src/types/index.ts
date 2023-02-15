export interface INoteData {
  title: string;
  description: string;
  tags: Ttag[];
}
export type Ttag = {
  id: string;
  label: string;
};
export type Tnote = {
  id: string;
} & INoteData;

export interface INoteProps {
  notes: Tnote[];
  note: Tnote;
  key: number;
}

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  description: string;
  tagIds: string[];
};

export type TpropsNote = Omit<INoteProps, "notes">;
export type TpropsNotes = Omit<INoteProps, "note" | "key">;
export type Tprev = Omit<INoteProps, "note" | "key">;
