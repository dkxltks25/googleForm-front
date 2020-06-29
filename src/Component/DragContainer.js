import React from "react";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DragContainer = ({ children }) => (
  <DndProvider backend={HTML5Backend}>{children}</DndProvider>
);

DragContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DragContainer;
