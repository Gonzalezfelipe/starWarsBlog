import ReactDOM from 'react-dom/client'
import './index.css'
import SiteRoutes from './components/Routes.jsx'
import { FavoriteProvider } from './context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoriteProvider>
        <SiteRoutes/>
    </FavoriteProvider>
  
)
