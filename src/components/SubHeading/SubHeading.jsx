import React from 'react';

const SubHeading = ({ title, color }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className={`p__cormorant color-${color}`}>{title}</p>
  </div>
);

export default SubHeading;
