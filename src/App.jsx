import './App.css';
import React from 'react';
import { posts } from './data/posts';
import FixedContainer from './components/LayoutContainer/FixedContainer.jsx';
import FullWidthGrid from './components/LayoutGrid/FullWidthGrid.jsx';

function App() {
  console.log('Posts object:', posts);

  return (
    <FixedContainer>
      <FullWidthGrid articles={posts.articles} />
    </FixedContainer>
  );
}

export default App;

