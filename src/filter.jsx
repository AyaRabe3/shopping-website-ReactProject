import React from "react";
const Filter = props => {
  return (
    <ul className="list list--vr-separator">
      {props.filter.map(types => (
        <li
          key={types.id}
          className={
            types.id === props.currentType
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          <i className="link__icon fas fa-angle-right"></i>
          <a onClick={() => props.onFilter(types.id)}>{types.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
