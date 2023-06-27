import React from 'react';
import MultiSelect from '../src/components/MultiSelect';

const App = () => {
  const selectedValues = ['val1', 'val2'];
  const isReadOnly = false;

  return (
    <div>
      <MultiSelect value={selectedValues} readonly={isReadOnly} />
    </div>
  );
};

export default App;