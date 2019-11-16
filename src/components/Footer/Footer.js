import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className="App">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            </div>
            <div class="col-sm">
              <span class="titulo-pie-pagina"> CONTÁCTANOS</span>
              <ul class="links">
                <li>
                  <h1>
                     Base de datos de Pueblos Indígenas u
                  </h1>
                </li>
                <li>
                  <h1>
                    Tel. +51 (01) 618-9393 anexos 2720 y 2745
                  </h1>
                </li>
                <li>
                  <h1>
                    E-mail: renitli@cultura.gob.pe
                  </h1>
                </li>
                <li>
                  <h1>
                   bdpi.cultura.gob.pe
                  </h1>
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <span class="titulo-pie-pagina"> ENLACES EXTERNOS</span>
              <ul class="links">
                <li><a href="">Centro de recursos interculturales</a></li>
                <li><a href="">Consulta previa</a></li>
                <li><a href="">Alerta contra el racismo</a></li>
                <li><a href="">Mapa sonoro estadístico de lenguas indígenas u originarias</a></li>
                <li><a href="">Geocultura</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <p>Sede central Av. Javier Prado Este 2465</p>
            <p>San Borja, Lima 41 Perú</p>
            <p>Central Telefònica: 511-6189393</p>
          </div>
          <div class="col-sm"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
