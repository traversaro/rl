window.BENCHMARK_DATA = {
  "lastUpdate": 1681376073486,
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
    ],
    "GPU Benchmark Results": [
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
        "date": 1681376015339,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06590474168703998,
            "unit": "iter/sec",
            "range": "stddev: 0.0392873379664597",
            "extra": "mean: 15.173415059400009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11804690354828071,
            "unit": "iter/sec",
            "range": "stddev: 0.20035408061159662",
            "extra": "mean: 8.471209069799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.12000116077410833,
            "unit": "iter/sec",
            "range": "stddev: 0.016075597422929078",
            "extra": "mean: 8.33325272479999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1297440558944127,
            "unit": "iter/sec",
            "range": "stddev: 0.04246510607689222",
            "extra": "mean: 885.1562393999984 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6423422395377114,
            "unit": "iter/sec",
            "range": "stddev: 0.05095170183630595",
            "extra": "mean: 1.55680249320003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4280383485970217,
            "unit": "iter/sec",
            "range": "stddev: 0.04053143107356606",
            "extra": "mean: 2.3362392722000096 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5092930991402003,
            "unit": "iter/sec",
            "range": "stddev: 0.04997877410825851",
            "extra": "mean: 1.9635058902000082 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.638054254735703,
            "unit": "iter/sec",
            "range": "stddev: 0.0012597369124794624",
            "extra": "mean: 36.18199713999957 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3974519991792038,
            "unit": "iter/sec",
            "range": "stddev: 0.01278298466500063",
            "extra": "mean: 715.5880850199878 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3430.3996943622383,
            "unit": "iter/sec",
            "range": "stddev: 0.00002891148710885471",
            "extra": "mean: 291.511220002576 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.99668816769847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008032658159647389",
            "extra": "mean: 13.158468139997694 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.296441593595429,
            "unit": "iter/sec",
            "range": "stddev: 0.016986563116272904",
            "extra": "mean: 771.3421143999972 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.839748132919315,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463885609019162",
            "extra": "mean: 31.407283620001184 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2866684422691133,
            "unit": "iter/sec",
            "range": "stddev: 0.05146890512648801",
            "extra": "mean: 777.2010000000023 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2487473934964577,
            "unit": "iter/sec",
            "range": "stddev: 0.0333067954156595",
            "extra": "mean: 4.020142627199993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.24368189376359803,
            "unit": "iter/sec",
            "range": "stddev: 0.01759007713496488",
            "extra": "mean: 4.103710721200014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.24174885335066268,
            "unit": "iter/sec",
            "range": "stddev: 0.033572300629805193",
            "extra": "mean: 4.136524273600071 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24894564803991362,
            "unit": "iter/sec",
            "range": "stddev: 0.021726106981831167",
            "extra": "mean: 4.0169410787999364 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.24242661706495114,
            "unit": "iter/sec",
            "range": "stddev: 0.024960615462175564",
            "extra": "mean: 4.1249595943999795 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.24196478592752407,
            "unit": "iter/sec",
            "range": "stddev: 0.030182214783423356",
            "extra": "mean: 4.132832784600032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2490869032951651,
            "unit": "iter/sec",
            "range": "stddev: 0.028489234009187993",
            "extra": "mean: 4.014663102600025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.24234977417265968,
            "unit": "iter/sec",
            "range": "stddev: 0.016161860244305985",
            "extra": "mean: 4.126267513199991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2400184337421371,
            "unit": "iter/sec",
            "range": "stddev: 0.015429946868889367",
            "extra": "mean: 4.166346660999989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 39.54479887117657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003900216704776409",
            "extra": "mean: 25.287775599963425 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 38.25794059044576,
            "unit": "iter/sec",
            "range": "stddev: 0.00024718781163209015",
            "extra": "mean: 26.13836460004677 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 38.44186953101896,
            "unit": "iter/sec",
            "range": "stddev: 0.00035291022964179485",
            "extra": "mean: 26.013303000081578 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 39.49017333236934,
            "unit": "iter/sec",
            "range": "stddev: 0.00020364751946250624",
            "extra": "mean: 25.32275540002047 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 38.46686079570744,
            "unit": "iter/sec",
            "range": "stddev: 0.00040702537630304524",
            "extra": "mean: 25.99640259991247 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 38.59349496459735,
            "unit": "iter/sec",
            "range": "stddev: 0.00023506288647269188",
            "extra": "mean: 25.911102399959418 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 39.840456501516876,
            "unit": "iter/sec",
            "range": "stddev: 0.00031736324508175874",
            "extra": "mean: 25.10011399999712 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 38.40752566273496,
            "unit": "iter/sec",
            "range": "stddev: 0.0004795871563357118",
            "extra": "mean: 26.03656400001455 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 38.81255201669189,
            "unit": "iter/sec",
            "range": "stddev: 0.00013682539656125094",
            "extra": "mean: 25.76486079992719 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06922954908574137,
            "unit": "iter/sec",
            "range": "stddev: 0.08700018570391678",
            "extra": "mean: 14.444699022399982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06909594574876862,
            "unit": "iter/sec",
            "range": "stddev: 0.025826947234406445",
            "extra": "mean: 14.472629170399932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0694406170290526,
            "unit": "iter/sec",
            "range": "stddev: 0.03863131748242531",
            "extra": "mean: 14.400793696600067 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.0696704585393759,
            "unit": "iter/sec",
            "range": "stddev: 0.08720421185503308",
            "extra": "mean: 14.353285753599948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06998067397821818,
            "unit": "iter/sec",
            "range": "stddev: 0.08147581093739209",
            "extra": "mean: 14.289659460999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.07035384210727613,
            "unit": "iter/sec",
            "range": "stddev: 0.03145834081207893",
            "extra": "mean: 14.2138648017999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.07080174569647979,
            "unit": "iter/sec",
            "range": "stddev: 0.05662423925029194",
            "extra": "mean: 14.123945534999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07165295414896494,
            "unit": "iter/sec",
            "range": "stddev: 0.08059504230522885",
            "extra": "mean: 13.956158707999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.07143973985722461,
            "unit": "iter/sec",
            "range": "stddev: 0.04141508256953809",
            "extra": "mean: 13.997811330200012 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}