import { Injectable } from '@angular/core';
import  { createToken } from 'chevrotain'
@Injectable({
  providedIn: 'root'
})
export class TokensService {

  constructor() { }

  //solo acepta numeros decimales
  NumeroReal = createToken({
    name: "Numero Real",
    pattern: /[-+]?(\d+\.\d+)/
  })

  //solo acepta numeros enteros
  NumeroEntero = createToken({
    name:"Numero Entero",
    pattern: /[+-]?\d+/,
  })

  //+
  Suma = createToken({
    name: "Signo Suma", 
    pattern: /\+/
  })

  Resta = createToken({
    name: "Signo Resta",
    pattern:/\-/,
  })

  //*
  Multiplicacion = createToken({
    name : "Signo Multiplicacion",
    pattern: /\*/
  })

  Potencia = createToken({
    name : "Signo Potencia",
    pattern: /\*{2}/
  })

  //division
  Division = createToken({
    name : "Signo Division",
    pattern: /\//
  })

  //comentario
  Comentario = createToken({
    name : "Comentario",
    pattern: /\/\/.*/
  })

  //(
  ParentesisIzq = createToken({
    name : "Parentesis Izquierdo",
    pattern: /\(/
  })

    //(
  ParentesisDere = createToken({
    name : "Parentesis Derecho",
    pattern: /\)/
  })

  CadenaTexto = createToken({
    name : "Cadena Texto",
    pattern: /(['"])(.*?)\1/
  })

  allTokens = [
    this.Comentario,
    this.Potencia,
    this.Multiplicacion,
    this.Suma,
    this.Resta,
    this.Division,
    this.NumeroReal,
    this.NumeroEntero,
    this.ParentesisIzq,
    this.ParentesisDere,
    this.CadenaTexto
  ]
}
