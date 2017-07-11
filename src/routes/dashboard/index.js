import React from 'react';
import Dashboard from './Dashboard';

export const path = '/dashboard';
export const action = async(state) => {
  const title = 'Dashboard';
  state.context.onSetTitle(title);
  return <Dashboard title={title} />;
};
