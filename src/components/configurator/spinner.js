import { css } from '@emotion/react'
import React from 'react'
import { BeatLoader } from 'react-spinners'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  text-align: center;
`;

function Spinner() {
  return (
    <div className="sweet-loading text-xs-center my-5">
      <span className="d-block mb-4">Unsere Datenbank wird durchsucht...</span>
      <BeatLoader color="#739F91" css={override} size={16} margin={4} />
    </div>
  );
}

export default Spinner;
