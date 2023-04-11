window.BENCHMARK_DATA = {
  "lastUpdate": 1681221320959,
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
          "id": "2ac7f25c616cbefc7e4f8ce5b596073ff975267a",
          "message": "[BugFix,CI] Fix macos codecov install (#1039)",
          "timestamp": "2023-04-11T14:23:17+01:00",
          "tree_id": "ea2548a42d15e700bac57fba1551e016cd7eba3b",
          "url": "https://github.com/pytorch/rl/commit/2ac7f25c616cbefc7e4f8ce5b596073ff975267a"
        },
        "date": 1681221170785,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.061011524821876384,
            "unit": "iter/sec",
            "range": "stddev: 0.05150180675367375",
            "extra": "mean: 16.39034597020002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1124454881758599,
            "unit": "iter/sec",
            "range": "stddev: 0.08731173188912503",
            "extra": "mean: 8.893198083999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11324966359746345,
            "unit": "iter/sec",
            "range": "stddev: 0.02713531286737952",
            "extra": "mean: 8.830048304199977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0670827945822554,
            "unit": "iter/sec",
            "range": "stddev: 0.039173602374220344",
            "extra": "mean: 937.134405200004 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6071370417110522,
            "unit": "iter/sec",
            "range": "stddev: 0.03825425032286972",
            "extra": "mean: 1.6470745998000211 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40114590115431015,
            "unit": "iter/sec",
            "range": "stddev: 0.04055195461638404",
            "extra": "mean: 2.492858576200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46650545211060823,
            "unit": "iter/sec",
            "range": "stddev: 0.06700449491013964",
            "extra": "mean: 2.1435976696000125 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.386607828603132,
            "unit": "iter/sec",
            "range": "stddev: 0.0002909733046096984",
            "extra": "mean: 35.227879500007475 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3987527373091502,
            "unit": "iter/sec",
            "range": "stddev: 0.006610942531326521",
            "extra": "mean: 714.9226402400109 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3250.1424699509676,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192281452150947",
            "extra": "mean: 307.6788200041847 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.74013104802165,
            "unit": "iter/sec",
            "range": "stddev: 0.00011320930195629221",
            "extra": "mean: 13.030991559999165 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2802766312931788,
            "unit": "iter/sec",
            "range": "stddev: 0.005784281797847265",
            "extra": "mean: 781.0811941399902 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.08014887969737,
            "unit": "iter/sec",
            "range": "stddev: 0.00021334175227617975",
            "extra": "mean: 31.17192516001296 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2823600889598858,
            "unit": "iter/sec",
            "range": "stddev: 0.002690916006308653",
            "extra": "mean: 779.8121671199965 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21349956884814578,
            "unit": "iter/sec",
            "range": "stddev: 0.0537454721632629",
            "extra": "mean: 4.683850208200011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20972054069405485,
            "unit": "iter/sec",
            "range": "stddev: 0.02944537308893489",
            "extra": "mean: 4.768250151799975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21171294619864828,
            "unit": "iter/sec",
            "range": "stddev: 0.0594632747732776",
            "extra": "mean: 4.723376713399989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22614594003639282,
            "unit": "iter/sec",
            "range": "stddev: 0.041466021894433734",
            "extra": "mean: 4.421923293600026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21849046086093066,
            "unit": "iter/sec",
            "range": "stddev: 0.035947002320968265",
            "extra": "mean: 4.5768588525999805 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21921157973911298,
            "unit": "iter/sec",
            "range": "stddev: 0.05364644580195253",
            "extra": "mean: 4.561802807999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22975165436503964,
            "unit": "iter/sec",
            "range": "stddev: 0.020089970018770418",
            "extra": "mean: 4.352525786000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2199091239162174,
            "unit": "iter/sec",
            "range": "stddev: 0.016141298903590357",
            "extra": "mean: 4.547332926400031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2160203215155314,
            "unit": "iter/sec",
            "range": "stddev: 0.12682460424709166",
            "extra": "mean: 4.629194109999981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.36369341658484,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315575493693177",
            "extra": "mean: 26.763949400037745 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.00282495438184,
            "unit": "iter/sec",
            "range": "stddev: 0.00029374845931329934",
            "extra": "mean: 27.775598200059903 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 35.26045370377837,
            "unit": "iter/sec",
            "range": "stddev: 0.0005927229539099833",
            "extra": "mean: 28.36038379996353 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.13439572071848,
            "unit": "iter/sec",
            "range": "stddev: 0.0007335138504386595",
            "extra": "mean: 26.92921159996331 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 35.71599421444275,
            "unit": "iter/sec",
            "range": "stddev: 0.00013585585217164623",
            "extra": "mean: 27.99866059995111 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 35.454176402384455,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234374225535939",
            "extra": "mean: 28.20542179997574 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.81587914223486,
            "unit": "iter/sec",
            "range": "stddev: 0.001317545965373267",
            "extra": "mean: 27.162192600007984 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 35.99256220891485,
            "unit": "iter/sec",
            "range": "stddev: 0.00032126807845933006",
            "extra": "mean: 27.783518000069307 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 35.48067033662222,
            "unit": "iter/sec",
            "range": "stddev: 0.00028168109042442277",
            "extra": "mean: 28.18436039997323 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05617691905760457,
            "unit": "iter/sec",
            "range": "stddev: 0.025125946478685702",
            "extra": "mean: 17.80090501180007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05635079547318629,
            "unit": "iter/sec",
            "range": "stddev: 0.06452152339900047",
            "extra": "mean: 17.74597841259997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05644093089965322,
            "unit": "iter/sec",
            "range": "stddev: 0.01918356448789157",
            "extra": "mean: 17.717638317800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05653570216206713,
            "unit": "iter/sec",
            "range": "stddev: 0.03045426370020959",
            "extra": "mean: 17.687938094999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.056468575105134304,
            "unit": "iter/sec",
            "range": "stddev: 0.08287769536838195",
            "extra": "mean: 17.708964643399987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.056754327397374696,
            "unit": "iter/sec",
            "range": "stddev: 0.010432447957486265",
            "extra": "mean: 17.619801799400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.057150069442432144,
            "unit": "iter/sec",
            "range": "stddev: 0.015870155162004244",
            "extra": "mean: 17.497791512000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05713103666999488,
            "unit": "iter/sec",
            "range": "stddev: 0.0266735712441661",
            "extra": "mean: 17.503620768800054 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05697537337646383,
            "unit": "iter/sec",
            "range": "stddev: 0.063706766255082",
            "extra": "mean: 17.551442680200033 sec\nrounds: 5"
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
          "id": "2ac7f25c616cbefc7e4f8ce5b596073ff975267a",
          "message": "[BugFix,CI] Fix macos codecov install (#1039)",
          "timestamp": "2023-04-11T14:23:17+01:00",
          "tree_id": "ea2548a42d15e700bac57fba1551e016cd7eba3b",
          "url": "https://github.com/pytorch/rl/commit/2ac7f25c616cbefc7e4f8ce5b596073ff975267a"
        },
        "date": 1681221266174,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06521142902339211,
            "unit": "iter/sec",
            "range": "stddev: 0.06165706474958396",
            "extra": "mean: 15.334735260000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1172422310851799,
            "unit": "iter/sec",
            "range": "stddev: 0.15761418820240936",
            "extra": "mean: 8.5293497978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11848009806052337,
            "unit": "iter/sec",
            "range": "stddev: 0.04292367687278153",
            "extra": "mean: 8.440236093399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1032818781891853,
            "unit": "iter/sec",
            "range": "stddev: 0.04370876269211613",
            "extra": "mean: 906.3866812000015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6283128778222136,
            "unit": "iter/sec",
            "range": "stddev: 0.056961825737399184",
            "extra": "mean: 1.5915637499999775 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.42335233146141354,
            "unit": "iter/sec",
            "range": "stddev: 0.043617790875677076",
            "extra": "mean: 2.3620987193999783 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5105774003020407,
            "unit": "iter/sec",
            "range": "stddev: 0.02825891650649394",
            "extra": "mean: 1.9585669075999703 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.342819519154137,
            "unit": "iter/sec",
            "range": "stddev: 0.0003756332018348234",
            "extra": "mean: 35.2823048999835 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2679585454512619,
            "unit": "iter/sec",
            "range": "stddev: 0.006719767217173184",
            "extra": "mean: 788.6693169799992 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3985.2269232758986,
            "unit": "iter/sec",
            "range": "stddev: 0.000037748679341202316",
            "extra": "mean: 250.92673999552065 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 79.87763359997503,
            "unit": "iter/sec",
            "range": "stddev: 0.00013103509599860926",
            "extra": "mean: 12.519149039992499 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1554017699203143,
            "unit": "iter/sec",
            "range": "stddev: 0.06188017313387615",
            "extra": "mean: 865.4997993199959 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 33.1030309347837,
            "unit": "iter/sec",
            "range": "stddev: 0.00035190138525122687",
            "extra": "mean: 30.208714179982508 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1702046179123362,
            "unit": "iter/sec",
            "range": "stddev: 0.0052960321591476785",
            "extra": "mean: 854.5514046799917 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.24679340087930968,
            "unit": "iter/sec",
            "range": "stddev: 0.030843404167844805",
            "extra": "mean: 4.051972201999979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2353343043517245,
            "unit": "iter/sec",
            "range": "stddev: 0.024203876394118105",
            "extra": "mean: 4.249274251600082 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2356550514262221,
            "unit": "iter/sec",
            "range": "stddev: 0.028570590348201204",
            "extra": "mean: 4.243490618799979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2486182391100413,
            "unit": "iter/sec",
            "range": "stddev: 0.02065905318559243",
            "extra": "mean: 4.022231046200067 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23696051558766953,
            "unit": "iter/sec",
            "range": "stddev: 0.011452735611152943",
            "extra": "mean: 4.220112357199969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2366707967446796,
            "unit": "iter/sec",
            "range": "stddev: 0.02479786667500144",
            "extra": "mean: 4.225278377200039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.24683037293590354,
            "unit": "iter/sec",
            "range": "stddev: 0.03214819903120234",
            "extra": "mean: 4.051365267999972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23579389108806928,
            "unit": "iter/sec",
            "range": "stddev: 0.029823002429271515",
            "extra": "mean: 4.240991975599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23472895557117118,
            "unit": "iter/sec",
            "range": "stddev: 0.04750179033338022",
            "extra": "mean: 4.260232818599979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 39.239281238940166,
            "unit": "iter/sec",
            "range": "stddev: 0.000504292871638134",
            "extra": "mean: 25.484666600050332 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.45763719158132,
            "unit": "iter/sec",
            "range": "stddev: 0.00020447076115354273",
            "extra": "mean: 26.69682539999485 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.380373832367624,
            "unit": "iter/sec",
            "range": "stddev: 0.0002883112421766339",
            "extra": "mean: 26.752006400056416 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 39.614566117489204,
            "unit": "iter/sec",
            "range": "stddev: 0.00019302885934232005",
            "extra": "mean: 25.243240000008882 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 37.26350418956317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005619827370213921",
            "extra": "mean: 26.835908800012476 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 37.799743174952205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004895023641952702",
            "extra": "mean: 26.455206199989334 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 40.40750549045718,
            "unit": "iter/sec",
            "range": "stddev: 0.0005917019643315701",
            "extra": "mean: 24.74787760002073 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 37.327314418363194,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210014431051177",
            "extra": "mean: 26.790033399993263 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 37.35016728282084,
            "unit": "iter/sec",
            "range": "stddev: 0.0009249418290962348",
            "extra": "mean: 26.77364179999131 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.07001648151202153,
            "unit": "iter/sec",
            "range": "stddev: 0.06731908193103914",
            "extra": "mean: 14.282351503599966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.07055291178524306,
            "unit": "iter/sec",
            "range": "stddev: 0.09037944804063146",
            "extra": "mean: 14.173759448000009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.07147833304394326,
            "unit": "iter/sec",
            "range": "stddev: 0.02926527581590115",
            "extra": "mean: 13.990253513399967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.07244939112121906,
            "unit": "iter/sec",
            "range": "stddev: 0.10579676241674298",
            "extra": "mean: 13.802738498200005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.07293706830476941,
            "unit": "iter/sec",
            "range": "stddev: 0.03660161646673434",
            "extra": "mean: 13.710449614199934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0730920820064595,
            "unit": "iter/sec",
            "range": "stddev: 0.02769828901952164",
            "extra": "mean: 13.681372490000012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.07279183371995046,
            "unit": "iter/sec",
            "range": "stddev: 0.03276553245087843",
            "extra": "mean: 13.737804763200028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07275161070720229,
            "unit": "iter/sec",
            "range": "stddev: 0.03165489215493343",
            "extra": "mean: 13.745400139999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.07264359915331328,
            "unit": "iter/sec",
            "range": "stddev: 0.019332712327937367",
            "extra": "mean: 13.765837756600058 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}