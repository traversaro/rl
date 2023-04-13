window.BENCHMARK_DATA = {
  "lastUpdate": 1681370438937,
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
      },
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
          "id": "32514f6f5bc91e5479ea00fcc4353909b84c9097",
          "message": "[Refactor] less ad-hoc disable_env_checker check (#1047)",
          "timestamp": "2023-04-13T07:50:21+01:00",
          "tree_id": "bb2b319c54c6d42162af903a12134443bc60d5cb",
          "url": "https://github.com/pytorch/rl/commit/32514f6f5bc91e5479ea00fcc4353909b84c9097"
        },
        "date": 1681370381789,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.060671209503054595,
            "unit": "iter/sec",
            "range": "stddev: 0.19354300158410664",
            "extra": "mean: 16.48228225859999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11408900080228149,
            "unit": "iter/sec",
            "range": "stddev: 0.027797418977645566",
            "extra": "mean: 8.765086844199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11506949709327043,
            "unit": "iter/sec",
            "range": "stddev: 0.027508549453499415",
            "extra": "mean: 8.690400368999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0747498087340563,
            "unit": "iter/sec",
            "range": "stddev: 0.03614113377539015",
            "extra": "mean: 930.4491072000246 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6155179923382171,
            "unit": "iter/sec",
            "range": "stddev: 0.002355320211528798",
            "extra": "mean: 1.6246478777999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40496865496362483,
            "unit": "iter/sec",
            "range": "stddev: 0.013534503467264173",
            "extra": "mean: 2.4693269164000413 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4701866218839958,
            "unit": "iter/sec",
            "range": "stddev: 0.052122744709512746",
            "extra": "mean: 2.1268150846000027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.662680308861184,
            "unit": "iter/sec",
            "range": "stddev: 0.00022814287676980666",
            "extra": "mean: 34.8885724999991 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.4169359237838137,
            "unit": "iter/sec",
            "range": "stddev: 0.004790735111802911",
            "extra": "mean: 705.7482157200025 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3185.686329078735,
            "unit": "iter/sec",
            "range": "stddev: 0.00011332303193307848",
            "extra": "mean: 313.9040999963072 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.72624958950045,
            "unit": "iter/sec",
            "range": "stddev: 0.00012567808920971863",
            "extra": "mean: 12.702243599997018 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2897280280395187,
            "unit": "iter/sec",
            "range": "stddev: 0.004489943667735985",
            "extra": "mean: 775.3572677799934 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.95464244548393,
            "unit": "iter/sec",
            "range": "stddev: 0.00011678612642186948",
            "extra": "mean: 31.294357360000053 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2849490352965456,
            "unit": "iter/sec",
            "range": "stddev: 0.005582471431253039",
            "extra": "mean: 778.2409827400011 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2227363858162082,
            "unit": "iter/sec",
            "range": "stddev: 0.029927538444379946",
            "extra": "mean: 4.489612221799962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21666335841940493,
            "unit": "iter/sec",
            "range": "stddev: 0.020882339851423296",
            "extra": "mean: 4.615455087999953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21759660968188346,
            "unit": "iter/sec",
            "range": "stddev: 0.015726467640290544",
            "extra": "mean: 4.595659838000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22503021664456094,
            "unit": "iter/sec",
            "range": "stddev: 0.013344772371580596",
            "extra": "mean: 4.4438476525999935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21539496745895054,
            "unit": "iter/sec",
            "range": "stddev: 0.007392975639433692",
            "extra": "mean: 4.642634002999989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21335423853490926,
            "unit": "iter/sec",
            "range": "stddev: 0.12200004850591277",
            "extra": "mean: 4.687040702199965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2251609573404672,
            "unit": "iter/sec",
            "range": "stddev: 0.01935352948458553",
            "extra": "mean: 4.4412673129999805 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21728187579147262,
            "unit": "iter/sec",
            "range": "stddev: 0.03149135959990647",
            "extra": "mean: 4.602316674399981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21145968791836614,
            "unit": "iter/sec",
            "range": "stddev: 0.17069961631121053",
            "extra": "mean: 4.729033745600009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.146260389433365,
            "unit": "iter/sec",
            "range": "stddev: 0.00038002651210296496",
            "extra": "mean: 28.452529199967103 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.0658659567386,
            "unit": "iter/sec",
            "range": "stddev: 0.0003876204675041832",
            "extra": "mean: 29.354897399935 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.169914904442976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984215963454867",
            "extra": "mean: 29.265510399909545 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.23914966819475,
            "unit": "iter/sec",
            "range": "stddev: 0.00024324769946079802",
            "extra": "mean: 29.206332800049495 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.34960638489946,
            "unit": "iter/sec",
            "range": "stddev: 0.00018326255243643339",
            "extra": "mean: 29.985361400031252 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.24278066370624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006027752022279918",
            "extra": "mean: 30.081719399959184 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.66967112596592,
            "unit": "iter/sec",
            "range": "stddev: 0.0016995563761884264",
            "extra": "mean: 29.70031979994019 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.88445564624635,
            "unit": "iter/sec",
            "range": "stddev: 0.0002676493467833569",
            "extra": "mean: 29.512057400006597 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.814293415519955,
            "unit": "iter/sec",
            "range": "stddev: 0.00014766917018030554",
            "extra": "mean: 29.57329279993246 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05542546954596892,
            "unit": "iter/sec",
            "range": "stddev: 0.1585115379369262",
            "extra": "mean: 18.04224678999999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.055575127034935105,
            "unit": "iter/sec",
            "range": "stddev: 0.06399668634721038",
            "extra": "mean: 17.993661073799966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0554614332051454,
            "unit": "iter/sec",
            "range": "stddev: 0.08973965706047082",
            "extra": "mean: 18.030547394999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05626722405877587,
            "unit": "iter/sec",
            "range": "stddev: 0.0479493684981604",
            "extra": "mean: 17.772335791000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05633962683052442,
            "unit": "iter/sec",
            "range": "stddev: 0.10034302429666117",
            "extra": "mean: 17.749496335999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.056821175253257056,
            "unit": "iter/sec",
            "range": "stddev: 0.05939014199378303",
            "extra": "mean: 17.599072802399995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05695439927955725,
            "unit": "iter/sec",
            "range": "stddev: 0.07393621053048414",
            "extra": "mean: 17.55790619600007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.056857719107292815,
            "unit": "iter/sec",
            "range": "stddev: 0.033924882870882904",
            "extra": "mean: 17.587761445600016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05682281124299674,
            "unit": "iter/sec",
            "range": "stddev: 0.06261815002438409",
            "extra": "mean: 17.59856610619995 sec\nrounds: 5"
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
          "id": "993c7381b33a794aa6a3cd7720b9c26da5cdfda4",
          "message": "[BugFix] Fix param tying in loss modules (#1037)",
          "timestamp": "2023-04-12T13:10:26+01:00",
          "tree_id": "550f7b43809dc003efac2dda04252bf4543bcde6",
          "url": "https://github.com/pytorch/rl/commit/993c7381b33a794aa6a3cd7720b9c26da5cdfda4"
        },
        "date": 1681304025241,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04144138343383886,
            "unit": "iter/sec",
            "range": "stddev: 0.11041887419793994",
            "extra": "mean: 24.130468559199993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07489713975173085,
            "unit": "iter/sec",
            "range": "stddev: 0.37840253349919883",
            "extra": "mean: 13.351644713200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07711608140489219,
            "unit": "iter/sec",
            "range": "stddev: 0.151093913772677",
            "extra": "mean: 12.967463877599993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.723935515224498,
            "unit": "iter/sec",
            "range": "stddev: 0.042286607789036486",
            "extra": "mean: 1.3813385017999735 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4115689029645334,
            "unit": "iter/sec",
            "range": "stddev: 0.06424729353710215",
            "extra": "mean: 2.4297268155999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.26686178125611476,
            "unit": "iter/sec",
            "range": "stddev: 0.08232037179487614",
            "extra": "mean: 3.7472582072000478 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3154894459973733,
            "unit": "iter/sec",
            "range": "stddev: 0.016036032324242257",
            "extra": "mean: 3.169678138800009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 15.8258852062085,
            "unit": "iter/sec",
            "range": "stddev: 0.00313167566537182",
            "extra": "mean: 63.18761870000798 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.088393769372318,
            "unit": "iter/sec",
            "range": "stddev: 0.0243637380803364",
            "extra": "mean: 918.7851200000023 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2221.3342808917328,
            "unit": "iter/sec",
            "range": "stddev: 0.00009152289904826896",
            "extra": "mean: 450.179879994721 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 48.330139689028535,
            "unit": "iter/sec",
            "range": "stddev: 0.002052587340026198",
            "extra": "mean: 20.6910223399791 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 0.9844198512327952,
            "unit": "iter/sec",
            "range": "stddev: 0.025305306828694238",
            "extra": "mean: 1.015826731600032 sec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 17.64237585204075,
            "unit": "iter/sec",
            "range": "stddev: 0.004930832372133603",
            "extra": "mean: 56.68170819999432 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 0.9874215005340415,
            "unit": "iter/sec",
            "range": "stddev: 0.020304503922455818",
            "extra": "mean: 1.0127387336199944 sec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.19068763127073382,
            "unit": "iter/sec",
            "range": "stddev: 0.08205856711165684",
            "extra": "mean: 5.244178625199993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18010736610161818,
            "unit": "iter/sec",
            "range": "stddev: 0.1311251318826499",
            "extra": "mean: 5.552243762399985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1812357220062871,
            "unit": "iter/sec",
            "range": "stddev: 0.15184150988306158",
            "extra": "mean: 5.517676034999932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1879856438959529,
            "unit": "iter/sec",
            "range": "stddev: 0.08528155085527844",
            "extra": "mean: 5.319555149400048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18400849708696812,
            "unit": "iter/sec",
            "range": "stddev: 0.18031541957758973",
            "extra": "mean: 5.434531642999991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19008398921091843,
            "unit": "iter/sec",
            "range": "stddev: 0.08683986017509736",
            "extra": "mean: 5.260832351799991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2006563960235288,
            "unit": "iter/sec",
            "range": "stddev: 0.05090997629815662",
            "extra": "mean: 4.983643780199964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18523513622028065,
            "unit": "iter/sec",
            "range": "stddev: 0.17054060098848695",
            "extra": "mean: 5.398543820600025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.19226353713030575,
            "unit": "iter/sec",
            "range": "stddev: 0.15864672416297151",
            "extra": "mean: 5.201194230200054 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 33.75880523324709,
            "unit": "iter/sec",
            "range": "stddev: 0.0013322979149674188",
            "extra": "mean: 29.62190139996892 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 31.767396379020756,
            "unit": "iter/sec",
            "range": "stddev: 0.0017717729824988932",
            "extra": "mean: 31.478815199989185 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 32.23818665823707,
            "unit": "iter/sec",
            "range": "stddev: 0.0006318375354872145",
            "extra": "mean: 31.019114399987302 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 32.20944176624823,
            "unit": "iter/sec",
            "range": "stddev: 0.002390753442438946",
            "extra": "mean: 31.04679699999906 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.988777965599187,
            "unit": "iter/sec",
            "range": "stddev: 0.0012910409482097033",
            "extra": "mean: 32.26974620006331 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.48340926109494,
            "unit": "iter/sec",
            "range": "stddev: 0.001755639491659612",
            "extra": "mean: 30.78494600003978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.67877250924205,
            "unit": "iter/sec",
            "range": "stddev: 0.0024622878761074345",
            "extra": "mean: 30.60090459998719 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 29.49549930539154,
            "unit": "iter/sec",
            "range": "stddev: 0.005444957135567852",
            "extra": "mean: 33.90347759996075 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.474242167953214,
            "unit": "iter/sec",
            "range": "stddev: 0.0009341553447124365",
            "extra": "mean: 32.81459779996112 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04508628049251048,
            "unit": "iter/sec",
            "range": "stddev: 0.6976200079881784",
            "extra": "mean: 22.179696108799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04452322042592586,
            "unit": "iter/sec",
            "range": "stddev: 0.32619325402503274",
            "extra": "mean: 22.460190220600044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.043910694227493836,
            "unit": "iter/sec",
            "range": "stddev: 0.13535719076584452",
            "extra": "mean: 22.773495559399954 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04419387381402686,
            "unit": "iter/sec",
            "range": "stddev: 0.4391675258402839",
            "extra": "mean: 22.627570604200038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04321807159033321,
            "unit": "iter/sec",
            "range": "stddev: 0.3898939513913448",
            "extra": "mean: 23.138468774800096 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04442227457919916,
            "unit": "iter/sec",
            "range": "stddev: 0.3620542260562386",
            "extra": "mean: 22.511229095599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04364701359110123,
            "unit": "iter/sec",
            "range": "stddev: 0.6133143408955539",
            "extra": "mean: 22.91107495619999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.043710857441528764,
            "unit": "iter/sec",
            "range": "stddev: 0.2369685770046034",
            "extra": "mean: 22.87761115959993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0443227026714702,
            "unit": "iter/sec",
            "range": "stddev: 0.27319837972105443",
            "extra": "mean: 22.561801057399954 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}