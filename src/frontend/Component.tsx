import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface MyCompProps {
  path: string[]
  models: string[]
}
const MyComp: React.FC<MyCompProps> = ({ path, models }) => {
  const { query, asPath } = useRouter()
  const [feature, ...rest] = path
  const paths = query.path as string[]
  if (!paths) {
    return <div>
      <h1>Admin Home</h1>
      <div>
        {models.map(model => (<p key={model}><Link href={`/admin/${model}/list`}>{model}</Link></p>))}
      </div>
    </div>
  }

  const queryString = paths.join("/")
  const root = asPath.replace(`/${queryString}`, '')
  const model = rest[0]

  return <div>
    <p>-{paths.join(' ')}-</p>
    <Link href={`${root}`}><button>Admin</button></Link>
    <Link href={`${root}/${feature}/list`}><button>{feature}s</button></Link>
    <Link href={`${root}/${feature}/new`}><button>Add New</button></Link>
    <Link href={`${root}/${feature}/not`}><button>404</button></Link>
  </div>
}

export default MyComp