window.BENCHMARK_DATA = {
  "lastUpdate": 1681218085334,
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
          "id": "4f01f1b1af3927c04a2171cdd9b220f5a440b5f4",
          "message": "[Doc] DDPG and DQN refactoring -- Doc cleaning (#1036)",
          "timestamp": "2023-04-11T13:33:09+01:00",
          "tree_id": "d58121266177aae260456817ce232096cd3b1105",
          "url": "https://github.com/pytorch/rl/commit/4f01f1b1af3927c04a2171cdd9b220f5a440b5f4"
        },
        "date": 1681218033108,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07138006634649878,
            "unit": "iter/sec",
            "range": "stddev: 0.03075119482796909",
            "extra": "mean: 14.00951345640001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.12876929107084753,
            "unit": "iter/sec",
            "range": "stddev: 0.0748354884174854",
            "extra": "mean: 7.765826709800012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13153903148239315,
            "unit": "iter/sec",
            "range": "stddev: 0.045528990041915574",
            "extra": "mean: 7.602306241199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.267479915326258,
            "unit": "iter/sec",
            "range": "stddev: 0.03149874162925755",
            "extra": "mean: 788.9671370000315 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.729009927497117,
            "unit": "iter/sec",
            "range": "stddev: 0.026625839624056246",
            "extra": "mean: 1.3717234323999719 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4605372568579228,
            "unit": "iter/sec",
            "range": "stddev: 0.023711549398278537",
            "extra": "mean: 2.17137698439999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5167711460789249,
            "unit": "iter/sec",
            "range": "stddev: 0.0525472354994717",
            "extra": "mean: 1.9350925599999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.85482156819943,
            "unit": "iter/sec",
            "range": "stddev: 0.00031357292467773865",
            "extra": "mean: 34.656253120001566 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5523441880721958,
            "unit": "iter/sec",
            "range": "stddev: 0.0052708362089882894",
            "extra": "mean: 644.1870351200055 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4419.3218761326925,
            "unit": "iter/sec",
            "range": "stddev: 0.00002730689982278471",
            "extra": "mean: 226.27906000707299 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.43018889901488,
            "unit": "iter/sec",
            "range": "stddev: 0.00009153211312780408",
            "extra": "mean: 12.750192420007807 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.4171735331910948,
            "unit": "iter/sec",
            "range": "stddev: 0.0059492763552989585",
            "extra": "mean: 705.6298869400052 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.11612493986589,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461670375189971",
            "extra": "mean: 31.13700678000214 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.408829708506312,
            "unit": "iter/sec",
            "range": "stddev: 0.006125594555817754",
            "extra": "mean: 709.8089953399926 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22796581559658166,
            "unit": "iter/sec",
            "range": "stddev: 0.05098276076608882",
            "extra": "mean: 4.386622605599973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.22380158721824087,
            "unit": "iter/sec",
            "range": "stddev: 0.031067268355748075",
            "extra": "mean: 4.468243556400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.22565020046060655,
            "unit": "iter/sec",
            "range": "stddev: 0.03197124292150383",
            "extra": "mean: 4.4316379864000055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23103516306858718,
            "unit": "iter/sec",
            "range": "stddev: 0.03036167597581424",
            "extra": "mean: 4.328345463599976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2255834390449824,
            "unit": "iter/sec",
            "range": "stddev: 0.02783354045914101",
            "extra": "mean: 4.432949529599978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2269527331518326,
            "unit": "iter/sec",
            "range": "stddev: 0.03198146767170763",
            "extra": "mean: 4.406203821000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.23257429463217028,
            "unit": "iter/sec",
            "range": "stddev: 0.05216944546553238",
            "extra": "mean: 4.299701313000037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.22603741444239722,
            "unit": "iter/sec",
            "range": "stddev: 0.01971236289847707",
            "extra": "mean: 4.424046357399993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.22632516584728343,
            "unit": "iter/sec",
            "range": "stddev: 0.025904835769563015",
            "extra": "mean: 4.418421593799986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.05104669681591,
            "unit": "iter/sec",
            "range": "stddev: 0.00020974937376130846",
            "extra": "mean: 26.28048599997328 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.95483497582514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005370407944855139",
            "extra": "mean: 27.060058600022785 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 36.50395011432354,
            "unit": "iter/sec",
            "range": "stddev: 0.000791068950749897",
            "extra": "mean: 27.39429560001554 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.46134560419267,
            "unit": "iter/sec",
            "range": "stddev: 0.0002386023082157092",
            "extra": "mean: 26.694182599999294 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.7286229809376,
            "unit": "iter/sec",
            "range": "stddev: 0.00015870648039604103",
            "extra": "mean: 27.22672180002519 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.29489567893831,
            "unit": "iter/sec",
            "range": "stddev: 0.00043114022786085084",
            "extra": "mean: 27.552083600016886 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.890681320233114,
            "unit": "iter/sec",
            "range": "stddev: 0.00033654530954892295",
            "extra": "mean: 27.10711659997287 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.36965335907398,
            "unit": "iter/sec",
            "range": "stddev: 0.00047649114282743695",
            "extra": "mean: 27.495450400010668 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 36.25477474475782,
            "unit": "iter/sec",
            "range": "stddev: 0.00019909564347576236",
            "extra": "mean: 27.582573800009413 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06216987927923399,
            "unit": "iter/sec",
            "range": "stddev: 0.028855833901406207",
            "extra": "mean: 16.08495965559998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06197570520889488,
            "unit": "iter/sec",
            "range": "stddev: 0.02472967066972299",
            "extra": "mean: 16.135354920600047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06209587220005591,
            "unit": "iter/sec",
            "range": "stddev: 0.009350132888972238",
            "extra": "mean: 16.10413002620003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.061925540315868895,
            "unit": "iter/sec",
            "range": "stddev: 0.03774287232455379",
            "extra": "mean: 16.148425914400015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06158083112996036,
            "unit": "iter/sec",
            "range": "stddev: 0.07844620679071183",
            "extra": "mean: 16.238819477600053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06216495993738085,
            "unit": "iter/sec",
            "range": "stddev: 0.03381072048289384",
            "extra": "mean: 16.086232517600045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.062405823530065754,
            "unit": "iter/sec",
            "range": "stddev: 0.022351368139277687",
            "extra": "mean: 16.024145559399948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06251564156668306,
            "unit": "iter/sec",
            "range": "stddev: 0.009516901868238547",
            "extra": "mean: 15.995996760800063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.062401517980484496,
            "unit": "iter/sec",
            "range": "stddev: 0.037627219646432494",
            "extra": "mean: 16.02525118560002 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}