package node.worker_threads;

typedef WorkerPerformance = {
	dynamic function eventLoopUtilitzation(?util1:node.perf_hooks.EventLoopUtilization, ?util2:node.perf_hooks.EventLoopUtilization):node.perf_hooks.EventLoopUtilization;
};