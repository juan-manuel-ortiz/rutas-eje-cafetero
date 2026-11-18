/*
 * RETO · Escribe AQUÍ tus propias pruebas para ordenarRutas(lista, criterio).
 * Mínimo 5 casos (ver RETO.md). Usa el patrón Preparar, Ejecutar, Verificar.
 *
 * Ejemplo de la forma de una prueba (bórralo o adáptalo):
 *
 *   test('describe lo que debe pasar', () => {
 *     // Preparar
 *     const lista = rutas;
 *     // Ejecutar
 *     const resultado = ordenarRutas(lista, 'precio');
 *     // Verificar
 *     assert.equal(resultado[0].precio, 0);
 *   });
 */
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { rutas } = require('../js/datos.js');
const { ordenarRutas } = require('../js/app.js');

describe('RETO · ordenarRutas(lista, criterio)', () => {
  test('ordena las rutas por nombre', () => {
    const resultado = ordenarRutas(rutas, 'nombre');

    const nombresEsperados = [...rutas]
      .map((ruta) => ruta.nombre)
      .sort((a, b) => a.localeCompare(b, 'es'));

    assert.deepEqual(
      resultado.map((ruta) => ruta.nombre),
      nombresEsperados
    );
  });

  test('ordena las rutas por precio de menor a mayor', () => {
    const resultado = ordenarRutas(rutas, 'precio');

    assert.equal(resultado[0].precio, 0);
  });

  test('ordena las rutas por duracion de menor a mayor', () => {
    const resultado = ordenarRutas(rutas, 'duracion');

    assert.ok(resultado[0].duracionHoras <= resultado[1].duracionHoras);
  });

  test('no modifica la lista original', () => {
    const original = [...rutas];

    ordenarRutas(rutas, 'precio');

    assert.deepEqual(rutas, original);
  });

  test('un criterio desconocido devuelve una copia en el mismo orden', () => {
    const resultado = ordenarRutas(rutas, 'otro');

    assert.deepEqual(resultado, rutas);
    assert.notEqual(resultado, rutas);
  });
});
