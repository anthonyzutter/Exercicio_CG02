import { expect, test } from "vitest";
import {
  calculatePositionAndSpeed,
  calculateProjectileTrajectory,
  collideParticles,
  simulateSimplePendulum,
  calculateCircularMotion,
} from "./index.js";

test("calculatePositionAndSpeed", () => {
  const result = calculatePositionAndSpeed(45, 1);
  expect(Math.round(result.position)).toBe(40);
  expect(Math.round(result.speed)).toBe(10);
});

test("calculateProjectileTrajectory", () => {
  const trajectoryCalculator = calculateProjectileTrajectory(45, 20);
  const positionAtTime2 = trajectoryCalculator(2);
  expect(positionAtTime2.x).toBeCloseTo(28.28, 2);
  expect(positionAtTime2.y).toBeCloseTo(8.67, 2);
});

test("collideParticles", () => {
  const particle1 = { massInKg: 2, velocityInMs: 5 };
  const particle2 = { massInKg: 3, velocityInMs: -3 };
  const { newVelocity1, newVelocity2 } = collideParticles(particle1, particle2);
  expect(newVelocity1).toBe(-1);
  expect(newVelocity2).toBeCloseTo(-3.6, 2);
});

test("simulateSimplePendulum", () => {
  const resultPendulum = simulateSimplePendulum(0.5, 1, 2);
  expect(resultPendulum.angularPosition).toBeCloseTo(0.99, 1);
  expect(resultPendulum.angularVelocity).toBeCloseTo(0.12, 1);
});

test("calculateCircularMotion", () => {
  const resultCircularMotion = calculateCircularMotion(10);
  expect(resultCircularMotion.angularVelocity).toBeCloseTo(0.99, 2);
  expect(resultCircularMotion.tangentialVelocity).toBeCloseTo(9.9, 1);
  expect(resultCircularMotion.centripetalAcceleration).toBeCloseTo(9.8, 1);
});
