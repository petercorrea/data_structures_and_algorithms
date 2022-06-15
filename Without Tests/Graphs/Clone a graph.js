import GraphVertex from "../../Data Structures/GraphVertex.js"

export const cloneGraph = (vertex) => {
  if (vertex === null) {
    return null
  }

  const vertexMap = new Map()
  const queue = [vertex]
  vertexMap.set(vertex, new GraphVertex(vertex.value))

  while (queue.length) {
    const currentVertex = queue.shift()

    currentVertex.edges.forEach((v) => {
      if (!vertexMap.has(v)) {
        vertexMap.set(v, new GraphVertex(v.value))
        queue.push(v)
      }

      vertexMap.get(currentVertex).edges.push(vertexMap.get(v))
    })
  }
  return vertexMap.get(vertex)
}

const n1 = new GraphVertex(1)
const n2 = new GraphVertex(2)
const n3 = new GraphVertex(3)
const n4 = new GraphVertex(4)
n1.edges.push(n2, n4)
n2.edges.push(n1, n3)
n3.edges.push(n2, n4)
n4.edges.push(n1, n3)
