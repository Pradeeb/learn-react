import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content'

function App() {

  let user="valan";
  return (
    <>
     <Header user={user}/>
     <Footer user={user}/>
     <Content user={user} />
    </>
  )
}

export default App
