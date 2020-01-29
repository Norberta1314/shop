import React, { Fragment } from 'react';

const Group = ({ title, list }: { title: String; list?: any[] }) => {
  return (
    <Fragment>
      <div>{title}</div>
    </Fragment>
  );
};

export default Group;
