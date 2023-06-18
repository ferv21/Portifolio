import Header from './components/Header';
import Hero from './components/Hero'
import Projects from './components/Projects';
import Tech from './components/Technologies'
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle/>
      
        <Header />
        <Hero />
        <Tech />
        <Projects/>
    </>
  );
}

export default App;
