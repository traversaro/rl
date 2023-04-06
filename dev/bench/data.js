window.BENCHMARK_DATA = {
  "lastUpdate": 1680782235648,
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
      },
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
          "id": "8369529f2252cec33d478833725e2186e6ce9e7e",
          "message": "[Feature] Benchmarking worflow",
          "timestamp": "2023-04-06T03:37:24Z",
          "url": "https://github.com/pytorch/rl/pull/1028/commits/8369529f2252cec33d478833725e2186e6ce9e7e"
        },
        "date": 1680781891854,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07124765928052228,
            "unit": "iter/sec",
            "range": "stddev: 0.026844769040633366",
            "extra": "mean: 14.035548817999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.13081107637746206,
            "unit": "iter/sec",
            "range": "stddev: 0.02433527675980314",
            "extra": "mean: 7.644612579399995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13186116607105983,
            "unit": "iter/sec",
            "range": "stddev: 0.03288846505701666",
            "extra": "mean: 7.583733936199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.2695766233295096,
            "unit": "iter/sec",
            "range": "stddev: 0.0291254446268662",
            "extra": "mean: 787.664156400001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7281674912245606,
            "unit": "iter/sec",
            "range": "stddev: 0.026784876575148244",
            "extra": "mean: 1.3733104155999853 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.453070337226633,
            "unit": "iter/sec",
            "range": "stddev: 0.028567541572637845",
            "extra": "mean: 2.2071628130000134 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5188264826120246,
            "unit": "iter/sec",
            "range": "stddev: 0.040845341922585474",
            "extra": "mean: 1.9274266705999934 sec\nrounds: 5"
          }
        ]
      }
    ],
    "GPU Benchmark Results": [
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
          "id": "8369529f2252cec33d478833725e2186e6ce9e7e",
          "message": "[Feature] Benchmarking worflow",
          "timestamp": "2023-04-06T03:37:24Z",
          "url": "https://github.com/pytorch/rl/pull/1028/commits/8369529f2252cec33d478833725e2186e6ce9e7e"
        },
        "date": 1680782187411,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.064365434947643,
            "unit": "iter/sec",
            "range": "stddev: 0.0477750507523919",
            "extra": "mean: 15.536289016199976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11550249703940477,
            "unit": "iter/sec",
            "range": "stddev: 0.16091739688269713",
            "extra": "mean: 8.657821481200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11572351415181738,
            "unit": "iter/sec",
            "range": "stddev: 0.0933422615550355",
            "extra": "mean: 8.641286149400049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.096228118897574,
            "unit": "iter/sec",
            "range": "stddev: 0.04545821616088068",
            "extra": "mean: 912.2188920000099 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6281607025444749,
            "unit": "iter/sec",
            "range": "stddev: 0.051272135857849455",
            "extra": "mean: 1.5919493148000583 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.41870551892702,
            "unit": "iter/sec",
            "range": "stddev: 0.04382916499032428",
            "extra": "mean: 2.3883133963999628 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4866801440448889,
            "unit": "iter/sec",
            "range": "stddev: 0.06431393243374091",
            "extra": "mean: 2.0547376181999426 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}