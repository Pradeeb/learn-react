import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const client =new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools/>
  </QueryClientProvider>
);
