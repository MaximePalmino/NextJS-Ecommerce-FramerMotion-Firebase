import type { NextPage } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Test from '../components/Test'


const Home: NextPage = () => {
  return (
    <div>
       {/* <Nav /> */}
    <Header />
    <Test />
    </div>
  )
}

export default Home
