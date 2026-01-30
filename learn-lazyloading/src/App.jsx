import { lazy,Suspense } from 'react'
import './App.css'
import Lazy from './components/lazy'


// Lazy load with delay
const LasyComponent = lazy(() =>
   <Lazy/>
);

function App() {

const style = {
  backgroundColor: '#e0e0e0',
  maxWidth: '100vw',
  height: '30px',
  borderRadius:'5px'
};


  return (
    <>
     <Suspense fallback={<div style={style}></div>}>
       <LasyComponent/>
    </Suspense>
    </>
  )
}

export default App
