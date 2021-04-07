import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import MyComp from './frontend/Component'

type PathProps = string[] | string
const parseArray = (value: PathProps) => {
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}

export class NodeMNAdmin {
  private configs: string
  private models: string[]

  constructor(configs: string, models: string[]) {
    this.configs = configs
    this.models = models
  }

  isAValidFrontnedRoute(path: PathProps): Boolean {
    const [feature, ...rest] = parseArray(path)

    if (this.models.includes(feature)) {
      const isCorrectSub = rest[0] === "new" || rest[0] === "list"
      if (isCorrectSub && !rest[1])
      return true

      return false
    }


    return false
  }

  getComp(path: PathProps): React.FC {
    const arr = parseArray(path)
    return () => <MyComp models={this.models} path={arr} />
  }

  handleApiRequest(request: NextApiRequest, response: NextApiResponse) {
    const path = request.query.path
    const [feature, ...rest] = parseArray(path)

    if (this.models.includes(feature)) {
      return response.send({ path: `${this.configs}/${path}` })
    }

    return response.status(404).send({ error: "Not found", status: 404 })
  }
}