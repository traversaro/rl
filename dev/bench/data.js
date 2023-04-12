window.BENCHMARK_DATA = {
  "lastUpdate": 1681303501575,
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
          "id": "993c7381b33a794aa6a3cd7720b9c26da5cdfda4",
          "message": "[BugFix] Fix param tying in loss modules (#1037)",
          "timestamp": "2023-04-12T13:10:26+01:00",
          "tree_id": "550f7b43809dc003efac2dda04252bf4543bcde6",
          "url": "https://github.com/pytorch/rl/commit/993c7381b33a794aa6a3cd7720b9c26da5cdfda4"
        },
        "date": 1681303433947,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.052588263538019236,
            "unit": "iter/sec",
            "range": "stddev: 0.15340409542850245",
            "extra": "mean: 19.015649742400022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09242941214550987,
            "unit": "iter/sec",
            "range": "stddev: 0.13344891817470067",
            "extra": "mean: 10.819066969999971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09561315878634227,
            "unit": "iter/sec",
            "range": "stddev: 0.15379152864580614",
            "extra": "mean: 10.458811451199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9299667812461923,
            "unit": "iter/sec",
            "range": "stddev: 0.04515569096458963",
            "extra": "mean: 1.075307226200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5270406852265536,
            "unit": "iter/sec",
            "range": "stddev: 0.04436185532752983",
            "extra": "mean: 1.8973867256000176 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.34988355239637836,
            "unit": "iter/sec",
            "range": "stddev: 0.006822279904931073",
            "extra": "mean: 2.8580937661999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.39127390698831316,
            "unit": "iter/sec",
            "range": "stddev: 0.07582963550502587",
            "extra": "mean: 2.5557543760000043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.809393904726527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006969991697996043",
            "extra": "mean: 40.30731277999848 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.227235410859456,
            "unit": "iter/sec",
            "range": "stddev: 0.01466709765099557",
            "extra": "mean: 814.8395908000089 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2986.7029594578034,
            "unit": "iter/sec",
            "range": "stddev: 0.00003219382709899566",
            "extra": "mean: 334.8173600033988 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 70.86231703075343,
            "unit": "iter/sec",
            "range": "stddev: 0.0002995848524419311",
            "extra": "mean: 14.111872740006675 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.125213381870679,
            "unit": "iter/sec",
            "range": "stddev: 0.0304180997208458",
            "extra": "mean: 888.7203228400017 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.26116453927887,
            "unit": "iter/sec",
            "range": "stddev: 0.00027285129532072535",
            "extra": "mean: 35.38424606000035 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1263303585618463,
            "unit": "iter/sec",
            "range": "stddev: 0.0184692541651684",
            "extra": "mean: 887.8389829400044 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1845607858606738,
            "unit": "iter/sec",
            "range": "stddev: 0.18289284487478832",
            "extra": "mean: 5.418269083200085 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18347656077307345,
            "unit": "iter/sec",
            "range": "stddev: 0.015478648523180484",
            "extra": "mean: 5.45028746879998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.18545368312499444,
            "unit": "iter/sec",
            "range": "stddev: 0.025350148133080817",
            "extra": "mean: 5.392181935400049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18468978704270844,
            "unit": "iter/sec",
            "range": "stddev: 0.08917152217460228",
            "extra": "mean: 5.414484558200047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18228258479669918,
            "unit": "iter/sec",
            "range": "stddev: 0.043339616647637164",
            "extra": "mean: 5.485987600599946 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17952338868077397,
            "unit": "iter/sec",
            "range": "stddev: 0.15952651044652225",
            "extra": "mean: 5.570304835199977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.18297676622963638,
            "unit": "iter/sec",
            "range": "stddev: 0.1840589870027099",
            "extra": "mean: 5.465174735600021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18292521011471735,
            "unit": "iter/sec",
            "range": "stddev: 0.08765676877211585",
            "extra": "mean: 5.466715054600035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1857348709063792,
            "unit": "iter/sec",
            "range": "stddev: 0.0217435635379961",
            "extra": "mean: 5.384018601999924 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 29.421700760344386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006684821559510545",
            "extra": "mean: 33.988517800025875 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.842952714680116,
            "unit": "iter/sec",
            "range": "stddev: 0.0004766771615036168",
            "extra": "mean: 33.50874860007025 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.92651394874353,
            "unit": "iter/sec",
            "range": "stddev: 0.00053146472517273",
            "extra": "mean: 33.41518499992162 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.4796231435834,
            "unit": "iter/sec",
            "range": "stddev: 0.0004351648222143815",
            "extra": "mean: 32.80880460001754 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.233478277866084,
            "unit": "iter/sec",
            "range": "stddev: 0.000267443563497317",
            "extra": "mean: 33.075916400002825 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 29.86757642507865,
            "unit": "iter/sec",
            "range": "stddev: 0.00042267217025029083",
            "extra": "mean: 33.48112300000139 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.769363692871124,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362313443223883",
            "extra": "mean: 32.499859600011405 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 30.20781344428235,
            "unit": "iter/sec",
            "range": "stddev: 0.00023745791712394236",
            "extra": "mean: 33.10401799999454 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.8607538106419,
            "unit": "iter/sec",
            "range": "stddev: 0.0006325014856015365",
            "extra": "mean: 33.48877279995577 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05097484945970058,
            "unit": "iter/sec",
            "range": "stddev: 0.09916148474471388",
            "extra": "mean: 19.61751747379999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05146414683426295,
            "unit": "iter/sec",
            "range": "stddev: 0.05882378697730467",
            "extra": "mean: 19.43100316459995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05183684878850388,
            "unit": "iter/sec",
            "range": "stddev: 0.06186181564529235",
            "extra": "mean: 19.29129612180004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.051805724651149125,
            "unit": "iter/sec",
            "range": "stddev: 0.10351884968902092",
            "extra": "mean: 19.30288605619994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05156783719779481,
            "unit": "iter/sec",
            "range": "stddev: 0.2423751120639801",
            "extra": "mean: 19.39193214879997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05240413635057917,
            "unit": "iter/sec",
            "range": "stddev: 0.0811478201956537",
            "extra": "mean: 19.08246313440004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05222684454769023,
            "unit": "iter/sec",
            "range": "stddev: 0.12565750828744812",
            "extra": "mean: 19.14724139780001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.051835972824257455,
            "unit": "iter/sec",
            "range": "stddev: 0.1498305052005094",
            "extra": "mean: 19.291622121 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05253079395663964,
            "unit": "iter/sec",
            "range": "stddev: 0.16062696544646254",
            "extra": "mean: 19.036453186400102 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}