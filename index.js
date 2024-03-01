/* 1 - Simulação de queda livre, escreva um programa que calcule a posição e a velocidade um objeto em 
queda livre, considerando a aceleração devida a gravidade. O usuário pode insirer a altura inicial do 
objeto e o programa deve calcular a posição e velocidade em intervalos de tempo específicos. */

const calculatePositionAndSpeed = (initialPositionInMeters, timeInSeconds) => {
    const gravity = 9.80665;
    const position = initialPositionInMeters - ((gravity * Math.pow(timeInSeconds, 2)) / 2);
    const speed = gravity * timeInSeconds

    return { position, speed };
}

const result = calculatePositionAndSpeed(45, 1);
console.log(`Final position: ${result.position} m`);
console.log(`Speed: ${result.speed} m/s`);


/* 2 - Movimento de um projétil: Desenvolva um algoritmo que simule o movimento de um projétivel lançado com 
uma determinada velocidade e ângulo  em relação ao solo. O programa deve calcular a trajetória do projéil e 
determinar sua posição em diferenes momentos. */

const calculateTrajectoryAndPosition = (angle, speed) => {
    
}


/* 3 - Colisão de paricuas: Crie um programa que simule a colisão elásica enre duas partícula em um espaço bidimensional. 
O usuário pode fornecer as masas e velocidades iniciais da particula, e o programa deve calcular as velocidades finais 
após a colisão. */