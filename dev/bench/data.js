window.BENCHMARK_DATA = {
  "lastUpdate": 1681221222933,
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
    ]
  }
}