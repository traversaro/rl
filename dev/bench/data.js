window.BENCHMARK_DATA = {
  "lastUpdate": 1681418239499,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "11810424@mail.sustech.edu.cn",
            "name": "btx0424",
            "username": "btx0424"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e21e6ffbd2a4f5e079e3df7e0a228e9c85aeda5",
          "message": "[BugFix] CompositeSpec nested key deletion (#1059)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-13T21:02:36+01:00",
          "tree_id": "7b9b9296ea74d6f34872563fecf532f95048061e",
          "url": "https://github.com/pytorch/rl/commit/7e21e6ffbd2a4f5e079e3df7e0a228e9c85aeda5"
        },
        "date": 1681418182630,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05252916961214435,
            "unit": "iter/sec",
            "range": "stddev: 0.12967764152563932",
            "extra": "mean: 19.037041845199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09102778221803591,
            "unit": "iter/sec",
            "range": "stddev: 0.4618915496826437",
            "extra": "mean: 10.985657077799965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09584764448938293,
            "unit": "iter/sec",
            "range": "stddev: 0.18811982190564294",
            "extra": "mean: 10.43322457559998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9214073823442581,
            "unit": "iter/sec",
            "range": "stddev: 0.041465638212350386",
            "extra": "mean: 1.085296275199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5304094075984855,
            "unit": "iter/sec",
            "range": "stddev: 0.011090495881902114",
            "extra": "mean: 1.8853360925999822 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3475998914353786,
            "unit": "iter/sec",
            "range": "stddev: 0.006104365806387102",
            "extra": "mean: 2.8768708639999887 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.38450767209669334,
            "unit": "iter/sec",
            "range": "stddev: 0.05914844096531405",
            "extra": "mean: 2.600728340599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.88469496175192,
            "unit": "iter/sec",
            "range": "stddev: 0.004418313172006012",
            "extra": "mean: 40.18534290000389 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.1923988882303516,
            "unit": "iter/sec",
            "range": "stddev: 0.021162959122418137",
            "extra": "mean: 838.6455320200002 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3438.6074465787983,
            "unit": "iter/sec",
            "range": "stddev: 0.00003537040396061408",
            "extra": "mean: 290.8153999942442 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 69.79959145493329,
            "unit": "iter/sec",
            "range": "stddev: 0.0001783286303976577",
            "extra": "mean: 14.32673141999203 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.10864800701599,
            "unit": "iter/sec",
            "range": "stddev: 0.012811429960437092",
            "extra": "mean: 901.99954689999 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.059930266881274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002810886497052693",
            "extra": "mean: 34.41164485999025 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1055297864231024,
            "unit": "iter/sec",
            "range": "stddev: 0.023578230288242272",
            "extra": "mean: 904.5436968600006 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1945730563980601,
            "unit": "iter/sec",
            "range": "stddev: 0.03289400763804832",
            "extra": "mean: 5.139457736399981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18856019204223584,
            "unit": "iter/sec",
            "range": "stddev: 0.017527621288556023",
            "extra": "mean: 5.303346316999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.188124916319401,
            "unit": "iter/sec",
            "range": "stddev: 0.0812153726648488",
            "extra": "mean: 5.31561698240007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.19350254751926318,
            "unit": "iter/sec",
            "range": "stddev: 0.14512215470029485",
            "extra": "mean: 5.167890618599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18340801730785247,
            "unit": "iter/sec",
            "range": "stddev: 0.1772774105371447",
            "extra": "mean: 5.4523243568 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18181666203584484,
            "unit": "iter/sec",
            "range": "stddev: 0.11539153591670963",
            "extra": "mean: 5.500045973799979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1955043395954753,
            "unit": "iter/sec",
            "range": "stddev: 0.02589039650390814",
            "extra": "mean: 5.114975974800018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18855703377061328,
            "unit": "iter/sec",
            "range": "stddev: 0.03135022464530499",
            "extra": "mean: 5.3034351463999885 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18685500637508537,
            "unit": "iter/sec",
            "range": "stddev: 0.10850865549170868",
            "extra": "mean: 5.351743147800062 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.51167931690871,
            "unit": "iter/sec",
            "range": "stddev: 0.0006644269531778367",
            "extra": "mean: 30.758177399957276 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 30.92731655664403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006026436303582381",
            "extra": "mean: 32.33387540003605 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.81616983606531,
            "unit": "iter/sec",
            "range": "stddev: 0.001476996250194209",
            "extra": "mean: 33.538848399985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 31.17573530659267,
            "unit": "iter/sec",
            "range": "stddev: 0.00013208970271341583",
            "extra": "mean: 32.07622820009419 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.43239842873298,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374921913121638",
            "extra": "mean: 32.85971700001937 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.546890013796002,
            "unit": "iter/sec",
            "range": "stddev: 0.0005176696333970188",
            "extra": "mean: 32.73655680000047 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.61294150262762,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072167420535651",
            "extra": "mean: 30.662674200038964 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 30.952226618624447,
            "unit": "iter/sec",
            "range": "stddev: 0.00047982217461002444",
            "extra": "mean: 32.307853400061504 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.789376495160596,
            "unit": "iter/sec",
            "range": "stddev: 0.0003436418630865236",
            "extra": "mean: 32.478734999949666 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.049665749286290535,
            "unit": "iter/sec",
            "range": "stddev: 0.12223221577871612",
            "extra": "mean: 20.13460008900006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.050305996816052065,
            "unit": "iter/sec",
            "range": "stddev: 0.0695578067530574",
            "extra": "mean: 19.878345789600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05024125130123515,
            "unit": "iter/sec",
            "range": "stddev: 0.04151208192439375",
            "extra": "mean: 19.90396286119999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.050190742335939856,
            "unit": "iter/sec",
            "range": "stddev: 0.09922198685566237",
            "extra": "mean: 19.92399302060003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04978916165943475,
            "unit": "iter/sec",
            "range": "stddev: 0.059668723985748885",
            "extra": "mean: 20.084692464599993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04987319124543576,
            "unit": "iter/sec",
            "range": "stddev: 0.04320937762085184",
            "extra": "mean: 20.050852472600035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04997762677920197,
            "unit": "iter/sec",
            "range": "stddev: 0.02381881264202707",
            "extra": "mean: 20.00895329459995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04979031873772249,
            "unit": "iter/sec",
            "range": "stddev: 0.04121426819823913",
            "extra": "mean: 20.084225715999946 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04976280498195234,
            "unit": "iter/sec",
            "range": "stddev: 0.10905520717387479",
            "extra": "mean: 20.095330244399882 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}