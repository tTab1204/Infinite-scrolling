import React from 'react';
import InfiniteScrollList from './components/InfiniteScrollList';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

function App() {
  return (
    <div style={container}>
      <InfiniteScrollList />
    </div>
  );
}

export default App;
