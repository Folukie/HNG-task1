import Head from 'next/head'
import Footer from '../components/footer.component'
import Profile from '../components/profile.component'
import Tabs from '../components/tabs.component'

export default function Home() {
  return (
    <div >
      <Head>
        <title>HNG Linktree</title>
        <meta name="description" content="Linktree" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile/>
      <Tabs/>
      <Footer/>

     
    </div>
  )
}
