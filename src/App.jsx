import './App.css';
import { posts } from './data/posts';
import FixedContainer from './components/LayoutContainer/FixedContainer.jsx';
import FullWidthGrid from './components/LayoutGrid/FullWidthGrid.jsx';
import HeaderNavBar from './components/HeaderNavBar/HeaderNavBar.jsx';
import Footer from './components/Footer/Footer';

function App() {
  console.log('Posts object:', posts);

  return (
    <FixedContainer>
    <HeaderNavBar />
    <FullWidthGrid articles={posts.articles} />
    <Footer />
    </FixedContainer>
  );
}

export default App;

