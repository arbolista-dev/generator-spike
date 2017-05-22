/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect
} from 'react-router';

const RedirectWithStatus = ({ from, to, status }) => (
  <Route
    render={({ staticContext }) => {
      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) {
        staticContext.status = status;
      }

      return (
        <Redirect from={from} to={to} />
      );
    }}
  />
);

RedirectWithStatus.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired
};


export default RedirectWithStatus;
