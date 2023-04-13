window.BENCHMARK_DATA = {
  "lastUpdate": 1681403850116,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "CPU Benchmark Results": [
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
        "date": 1681403782032,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.060878829246879214,
            "unit": "iter/sec",
            "range": "stddev: 0.1793854470404432",
            "extra": "mean: 16.426071466399993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11455914237088853,
            "unit": "iter/sec",
            "range": "stddev: 0.01661273408934174",
            "extra": "mean: 8.729115627999999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11544559020917688,
            "unit": "iter/sec",
            "range": "stddev: 0.039722436013396464",
            "extra": "mean: 8.66208919879998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0791874074867112,
            "unit": "iter/sec",
            "range": "stddev: 0.03859179546658873",
            "extra": "mean: 926.6231176000019 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6192407829887141,
            "unit": "iter/sec",
            "range": "stddev: 0.004522734266933923",
            "extra": "mean: 1.614880717599999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4065144054781824,
            "unit": "iter/sec",
            "range": "stddev: 0.0031367496382629224",
            "extra": "mean: 2.4599374253999713 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4763978639317876,
            "unit": "iter/sec",
            "range": "stddev: 0.052341495139398626",
            "extra": "mean: 2.099085818200024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.60314959508939,
            "unit": "iter/sec",
            "range": "stddev: 0.001062132891738261",
            "extra": "mean: 34.961184839996804 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3323817245256664,
            "unit": "iter/sec",
            "range": "stddev: 0.004663058001878275",
            "extra": "mean: 750.5356622600061 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4227.020058844307,
            "unit": "iter/sec",
            "range": "stddev: 0.000034055605510491165",
            "extra": "mean: 236.57328001263522 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 80.16625069465428,
            "unit": "iter/sec",
            "range": "stddev: 0.00010362169323579985",
            "extra": "mean: 12.474077200004103 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2153972546660359,
            "unit": "iter/sec",
            "range": "stddev: 0.017707803933059017",
            "extra": "mean: 822.7762537399985 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.81970594182239,
            "unit": "iter/sec",
            "range": "stddev: 0.00027852895517731317",
            "extra": "mean: 30.469499079993057 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.221393934435858,
            "unit": "iter/sec",
            "range": "stddev: 0.003518153862193189",
            "extra": "mean: 818.7366678399985 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2267356325773857,
            "unit": "iter/sec",
            "range": "stddev: 0.018644897853857877",
            "extra": "mean: 4.410422784600018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2173648442323661,
            "unit": "iter/sec",
            "range": "stddev: 0.017095942135316098",
            "extra": "mean: 4.600559964200033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2168047059222915,
            "unit": "iter/sec",
            "range": "stddev: 0.04469247465554701",
            "extra": "mean: 4.612446006400001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22778615037030975,
            "unit": "iter/sec",
            "range": "stddev: 0.025959716372874742",
            "extra": "mean: 4.390082532999964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21689176307714628,
            "unit": "iter/sec",
            "range": "stddev: 0.026629292500268815",
            "extra": "mean: 4.610594638600037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2144104927324578,
            "unit": "iter/sec",
            "range": "stddev: 0.11193319118597639",
            "extra": "mean: 4.663950850800029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22621797169710844,
            "unit": "iter/sec",
            "range": "stddev: 0.03116354411451391",
            "extra": "mean: 4.4205152778000185 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21671939221779493,
            "unit": "iter/sec",
            "range": "stddev: 0.02492765116077627",
            "extra": "mean: 4.614261740799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21494243974061747,
            "unit": "iter/sec",
            "range": "stddev: 0.10623410618312983",
            "extra": "mean: 4.652408343399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 36.836154479368616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003370727207034884",
            "extra": "mean: 27.147241999978178 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 35.098017426075316,
            "unit": "iter/sec",
            "range": "stddev: 0.000169128957762898",
            "extra": "mean: 28.491637799947966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.68161607090076,
            "unit": "iter/sec",
            "range": "stddev: 0.00017699131185541369",
            "extra": "mean: 28.83371980001357 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 36.238339471731756,
            "unit": "iter/sec",
            "range": "stddev: 0.0012456945130588754",
            "extra": "mean: 27.595083400001386 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.74601358988725,
            "unit": "iter/sec",
            "range": "stddev: 0.00038812460471430706",
            "extra": "mean: 28.78027999997812 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.20710783750007,
            "unit": "iter/sec",
            "range": "stddev: 0.000943261498046127",
            "extra": "mean: 29.233690399973966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.921183831984045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004916277590214548",
            "extra": "mean: 27.084721999995054 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.68991049780624,
            "unit": "iter/sec",
            "range": "stddev: 0.00016887568565822377",
            "extra": "mean: 28.826825600003758 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.45000996605008,
            "unit": "iter/sec",
            "range": "stddev: 0.00046726814767504647",
            "extra": "mean: 29.027567799994358 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0550778650726667,
            "unit": "iter/sec",
            "range": "stddev: 0.0989714409343064",
            "extra": "mean: 18.15611405199993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05515796342250643,
            "unit": "iter/sec",
            "range": "stddev: 0.02547000848010668",
            "extra": "mean: 18.129748416199938 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05532492628759997,
            "unit": "iter/sec",
            "range": "stddev: 0.027300072385740833",
            "extra": "mean: 18.07503537919997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05568923329242234,
            "unit": "iter/sec",
            "range": "stddev: 0.02792572295924618",
            "extra": "mean: 17.95679237940003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05595661673226645,
            "unit": "iter/sec",
            "range": "stddev: 0.05558455472419915",
            "extra": "mean: 17.870987532799973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05604022960653183,
            "unit": "iter/sec",
            "range": "stddev: 0.025520461413331117",
            "extra": "mean: 17.84432374779999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05597638091958058,
            "unit": "iter/sec",
            "range": "stddev: 0.02146732071314912",
            "extra": "mean: 17.86467762960001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05607197431710288,
            "unit": "iter/sec",
            "range": "stddev: 0.01531097464293867",
            "extra": "mean: 17.83422132320002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05589958423440247,
            "unit": "iter/sec",
            "range": "stddev: 0.06709921930262377",
            "extra": "mean: 17.889220710599965 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}