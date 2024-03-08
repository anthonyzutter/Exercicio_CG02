/* 1. Simulação de queda livre: Escreva um programa que calcule a posição e a velocidade de um
objeto em queda livre, considerando a aceleração devida à gravidade. O usuário pode inserir
a altura inicial do objeto e o programa deve calcular a posição e velocidade em intervalos de
tempo específicos. */
const GRAVITY = 9.80665;

const calculatePositionAndSpeed = (initialPositionInMeters, timeInSeconds) => {
  const position = initialPositionInMeters - (GRAVITY * Math.pow(timeInSeconds, 2)) / 2;
  const speed = GRAVITY * timeInSeconds;

  return { position, speed };
};

// Exemplo de uso
const result = calculatePositionAndSpeed(45, 1);
console.log(`Final position: ${result.position} m`);
console.log(`Speed: ${result.speed} m/s`);

/* 2. Movimento de um projétil: Desenvolva um algoritmo que simule o movimento de um projétil
lançado com uma determinada velocidade e ângulo em relação ao solo. O programa deve
calcular a trajetória do projétil e determinar sua posição em diferentes momentos. */

const calculateProjectileTrajectory = (angleInDegrees, initialSpeedInMetersPerSecond) => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  const initialVelocityX = initialSpeedInMetersPerSecond * Math.cos(angleInRadians);
  const initialVelocityY = initialSpeedInMetersPerSecond * Math.sin(angleInRadians);

  const calculatePosition = (timeInSeconds) => {
    const positionX = initialVelocityX * timeInSeconds;
    const positionY = initialVelocityY * timeInSeconds - 0.5 * GRAVITY * Math.pow(timeInSeconds, 2);
    return { x: positionX, y: positionY };
  };

  return calculatePosition;
};

// Exemplo de uso
const trajectoryCalculator = calculateProjectileTrajectory(45, 20);
const positionAtTime2 = trajectoryCalculator(2);
console.log(`Position at 2 seconds: (${positionAtTime2.x} m, ${positionAtTime2.y} m)`);

/* 3. Colisão de partículas: Crie um programa que simule a colisão elástica entre duas partículas em
um espaço bidimensional. O usuário pode fornecer as massas e velocidades iniciais das
partículas, e o programa deve calcular as velocidades finais após a colisão. */
const collideParticles = (particle1, particle2) => {
  const totalMass = particle1.massInKg + particle2.massInKg;
  const newVelocity1 =
    ((particle1.massInKg - particle2.massInKg) / totalMass) * particle1.velocityInMs;
  const newVelocity2 = ((2 * particle2.massInKg) / totalMass) * particle2.velocityInMs;

  return { newVelocity1, newVelocity2 };
};

// Exemplo de uso
const particle1 = { massInKg: 2, velocityInMs: 5 };
const particle2 = { massInKg: 3, velocityInMs: -3 };
console.log(
  `Initial velocities: Particle 1: ${particle1.velocityInMs} m/s, Particle 2: ${particle2.velocityInMs} m/s`
);
const { newVelocity1, newVelocity2 } = collideParticles(particle1, particle2);
console.log(`Final velocities: Particle 1: ${newVelocity1} m/s, Particle 2: ${newVelocity2} m/s`);

/* 4. Pendulo simples: Escreva um algoritmo que simule o movimento de um pêndulo simples. O
programa deve calcular a posição angular do pêndulo em relação ao tempo, levando em
consideração a massa do objeto pendurado, o comprimento da corda e a força gravitacional. */
const simulateSimplePendulum = (mass, length, time) => {
  const angularFrequency = Math.sqrt(GRAVITY / length);
  const angularPosition = Math.cos(angularFrequency * time);
  const angularVelocity = (-angularFrequency * Math.sin(angularFrequency * time)) / mass;

  return { angularPosition, angularVelocity };
};

// Exemplo de uso
const resultPendulum = simulateSimplePendulum(0.5, 1, 2);
console.log(`Angular position: ${resultPendulum.angularPosition} rad`);
console.log(`Angular velocity: ${resultPendulum.angularVelocity} rad/s`);

/* 5. Movimento circular uniforme: Desenvolva um programa que calcule a velocidade angular, a
velocidade tangencial e a aceleração centrípeta de um objeto em movimento circular
uniforme. O usuário pode inserir o raio da trajetória  */
const calculateCircularMotion = (radius) => {
  const angularVelocity = Math.sqrt(GRAVITY / radius);
  const tangentialVelocity = angularVelocity * radius;
  const centripetalAcceleration = Math.pow(angularVelocity, 2) * radius;

  return { angularVelocity, tangentialVelocity, centripetalAcceleration };
};

// Exemplo de uso
const resultCircularMotion = calculateCircularMotion(10);
console.log(`Angular velocity: ${resultCircularMotion.angularVelocity} rad/s`);
console.log(`Tangential velocity: ${resultCircularMotion.tangentialVelocity} m/s`);
console.log(`Centripetal acceleration: ${resultCircularMotion.centripetalAcceleration} m/s^2`);

module.exports = {
  calculatePositionAndSpeed,
  calculateProjectileTrajectory,
  collideParticles,
  simulateSimplePendulum,
  calculateCircularMotion,
};
