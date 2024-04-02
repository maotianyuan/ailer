import { describe, expect, it } from 'vitest'
import { formatTime } from '../src/modules/time'

describe('to', () => {
  it('formatTime', () => {
    expect(formatTime(5025)).toEqual('01:23:45');
    expect(formatTime(20)).toEqual('00:00:20');
    expect(formatTime(5)).toEqual('00:00:05');
    expect(formatTime(12121212, 'HH小时mm分钟ss秒')).toEqual('3367小时0分钟12秒');
    expect(formatTime(12, 'HH小时mm分钟ss秒')).toEqual('0小时0分钟12秒');
    expect(() => formatTime(-10)).toThrowError(/负数/)
    expect(() => formatTime(12, 'mm分钟ss秒')).toThrowError(/不支持的格式/)
    expect(() => formatTime(12, 'mm:ss')).toThrowError(/不支持的格式/)
  })
})

