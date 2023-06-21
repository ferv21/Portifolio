import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Technologies'
import GlobalStyle from './styles'
import BtnHome from './components/BtnHome'



function App() {
  return (
    <>
      <GlobalStyle/>
        <Header />
        <Hero/>
        <Tech/>
        <Projects id='#projects'/>
        <Footer/> 
        <BtnHome/>
    </>
  )
}

export default App
