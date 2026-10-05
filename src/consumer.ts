import { unused, used } from './module.ts'

export function callUsed(): string {
  return used()
}

export function callUnused(): string {
  return unused()
}
