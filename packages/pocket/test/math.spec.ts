import { describe, expect, it } from 'vitest'
import { random, clamp } from '../src/modules/math'

describe('math', () => {
  it('random', () => {
    const min = 1;
    const max = 10;
    const randomNumber = random(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
    expect(Number.isInteger(randomNumber)).toBe(true);
  })
  it('clamp', () => {
    expect(clamp(0.12, 0, 1)).toEqual(0.12);
    expect(clamp(10, 0, 1)).toEqual(1);
    expect(clamp(-12, 0, 1)).toEqual(0);
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(0, 1, 10)).toBe(1);
    expect(clamp(15, 1, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(15, 10, 0)).toBe(10);
    expect(clamp(NaN, 0, 10)).toBeNaN();
    expect(clamp(5, NaN, 10)).toBeNaN();
    expect(clamp(5, 0, NaN)).toBeNaN();
  })
})

