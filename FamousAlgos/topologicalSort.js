function topologicalSort(jobs, deps) {
  const list = {};
  let order = [];

  jobs.forEach((job) => (list[job] = []));

  const info = {
    visited: new Set(),
    inProgress: new Set(),
    returnEmpty: false,
  };

  for (let i = 0; i < deps.length; i++) {
    const [dependency, node] = deps[i];
    list[node].push(dependency);
  }
  for (let i = 0; i < jobs.length; i++) {
    helperFunction(order, list, jobs[i], info);
  }

  return order;
}

function helperFunction(order, list, currentNode, info) {
  if (info.inProgress.has(currentNode)) return (info.returnEmpty = true);
  if (info.visited.has(currentNode)) return;

  info.inProgress.add(currentNode);
  const outBoundNodes = list[currentNode];
  for (let i = 0; i < outBoundNodes.length; i++) {
    if (info.returnEmpty) break;
    helperFunction(order, list, outBoundNodes[i], info);
  }

  info.inProgress.delete(currentNode);
  info.visited.add(currentNode);

  if (info.returnEmpty) order.length = 0;
  else order.push(currentNode);
}

//=====================================================//
function topologicalSort(jobs, deps) {
  const order = [];
  const jobGraph = new JobGraph(jobs, deps);

  for (let i = 0; i < jobs.length; i++) {
    const currentJob = jobs[i];
    traverseJobDependencies(currentJob, jobGraph, order);
  }

  return jobGraph.cycleDetected ? [] : order;
}

function traverseJobDependencies(currentJob, jobGraph, order) {
  const currentJobNode = jobGraph.nodeMap[currentJob];

  if (currentJobNode.visited) return;
  if (currentJobNode.inProgress) return (jobGraph.cycleDetected = true);

  currentJobNode.inProgress = true;

  const currentDependencies = jobGraph.dependencyMap[currentJobNode.value];
  for (let i = 0; i < currentDependencies.length; i++) {
    const currentDependency = currentDependencies[i];
    traverseJobDependencies(currentDependency.value, jobGraph, order);
  }

  order.push(currentJob);
  currentJobNode.visited = true;
}

class JobGraph {
  constructor(jobs, deps) {
    this.nodeMap = this.createNodeMap(jobs);
    this.dependencyMap = this.createDependencyMap(jobs, deps);
    this.cycleDetected = false;
  }

  createNodeMap(jobs) {
    const map = {};
    jobs.forEach((job) => (map[job] = new Node(job)));
    return map;
  }

  createDependencyMap(jobs, deps) {
    const map = {};
    jobs.forEach((job) => (map[job] = []));
    deps.forEach((dep) => map[dep[1]].push(this.nodeMap[dep[0]]));
    return map;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.inProgress = false;
  }
}
