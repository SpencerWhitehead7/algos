  import heapq

def dijkstra(graph_adjacency_list, start_node):

    # Initially, it costs an unknown amount to get anywhere
    # other than the start_node (which we can get to for free)
    cost_to_get_to = { node : float('inf') for node in graph_adjacency_list }
    cost_to_get_to[start_node] = 0

    # Track which nodes we've already dequeued -- we know
    # we've already found the shortest path to each of them
    # (This is the "checkmark" from our table)
    dequeued_nodes = set()

    # Priority queue ordering cities by the cost to get to them
    priority_queue = []
    for node in graph_adjacency_list:
        heapq.heappush(priority_queue, (cost_to_get_to[node], node))

    while len(priority_queue) > 0:

        # Dequeue the next node from our priority queue
        cheapest_cost, cheapest_node = heapq.heappop(priority_queue)
        dequeued_nodes.add(cheapest_node)

        # Update cost_to_get_to for neighboring nodes
        for neighbor, edge_cost in graph_adjacency_list[cheapest_node]:

            # Nodes we dequeued earlier can be skipped
            if neighbor in dequeued_nodes:
                continue

            # Can we get there more cheaply via this neighbor node?
            if cost_to_get_to[cheapest_node] + edge_cost < cost_to_get_to[neighbor]:

                # Update the cost to reach the node
                cost_to_get_to[neighbor] = cost_to_get_to[cheapest_node] + edge_cost

                # Update the cost to reach this node in the priority queue
                heapq.heapupdate(priority_queue, neighbor, cost_to_get_to[neighbor])

    return cost_to_get_to