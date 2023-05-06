import React, { Fragment } from "react";
import "./ListRenderingComp.scss";
function UserList({ item, key, title }) {
  console.log(title);
  return (
    <Fragment key={item.id}>
      <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
      </tr>
    </Fragment>
  );
}

export default UserList;
