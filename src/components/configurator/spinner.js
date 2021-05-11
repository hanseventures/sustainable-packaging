import { css } from '@emotion/react'
import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Spinner() {
  return (
    <div className="sweet-loading">
      <ClimbingBoxLoader color="#95B743" css={override} size={50} />
    </div>
  );
}

export default Spinner;
