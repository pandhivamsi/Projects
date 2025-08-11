import { createRoot } from 'react-dom/client'
import './index.css'
import Master from './Master.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <Master></Master>,
)