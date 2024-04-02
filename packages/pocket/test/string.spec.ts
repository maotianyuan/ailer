import { describe, expect, it } from 'vitest'
import { bytesLength, stripPrefix, ensurePrefix } from '../src/modules/string'

describe('string', () => {
  it('bytesLength', () => {
    expect(bytesLength('abc')).toEqual(3);
    expect(bytesLength('中文')).toEqual(4);
    expect(bytesLength('中文124')).toEqual(7);
    expect(bytesLength('中文abc124')).toEqual(10);
    expect(bytesLength('&^123')).toEqual(5);
  })
  it('stripPrefix', () => {
    expect(stripPrefix('fff', '#')).toEqual('fff');
    expect(stripPrefix('#fff', '#')).toEqual('fff');
    expect(stripPrefix('@fff', '#')).toEqual('@fff');
    expect(stripPrefix('1fff', '#')).toEqual('1fff');
  })
  it('ensurePrefix', () => {
    expect(ensurePrefix('fff', '#')).toEqual('#fff');
    expect(ensurePrefix('#fff', '#')).toEqual('#fff');
  })
})

