import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { type Merchant } from '../src/types/Merchant.type'
import { type Transaction } from '../src/types/Transaction.type'

const merchants: Array<Merchant> = [
  {
    id: '123',
    name: 'Merchant 1'
  },
  {
    id: '456',
    name: 'Merchant 2'
  },
  {
    id: '789',
    name: 'Merchant 3'
  }
]

const transactions: Array<Transaction> = [
  {
    id: '123',
    amount: 10,
    date: new Date(),
    merchantId: '1',
    userId: '1'
  },
  {
    id: '234',
    amount: 20,
    date: new Date(),
    merchantId: '4',
    userId: '7'
  },
  {
    id: '456',
    amount: 15.5,
    date: new Date(),
    merchantId: '2',
    userId: '3'
  }
]

export const restHandlers = [
  http.get('http://localhost:8000/merchants', () => {
    return HttpResponse.json(merchants)
  }),
  http.get('http://localhost:8000/transactions', () => {
    return HttpResponse.json(transactions)
  })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
