var cloneGraph = function(node) {
    if (!node) { return null; }
    if (node.neighbors.length==0) { return new Node(node.val, new Array()); }

    var visited = new Array(101).fill(false);
    var queue = [node];
    visited[node.val] = true;
    var graph = new Array(101)
    for (var i=1; i<graph.length; i++) {
        graph[i] = new Node(i, new Array());
    }

    while (queue.length) {
        var n = queue.shift();

        for (var neighbor of n.neighbors) {
            graph[n.val].neighbors.push(graph[neighbor.val]);
            if (!visited[neighbor.val]) {
                queue.push(neighbor);
                visited[neighbor.val] = true;
            }
        }
    }
    return graph[node.val];
};