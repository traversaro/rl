window.BENCHMARK_DATA = {
  "lastUpdate": 1681376033267,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21b631aa894131f34bd55fe3af84df072c65f9db",
          "message": "[Refactor] Improve distributed collectors (#1044)",
          "timestamp": "2023-04-13T09:23:09+01:00",
          "tree_id": "bf838c6039b37f8a5b371353fd63bdc25de39aa2",
          "url": "https://github.com/pytorch/rl/commit/21b631aa894131f34bd55fe3af84df072c65f9db"
        },
        "date": 1681375977273,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0600075392560207,
            "unit": "iter/sec",
            "range": "stddev: 0.05462209545666584",
            "extra": "mean: 16.66457269199999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11148411309841531,
            "unit": "iter/sec",
            "range": "stddev: 0.04933229645736481",
            "extra": "mean: 8.969887925800027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1116918127505151,
            "unit": "iter/sec",
            "range": "stddev: 0.03498390736843174",
            "extra": "mean: 8.953207718400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0487589303962175,
            "unit": "iter/sec",
            "range": "stddev: 0.037012333484813455",
            "extra": "mean: 953.5079712000197 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.601725047123472,
            "unit": "iter/sec",
            "range": "stddev: 0.006635496130326153",
            "extra": "mean: 1.661888606399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4001409781495901,
            "unit": "iter/sec",
            "range": "stddev: 0.0025256316146750456",
            "extra": "mean: 2.4991191970000046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46983503008841504,
            "unit": "iter/sec",
            "range": "stddev: 0.04921323035056628",
            "extra": "mean: 2.1284066448000205 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.523512617083476,
            "unit": "iter/sec",
            "range": "stddev: 0.00023600275130713556",
            "extra": "mean: 36.33257186000719 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.4121307786112773,
            "unit": "iter/sec",
            "range": "stddev: 0.003214185116413145",
            "extra": "mean: 708.1497090399967 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3349.780083723298,
            "unit": "iter/sec",
            "range": "stddev: 0.00003010002769445469",
            "extra": "mean: 298.5270599879186 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.20228536753487,
            "unit": "iter/sec",
            "range": "stddev: 0.00011847328072663613",
            "extra": "mean: 13.122965999993994 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.283427552588481,
            "unit": "iter/sec",
            "range": "stddev: 0.016135436060865094",
            "extra": "mean: 779.1635749000011 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.250457760610782,
            "unit": "iter/sec",
            "range": "stddev: 0.0001521532129113056",
            "extra": "mean: 31.999531260000825 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2748480980303167,
            "unit": "iter/sec",
            "range": "stddev: 0.007286773090191337",
            "extra": "mean: 784.4071788199972 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21658257654146745,
            "unit": "iter/sec",
            "range": "stddev: 0.046529489893906095",
            "extra": "mean: 4.617176579799979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2129779143813214,
            "unit": "iter/sec",
            "range": "stddev: 0.049021908898577535",
            "extra": "mean: 4.695322530999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21382479334735083,
            "unit": "iter/sec",
            "range": "stddev: 0.013335422685262204",
            "extra": "mean: 4.676726137999981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2185092658985513,
            "unit": "iter/sec",
            "range": "stddev: 0.027296652469714237",
            "extra": "mean: 4.5764649654000324 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2113847978182552,
            "unit": "iter/sec",
            "range": "stddev: 0.018387634689172674",
            "extra": "mean: 4.730709163200004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21139371165630375,
            "unit": "iter/sec",
            "range": "stddev: 0.10125099619768965",
            "extra": "mean: 4.730509683399942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21850409303416288,
            "unit": "iter/sec",
            "range": "stddev: 0.017093633215279434",
            "extra": "mean: 4.576573308599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21387945545734613,
            "unit": "iter/sec",
            "range": "stddev: 0.029605378179930374",
            "extra": "mean: 4.675530886599949 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21127342008364478,
            "unit": "iter/sec",
            "range": "stddev: 0.12792595754999386",
            "extra": "mean: 4.733203067400018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.19838871352378,
            "unit": "iter/sec",
            "range": "stddev: 0.0003766088682505944",
            "extra": "mean: 28.41039139998429 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.366127804181886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002735772548561628",
            "extra": "mean: 29.09841939999751 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.003002057064386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005136458871290343",
            "extra": "mean: 29.409167999983765 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.01052367330798,
            "unit": "iter/sec",
            "range": "stddev: 0.0003251430613375834",
            "extra": "mean: 28.56284039996808 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.944720750700526,
            "unit": "iter/sec",
            "range": "stddev: 0.000417402084741798",
            "extra": "mean: 29.459661999999298 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.96093932244314,
            "unit": "iter/sec",
            "range": "stddev: 0.0015508568798194705",
            "extra": "mean: 30.338941199988767 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.66348182291269,
            "unit": "iter/sec",
            "range": "stddev: 0.00019306305403408056",
            "extra": "mean: 28.848804200015365 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.00724840016358,
            "unit": "iter/sec",
            "range": "stddev: 0.00037775907928391204",
            "extra": "mean: 29.405495799983328 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.994201459479505,
            "unit": "iter/sec",
            "range": "stddev: 0.0004780519036733048",
            "extra": "mean: 29.41678160000265 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05410025944158007,
            "unit": "iter/sec",
            "range": "stddev: 0.12972891539517445",
            "extra": "mean: 18.484199712200006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05407789100085812,
            "unit": "iter/sec",
            "range": "stddev: 0.013641694441889979",
            "extra": "mean: 18.491845401000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.054378336134692236,
            "unit": "iter/sec",
            "range": "stddev: 0.059596543321497046",
            "extra": "mean: 18.389676313799917 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05515331588225564,
            "unit": "iter/sec",
            "range": "stddev: 0.030657175447252907",
            "extra": "mean: 18.131276134600057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.055310107526107995,
            "unit": "iter/sec",
            "range": "stddev: 0.11292932142034916",
            "extra": "mean: 18.07987806799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.055723650335339325,
            "unit": "iter/sec",
            "range": "stddev: 0.08631758180047792",
            "extra": "mean: 17.94570158239994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05570778481971972,
            "unit": "iter/sec",
            "range": "stddev: 0.03456651210980617",
            "extra": "mean: 17.950812498399955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05556110370772405,
            "unit": "iter/sec",
            "range": "stddev: 0.028453601873312962",
            "extra": "mean: 17.99820257820006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05538838745228087,
            "unit": "iter/sec",
            "range": "stddev: 0.0796202119186332",
            "extra": "mean: 18.054325933600012 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}