import React from 'react';
import '../Fundamentos/Fundamentos.css';

function Fundamentos() {
  return (
    <div className="App">
      <div className="container mt-5 mb-5">
      <div className="row">
      <div  className="col-md-6">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Descripción
                </button>
              </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
              Durante el curso se desarrollará la temática de Aseguramiento de la Calidad del Software (SQA Software Quality Assurance) con el objetivo de incorporar los conocimientos esenciales para dominar el área de Testing. Se introducirán los fundamentos de la calidad de software junto con las metodologías de desarrollo mas utilizadas en el mercado. Se atravesará el proceso completo de Testing, comprendiendo el armado de un plan de pruebas con casos detallados, y recorriendo la ejecución, verificación, detección y corrección de errores. Se revisarán distintos tipos de prueba, como ser de Performance, de Integración, de Aceptación, de Usabilidad y de Instalación. Y se introducirá el uso de Herramientas para Automatización de Pruebas, de Stress, de Gestión, y de Testing Web.Este curso está orientado a estudiantes, personas vinculadas al desarrollo de software, y a todas aquellas personas que deseen ingresar al mundo laboral de IT dando sus primeros pasos en el Area de Testing
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 Requisitos y Público
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
              El único requerimiento para realizar este curso es contar con manejo básico de PC y sistema operativo Windows o Linux.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Cursos Relacionados
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
              <div className="alert alert-primary" role="alert">
                Curso de Programación Web
              </div>
              <div className="alert alert-primary" role="alert">
               Curso de Base de datos
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-6">
          <h4>En este curso aprenderás a</h4>
          <ul className="timeline">
            <li ><a target="_blank" href="#">Evaluar la calidad del proceso y del producto desarrollado.</a></li>
            <li><a href="#">Comprender las diferentes metodologías de desarrollo de software.</a></li>
            <li><a href="#">Planificar y ejecutar pruebas de software.</a></li>
            <li><a href="#">Reportar defectos y realizar su seguimiento.</a></li>
            <li><a href="#">Interactuar con los diversos roles de un equipo de proyecto.</a></li>
            <li><a href="#">Contribuir al desarrollo de software de calidad.</a></li>
            <li><a href="#">Satisfacer al usuario en sus expectativas de calidad. </a></li>
            <li><a href="#">Aplicar diferentes estrategias de pruebas.</a></li>
            <li><a href="#">Generar los reportes de las pruebas.</a></li>
            <li><a href="#">Definir estrategias y herramientas de automatización.</a></li>
            <li><a href="#">Conocer las herramientas que más se utilizan en el mercado.</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card w-100 cardMedium">
        <div className="card-body">
          <h1 className="card-title">Modalidad de Curso</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm">
              Modalidad Presencial
              <ul>
                <li>Cursos 100% prácticos con grupos reducidos.</li>
                <li>Clases con uso de PC, una por alumno (no tienes que traer tu PC).</li>
                <li>Coffee Break incluido.</li>
                <li>Espacio de networking.</li>
                <li>Posibilidad de volver a tomar el mismo curso gratis.</li>
              </ul>
              <img height="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd72wQCxnxqNTrPnaYIA1CLUpMB6ky9oivwSZKY4yHTFPVVlTItg&s" />
              </div>
              <div className="col-sm">
              Modalidad Distancia
              <ul>
                <li>Cursos 100% prácticos con grupos reducidos.</li>
                <li>Clase en tiempo real por video conferencia.</li>
                <li>Profesor disponible para hacer consultas en vivo.</li>
                <li>Grabación de las clases disponibles para ver en otro momento.</li>
                <li>Asistencia administrativa personalizada todos los días.</li>
              </ul>
              <img height="150px" src="http://www.capacitacionempresarial.la/uploads/1/6/1/2/16123856/published/ecuadoruniversitario-2f76fc4.jpg?1552920204" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundamentos;
