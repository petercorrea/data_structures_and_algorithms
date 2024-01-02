/* eslint-disable max-classes-per-file */

import { assert } from "chai"
import { Graph, GraphEdge } from "./graph.js"

const edgeA = new GraphEdge("A", 0)
const edgeB = new GraphEdge("B", 0)
const edgeC = new GraphEdge("C", 0)
const edgeD = new GraphEdge("D", 0)

const adjacency = {
  A: [edgeB, edgeC],
  B: [edgeA, edgeD]
}

const myGraph = new Graph(adjacency)

describe("Testing Graph Data Structure", () => {
  it("initialized undirected graph", () => {
    const actual = myGraph.adjacencyList.A
    const expected = [edgeB, edgeC]
    assert.deepEqual(actual, expected)
  })

  it("add vertex", () => {
    myGraph.addVertex("C")
    const actual = myGraph.adjacencyList.C
    const expected = []
    assert.deepEqual(actual, expected)
  })

  it("add edge - Source to Destination", () => {
    myGraph.addEdge("D", "A")
    const actual = myGraph.adjacencyList.D
    const expected = [
      {
        value: "A",
        weight: 0
      }
    ]
    assert.deepEqual(actual, expected)
  })

  it("add edge - Destination to Source", () => {
    const actual = myGraph.adjacencyList.A
    const expected = [
      {
        value: "B",
        weight: 0
      },
      {
        value: "C",
        weight: 0
      },
      {
        value: "D",
        weight: 0
      }
    ]
    assert.deepEqual(actual, expected)
  })

  it("remove edge", () => {
    myGraph.removeEdge("A", "C")
    const actual = myGraph.adjacencyList.A
    const expected = [
      {
        value: "B",
        weight: 0
      },
      {
        value: "D",
        weight: 0
      }
    ]
    assert.deepEqual(actual, expected)
  })

  it("remove vertex", () => {
    myGraph.removeVertex("D")
    const actual = myGraph.adjacencyList.D
    const expected = undefined
    assert.deepEqual(actual, expected)
  })

  it("Breadth First Search - found", () => {
    const actual = myGraph.breadthFirstSearch("A", "B")
    const expected = {
      value: "B",
      weight: 0
    }
    assert.deepEqual(actual, expected)
  })

  it("Breadth First Search - not found", () => {
    const actual = myGraph.breadthFirstSearch("A", "X")
    const expected = false
    assert.deepEqual(actual, expected)
  })

  it.skip("Depth First Search - found", () => {
    const actual = myGraph.depthFirstSearch("A", "B")
    const expected = {
      value: "B",
      weight: 0
    }
    assert.deepEqual(actual, expected)
  })

  it.skip("Depth First Search - not found", () => {
    const actual = myGraph.depthFirstSearch("A", "X")
    const expected = false
    assert.deepEqual(actual, expected)
  })
})
