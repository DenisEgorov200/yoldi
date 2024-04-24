import { Pages } from '@pages/index'
import { router } from '@shared/config/routes'
import { RouterProvider } from 'atomic-router-react'

export const App = () => {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  )
}
