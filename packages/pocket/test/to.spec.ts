import { describe, expect, it } from 'vitest'
import { toHex } from '../src/modules/to'

describe('to', () => {
  it('toHex', () => {
    expect(toHex(255)).toEqual('FF');
    expect(toHex(0)).toEqual('00');
  })
})

