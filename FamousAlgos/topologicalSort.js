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
