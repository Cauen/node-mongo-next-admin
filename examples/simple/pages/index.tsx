import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { GetStaticProps } from 'next';

export default function Home({ data }) {
  return (
    <div>
      <div>
        <p>
          CauAdmin
        </p>
        <Link href="/admin/battle">Admin</Link>
      </div>
      <div>
        API data: {JSON.stringify(data)}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await axios.get('http://127.0.0.1:3000/api/admin')

  const props = {
    data: res.data
  }

  return {
    props,
    revalidate: 10,
  }
}
