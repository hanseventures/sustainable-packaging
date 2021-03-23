import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?theme=flying&tracking=1&thirdparty=1&always=1&remember=180&privacyPage=%2Fprivacy%2F" />,
    <iframe name="hidden_iframe" id="hidden_iframe" className="d-none" />
  ])
}
