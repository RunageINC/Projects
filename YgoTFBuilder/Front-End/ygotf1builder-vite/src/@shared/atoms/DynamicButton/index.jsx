/* eslint-disable react/prop-types */
import {
  Eraser,
  MagnifyingGlass,
  FloppyDisk,
  ArrowsClockwise,
} from "phosphor-react";

import "./index.css";

const SearchButton = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    Search <MagnifyingGlass />
  </button>
);

const DeleteButton = ({ onClick }) => (
  <button className="button danger" onClick={onClick}>
    Clear <Eraser />
  </button>
);

const SaveButton = ({ isSubmit, onClick }) =>
  isSubmit ? (
    <button className="button save" type="submit">
      Save <FloppyDisk weight="duotone" />
    </button>
  ) : (
    <button className="button" onClick={onClick}>
      Save <FloppyDisk weight="duotone" />
    </button>
  );

const RefreshButton = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    Change <ArrowsClockwise weight="duotone" />
  </button>
);

export const DynamicButton = ({ type, onClick, isSubmit = false }) => {
  switch (type) {
    case "search":
      return <SearchButton onClick={onClick} />;
    case "delete":
      return <DeleteButton onClick={onClick} />;
    case "save":
      return <SaveButton onClick={onClick} isSubmit={isSubmit} />;
    case "refresh":
      return <RefreshButton onClick={onClick} />;
    default:
      return null;
  }
};
