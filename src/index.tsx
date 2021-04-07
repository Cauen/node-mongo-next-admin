const parseArray = (value: string[] | string) => {
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

  getRoute(path: string[] | string) {
    return { path: `${this.configs}/${path}` }
  }
}