import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router'
import Admin from '../../configs/admin'

interface CauAdminProps {
  path: string | string[]
}
const CauAdmin: React.FC<CauAdminProps> = ({ path }) => {
  const router = useRouter()
  const { path: frontPath } = router.query
  const MyComp = Admin.getComp(frontPath)

  // const MyComp = () => Admin.getComponent(path)()

  console.log({ MyComp })

  return <MyComp />
}

export default CauAdmin;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { path } = context.params

  const props = {
    path
  }

  return {
    props,
    revalidate: 10,
  }
}
