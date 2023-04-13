window.BENCHMARK_DATA = {
  "lastUpdate": 1681404159017,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "ningx@meta.com",
            "name": "Ning Xu",
            "username": "Goldspear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9bdac9a351e92d58f9d3df58a43e5d508f8e28f",
          "message": "[Refactor] Import enum and interaction_type utils (#1055)",
          "timestamp": "2023-04-13T17:06:42+01:00",
          "tree_id": "44e62ea7765508032d476dbcf62c31af44b9000f",
          "url": "https://github.com/pytorch/rl/commit/d9bdac9a351e92d58f9d3df58a43e5d508f8e28f"
        },
        "date": 1681404086717,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05677477309829677,
            "unit": "iter/sec",
            "range": "stddev: 0.11197750765795027",
            "extra": "mean: 17.613456565799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10552698759819842,
            "unit": "iter/sec",
            "range": "stddev: 0.1759256419051168",
            "extra": "mean: 9.476248898599966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10630507762065015,
            "unit": "iter/sec",
            "range": "stddev: 0.1518811243310725",
            "extra": "mean: 9.406888385599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0244173298264696,
            "unit": "iter/sec",
            "range": "stddev: 0.04145406926053171",
            "extra": "mean: 976.1646653999833 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5694192971515272,
            "unit": "iter/sec",
            "range": "stddev: 0.05003942905866309",
            "extra": "mean: 1.7561751156000809 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.37442795094229886,
            "unit": "iter/sec",
            "range": "stddev: 0.0634333408575381",
            "extra": "mean: 2.6707407859999877 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4412105055666333,
            "unit": "iter/sec",
            "range": "stddev: 0.0695247941077819",
            "extra": "mean: 2.266491816000007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 26.63278223946034,
            "unit": "iter/sec",
            "range": "stddev: 0.0016004811495343352",
            "extra": "mean: 37.54771059999712 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.218778298019575,
            "unit": "iter/sec",
            "range": "stddev: 0.017658584069397305",
            "extra": "mean: 820.4937695599983 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3231.127806506842,
            "unit": "iter/sec",
            "range": "stddev: 0.00004357692968105123",
            "extra": "mean: 309.48945999170974 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 67.30191345472832,
            "unit": "iter/sec",
            "range": "stddev: 0.00030196974286605493",
            "extra": "mean: 14.85841856001116 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1295293515583387,
            "unit": "iter/sec",
            "range": "stddev: 0.013113263229131498",
            "extra": "mean: 885.3244925599893 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.855427189699505,
            "unit": "iter/sec",
            "range": "stddev: 0.00118374985466783",
            "extra": "mean: 33.49474765998366 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1249928213813998,
            "unit": "iter/sec",
            "range": "stddev: 0.011472895699949212",
            "extra": "mean: 888.8945609200255 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22184391934897252,
            "unit": "iter/sec",
            "range": "stddev: 0.10947830496630018",
            "extra": "mean: 4.507673696599932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21888099212594297,
            "unit": "iter/sec",
            "range": "stddev: 0.056757949048648434",
            "extra": "mean: 4.568692741599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2183463272219595,
            "unit": "iter/sec",
            "range": "stddev: 0.10190246429523789",
            "extra": "mean: 4.579880104799986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2321810879340261,
            "unit": "iter/sec",
            "range": "stddev: 0.05373023165150957",
            "extra": "mean: 4.306983005799975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22045968548493863,
            "unit": "iter/sec",
            "range": "stddev: 0.04823724834123838",
            "extra": "mean: 4.535976715200013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2219065909071535,
            "unit": "iter/sec",
            "range": "stddev: 0.045815735367773475",
            "extra": "mean: 4.506400625200013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22074558967146118,
            "unit": "iter/sec",
            "range": "stddev: 0.09341410293276746",
            "extra": "mean: 4.530101831199954 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2178214849894862,
            "unit": "iter/sec",
            "range": "stddev: 0.07132304135023076",
            "extra": "mean: 4.590915354599974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2150187555852695,
            "unit": "iter/sec",
            "range": "stddev: 0.06842658900357126",
            "extra": "mean: 4.650757080600033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.871819371363,
            "unit": "iter/sec",
            "range": "stddev: 0.00035717412452035803",
            "extra": "mean: 27.877035999972577 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.9586430319264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002720834782825343",
            "extra": "mean: 29.44758419998834 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.90110336223797,
            "unit": "iter/sec",
            "range": "stddev: 0.00030655533206146147",
            "extra": "mean: 29.497565000019677 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.469944666564025,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242832876107403",
            "extra": "mean: 28.192882999974245 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.81367209979267,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483633836741468",
            "extra": "mean: 29.573836200006554 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.3409723247133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009984831121374058",
            "extra": "mean: 29.119734599953517 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.848272780900615,
            "unit": "iter/sec",
            "range": "stddev: 0.0006454657758841562",
            "extra": "mean: 28.695826800003488 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.21250905677704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823903481249191",
            "extra": "mean: 29.229075199964427 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.60928898779693,
            "unit": "iter/sec",
            "range": "stddev: 0.00048218912368939813",
            "extra": "mean: 28.893977000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06328231125875679,
            "unit": "iter/sec",
            "range": "stddev: 0.26805161735708594",
            "extra": "mean: 15.802204124799937 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.062715767026193,
            "unit": "iter/sec",
            "range": "stddev: 0.4365482599710312",
            "extra": "mean: 15.94495367620002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06263552475973594,
            "unit": "iter/sec",
            "range": "stddev: 0.326229288695247",
            "extra": "mean: 15.965380729800017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06445390834704579,
            "unit": "iter/sec",
            "range": "stddev: 0.04147399245297257",
            "extra": "mean: 15.514962950199969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06355108796474845,
            "unit": "iter/sec",
            "range": "stddev: 0.24016260440455184",
            "extra": "mean: 15.735371840600056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06227016474029363,
            "unit": "iter/sec",
            "range": "stddev: 0.3861849132927959",
            "extra": "mean: 16.059054993200014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06414185359961788,
            "unit": "iter/sec",
            "range": "stddev: 0.22858974452928368",
            "extra": "mean: 15.590444364800168 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06242528489008932,
            "unit": "iter/sec",
            "range": "stddev: 0.279164714131794",
            "extra": "mean: 16.01914996079995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06134330481375076,
            "unit": "iter/sec",
            "range": "stddev: 0.1979953693286018",
            "extra": "mean: 16.30169752080001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}