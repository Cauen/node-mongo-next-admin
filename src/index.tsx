
interface MyCompProps {
  path: string
}
const MyComp: React.FC<MyCompProps> = ({ path }) => {
  return <div>A{path}B</div>
}

type PathProps = string[] | string
const parseArray = (value: PathProps) => {
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}

export class CauAdmin {
  configs: string
  models: string

  constructor(configs: string, models: string) {
    this.configs = configs
    this.models = models
  }

  getRoute(path: PathProps) {
    return { path: `${this.configs}/${path}` }
  }

  getComp(path: PathProps): React.FC {
    const str = parseArray(path)
    return () => <MyComp path={str.join("/")} />
  }
}