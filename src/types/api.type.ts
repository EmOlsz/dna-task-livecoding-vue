export type Transaction = {
  amount: number
  date: Date
  id: string
  merchantId: string
  userId: string
}

export type Merchant = {
  id: string
  name: string
}
