import { describe, expect, it } from 'vitest'
import { deepGet } from '../src/modules/deepGet'

describe('deepGet', () => {
  const obj = {
    foo: {
      bar: {
        baz: 'value',
      },
    },
    arr: [
      { id: 1, name: 'mty' },
      { id: 2, name: 'tym' },
    ],
  };
  it('deepGet', () => {
    expect(deepGet(obj, 'foo.bar.baz')).toBe('value');
    expect(deepGet(obj, 'foo.bar.qux')).toBe(null);
    expect(deepGet(obj, 'arr[0].name')).toBe(null);
  })
})

