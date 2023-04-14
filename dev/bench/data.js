window.BENCHMARK_DATA = {
  "lastUpdate": 1681461297154,
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
      },
      {
        "commit": {
          "author": {
            "email": "bit.yangxm@gmail.com",
            "name": "Xiaomeng Yang",
            "username": "xiaomengy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a85f451a5676bd8b1fc5ceffb54ecf99314b834",
          "message": "[Feature] Add MaskedCategorical distribution (#1012)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-14T09:03:26+01:00",
          "tree_id": "31abbcd98badbea538a6e01f29eb59a32871613c",
          "url": "https://github.com/pytorch/rl/commit/9a85f451a5676bd8b1fc5ceffb54ecf99314b834"
        },
        "date": 1681461208487,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.060697556336443664,
            "unit": "iter/sec",
            "range": "stddev: 0.06956529729886268",
            "extra": "mean: 16.4751278364 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11285850101788397,
            "unit": "iter/sec",
            "range": "stddev: 0.03449071407496308",
            "extra": "mean: 8.860652861599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11313762332241661,
            "unit": "iter/sec",
            "range": "stddev: 0.07226710527034069",
            "extra": "mean: 8.838792707800007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.056837460973793,
            "unit": "iter/sec",
            "range": "stddev: 0.046038497132940344",
            "extra": "mean: 946.2192976000097 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6092036070208144,
            "unit": "iter/sec",
            "range": "stddev: 0.0031371534637087053",
            "extra": "mean: 1.641487326200013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40331729536972954,
            "unit": "iter/sec",
            "range": "stddev: 0.004260526736495405",
            "extra": "mean: 2.4794374341999856 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46067158947230985,
            "unit": "iter/sec",
            "range": "stddev: 0.05603260217686568",
            "extra": "mean: 2.170743807200006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.263850576888792,
            "unit": "iter/sec",
            "range": "stddev: 0.0009247043827224461",
            "extra": "mean: 35.38088333999667 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.276610272310163,
            "unit": "iter/sec",
            "range": "stddev: 0.0051013254677407015",
            "extra": "mean: 783.3244191200129 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3453.24090804976,
            "unit": "iter/sec",
            "range": "stddev: 0.000036573520888702204",
            "extra": "mean: 289.5830399984334 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.88666610537103,
            "unit": "iter/sec",
            "range": "stddev: 0.00018814271598132623",
            "extra": "mean: 13.177545559999544 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1720920814254367,
            "unit": "iter/sec",
            "range": "stddev: 0.00905722025789356",
            "extra": "mean: 853.1752887399875 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.883724576317714,
            "unit": "iter/sec",
            "range": "stddev: 0.00031349144631079355",
            "extra": "mean: 31.363964319989467 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.179327523896584,
            "unit": "iter/sec",
            "range": "stddev: 0.0059767129311352595",
            "extra": "mean: 847.9408643800048 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21857697329582196,
            "unit": "iter/sec",
            "range": "stddev: 0.016360592103835142",
            "extra": "mean: 4.575047338799959 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2109535166991513,
            "unit": "iter/sec",
            "range": "stddev: 0.03178568743359898",
            "extra": "mean: 4.740380798800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21149609765318475,
            "unit": "iter/sec",
            "range": "stddev: 0.012356305829820936",
            "extra": "mean: 4.728219627200019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21755898552385242,
            "unit": "iter/sec",
            "range": "stddev: 0.03956903659489505",
            "extra": "mean: 4.596454600999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21084271227598586,
            "unit": "iter/sec",
            "range": "stddev: 0.030167259092080134",
            "extra": "mean: 4.742872016800061 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20771292156235463,
            "unit": "iter/sec",
            "range": "stddev: 0.16086291932040186",
            "extra": "mean: 4.814336982400027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20407930435809163,
            "unit": "iter/sec",
            "range": "stddev: 0.08965978375065209",
            "extra": "mean: 4.9000559029999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20946675474891271,
            "unit": "iter/sec",
            "range": "stddev: 0.023896301111038323",
            "extra": "mean: 4.774027273199977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2073552267625697,
            "unit": "iter/sec",
            "range": "stddev: 0.11434528955581735",
            "extra": "mean: 4.822641877000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.69357544790226,
            "unit": "iter/sec",
            "range": "stddev: 0.000464273884067065",
            "extra": "mean: 28.82378039996638 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.84222106765075,
            "unit": "iter/sec",
            "range": "stddev: 0.00020481410108779565",
            "extra": "mean: 29.54888800002209 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.3387146463921,
            "unit": "iter/sec",
            "range": "stddev: 0.0007960480015748125",
            "extra": "mean: 29.99515760000122 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.42284056265198,
            "unit": "iter/sec",
            "range": "stddev: 0.0009396771264788687",
            "extra": "mean: 29.050478799968005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.15499350738515,
            "unit": "iter/sec",
            "range": "stddev: 0.00037085985297100743",
            "extra": "mean: 30.16136920000463 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.5704470433316,
            "unit": "iter/sec",
            "range": "stddev: 0.0004179336017586824",
            "extra": "mean: 30.702679599994553 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.191159003748176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067789331320647",
            "extra": "mean: 30.12850499999331 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.33359622429946,
            "unit": "iter/sec",
            "range": "stddev: 0.00035652225915700197",
            "extra": "mean: 29.999763399996482 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.04419049821138,
            "unit": "iter/sec",
            "range": "stddev: 0.0005361088537792777",
            "extra": "mean: 30.262505600012446 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.054989428295607774,
            "unit": "iter/sec",
            "range": "stddev: 0.14957614546808673",
            "extra": "mean: 18.185313631999954 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.055152204155955245,
            "unit": "iter/sec",
            "range": "stddev: 0.04076044642793051",
            "extra": "mean: 18.13164161439995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05536724273133581,
            "unit": "iter/sec",
            "range": "stddev: 0.04145805814737187",
            "extra": "mean: 18.06122087120002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05552993214635658,
            "unit": "iter/sec",
            "range": "stddev: 0.05314102211253583",
            "extra": "mean: 18.00830581539999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05541258073326409,
            "unit": "iter/sec",
            "range": "stddev: 0.07861312677702934",
            "extra": "mean: 18.046443366599988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05577388595766613,
            "unit": "iter/sec",
            "range": "stddev: 0.05319281798949587",
            "extra": "mean: 17.929537862200004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05573560795510655,
            "unit": "iter/sec",
            "range": "stddev: 0.02905548644345635",
            "extra": "mean: 17.94185147860003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05574017624427567,
            "unit": "iter/sec",
            "range": "stddev: 0.2028359038441132",
            "extra": "mean: 17.94038102100003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05600178590967624,
            "unit": "iter/sec",
            "range": "stddev: 0.04979011381121973",
            "extra": "mean: 17.856573388800008 sec\nrounds: 5"
          }
        ]
      }
    ],
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "bit.yangxm@gmail.com",
            "name": "Xiaomeng Yang",
            "username": "xiaomengy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a85f451a5676bd8b1fc5ceffb54ecf99314b834",
          "message": "[Feature] Add MaskedCategorical distribution (#1012)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-14T09:03:26+01:00",
          "tree_id": "31abbcd98badbea538a6e01f29eb59a32871613c",
          "url": "https://github.com/pytorch/rl/commit/9a85f451a5676bd8b1fc5ceffb54ecf99314b834"
        },
        "date": 1681461249494,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06647706043768302,
            "unit": "iter/sec",
            "range": "stddev: 0.056998099602831406",
            "extra": "mean: 15.042783080599975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11911260911909825,
            "unit": "iter/sec",
            "range": "stddev: 0.16568523269761967",
            "extra": "mean: 8.395416802599971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1213069988772361,
            "unit": "iter/sec",
            "range": "stddev: 0.0525001172993381",
            "extra": "mean: 8.243547439600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.133326889281962,
            "unit": "iter/sec",
            "range": "stddev: 0.0413132098291502",
            "extra": "mean: 882.3579582000093 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6417698979560437,
            "unit": "iter/sec",
            "range": "stddev: 0.05382744201888988",
            "extra": "mean: 1.5581908768000403 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.43089084466407496,
            "unit": "iter/sec",
            "range": "stddev: 0.041449118740727334",
            "extra": "mean: 2.3207733753999946 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5106773136364926,
            "unit": "iter/sec",
            "range": "stddev: 0.06407040396838695",
            "extra": "mean: 1.9581837165999787 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.51674095810415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003887741452282884",
            "extra": "mean: 35.06712079999488 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3270537436121599,
            "unit": "iter/sec",
            "range": "stddev: 0.011239241056168983",
            "extra": "mean: 753.5489838399917 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4034.886597933222,
            "unit": "iter/sec",
            "range": "stddev: 0.000034110598407779035",
            "extra": "mean: 247.83843999784946 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.27446492401458,
            "unit": "iter/sec",
            "range": "stddev: 0.00008993121232005154",
            "extra": "mean: 13.110547560002033 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.220383630948979,
            "unit": "iter/sec",
            "range": "stddev: 0.007686694805427824",
            "extra": "mean: 819.4144649600003 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.911988471810798,
            "unit": "iter/sec",
            "range": "stddev: 0.0004061827777202568",
            "extra": "mean: 31.336185799996205 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2139622430735757,
            "unit": "iter/sec",
            "range": "stddev: 0.0039990619856240415",
            "extra": "mean: 823.7488486199913 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.25443016782505473,
            "unit": "iter/sec",
            "range": "stddev: 0.03916187143470187",
            "extra": "mean: 3.930351532400027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.24346541316838113,
            "unit": "iter/sec",
            "range": "stddev: 0.05018386216612711",
            "extra": "mean: 4.1073595915999705 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.24307136152234937,
            "unit": "iter/sec",
            "range": "stddev: 0.026971336583009528",
            "extra": "mean: 4.114018178600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.25188759627652757,
            "unit": "iter/sec",
            "range": "stddev: 0.06365230273012333",
            "extra": "mean: 3.9700247839999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23853633040167785,
            "unit": "iter/sec",
            "range": "stddev: 0.040058704329854644",
            "extra": "mean: 4.192233519799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2418240173679891,
            "unit": "iter/sec",
            "range": "stddev: 0.03498656191089698",
            "extra": "mean: 4.135238554399985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.25290909956318053,
            "unit": "iter/sec",
            "range": "stddev: 0.030369045691131507",
            "extra": "mean: 3.9539897999999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2426947746131006,
            "unit": "iter/sec",
            "range": "stddev: 0.011157934834416745",
            "extra": "mean: 4.120401856999933 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.24213140440702124,
            "unit": "iter/sec",
            "range": "stddev: 0.05017216856346593",
            "extra": "mean: 4.129988848199991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 41.21682792406424,
            "unit": "iter/sec",
            "range": "stddev: 0.0003345189453813278",
            "extra": "mean: 24.261935000004087 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 38.53196926980218,
            "unit": "iter/sec",
            "range": "stddev: 0.000636095560010635",
            "extra": "mean: 25.952475799977037 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 38.55316242452747,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113095699437955",
            "extra": "mean: 25.938209400010237 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 41.72519215972934,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084317486526552",
            "extra": "mean: 23.96633660000589 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 38.392825640241306,
            "unit": "iter/sec",
            "range": "stddev: 0.000596708818320692",
            "extra": "mean: 26.046532999953342 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 38.592094627111706,
            "unit": "iter/sec",
            "range": "stddev: 0.00014975010332972236",
            "extra": "mean: 25.912042599975393 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 39.48524476287645,
            "unit": "iter/sec",
            "range": "stddev: 0.0009030952299717501",
            "extra": "mean: 25.3259161999722 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 38.81017745054624,
            "unit": "iter/sec",
            "range": "stddev: 0.0005750565663643749",
            "extra": "mean: 25.766437199990833 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 37.82163451807936,
            "unit": "iter/sec",
            "range": "stddev: 0.0003137195603811065",
            "extra": "mean: 26.439893799988567 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06957154788721187,
            "unit": "iter/sec",
            "range": "stddev: 0.06721211102396102",
            "extra": "mean: 14.373691981399952 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06986177536830532,
            "unit": "iter/sec",
            "range": "stddev: 0.03120523273891605",
            "extra": "mean: 14.31397920720001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06936205522706722,
            "unit": "iter/sec",
            "range": "stddev: 0.022889610746749084",
            "extra": "mean: 14.417104520999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06948518269313446,
            "unit": "iter/sec",
            "range": "stddev: 0.09092897626370382",
            "extra": "mean: 14.39155746939996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06957414111245387,
            "unit": "iter/sec",
            "range": "stddev: 0.07348804685378618",
            "extra": "mean: 14.37315623319996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06980481097544114,
            "unit": "iter/sec",
            "range": "stddev: 0.09545111742672119",
            "extra": "mean: 14.325660166200032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.07080844573035207,
            "unit": "iter/sec",
            "range": "stddev: 0.06239021885070673",
            "extra": "mean: 14.12260909959996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07071703463367535,
            "unit": "iter/sec",
            "range": "stddev: 0.08310037418309038",
            "extra": "mean: 14.140864434999958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.07073146891155083,
            "unit": "iter/sec",
            "range": "stddev: 0.08372922429642275",
            "extra": "mean: 14.137978687399983 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}