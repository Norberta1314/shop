import React, { Fragment } from 'react'

const ReactIf = ({vIf, children}: { vIf: any; children: any }) => (
  <Fragment>
    {vIf && children}
  </Fragment>
);

export default ReactIf
