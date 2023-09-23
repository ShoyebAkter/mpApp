import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import './styles/root.css';
import './styles/fonts.css';
import './styles/typography.css';
import './styles/css-reset.css';
import './styles/variables.css';
import './styles/ci-v11-variables.css';
import './styles/util.css';
import './styles/forms.css';
import './styles/button.css';
import './styles/caseHeader.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  // </React.StrictMode>,
)
