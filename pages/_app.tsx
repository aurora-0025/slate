import { useRouter } from 'next/router'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'
import ProtectedRoute from './components/protectedRoute'

function MyApp({ Component, pageProps }) {

  const noAuthRequired = ['/login', '/signup', '/', '/physics', '/chemistry', '/biology', 'maths']

  const router = useRouter()

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ):(
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
    
  )
}

export default MyApp
