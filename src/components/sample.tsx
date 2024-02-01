// components/sample.tsx

import React from 'react';

type SampleProps = {
  message: string;
};

const SampleComponent: React.FC<SampleProps> = ({ message }) => {
  return <div>Hello, {message}!</div>;
};

export default SampleComponent;