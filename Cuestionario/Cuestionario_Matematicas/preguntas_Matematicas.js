let questions = [
  {
    numb: 1,
    question: "En un juego se lanza un dado 2 veces y se gana si en el segundo lanzamiento se obtiene el doble de lo obtenido en el primer lanzamiento.\n ¿Cuál es la probabilidad de ganar?",
    options: [
      "6/36",
      "3/36",
      "1/9",
      "2/9"
    ],
    correct:'6/36',
  },
  {
    numb: 2,
    question: "Cuatro personas participaban en una carrera. Al cabo de tres horas, las distancias recorridas hasta ese momento eran las siguientes: 5,42 km, 5,407 km, 4,91 km y 4,86 km.\n\n ¿Cuál es el orden de las cuatro distancias recorridas, de menor a mayor valor?",
    options: [
      "4,91 km, 4,86 km, 5,42 km y 5,407 km.",
      "4,91 km, 4,86 km, 5,407 km y 5,42 km.",
      "4,86 km, 4,91 km, 5,407 km y 5,42 km.",
      "4,86 km, 4,91 km, 5,42 km y 5,407 km."
    ],
    correct: "4,86 km, 4,91 km, 5,42 km y 5,407 km."
  },
  {
    numb: 3,
    question: "Una vez inicia la migración del atún en una cierta región del país, su pesca varía diariamente según la expresión\n\n P = - d2 + 10d - 15\n\n Donde P representa la pesca, en toneladas, y d los días transcurridos después de iniciada la migración.\n\n¿Cuál de las siguientes gráficas muestra correctamente la relación entre la pesca y los días transcurridos después de iniciada la migración?",
    options: [
      '-<img src="/img/Img_Cuestionario_Matematicas/Pregunta-2-Matematicas-A.PNG">', 
      '.<img src="/img/Img_Cuestionario_Matematicas/Pregunta-2-Matematicas-B.PNG">',
      ',<img src="/img/Img_Cuestionario_Matematicas/Pregunta-2-Matematicas-C.PNG">', 
      '_<img src="/img/Img_Cuestionario_Matematicas/Pregunta-2-Matematicas-D.PNG">',
    ],
    correct: '-'

  },
  {
    numb: 4,
    question: "Un profesor escribe en el tablero la función y = x2 + 5 y pide a los estudiantes que dibujen la gráfica que corresponde a la función. ¿Cuál es la gráfica que deberían dibujar los estudiantes?",
    options: [
      '.<img src="/img/Img_Cuestionario_Matematicas/Pregunta-3-Matematicas-A.PNG">', 
      '<img src="/img/Img_Cuestionario_Matematicas/Pregunta-3-Matematicas-A.PNG">', 
      '<img src="/img/Img_Cuestionario_Matematicas/Pregunta-3-Matematicas-A.PNG">', 
      '<img src="/img/Img_Cuestionario_Matematicas/Pregunta-3-Matematicas-A.PNG">'
    ],
    correct: "."
  },
  {
    numb: 5,
    question: "La siguiente figura está compuesta por los cuadrados P y R y el triángulo rectángulo S.\n\n Si el área del cuadrado R es 36 m2 y el área del cuadrado P es 64 m2, ¿cuál es el área total de la figura?",
    image: "/img/IMG_CuestionarioNaturales/Pregunta_5_Naturales.PNG",
    options: [
      "48 m²",
      "100 m²",
      "124 m²",
      "148 m²"
    ],
    correct: "148 m²"
  },
  {
    numb: 6,
    question: "La temperatura T, en grados centígrados, del motor de un camión durante los primeros 3 minutos se comporta según la siguiente expresión: \n\n T = 3(x + 1) + 10\n\n Donde x es el tiempo en minutos que el motor está en funcionamiento desde que se enciende. ¿Cuál de las siguientes tablas muestra correctamente algunos valores del tiempo en funcionamiento y la temperatura del motor?",
    image: "/img/IMG_CuestionarioNaturales/Pregunta_6_Naturales.PNG",
    options: [
      '.<img src="/img/Img_Cuestionario_Matematicas/Pregunta-6-Matematicas-A.PNG">', 
      '<img src="/img/Img_Cuestionario_Matematicas/Pregunta-6-Matematicas-B.PNG">',
      '<img src="/img/Img_Cuestionario_Matematicas/Pregunta-6-Matematicas-C.PNG">', 
      '<img src="/img/Img_Cuestionario_Matematicas/Pregunta-6-Matematicas-D.PNG">'
    ],
    correct: "."
  },
  {
    numb: 7,
    question: " La cantidad de millones de bacterias vivas en un cultivo, después de aplicar un tratamiento, está dada por la expresión\n\n f(x) = 1 + √(10 - x)\n\n Donde x es el número de días que han pasado desde que se aplicó el tratamiento. ¿Cuál es el conjunto de todos los valores de x para el cual f(x) está definida? ",

    options: [
      "x >= 10",
      "x > 10",
      "0 <= x <= 10",
      "0 < x < 10"
    ],
    correct: "0 < x < 10"
  },
  {
    numb: 8,
    question:"La siguiente gráfica ilustra algunos momentos del vuelo de un ave desde que inicia en el suelo.\n\n De acuerdo con la gráfica, ¿qué tipo de relación existe entre la altura alcanzada por el ave y la distancia recorrida?",
    image: "/img/Img_Cuestionario_Matematicas/Pregunta-8-Enunciado-Matematicas.PNG",
    options: [
      "Es constante, porque la altura que alcanza el ave y la distancia recorrida tienen el mismo valor",
      "Es exponencial, porque la altura que alcanza el ave y la distancia recorrida van en aumento.",
      "Es lineal, porque por cada metro que aumenta la altura que alcanza el ave, aumenta un metro la distancia recorrida.",
      "Es cuadrática, porque la altura que alcanza el ave y la distancia que recorre aumentan dos metros cada vez."
    ],
    correct: "Es cuadrática, porque la altura que alcanza el ave y la distancia que recorre aumentan dos metros cada vez."
  },
  {
    numb: 9,
    question: "Se lanza un proyectil al aire con el fin de estudiar su trayectoria. Se sabe que la trayectoria describe una parábola y se planea tomar medidas de la posición del proyectil durante el recorrido para determinar su ecuación. Sin embargo, solo se logran obtener dos datos: el punto de partida P y otro punto Q en el recorrido, como se muestra en la figura.\n\n Uno de los observadores concluye que esta información es suficiente para obtener la parábola descrita por la trayectoria del proyectil. Esta conclusión es",
    image: "/img/Img_Cuestionario_Matematicas/Pregunta-9-Enunciado-Matematicas.PNG",
    options: [
      "verdadera, pues una parábola queda completamente determinada por su vértice y cualquier otro de sus puntos.",
      "verdadera, pues una parábola está dada por una ecuación cuadrática y, por tanto, bastan dos puntos para encontrarla",
      "falsa, pues dados dos puntos en el plano hay por lo menos dos parábolas que pasan por estos dos puntos.",
      "falsa, pues dos puntos en el plano definen una recta y, por tanto, no hay información suficiente para definir una parábola."
    ],
    correct: "verdadera, pues una parábola está dada por una ecuación cuadrática y, por tanto, bastan dos puntos para encontrarla"
  },
  {
    numb: 10,
    question:"Un agente de negocios analiza la cantidad de ventas mensuales de dos productos durante seis meses (ver gráfica).\n\n De acuerdo con la información anterior, ¿cuál de las siguientes afirmaciones es verdadera?",
    image: "/img/Img_Cuestionario_Matematicas/Pregunta-10-Enunciado-Matematicas.PNG",
    options: [
      "Las ventas del producto 1 son directamente proporcionales al número del mes.",
      "Las ventas del producto 1 son inversamente proporcionales al número del mes.",
      "Las ventas del producto 2 son directamente proporcionales al número del mes.",
      "Las ventas del producto 2 son inversamente proporcionales al número del mes."
    ],
    correct: "Las ventas del producto 1 son directamente proporcionales al número del mes."
  },
  {
    numb: 11,
    question: "Un jardinero siembra varios árboles en el parque y monitorea su crecimiento. Cada mes registró en una tabla la cantidad de árboles que tenían más de 10 cm de altura.\n\n Si x representa el mes, ¿cuál de las siguientes expresiones representa la cantidad de árboles que tenían más de 10 cm de altura en dicho mes?",
    image: "/img/Img_Cuestionario_Matematicas/Pregunta-11-Enunciado-Matematicas.PNG",
    options: [
      "12x + 5",
      "x + 17",
      "12x + 17",
      "x + 12"
    ],
    correct: "12x + 17"
  },
  {
    numb: 12,
    question: "La jefe de personal de una empresa va a citar a entrevista para un cargo a dos candidatos, uno en la mañana y otro en la tarde. Si en total hay 5 aspirantes para el cargo, ¿de cuántas formas diferentes puede llamar la jefe de personal a los candidatos ese día?",
      options: [
      "7",
      "9",
      "10",
      "20"
    ],
    correct: "7"
  },
  {
    numb: 13,
    question: "En una fábrica que hace camisetas deportivas, se calculan los costos y los ingresos por medio de dos funciones que dependen del número x de camisetas vendidas.\n\n - Función de costos: C(x) = 300x + 12.000 \n - Función de ingresos: I(x) = 900x \n\n ¿Cuántas camisetas se deben vender en un día para que los costos sean iguales a los ingresos?",
    options: [
      "40",
      "20",
      "4",
      "2"
    ],
    correct: "4"
  },
  {
    numb: 14,
    question: "La figura muestra una construcción geométrica, con sus lados etiquetados.\n\n¿Por qué los lados Y y W son paralelos?",
    image: "/img/Img_Cuestionario_Matematicas/Pregunta-14-Enunciado-Matematicas.PNG",
    options: [
      "Porque el lado W mide lo mismo que el lado X.",
      "Porque el lado Y es perpendicular a X y el lado W es perpendicular a X.",
      "Porque un cuadrilátero siempre tiene dos lados que son paralelos.",
      "Porque un cuadrilátero con un ángulo recto siempre tiene lados paralelos."
    ],
    correct: "Porque un cuadrilátero con un ángulo recto siempre tiene lados paralelos."
  },
  {
    numb: 15,
    question: "En una elipse, la medida del semieje mayor es la medida más grande de los segmentos que unen el centro con un punto de la elipse. Análogamente, el semieje menor es la medida más corta de estos segmentos (ver figura).\n\n Una persona afirma que si la medida del semieje mayor es igual a la del semieje menor, entonces la elipse es una circunferencia. La afirmación de la persona es",
    image: "/img/Img_Cuestionario_Matematicas/Pregunta-15-Enunciado-Matematicas.PNG",
    options: [
      "verdadera, porque una elipse en la cual la medida del semieje mayor es diferente de la medida del semieje menor no puede ser una circunferencia.",
      "falsa, porque con la igualdad de medida de los semiejes mayor y menor no puede garantizarse la igualdad de la medida de todos los segmentos que unen el centro con la elipse.",
      "verdadera, porque la medida de cualquier segmento que une el centro con la elipse está entre las medidas de los semiejes menor y mayor; por tanto, todas esas medidas serían iguales.",
      "falsa, porque las medidas de los segmentos que unen el centro con la elipse son siempre distintas; por tanto, los semiejes también tendrán medidas diferentes."
    ],
    correct: "falsa, porque las medidas de los segmentos que unen el centro con la elipse son siempre distintas; por tanto, los semiejes también tendrán medidas diferentes."
  }
  // Add more questions here...
];
