import { series } from "../datos/series.js"

export const home = {
    template: `
    <div class="row">
    <div class="col-12">
<p class="text-end">Bienvenido <span>usuario@email.com</span></p>
        <h1 class="text-center mt-3 ">Series famosas de todos los tiempos</h1>
<p class="text-center fs-4 p-3 bg-light border">Haz clic sobre cualquier ficha para mostrar toda la información en el panel derecho</p>
    </div>
    <div class="col-6">
        <div class="row"  id="series">
        </div>
    </div>
    <div class="col-6" id="serie">
    </div>
      `,
      script: () => {
        let html = ''

        series.forEach(serie => {
            html+=`
            <div class=" col-4 " data-id="${serie.nombre}">
  <div class="card shadow mt-2" >
    <img
    data-id="${serie.nombre}"
      src="${serie.imagen_url}"
      class="card-img-top cards"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-center cards" data-id="${serie.nombre}">${serie.nombre}</h5>
    </div>
  </div>
</div>`
        });

        document.querySelector('#series').innerHTML= html

        document.querySelector('main').addEventListener('click', async (e) => {
            if (e.target.classList.contains('cards')) {
                const id = e.target.dataset.id
                let htmlCard = ``
                series.forEach(serie => {
                    
                    if(serie.nombre==id){
                        htmlCard += `
                        <div class="col-6">
                        <div class="card shadow mt-2">
                            <img
                                src="${serie.imagen_url}"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h3>${serie.nombre}</h3>
                                <hr />
                                <p><strong>Año: </strong><span>${serie.año}</span></p>
                                <p>
                                    <strong>Descripción: </strong>
                                    <span>
                                    ${serie.descripcion}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                        `
                    }
                });

                document.querySelector('#serie').innerHTML= htmlCard
            }
        })
      }

    
  }
  