import { Loginvista } from "../vista/loginVista.js"
import { registro } from "../vista/registroVista.js"

export const header = {
    template: `
    <div class="container-fluid">
    <span class="navbar-brand mb-0" id="inicio">2223 M6 UF3/UF4 - Examen extraordinaria - (Alumnno: Zeus Sorroche)</span>
    <div  class="d-flex">
      <button class="login btn btn-link">Login</button>
      <button class="btn btn-link registrar">Regístrate</button>
    </div>
    
  </div>
      `,
      script: () => {
        document.querySelector('.login').addEventListener('click', async (e) => {
            document.querySelector('main').innerHTML= Loginvista.template
            Loginvista.script()
        })

        document.querySelector('.registrar').addEventListener('click', async (e) => {
            document.querySelector('main').innerHTML= registro.template
            registro.script()
        })

        document.querySelector('#inicio').addEventListener('click', async (e) => {
        })
      }
  }
  