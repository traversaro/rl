window.BENCHMARK_DATA = {
  "lastUpdate": 1680780777213,
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
          "id": "415e0766a2c14350202f7aed8dee882a105f507e",
          "message": "[Feature] Benchmarking worflow",
          "timestamp": "2023-04-06T03:37:24Z",
          "url": "https://github.com/pytorch/rl/pull/1028/commits/415e0766a2c14350202f7aed8dee882a105f507e"
        },
        "date": 1680780726640,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06956742523247418,
            "unit": "iter/sec",
            "range": "stddev: 0.043100459464287456",
            "extra": "mean: 14.374543784799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.12922601639538342,
            "unit": "iter/sec",
            "range": "stddev: 0.05030029855280885",
            "extra": "mean: 7.738379839399931 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1303746800036527,
            "unit": "iter/sec",
            "range": "stddev: 0.03179608716229005",
            "extra": "mean: 7.670200992800005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.2382946008135047,
            "unit": "iter/sec",
            "range": "stddev: 0.032785726117156536",
            "extra": "mean: 807.5622710000061 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7129666339383649,
            "unit": "iter/sec",
            "range": "stddev: 0.02580331978486306",
            "extra": "mean: 1.4025901808000298 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4433846766374614,
            "unit": "iter/sec",
            "range": "stddev: 0.034175384332688484",
            "extra": "mean: 2.2553778979999834 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5100263151351547,
            "unit": "iter/sec",
            "range": "stddev: 0.0598889166665545",
            "extra": "mean: 1.9606831458000442 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}