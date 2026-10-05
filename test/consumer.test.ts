import { expect, test, vi } from 'vitest'
import { callUsed } from '../src/consumer'

// the factory leaves out `unused`, which `consumer.ts` imports but this test never calls
vi.mock(import('../src/module'), () => ({
  used: () => 'mocked',
}))

test('a factory can omit an export that another module imports', () => {
  expect(callUsed()).toBe('mocked')
})
