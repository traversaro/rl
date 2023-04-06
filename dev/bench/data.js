window.BENCHMARK_DATA = {
  "lastUpdate": 1680816710178,
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
    ],
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
          "id": "b4873b7b4863948e9e13d7037ee83dba4593c711",
          "message": "[Benchmark] Fix adv benchmark (#1030)",
          "timestamp": "2023-04-06T21:47:36+01:00",
          "tree_id": "89b3b32a99c73fe498d2abc0bf55ca1c91bd695d",
          "url": "https://github.com/pytorch/rl/commit/b4873b7b4863948e9e13d7037ee83dba4593c711"
        },
        "date": 1680816661764,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0606476292542089,
            "unit": "iter/sec",
            "range": "stddev: 0.04951539677727663",
            "extra": "mean: 16.488690692399995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11113107529017495,
            "unit": "iter/sec",
            "range": "stddev: 0.08534856266134389",
            "extra": "mean: 8.998383192000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11259653674858874,
            "unit": "iter/sec",
            "range": "stddev: 0.10009361713245894",
            "extra": "mean: 8.881267833599987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0642509117727204,
            "unit": "iter/sec",
            "range": "stddev: 0.04501979450100316",
            "extra": "mean: 939.6280415999854 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6039844323428084,
            "unit": "iter/sec",
            "range": "stddev: 0.04173948296715246",
            "extra": "mean: 1.6556718128000056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4002687064987771,
            "unit": "iter/sec",
            "range": "stddev: 0.037197066317007865",
            "extra": "mean: 2.4983217118000085 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46937827123552384,
            "unit": "iter/sec",
            "range": "stddev: 0.04190934230772928",
            "extra": "mean: 2.1304778283999894 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 29.355929020889512,
            "unit": "iter/sec",
            "range": "stddev: 0.00036890699049090165",
            "extra": "mean: 34.06466881999904 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2701481488274462,
            "unit": "iter/sec",
            "range": "stddev: 0.006258941002483752",
            "extra": "mean: 787.309733060008 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3352.7848497896834,
            "unit": "iter/sec",
            "range": "stddev: 0.00005295487819932749",
            "extra": "mean: 298.25952001147016 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.86672486279187,
            "unit": "iter/sec",
            "range": "stddev: 0.0009629377519393839",
            "extra": "mean: 13.009530479996556 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.16369490748022,
            "unit": "iter/sec",
            "range": "stddev: 0.005593316898174442",
            "extra": "mean: 859.3317660599951 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.7742649456783,
            "unit": "iter/sec",
            "range": "stddev: 0.0003215954048443424",
            "extra": "mean: 31.472010499994667 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1587936473819969,
            "unit": "iter/sec",
            "range": "stddev: 0.008948323347144705",
            "extra": "mean: 862.9664153399949 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2051546173017566,
            "unit": "iter/sec",
            "range": "stddev: 0.13316043571352093",
            "extra": "mean: 4.87437237900001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20809123184396647,
            "unit": "iter/sec",
            "range": "stddev: 0.07044955759999186",
            "extra": "mean: 4.805584507999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20524319487001944,
            "unit": "iter/sec",
            "range": "stddev: 0.04382246504886445",
            "extra": "mean: 4.8722687279999715 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2071899269737275,
            "unit": "iter/sec",
            "range": "stddev: 0.03563789579557999",
            "extra": "mean: 4.826489465999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20446855202427222,
            "unit": "iter/sec",
            "range": "stddev: 0.024996904552997336",
            "extra": "mean: 4.89072764539992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21189795632270234,
            "unit": "iter/sec",
            "range": "stddev: 0.11714532248558657",
            "extra": "mean: 4.719252688200004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22453743713717617,
            "unit": "iter/sec",
            "range": "stddev: 0.07939078916142964",
            "extra": "mean: 4.45360031160003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21353843863678548,
            "unit": "iter/sec",
            "range": "stddev: 0.059011760518304285",
            "extra": "mean: 4.682997620400011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2171381862696843,
            "unit": "iter/sec",
            "range": "stddev: 0.020309670047616933",
            "extra": "mean: 4.605362221999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.75960859514135,
            "unit": "iter/sec",
            "range": "stddev: 0.00043358012692059814",
            "extra": "mean: 28.76902359998894 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.22307979182599,
            "unit": "iter/sec",
            "range": "stddev: 0.00026096645392395605",
            "extra": "mean: 29.220046999944316 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.78137434999858,
            "unit": "iter/sec",
            "range": "stddev: 0.00016023398284809663",
            "extra": "mean: 29.602111200074432 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.44878520097753,
            "unit": "iter/sec",
            "range": "stddev: 0.0004896964381583517",
            "extra": "mean: 28.209711399995285 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.06381550619903,
            "unit": "iter/sec",
            "range": "stddev: 0.00015087253617558695",
            "extra": "mean: 29.35666440002933 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.794854567090006,
            "unit": "iter/sec",
            "range": "stddev: 0.0002193530647802227",
            "extra": "mean: 29.59030340002755 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 35.14503628969954,
            "unit": "iter/sec",
            "range": "stddev: 0.0004014237539964852",
            "extra": "mean: 28.45352020003702 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.37319182624183,
            "unit": "iter/sec",
            "range": "stddev: 0.0003835391493005848",
            "extra": "mean: 29.964170200037188 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.53243394831194,
            "unit": "iter/sec",
            "range": "stddev: 0.00032818568467445194",
            "extra": "mean: 29.821873399987453 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.028263132433254408,
            "unit": "iter/sec",
            "range": "stddev: 0.23185187729949555",
            "extra": "mean: 35.38178233999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.02840506096220927,
            "unit": "iter/sec",
            "range": "stddev: 0.048522681486446985",
            "extra": "mean: 35.204993973800036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.02852170002177736,
            "unit": "iter/sec",
            "range": "stddev: 0.13379137328565383",
            "extra": "mean: 35.06102368499997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.02846014572491855,
            "unit": "iter/sec",
            "range": "stddev: 0.0807471946325105",
            "extra": "mean: 35.13685452160003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.02828845422497531,
            "unit": "iter/sec",
            "range": "stddev: 0.19133599718843197",
            "extra": "mean: 35.350111110600025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.028577554193685146,
            "unit": "iter/sec",
            "range": "stddev: 0.0831264771037357",
            "extra": "mean: 34.99249772120011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.028520482292285213,
            "unit": "iter/sec",
            "range": "stddev: 0.13302862822830275",
            "extra": "mean: 35.0625206738001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.02856201923641943,
            "unit": "iter/sec",
            "range": "stddev: 0.05459157920993075",
            "extra": "mean: 35.011530232599945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.028576071292746554,
            "unit": "iter/sec",
            "range": "stddev: 0.12627127207685046",
            "extra": "mean: 34.9943135904 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}