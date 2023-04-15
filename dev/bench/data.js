window.BENCHMARK_DATA = {
  "lastUpdate": 1681545201710,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
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
          "id": "05460fd1806926ce41a1e9ae6bf1f36b7599e56e",
          "message": "[Refactor] resetting envs in collectors always passes the _reset entry (#1061)",
          "timestamp": "2023-04-15T08:12:44+01:00",
          "tree_id": "2bbf64e85faa314ac1c749b2998117806af38edd",
          "url": "https://github.com/pytorch/rl/commit/05460fd1806926ce41a1e9ae6bf1f36b7599e56e"
        },
        "date": 1681545129772,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04462325645236372,
            "unit": "iter/sec",
            "range": "stddev: 0.6535945507648735",
            "extra": "mean: 22.409839162400022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08151483125396652,
            "unit": "iter/sec",
            "range": "stddev: 0.15652839856817669",
            "extra": "mean: 12.267706190600006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08290381876671413,
            "unit": "iter/sec",
            "range": "stddev: 0.15153314408933477",
            "extra": "mean: 12.062170535399991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8120158008244727,
            "unit": "iter/sec",
            "range": "stddev: 0.035618947176050436",
            "extra": "mean: 1.2315031296000143 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4561639024658303,
            "unit": "iter/sec",
            "range": "stddev: 0.055014783627609504",
            "extra": "mean: 2.1921945041999606 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2884967677172654,
            "unit": "iter/sec",
            "range": "stddev: 0.1140071346423937",
            "extra": "mean: 3.4662433410000175 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3544240729651614,
            "unit": "iter/sec",
            "range": "stddev: 0.0721541380210657",
            "extra": "mean: 2.8214787772000363 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 16.445820679982013,
            "unit": "iter/sec",
            "range": "stddev: 0.0022147761695135667",
            "extra": "mean: 60.80572198000482 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.218009958291697,
            "unit": "iter/sec",
            "range": "stddev: 0.01799718924835325",
            "extra": "mean: 821.0113498600094 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2668.9937445787123,
            "unit": "iter/sec",
            "range": "stddev: 0.00004728184725180691",
            "extra": "mean: 374.6730399916487 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 58.885826390174124,
            "unit": "iter/sec",
            "range": "stddev: 0.0007052983647651981",
            "extra": "mean: 16.982015219996356 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.0802153497877698,
            "unit": "iter/sec",
            "range": "stddev: 0.03418450142643448",
            "extra": "mean: 925.7413349999797 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 18.526763147689795,
            "unit": "iter/sec",
            "range": "stddev: 0.0030179479598376967",
            "extra": "mean: 53.97596936001719 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.0236282591378394,
            "unit": "iter/sec",
            "range": "stddev: 0.03217905739966469",
            "extra": "mean: 976.9171484599883 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1993579287084646,
            "unit": "iter/sec",
            "range": "stddev: 0.2679351740329043",
            "extra": "mean: 5.0161034802000355 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1954345733585549,
            "unit": "iter/sec",
            "range": "stddev: 0.08841592407988387",
            "extra": "mean: 5.116801918999999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1961174383157984,
            "unit": "iter/sec",
            "range": "stddev: 0.08133215721938974",
            "extra": "mean: 5.098985631199957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.20518701253411814,
            "unit": "iter/sec",
            "range": "stddev: 0.13519758148697325",
            "extra": "mean: 4.87360280580001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19861741266269917,
            "unit": "iter/sec",
            "range": "stddev: 0.04803124129842142",
            "extra": "mean: 5.034805290200029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19798291744903843,
            "unit": "iter/sec",
            "range": "stddev: 0.31707432666338226",
            "extra": "mean: 5.050940823000064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20329838955296098,
            "unit": "iter/sec",
            "range": "stddev: 0.5529435749247786",
            "extra": "mean: 4.91887811900001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20078287808564443,
            "unit": "iter/sec",
            "range": "stddev: 0.18739442861519623",
            "extra": "mean: 4.980504361400017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.19476344354033184,
            "unit": "iter/sec",
            "range": "stddev: 0.15055674771148092",
            "extra": "mean: 5.134433761399987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 31.99492258492425,
            "unit": "iter/sec",
            "range": "stddev: 0.0011955534004773583",
            "extra": "mean: 31.254959200032317 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 31.463099969399096,
            "unit": "iter/sec",
            "range": "stddev: 0.0009160003680698916",
            "extra": "mean: 31.783263599982092 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.706447893448658,
            "unit": "iter/sec",
            "range": "stddev: 0.002498284839388152",
            "extra": "mean: 32.56645000001299 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 32.768993375475006,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993993563613138",
            "extra": "mean: 30.516653000040606 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 31.85500600248739,
            "unit": "iter/sec",
            "range": "stddev: 0.0004330588220687896",
            "extra": "mean: 31.392240199920707 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 31.62763174874044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007462211459593231",
            "extra": "mean: 31.617922199939127 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.24570983251306,
            "unit": "iter/sec",
            "range": "stddev: 0.0009269223469737303",
            "extra": "mean: 31.011877399942023 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.07325243489126,
            "unit": "iter/sec",
            "range": "stddev: 0.0009062709724628699",
            "extra": "mean: 31.17862779990901 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 31.317374241556966,
            "unit": "iter/sec",
            "range": "stddev: 0.00027100913893374174",
            "extra": "mean: 31.931157200051533 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04679912479848124,
            "unit": "iter/sec",
            "range": "stddev: 0.4206948761901072",
            "extra": "mean: 21.36792096660006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04923872295288565,
            "unit": "iter/sec",
            "range": "stddev: 0.6073375710841841",
            "extra": "mean: 20.30921884299996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0501269742810798,
            "unit": "iter/sec",
            "range": "stddev: 0.6876056373338221",
            "extra": "mean: 19.9493389406 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.049525221077321956,
            "unit": "iter/sec",
            "range": "stddev: 0.5254715066565078",
            "extra": "mean: 20.191732176999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.048490718702368346,
            "unit": "iter/sec",
            "range": "stddev: 0.8119792366685764",
            "extra": "mean: 20.622503166800016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.050249806868402434,
            "unit": "iter/sec",
            "range": "stddev: 0.6993190844032392",
            "extra": "mean: 19.900573998599974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05151836382248715,
            "unit": "iter/sec",
            "range": "stddev: 0.4425954974209595",
            "extra": "mean: 19.410554330599915 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04996796476578368,
            "unit": "iter/sec",
            "range": "stddev: 0.7166417325330622",
            "extra": "mean: 20.012822308999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.053104461013971864,
            "unit": "iter/sec",
            "range": "stddev: 0.08260297210339058",
            "extra": "mean: 18.830809707999833 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}