import React, { useState } from 'react';
import './App.css';

function areaDelCuadrado(lado: number): number {
  return lado * lado;
}

function Ejercicio1() {
  const [lado, setLado] = useState<number>(0);
  const area = areaDelCuadrado(lado);

  return (
    <section className="ejercicio">
      <h2>Ejercicio 1: Área del Cuadrado</h2>
      <div className="contenido">
        <p className="descripcion">Función que calcula el área de un cuadrado: lado × lado</p>
        <p>Unidad de medica metros=m</p>
        <input
          type="number"
          value={lado}
          onChange={(e) => setLado(Number(e.target.value))}
          placeholder="Ingresa el lado del cuadrado"
          className="input-field"
        />
        <div className="resultado">
          <p><strong>Lado:</strong> {lado}</p>
          <p><strong>Área:</strong> {area} m²</p>
        </div>
      </div>
    </section>
  );
}



// Componente Principal
function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⚛️ Ejercicios TypeScript - React</h1>
        <p className="subtitle">Instituto Tecnológico Superior Quito Metropolitano</p>
        <p className="estudiante">Estudiante: Pablo Enrique Menendez Figueroa</p>
      </header>

      <main className="ejercicios-container">
        <Ejercicio1 />
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Proyecto React JS </p>
      </footer>
    </div>
  );
}

export default App;
