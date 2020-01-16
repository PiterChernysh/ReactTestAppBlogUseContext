import React from "react";

import Edit from "./icons/edit.svg";
import NoEdit from "./icons/noEdit.svg";
import Delete from "./icons/delete.svg";

const Icon = ({ name }) => {
  switch (name) {
    case "edit":
      return <Edit />;
    case "noEdit":
      return <NoEdit />;
    case "delete":
      return <Delete />;
    default:
      return <span>🔔</span>;
  }
};

export default Icon;
