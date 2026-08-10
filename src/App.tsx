import React, { useState } from 'react';
import './App.css';

function areaDelCuadrado(lado: number): number {
  return lado * lado;
}

function sumaDelArreglo(numeros: number[]): number {
  return numeros.reduce((suma, num) => suma + num, 0);
}

function dividirArregloPorCinco(arreglo: number[]): number[] {
  return arreglo.map(valor => valor / 5);
}

interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

function calcularPromedioCalificaciones(alumnos: Alumno[]): number {
  const suma = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
  return suma / alumnos.length;
}

function LibroPEA() {
  return (
    <section className="libro-pea-section">
      <h2>Referencia Bibliográfica</h2>
      <div className="libro-container">
        <img 
          src="/referencias/libro-PEA.png" 
          alt="Libro PEA "
          className="libro-imagen"
        />
        <div className="libro-info">
          <h3>Introducción a la Movilidad: 4G/LTE y el Desarrollo de Aplicaciones Android</h3>
          <p><strong>Autores:</strong> Rafael León Sanz · Ramón Galán López</p>
          <p><strong>Plataforma:</strong> eLibro.net (ITSQMET)</p>
          <p><strong>Páginas:</strong> 158</p>
          <p className="requisito">Requisito CUMPLIDO</p>
        </div>
      </div>
    </section>
  );
}
function Ejercicio1() {
  const [lado, setLado] = useState<number>(0);
  const area = areaDelCuadrado(lado);

  return (
    <section className="ejercicio">
      <h2>Ejercicio 1: Área del Cuadrado</h2>
      <div className="contenido">
        <p className="descripcion">Función que calcula el área de un cuadrado: lado × lado</p>
        <input
          type="number"
          value={lado}
          onChange={(e) => setLado(Number(e.target.value))}
          placeholder="Ingresa el lado del cuadrado"
          className="input-field"
        />
        <div className="resultado">
          <p><strong>Lado:</strong> {lado}</p>
          <p><strong>Área:</strong> {area} unidades²</p>
        </div>
      </div>
    </section>
  );
}

function Ejercicio2() {
  const numeros = [10, 20, 30, 40, 50];
  const suma = sumaDelArreglo(numeros);

  return (
    <section className="ejercicio">
      <h2>Ejercicio 2: Suma de Arreglo</h2>
      <div className="contenido">
        <p className="descripcion">Función que suma todos los elementos de un arreglo</p>
        <div className="array-display">
          <p><strong>Arreglo:</strong> [{numeros.join(', ')}]</p>
          <p><strong>Suma Total:</strong> {suma}</p>
        </div>
      </div>
    </section>
  );
}

function Ejercicio3() {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const arregloDividido = dividirArregloPorCinco(arreglo);

  return (
    <section className="ejercicio">
      <h2>Ejercicio 3: Dividir Arreglo por 5 (map)</h2>
      <div className="contenido">
        <p className="descripcion">Función que usa map() para dividir cada elemento entre 5</p>
        <div className="array-display">
          <p><strong>Arreglo Original:</strong> [{arreglo.join(', ')}]</p>
          <p><strong>Arreglo Dividido:</strong> [{arregloDividido.map(n => n.toFixed(1)).join(', ')}]</p>
        </div>
      </div>
    </section>
  );
}

function Ejercicio4() {
  const alumnos: Alumno[] = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 }
  ];

  const promedio = calcularPromedioCalificaciones(alumnos);

  return (
    <section className="ejercicio">
      <h2>Ejercicio 4: Promedio de Calificaciones</h2>
      <div className="contenido">
        <p className="descripcion">Función que calcula el promedio de calificaciones de los alumnos</p>
        <div className="tabla-alumnos">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.name}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.calificacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="promedio"><strong>Promedio General:</strong> {promedio.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}

function Ejercicio5() {
  const [acumulador, setAcumulador] = useState<number>(5);

  const incrementar = () => setAcumulador(acumulador + 1);
  const disminuir = () => setAcumulador(acumulador - 1);

  return (
    <section className="ejercicio">
      <h2>Ejercicio 5: Acumulador con useState</h2>
      <div className="contenido">
        <p className="descripcion">Hook useState para crear un acumulador que inicia en 5</p>
        <div className="acumulador-display">
          <div className="valor-acumulador">{acumulador}</div>
          <div className="botones">
            <button onClick={disminuir} className="btn btn-disminuir">➖ Disminuir</button>
            <button onClick={incrementar} className="btn btn-incrementar">➕ Incrementar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Ejercicios TypeScript - React</h1>
        <p className="subtitle">Instituto Tecnológico Superior Quito Metropolitano</p>
        <p className="estudiante">Estudiante: <a href="https://github.com/pmenendez-itsqme" target="_blank" rel="noopener noreferrer">Pablo Menendez F</a>
</p>
      </header>

      <main className="ejercicios-container">
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />
        <Ejercicio5 />
        <LibroPEA />
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Proyecto React JS - Actividad Autonoma</p>
      </footer>
    </div>
  );
}

export default App;
