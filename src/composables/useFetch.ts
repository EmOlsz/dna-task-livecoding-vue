import { ref, watchEffect } from 'vue'
import { type Ref } from 'vue'

interface FetchOptions {
  method?: string
  headers?: HeadersInit
  body?: BodyInit
}

type FetchResult<T> = [Ref<T | null>, Ref<Error | null>, Ref<boolean>]

export function useFetch<T>(path: string, options: FetchOptions = {}): FetchResult<T> {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await fetch(path, options)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const responseData = await response.json()
      data.value = responseData
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  watchEffect(fetchData)

  return [data as FetchResult<T>[0], error, loading]
}
