window.BENCHMARK_DATA = {
  "lastUpdate": 1680816490344,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
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
          "id": "b4873b7b4863948e9e13d7037ee83dba4593c711",
          "message": "[Benchmark] Fix adv benchmark (#1030)",
          "timestamp": "2023-04-06T21:47:36+01:00",
          "tree_id": "89b3b32a99c73fe498d2abc0bf55ca1c91bd695d",
          "url": "https://github.com/pytorch/rl/commit/b4873b7b4863948e9e13d7037ee83dba4593c711"
        },
        "date": 1680816438989,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0766809939516378,
            "unit": "iter/sec",
            "range": "stddev: 0.1167722332209277",
            "extra": "mean: 13.041041181999981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.13775418507474213,
            "unit": "iter/sec",
            "range": "stddev: 0.09315256452143432",
            "extra": "mean: 7.2593075807999865 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.14007618693716303,
            "unit": "iter/sec",
            "range": "stddev: 0.03696107620826443",
            "extra": "mean: 7.138972168399983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.337723117404031,
            "unit": "iter/sec",
            "range": "stddev: 0.025420386605880266",
            "extra": "mean: 747.5388494000072 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7685715340918964,
            "unit": "iter/sec",
            "range": "stddev: 0.031152151476577752",
            "extra": "mean: 1.3011150630000201 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4885213548587016,
            "unit": "iter/sec",
            "range": "stddev: 0.023999472381904356",
            "extra": "mean: 2.046993422200012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5758798695647895,
            "unit": "iter/sec",
            "range": "stddev: 0.025141655731102542",
            "extra": "mean: 1.7364732696000147 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.028992512678975,
            "unit": "iter/sec",
            "range": "stddev: 0.0004629834018350447",
            "extra": "mean: 35.6773437199945 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.556883158143235,
            "unit": "iter/sec",
            "range": "stddev: 0.01711992748536491",
            "extra": "mean: 642.3089586200012 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4298.188365244731,
            "unit": "iter/sec",
            "range": "stddev: 0.00001983712633922438",
            "extra": "mean: 232.6561599966226 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 73.917738713737,
            "unit": "iter/sec",
            "range": "stddev: 0.00011074919366284542",
            "extra": "mean: 13.528552380000747 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.4377476288525906,
            "unit": "iter/sec",
            "range": "stddev: 0.0045194013037906456",
            "extra": "mean: 695.5323590399939 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.800731406985353,
            "unit": "iter/sec",
            "range": "stddev: 0.0016036183924836459",
            "extra": "mean: 32.46676147999551 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.4393267272606356,
            "unit": "iter/sec",
            "range": "stddev: 0.0034801879996522673",
            "extra": "mean: 694.7692841799903 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.28294811835980144,
            "unit": "iter/sec",
            "range": "stddev: 0.016500963965482028",
            "extra": "mean: 3.5342168232000177 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.267521379110255,
            "unit": "iter/sec",
            "range": "stddev: 0.010416917246503087",
            "extra": "mean: 3.738019007400021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.26848853522989885,
            "unit": "iter/sec",
            "range": "stddev: 0.02672094922979998",
            "extra": "mean: 3.7245538217999865 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2847709861511778,
            "unit": "iter/sec",
            "range": "stddev: 0.00481749520874547",
            "extra": "mean: 3.511593696800014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.26933803452429367,
            "unit": "iter/sec",
            "range": "stddev: 0.029412340383341447",
            "extra": "mean: 3.712806480400013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.26886700373186717,
            "unit": "iter/sec",
            "range": "stddev: 0.01006452443180006",
            "extra": "mean: 3.7193109831999664 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.28387398335101105,
            "unit": "iter/sec",
            "range": "stddev: 0.019032276457537224",
            "extra": "mean: 3.5226898506 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.26812536148315497,
            "unit": "iter/sec",
            "range": "stddev: 0.013410401976536396",
            "extra": "mean: 3.729598701400073 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2685252422767109,
            "unit": "iter/sec",
            "range": "stddev: 0.017715203882745018",
            "extra": "mean: 3.724044680199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 43.972975967967756,
            "unit": "iter/sec",
            "range": "stddev: 0.00048452469461894506",
            "extra": "mean: 22.74123999995936 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 41.74342133914318,
            "unit": "iter/sec",
            "range": "stddev: 0.00025683588106512495",
            "extra": "mean: 23.955870599957052 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 41.47840826944164,
            "unit": "iter/sec",
            "range": "stddev: 0.0003166043914459226",
            "extra": "mean: 24.108928999976342 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 43.7937299554171,
            "unit": "iter/sec",
            "range": "stddev: 0.0005951908295621143",
            "extra": "mean: 22.83431899995776 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 41.51674003117271,
            "unit": "iter/sec",
            "range": "stddev: 0.00016727151053563366",
            "extra": "mean: 24.086669600001187 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 41.69607977622136,
            "unit": "iter/sec",
            "range": "stddev: 0.00033063390863040826",
            "extra": "mean: 23.983070000031148 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 43.65977429308455,
            "unit": "iter/sec",
            "range": "stddev: 0.00041533254872416547",
            "extra": "mean: 22.904378600014752 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 41.7434213389847,
            "unit": "iter/sec",
            "range": "stddev: 0.0003167140846006022",
            "extra": "mean: 23.955870600048 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 41.64391902287282,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676448774938236",
            "extra": "mean: 24.013109800034727 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.036047729746536646,
            "unit": "iter/sec",
            "range": "stddev: 0.04441693069600573",
            "extra": "mean: 27.74099803320005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.035948899303142254,
            "unit": "iter/sec",
            "range": "stddev: 0.13798420941740175",
            "extra": "mean: 27.817263376199982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03589662415562373,
            "unit": "iter/sec",
            "range": "stddev: 0.1128103257542082",
            "extra": "mean: 27.857772799600024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03662872949451244,
            "unit": "iter/sec",
            "range": "stddev: 0.23376078176441803",
            "extra": "mean: 27.300974229800023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03681969725433738,
            "unit": "iter/sec",
            "range": "stddev: 0.11753383526773292",
            "extra": "mean: 27.159375947399987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.036820448542691855,
            "unit": "iter/sec",
            "range": "stddev: 0.0311051386268329",
            "extra": "mean: 27.158821784599922 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.036804289987915025,
            "unit": "iter/sec",
            "range": "stddev: 0.06210081232959665",
            "extra": "mean: 27.17074559320008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03664978172679183,
            "unit": "iter/sec",
            "range": "stddev: 0.20787228151475787",
            "extra": "mean: 27.285292104999826 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03687320096827357,
            "unit": "iter/sec",
            "range": "stddev: 0.08465020094996295",
            "extra": "mean: 27.119967177799936 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}