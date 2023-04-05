import LayoutClient from '@/components/layouts/client/LayoutClient'
import Home from '@/components/screens/Home/Home'
import type { NextPage } from 'next'


const HomePage: NextPage = () => {
  return (
    <LayoutClient>
      <Home />
    </LayoutClient>
  )
}

export default HomePage
