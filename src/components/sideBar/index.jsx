import React from "react";

function Sidebar(props) {
  const { items } = props;
  return (
    <div>
      {items.map((el, index) => (
        <div key={index}>
          <a role="navigation" href={el.href}>
            {el.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
