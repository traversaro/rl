window.BENCHMARK_DATA = {
  "lastUpdate": 1680778706227,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "name": "pytorch",
            "username": "pytorch"
          },
          "committer": {
            "name": "pytorch",
            "username": "pytorch"
          },
          "id": "b8094fc48025ab41d0a5b840dfbd9011e28fb274",
          "message": "[Feature] Benchmarking worflow",
          "timestamp": "2023-04-06T03:37:24Z",
          "url": "https://github.com/pytorch/rl/pull/1028/commits/b8094fc48025ab41d0a5b840dfbd9011e28fb274"
        },
        "date": 1680778649363,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05011944247109179,
            "unit": "iter/sec",
            "range": "stddev: 0.044281751087421904",
            "extra": "mean: 19.952336871600004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.0941650119978204,
            "unit": "iter/sec",
            "range": "stddev: 0.06880053224331618",
            "extra": "mean: 10.61965563199999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.0944412626109585,
            "unit": "iter/sec",
            "range": "stddev: 0.04333008085351769",
            "extra": "mean: 10.588592023800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8863209336788971,
            "unit": "iter/sec",
            "range": "stddev: 0.038848915472635324",
            "extra": "mean: 1.1282594847999916 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.49994493671459556,
            "unit": "iter/sec",
            "range": "stddev: 0.040375876050504515",
            "extra": "mean: 2.0002202774000124 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.33111456555564267,
            "unit": "iter/sec",
            "range": "stddev: 0.04531955030197741",
            "extra": "mean: 3.0201027198000245 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3885625021033062,
            "unit": "iter/sec",
            "range": "stddev: 0.05119239154617347",
            "extra": "mean: 2.573588533600014 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}