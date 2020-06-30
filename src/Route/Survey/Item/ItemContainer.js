import React from "react";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import ItemPresenter from "./ItemPresenter";
import dataType from "./ItemDragType";

export default () => {
  const Items = useSelector((state) => state.SurveyItemReducer);
  const findItem = (id) => {
    const item = Items.filter((i) => id === i.id)[0];
    return {
      item,
      index: Items.indexOf(item),
    };
  };
  const [, drop] = useDrop({ accept: dataType.item });
  return (
    <div ref={(ref) => drop(ref)}>
      {Items.map((item) => (
        <ItemPresenter item={item} key={item.id} findItem={findItem} />
      ))}
    </div>
  );
};
