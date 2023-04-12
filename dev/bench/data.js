window.BENCHMARK_DATA = {
  "lastUpdate": 1681300879963,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "50365897+FrankTianTT@users.noreply.github.com",
            "name": "Honglong Tian",
            "username": "FrankTianTT"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9df4529d28445eeb115283f4b005b8d447599339",
          "message": "[Minor] Fix a typo (#1046)",
          "timestamp": "2023-04-12T12:26:10+01:00",
          "tree_id": "b71a59137e77e4b9fe06abdccfd39502f670e3f0",
          "url": "https://github.com/pytorch/rl/commit/9df4529d28445eeb115283f4b005b8d447599339"
        },
        "date": 1681300803168,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05181099782971989,
            "unit": "iter/sec",
            "range": "stddev: 0.04431327392288558",
            "extra": "mean: 19.30092146239999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09464448134643495,
            "unit": "iter/sec",
            "range": "stddev: 0.08616597591576153",
            "extra": "mean: 10.565856411000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09590569045644137,
            "unit": "iter/sec",
            "range": "stddev: 0.052390770058213375",
            "extra": "mean: 10.426909969999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9116618723162039,
            "unit": "iter/sec",
            "range": "stddev: 0.04293029917249997",
            "extra": "mean: 1.096897907399989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5191935022460487,
            "unit": "iter/sec",
            "range": "stddev: 0.044777955522462824",
            "extra": "mean: 1.9260641662000126 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.34738305476273856,
            "unit": "iter/sec",
            "range": "stddev: 0.005014287597779248",
            "extra": "mean: 2.8786666081999783 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3966128848740775,
            "unit": "iter/sec",
            "range": "stddev: 0.06949854971076776",
            "extra": "mean: 2.5213502590000187 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.627239686638468,
            "unit": "iter/sec",
            "range": "stddev: 0.001110376710035226",
            "extra": "mean: 40.60544391999201 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2228780747700165,
            "unit": "iter/sec",
            "range": "stddev: 0.008266968269129956",
            "extra": "mean: 817.7430118600068 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2635.504878743393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003864092777940424",
            "extra": "mean: 379.4339399883029 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 66.02525482109274,
            "unit": "iter/sec",
            "range": "stddev: 0.00012911461900071621",
            "extra": "mean: 15.145719659994938 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.114466768172552,
            "unit": "iter/sec",
            "range": "stddev: 0.07176909742636743",
            "extra": "mean: 897.290101919998 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 27.770183558250277,
            "unit": "iter/sec",
            "range": "stddev: 0.00017227767089258484",
            "extra": "mean: 36.009844799996245 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1247978611984961,
            "unit": "iter/sec",
            "range": "stddev: 0.004727812359948562",
            "extra": "mean: 889.0486321999924 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18509336299338697,
            "unit": "iter/sec",
            "range": "stddev: 0.05121924434455465",
            "extra": "mean: 5.402678863400024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1817848148254101,
            "unit": "iter/sec",
            "range": "stddev: 0.028225191102150413",
            "extra": "mean: 5.501009536799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1810241710122891,
            "unit": "iter/sec",
            "range": "stddev: 0.021334179725256266",
            "extra": "mean: 5.524124178599959 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18308855752685613,
            "unit": "iter/sec",
            "range": "stddev: 0.05767394025614943",
            "extra": "mean: 5.461837776799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18022700361683855,
            "unit": "iter/sec",
            "range": "stddev: 0.01683094872729222",
            "extra": "mean: 5.548558095800081 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18025479444056314,
            "unit": "iter/sec",
            "range": "stddev: 0.04343436265326361",
            "extra": "mean: 5.547702645600021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.18615048329112477,
            "unit": "iter/sec",
            "range": "stddev: 0.025736022960193315",
            "extra": "mean: 5.371997871399981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18273021407828796,
            "unit": "iter/sec",
            "range": "stddev: 0.029326434924460444",
            "extra": "mean: 5.472548724599892 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18294158112410971,
            "unit": "iter/sec",
            "range": "stddev: 0.037683875255024965",
            "extra": "mean: 5.466225851199942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.07540921640027,
            "unit": "iter/sec",
            "range": "stddev: 0.00039541805305894165",
            "extra": "mean: 33.249755399992864 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.657527213264988,
            "unit": "iter/sec",
            "range": "stddev: 0.00027684049728597177",
            "extra": "mean: 33.718252800008486 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.786107570041665,
            "unit": "iter/sec",
            "range": "stddev: 0.0005881306520799049",
            "extra": "mean: 33.57269819994144 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.624201523693593,
            "unit": "iter/sec",
            "range": "stddev: 0.000378853465531805",
            "extra": "mean: 32.653912600017065 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 29.99948496883184,
            "unit": "iter/sec",
            "range": "stddev: 0.0003206048641207876",
            "extra": "mean: 33.33390560001135 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 29.584501474959236,
            "unit": "iter/sec",
            "range": "stddev: 0.000418294127874543",
            "extra": "mean: 33.80148219994226 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.094570140235046,
            "unit": "iter/sec",
            "range": "stddev: 0.0011000186249244068",
            "extra": "mean: 33.22858559999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 29.912257298842377,
            "unit": "iter/sec",
            "range": "stddev: 0.0002514204161581141",
            "extra": "mean: 33.43111119997957 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.996912537761055,
            "unit": "iter/sec",
            "range": "stddev: 0.0006295383445795015",
            "extra": "mean: 33.33676420002121 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.049619764063562666,
            "unit": "iter/sec",
            "range": "stddev: 0.1133305796011638",
            "extra": "mean: 20.153259872799982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04995441532517529,
            "unit": "iter/sec",
            "range": "stddev: 0.02070320683564388",
            "extra": "mean: 20.018250508800065 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04999777576144923,
            "unit": "iter/sec",
            "range": "stddev: 0.041609524991492695",
            "extra": "mean: 20.000889734999966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05004531294457702,
            "unit": "iter/sec",
            "range": "stddev: 0.03505158479789411",
            "extra": "mean: 19.98189123339994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04985232073641869,
            "unit": "iter/sec",
            "range": "stddev: 0.07803217530101378",
            "extra": "mean: 20.05924669560004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04992092557189045,
            "unit": "iter/sec",
            "range": "stddev: 0.06057508461074171",
            "extra": "mean: 20.031679872599987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05002899583041825,
            "unit": "iter/sec",
            "range": "stddev: 0.032551917092915175",
            "extra": "mean: 19.988408389999858 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04977134912458264,
            "unit": "iter/sec",
            "range": "stddev: 0.027665352844656127",
            "extra": "mean: 20.09188052139998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04962001840836567,
            "unit": "iter/sec",
            "range": "stddev: 0.09275794131699895",
            "extra": "mean: 20.153156570200007 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}