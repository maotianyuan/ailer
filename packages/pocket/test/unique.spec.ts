import { describe, expect, it } from 'vitest'
import { unique } from '../src/modules/unique'

describe('is', () => {
  it('unique', () => {
    const arr = [1,1,2,3,3]
    expect(unique(arr)).toEqual([1,2,3]);
    expect(unique(arr)).toHaveLength(3);
    expect(unique([{a: 1}, {a: 1}])).toHaveLength(2);
  })
})

