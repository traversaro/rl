window.BENCHMARK_DATA = {
  "lastUpdate": 1681284298601,
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
          "id": "406efb2d73fbb135433f34359ed88cccef157ed1",
          "message": "[BugFix] kwargs update in distributed collectors (#1040)",
          "timestamp": "2023-04-12T07:54:05+01:00",
          "tree_id": "e875d0bbf09bed8097a79501de7955f97fe64051",
          "url": "https://github.com/pytorch/rl/commit/406efb2d73fbb135433f34359ed88cccef157ed1"
        },
        "date": 1681284244994,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05981661128774406,
            "unit": "iter/sec",
            "range": "stddev: 0.04189962821332429",
            "extra": "mean: 16.717764154000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10967475084998514,
            "unit": "iter/sec",
            "range": "stddev: 0.021093291291251565",
            "extra": "mean: 9.117868900999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10988580695994543,
            "unit": "iter/sec",
            "range": "stddev: 0.26336652590053017",
            "extra": "mean: 9.100356339599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0468920139777307,
            "unit": "iter/sec",
            "range": "stddev: 0.045615193064018726",
            "extra": "mean: 955.2083564000441 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.600927800193572,
            "unit": "iter/sec",
            "range": "stddev: 0.04618154731560114",
            "extra": "mean: 1.6640934230000313 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40230703361075937,
            "unit": "iter/sec",
            "range": "stddev: 0.036502438494880475",
            "extra": "mean: 2.4856637255999887 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4702790814389806,
            "unit": "iter/sec",
            "range": "stddev: 0.031211574341619783",
            "extra": "mean: 2.1263969405999434 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.329836132161535,
            "unit": "iter/sec",
            "range": "stddev: 0.0010265525122825888",
            "extra": "mean: 35.29847455999743 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2612172532281238,
            "unit": "iter/sec",
            "range": "stddev: 0.007479686956912378",
            "extra": "mean: 792.884808260012 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3191.5740402557813,
            "unit": "iter/sec",
            "range": "stddev: 0.00003639429967454788",
            "extra": "mean: 313.3250200016846 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.43107223796763,
            "unit": "iter/sec",
            "range": "stddev: 0.00021315354352445314",
            "extra": "mean: 13.083684040000207 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1583094274140282,
            "unit": "iter/sec",
            "range": "stddev: 0.0061938002098587954",
            "extra": "mean: 863.327170039995 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.982070083943885,
            "unit": "iter/sec",
            "range": "stddev: 0.00029321338048853896",
            "extra": "mean: 31.267519499997434 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1521035780151727,
            "unit": "iter/sec",
            "range": "stddev: 0.006834160351562477",
            "extra": "mean: 867.9775144200016 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21456076902601046,
            "unit": "iter/sec",
            "range": "stddev: 0.04115774757361392",
            "extra": "mean: 4.660684264599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20889114069045076,
            "unit": "iter/sec",
            "range": "stddev: 0.025343042869033834",
            "extra": "mean: 4.787182437199999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20790563760014702,
            "unit": "iter/sec",
            "range": "stddev: 0.024036429043719866",
            "extra": "mean: 4.809874381200006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2148307631950438,
            "unit": "iter/sec",
            "range": "stddev: 0.033806238209749276",
            "extra": "mean: 4.654826827999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20822708318231523,
            "unit": "iter/sec",
            "range": "stddev: 0.026237370506617883",
            "extra": "mean: 4.802449252600058 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20606960581368497,
            "unit": "iter/sec",
            "range": "stddev: 0.14123594178416515",
            "extra": "mean: 4.8527292322 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21556558236069467,
            "unit": "iter/sec",
            "range": "stddev: 0.025495568455920662",
            "extra": "mean: 4.638959471399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20893264450600801,
            "unit": "iter/sec",
            "range": "stddev: 0.042980163628521965",
            "extra": "mean: 4.786231478399941 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.20953251086300476,
            "unit": "iter/sec",
            "range": "stddev: 0.023919542248369598",
            "extra": "mean: 4.772529073799978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.21713852568957,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996011582656109",
            "extra": "mean: 29.225120599994625 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.9359590116251,
            "unit": "iter/sec",
            "range": "stddev: 0.0010889867786286714",
            "extra": "mean: 30.36195180006871 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.48613391095078,
            "unit": "iter/sec",
            "range": "stddev: 0.00034898356835986826",
            "extra": "mean: 29.86310700002832 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.79565268004153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559081410835745",
            "extra": "mean: 29.589604599959785 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.17692426273569,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563654074776595",
            "extra": "mean: 30.14143180002975 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.98680300936902,
            "unit": "iter/sec",
            "range": "stddev: 0.0006529219703215745",
            "extra": "mean: 30.31515359994046 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 35.001485463067475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362421264101053",
            "extra": "mean: 28.570215999980064 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.9533855328503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006060975648994424",
            "extra": "mean: 29.45214399996985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.59099101442482,
            "unit": "iter/sec",
            "range": "stddev: 0.000435144432832893",
            "extra": "mean: 29.769886800022505 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05633681666783029,
            "unit": "iter/sec",
            "range": "stddev: 0.024358947485384818",
            "extra": "mean: 17.7503817068 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.0566787705212669,
            "unit": "iter/sec",
            "range": "stddev: 0.05754996167778002",
            "extra": "mean: 17.643290261999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05676207240833737,
            "unit": "iter/sec",
            "range": "stddev: 0.06682538197444306",
            "extra": "mean: 17.617397631400035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05664165584430627,
            "unit": "iter/sec",
            "range": "stddev: 0.03603044887863765",
            "extra": "mean: 17.654851100199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05679205074691652,
            "unit": "iter/sec",
            "range": "stddev: 0.0996076591594437",
            "extra": "mean: 17.608098084999938 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05696752990073293,
            "unit": "iter/sec",
            "range": "stddev: 0.016201429464020218",
            "extra": "mean: 17.553859220200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05750532953025364,
            "unit": "iter/sec",
            "range": "stddev: 0.013086661680404371",
            "extra": "mean: 17.389692541000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05712592404880761,
            "unit": "iter/sec",
            "range": "stddev: 0.12067259982100816",
            "extra": "mean: 17.505187297200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05702276194706875,
            "unit": "iter/sec",
            "range": "stddev: 0.09839324337122292",
            "extra": "mean: 17.536856613999998 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}