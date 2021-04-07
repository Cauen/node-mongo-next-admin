import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router'
import Admin from '../../configs/admin'

interface NodeMNAdminProps {
  path: string | string[]
}
const NodeMNAdmin: React.FC<NodeMNAdminProps> = ({ path }) => {
  const router = useRouter()
  const { path: frontPath } = router.query
  const MyComp = Admin.getComp(frontPath)

  return <MyComp />
}

export default NodeMNAdmin;

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

  const isAValidFrontnedRoute = Admin.isAValidFrontnedRoute(path)

  return {
    props,
    notFound: !isAValidFrontnedRoute,
    revalidate: 10,
  }
}
