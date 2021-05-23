import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { GetStaticProps } from 'next';
import Admin from '../configs/admin'

export default function Home({ data }) {
  const models = Admin.getModels()

  return (
    <div>
      <div>
        <p>
          Node MN Admin
        </p>
        <Link href={"/admin/"}>Admin</Link>
      </div>
      <div>
        API data for first model "{models[0]}": {JSON.stringify(data)}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const models = Admin.getModels()
  const res = await axios.get('http://127.0.0.1:3000/api/admin/'+models[0])

  const props = {
    data: res.data
  }

  return {
    props,
    revalidate: 10,
  }
}
