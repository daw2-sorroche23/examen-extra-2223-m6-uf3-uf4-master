// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { header } from "./componente/header.js";
import { home } from './vista/home.js';


document.querySelector('main').innerHTML = home.template
home.script()

document.querySelector('header').innerHTML = header.template

