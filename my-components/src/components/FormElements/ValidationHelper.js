import React from 'react';

export const InvalidInputMessage = ({ children }) => (
  <div style={{
    width: '100%',
    marginTop: '.25rem',
    fontSize: '0.875em',
    color: '#dc3545',
  }}
  >
    {children}
  </div>
);

export const ValidInputMessage = ({ children }) => (
  <div style={{
    width: '100%',
    marginTop: '.25rem',
    fontSize: '0.875em',
    color: '#198754',
  }}
  >
    {children || "Looks Good!"}
  </div>
);
