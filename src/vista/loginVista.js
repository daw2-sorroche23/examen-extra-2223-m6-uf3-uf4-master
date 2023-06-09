import { User } from '../bd/user.js'
import { home } from './home.js'

export const Loginvista = {
  template: `
  <div class="pt-5 mt-5">
  <h1 class="w-100 text-center">Login</h1>
  <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
    <label for="email" class="mt-2 form-label">User: </label>
    <input type="text" class="form-control" placeholder="usuario@mail.com" id="emailL">

    <label for="pass" class="mt-2 form-label">Contraseña: </label>
    <input type="password" class="form-control" id="contrasenyaL">

    <input type="text" class="mt-4 w-100 btn btn-primary enviarLogin" value="Entrar" >
  </form>
</div>

  `,
  script: () => {
    const main = document.querySelector('main')

    main.addEventListener('click', async (e) => {
      if (e.target.classList.contains('enviarLogin')) {
        e.preventDefault()

        try {
          const usuario = {
            email: document.querySelector('#emailL').value,
            password: document.querySelector('#contrasenyaL').value
          }
          const usuarioLogeado = await User.login(usuario)

          const emailLog = document.querySelector('#email')
          emailLog.innerHTML = usuarioLogeado.email

          const botones = document.querySelector('#botones')

          main.innerHTML = home.template
          home.script()
        } catch (error) {
          console.log(error)
          alert('Ha habido un error al logearse ' + error)
        }
      }
    })
  }

}
