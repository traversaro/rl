window.BENCHMARK_DATA = {
  "lastUpdate": 1681394431657,
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
          "id": "8d8d1087948833a0d1141ae8aac62c17b5be2c36",
          "message": "[Doc] Minor changes to contributing.md (#1054)",
          "timestamp": "2023-04-13T14:27:58+01:00",
          "tree_id": "3977e50c9e59d51aca3bbc909795a41209e56c5c",
          "url": "https://github.com/pytorch/rl/commit/8d8d1087948833a0d1141ae8aac62c17b5be2c36"
        },
        "date": 1681394299280,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.059454215656385714,
            "unit": "iter/sec",
            "range": "stddev: 0.20581127567527113",
            "extra": "mean: 16.819665165200014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11067025108492004,
            "unit": "iter/sec",
            "range": "stddev: 0.05102566926946948",
            "extra": "mean: 9.035851913200009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11146888025936284,
            "unit": "iter/sec",
            "range": "stddev: 0.04531150680549197",
            "extra": "mean: 8.971113710600003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.035646748571091,
            "unit": "iter/sec",
            "range": "stddev: 0.04677459824829591",
            "extra": "mean: 965.5802052000126 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5941695725094064,
            "unit": "iter/sec",
            "range": "stddev: 0.042720919733432804",
            "extra": "mean: 1.683021222000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3933221370164678,
            "unit": "iter/sec",
            "range": "stddev: 0.0462513170524547",
            "extra": "mean: 2.542445252599987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4619868291095689,
            "unit": "iter/sec",
            "range": "stddev: 0.04909812666461497",
            "extra": "mean: 2.1645638727999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.234184435799897,
            "unit": "iter/sec",
            "range": "stddev: 0.0016097593065846352",
            "extra": "mean: 35.41805864000935 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2614530578936456,
            "unit": "iter/sec",
            "range": "stddev: 0.004112176445919208",
            "extra": "mean: 792.7365935200032 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3581.639313425401,
            "unit": "iter/sec",
            "range": "stddev: 0.000042177555439286795",
            "extra": "mean: 279.2017600017971 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 77.98420719053334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002007551255648023",
            "extra": "mean: 12.823109139992539 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.152383567238033,
            "unit": "iter/sec",
            "range": "stddev: 0.05940181770755682",
            "extra": "mean: 867.7666260000069 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.848937868430426,
            "unit": "iter/sec",
            "range": "stddev: 0.0003317635924919893",
            "extra": "mean: 31.398221320002904 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1587669858686553,
            "unit": "iter/sec",
            "range": "stddev: 0.006949177057933976",
            "extra": "mean: 862.9862709200006 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2137983001615764,
            "unit": "iter/sec",
            "range": "stddev: 0.041496527793517035",
            "extra": "mean: 4.67730566260002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20595976111948436,
            "unit": "iter/sec",
            "range": "stddev: 0.04433827196819147",
            "extra": "mean: 4.85531734240003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2042645744070514,
            "unit": "iter/sec",
            "range": "stddev: 0.13692687464811926",
            "extra": "mean: 4.895611502399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21197689845558013,
            "unit": "iter/sec",
            "range": "stddev: 0.06010314092952914",
            "extra": "mean: 4.7174951954000335 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20556507797749868,
            "unit": "iter/sec",
            "range": "stddev: 0.10407142028039368",
            "extra": "mean: 4.864639508999971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1968658136496768,
            "unit": "iter/sec",
            "range": "stddev: 0.1519311862903852",
            "extra": "mean: 5.079602097799989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21034443206614062,
            "unit": "iter/sec",
            "range": "stddev: 0.08946655950146648",
            "extra": "mean: 4.754107300000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20739548392087953,
            "unit": "iter/sec",
            "range": "stddev: 0.07437263084404648",
            "extra": "mean: 4.821705762800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.204751792037747,
            "unit": "iter/sec",
            "range": "stddev: 0.1740827277638543",
            "extra": "mean: 4.88396213799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.97005911116052,
            "unit": "iter/sec",
            "range": "stddev: 0.0004803215674022323",
            "extra": "mean: 30.330549200061796 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 31.730996290456318,
            "unit": "iter/sec",
            "range": "stddev: 0.0004637094633990635",
            "extra": "mean: 31.514925999999832 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 31.088343914827497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005034379631746209",
            "extra": "mean: 32.16639659995053 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 32.06172656978686,
            "unit": "iter/sec",
            "range": "stddev: 0.0008363561079666283",
            "extra": "mean: 31.189836199973797 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.95697196401742,
            "unit": "iter/sec",
            "range": "stddev: 0.0003607559919965609",
            "extra": "mean: 30.342593400018814 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.652167114805124,
            "unit": "iter/sec",
            "range": "stddev: 0.000665603411958541",
            "extra": "mean: 30.625838600053612 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.72508709267672,
            "unit": "iter/sec",
            "range": "stddev: 0.0007047646576813759",
            "extra": "mean: 29.651517199999944 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.83247609922994,
            "unit": "iter/sec",
            "range": "stddev: 0.00023445319855999944",
            "extra": "mean: 30.457648000037807 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.59553577148092,
            "unit": "iter/sec",
            "range": "stddev: 0.001432254586033263",
            "extra": "mean: 30.6790478000039 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05477725359303334,
            "unit": "iter/sec",
            "range": "stddev: 0.11878157395768674",
            "extra": "mean: 18.255752787999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05553173326570523,
            "unit": "iter/sec",
            "range": "stddev: 0.07796548358235536",
            "extra": "mean: 18.007721733000018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0561266660487418,
            "unit": "iter/sec",
            "range": "stddev: 0.02750636472455847",
            "extra": "mean: 17.816843051600017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.056016945409656196,
            "unit": "iter/sec",
            "range": "stddev: 0.07911981470743551",
            "extra": "mean: 17.851740981000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05551557349243068,
            "unit": "iter/sec",
            "range": "stddev: 0.12617477557215373",
            "extra": "mean: 18.01296351799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05612275650692793,
            "unit": "iter/sec",
            "range": "stddev: 0.020581535169373787",
            "extra": "mean: 17.818084182599932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05612574852563903,
            "unit": "iter/sec",
            "range": "stddev: 0.03573494186667085",
            "extra": "mean: 17.817134314800022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05605781081838878,
            "unit": "iter/sec",
            "range": "stddev: 0.06014704476657524",
            "extra": "mean: 17.83872729600007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0559718049112072,
            "unit": "iter/sec",
            "range": "stddev: 0.08780493137555533",
            "extra": "mean: 17.866138167000052 sec\nrounds: 5"
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
          "id": "8d8d1087948833a0d1141ae8aac62c17b5be2c36",
          "message": "[Doc] Minor changes to contributing.md (#1054)",
          "timestamp": "2023-04-13T14:27:58+01:00",
          "tree_id": "3977e50c9e59d51aca3bbc909795a41209e56c5c",
          "url": "https://github.com/pytorch/rl/commit/8d8d1087948833a0d1141ae8aac62c17b5be2c36"
        },
        "date": 1681394360612,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06416590624443608,
            "unit": "iter/sec",
            "range": "stddev: 0.07462475359609881",
            "extra": "mean: 15.584600273400042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11649229211701696,
            "unit": "iter/sec",
            "range": "stddev: 0.13474570585964035",
            "extra": "mean: 8.584258939600023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11789197589165046,
            "unit": "iter/sec",
            "range": "stddev: 0.04209927999353988",
            "extra": "mean: 8.482341503199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0679953410446021,
            "unit": "iter/sec",
            "range": "stddev: 0.052327242787884615",
            "extra": "mean: 936.333672600017 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6172814673930099,
            "unit": "iter/sec",
            "range": "stddev: 0.055137114272090934",
            "extra": "mean: 1.6200065170000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4162292004465226,
            "unit": "iter/sec",
            "range": "stddev: 0.04569900642180568",
            "extra": "mean: 2.40252245380002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5014456592609264,
            "unit": "iter/sec",
            "range": "stddev: 0.05468782084778415",
            "extra": "mean: 1.994234034200008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.561324227745168,
            "unit": "iter/sec",
            "range": "stddev: 0.000542521573133959",
            "extra": "mean: 35.01238220000232 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2482208446120782,
            "unit": "iter/sec",
            "range": "stddev: 0.012355536357292106",
            "extra": "mean: 801.1402824399875 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3372.163799325619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004142307464313299",
            "extra": "mean: 296.54550001396274 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.37452757118454,
            "unit": "iter/sec",
            "range": "stddev: 0.00013334362872648766",
            "extra": "mean: 13.093370680007865 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1478850589313396,
            "unit": "iter/sec",
            "range": "stddev: 0.009508806653126773",
            "extra": "mean: 871.1673631600206 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.82435771379971,
            "unit": "iter/sec",
            "range": "stddev: 0.0003448917670505604",
            "extra": "mean: 31.422472339995693 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1491568162951675,
            "unit": "iter/sec",
            "range": "stddev: 0.007069675844852009",
            "extra": "mean: 870.2032532200064 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2506676387923984,
            "unit": "iter/sec",
            "range": "stddev: 0.06057079222731538",
            "extra": "mean: 3.989346230800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23685281056017585,
            "unit": "iter/sec",
            "range": "stddev: 0.03209096258981861",
            "extra": "mean: 4.2220313857999825 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.23444887429080402,
            "unit": "iter/sec",
            "range": "stddev: 0.035546566913205416",
            "extra": "mean: 4.265322249999917 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2418720741145493,
            "unit": "iter/sec",
            "range": "stddev: 0.019244678246580424",
            "extra": "mean: 4.13441693779996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2360432473681107,
            "unit": "iter/sec",
            "range": "stddev: 0.0689876019517575",
            "extra": "mean: 4.23651178819996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23297376610978973,
            "unit": "iter/sec",
            "range": "stddev: 0.05991408064107069",
            "extra": "mean: 4.292328774600082 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.24158742717352608,
            "unit": "iter/sec",
            "range": "stddev: 0.03699831222915979",
            "extra": "mean: 4.139288255600013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23146746419763053,
            "unit": "iter/sec",
            "range": "stddev: 0.03545095601511935",
            "extra": "mean: 4.3202616119999675 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2334196379709647,
            "unit": "iter/sec",
            "range": "stddev: 0.017984162663341983",
            "extra": "mean: 4.28412968460002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 39.371434729625086,
            "unit": "iter/sec",
            "range": "stddev: 0.00026043468907898266",
            "extra": "mean: 25.399125199965056 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.646643600222234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003937898206802208",
            "extra": "mean: 27.287628600015523 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 36.908668687367154,
            "unit": "iter/sec",
            "range": "stddev: 0.00018937869938882886",
            "extra": "mean: 27.09390599998187 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 38.057868023547094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651079326982354",
            "extra": "mean: 26.275775599970075 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.40802820906402,
            "unit": "iter/sec",
            "range": "stddev: 0.000607713484761144",
            "extra": "mean: 27.466469599994525 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.06526202485391,
            "unit": "iter/sec",
            "range": "stddev: 0.0006059707857924756",
            "extra": "mean: 27.727512399906118 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 38.52369288391563,
            "unit": "iter/sec",
            "range": "stddev: 0.00045759138864323476",
            "extra": "mean: 25.95805140003904 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.56931870144425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001941019059962323",
            "extra": "mean: 27.345327600005476 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 36.94464149897121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002559809642405486",
            "extra": "mean: 27.06752479998613 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0697789540906506,
            "unit": "iter/sec",
            "range": "stddev: 0.1620915683168018",
            "extra": "mean: 14.330968599800007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.07026507401771714,
            "unit": "iter/sec",
            "range": "stddev: 0.06039719217473549",
            "extra": "mean: 14.231821626600048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.07033836835337927,
            "unit": "iter/sec",
            "range": "stddev: 0.04758719804912155",
            "extra": "mean: 14.216991713199969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.07021401127703504,
            "unit": "iter/sec",
            "range": "stddev: 0.027733024094312442",
            "extra": "mean: 14.242171637999991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.07017006366612889,
            "unit": "iter/sec",
            "range": "stddev: 0.09150217350470222",
            "extra": "mean: 14.251091530400027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.07052668794625964,
            "unit": "iter/sec",
            "range": "stddev: 0.06377628608883112",
            "extra": "mean: 14.179029657000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06980815890817049,
            "unit": "iter/sec",
            "range": "stddev: 0.032372516432835965",
            "extra": "mean: 14.324973121199992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06998397999051478,
            "unit": "iter/sec",
            "range": "stddev: 0.059632780652064926",
            "extra": "mean: 14.288984423800049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0698835120858238,
            "unit": "iter/sec",
            "range": "stddev: 0.047177738169331566",
            "extra": "mean: 14.309526956399987 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}