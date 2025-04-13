import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content'

function App() {

  let user = "valan";
  return (
    <div className='flex justify-center '>
      <div className='w-1/2 mx-auto border-2'>
        <Header user={user} />
        <Content user={user} />
        <Footer user={user} />
      </div>


    </div>
  )
}

export default App
