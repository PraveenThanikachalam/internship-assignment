import React from "react";

function Dropdown(className: any) {
  return (
    <div className={`dropdown bg-white dropdown-end ${className}`}>
      <div tabIndex={0} role="button" className="btn m-1">
        v
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
