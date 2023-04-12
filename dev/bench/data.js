window.BENCHMARK_DATA = {
  "lastUpdate": 1681284610592,
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
          "id": "406efb2d73fbb135433f34359ed88cccef157ed1",
          "message": "[BugFix] kwargs update in distributed collectors (#1040)",
          "timestamp": "2023-04-12T07:54:05+01:00",
          "tree_id": "e875d0bbf09bed8097a79501de7955f97fe64051",
          "url": "https://github.com/pytorch/rl/commit/406efb2d73fbb135433f34359ed88cccef157ed1"
        },
        "date": 1681284547471,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05601934624375955,
            "unit": "iter/sec",
            "range": "stddev: 0.11089246663638018",
            "extra": "mean: 17.8509759048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10016998534583843,
            "unit": "iter/sec",
            "range": "stddev: 0.254630972545534",
            "extra": "mean: 9.983030311400011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1017383451141431,
            "unit": "iter/sec",
            "range": "stddev: 0.19590995966811198",
            "extra": "mean: 9.82913569980003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9689603812835663,
            "unit": "iter/sec",
            "range": "stddev: 0.04411719700967186",
            "extra": "mean: 1.0320339400000194 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5492962567799188,
            "unit": "iter/sec",
            "range": "stddev: 0.05415102427158437",
            "extra": "mean: 1.8205112225999756 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.368824749986849,
            "unit": "iter/sec",
            "range": "stddev: 0.045064755658592984",
            "extra": "mean: 2.7113147912000386 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.42413244667844047,
            "unit": "iter/sec",
            "range": "stddev: 0.032735073647153",
            "extra": "mean: 2.357754064399978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 25.61544222466005,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190599789977291",
            "extra": "mean: 39.03895124001792 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2276396473789484,
            "unit": "iter/sec",
            "range": "stddev: 0.005892244289505074",
            "extra": "mean: 814.5712808600092 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3134.9892512165165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004403496073917303",
            "extra": "mean: 318.9803600162122 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 69.26491344442273,
            "unit": "iter/sec",
            "range": "stddev: 0.00020526185420346852",
            "extra": "mean: 14.437324040004569 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1264193667022668,
            "unit": "iter/sec",
            "range": "stddev: 0.008469283571745034",
            "extra": "mean: 887.7688271000034 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.848124583588202,
            "unit": "iter/sec",
            "range": "stddev: 0.0003170402257727043",
            "extra": "mean: 34.66429844000686 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1234561060735138,
            "unit": "iter/sec",
            "range": "stddev: 0.010142170003076222",
            "extra": "mean: 890.1104320799914 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2136205180677994,
            "unit": "iter/sec",
            "range": "stddev: 0.013320874985099243",
            "extra": "mean: 4.681198271799985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20637013504691273,
            "unit": "iter/sec",
            "range": "stddev: 0.051218118688166954",
            "extra": "mean: 4.8456623812000545 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20809480278411932,
            "unit": "iter/sec",
            "range": "stddev: 0.030901711869232698",
            "extra": "mean: 4.805502043399974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21174294653047687,
            "unit": "iter/sec",
            "range": "stddev: 0.018760016867753554",
            "extra": "mean: 4.722707492200061 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20613440443412884,
            "unit": "iter/sec",
            "range": "stddev: 0.04408817829260839",
            "extra": "mean: 4.851203770399979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20605738809010357,
            "unit": "iter/sec",
            "range": "stddev: 0.01633929745168245",
            "extra": "mean: 4.853016964199924 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21241353106672087,
            "unit": "iter/sec",
            "range": "stddev: 0.05129815909147845",
            "extra": "mean: 4.707798015399931 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20643440665349833,
            "unit": "iter/sec",
            "range": "stddev: 0.03493177680196367",
            "extra": "mean: 4.844153725200021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.20644539697350564,
            "unit": "iter/sec",
            "range": "stddev: 0.0031515208551670462",
            "extra": "mean: 4.843895841999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.411702252687064,
            "unit": "iter/sec",
            "range": "stddev: 0.0002576308340060437",
            "extra": "mean: 29.059881800003495 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.0690547074546,
            "unit": "iter/sec",
            "range": "stddev: 0.000256183405809125",
            "extra": "mean: 30.239751599992815 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 32.11249546652863,
            "unit": "iter/sec",
            "range": "stddev: 0.0022309551962860215",
            "extra": "mean: 31.140525999990132 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.62284146486821,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379834989039135",
            "extra": "mean: 29.74168619998636 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.11272159170341,
            "unit": "iter/sec",
            "range": "stddev: 0.00037527378959652057",
            "extra": "mean: 30.19987340003354 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.10197874892725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002521659478555983",
            "extra": "mean: 30.209674399975484 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.48028507637077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487781920679354",
            "extra": "mean: 29.00208040000507 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.20340729383872,
            "unit": "iter/sec",
            "range": "stddev: 0.00019371287874091024",
            "extra": "mean: 30.117390999976124 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.30657128128507,
            "unit": "iter/sec",
            "range": "stddev: 0.00031012646019620724",
            "extra": "mean: 30.024105199981932 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.062251005430316,
            "unit": "iter/sec",
            "range": "stddev: 0.08416353797746767",
            "extra": "mean: 16.06399757059994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06235148518371575,
            "unit": "iter/sec",
            "range": "stddev: 0.09316109407258615",
            "extra": "mean: 16.038110352200057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06232834594954766,
            "unit": "iter/sec",
            "range": "stddev: 0.08149643449137967",
            "extra": "mean: 16.044064458400044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06210574143383074,
            "unit": "iter/sec",
            "range": "stddev: 0.05924622675852065",
            "extra": "mean: 16.101570916199897 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06195982134034424,
            "unit": "iter/sec",
            "range": "stddev: 0.06565862746444924",
            "extra": "mean: 16.139491340799985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06193480232614602,
            "unit": "iter/sec",
            "range": "stddev: 0.061820484334182",
            "extra": "mean: 16.146011005799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06208056455941414,
            "unit": "iter/sec",
            "range": "stddev: 0.044405281062587044",
            "extra": "mean: 16.10810093460009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06218954751974605,
            "unit": "iter/sec",
            "range": "stddev: 0.06506059839022472",
            "extra": "mean: 16.079872581200014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06198096183558458,
            "unit": "iter/sec",
            "range": "stddev: 0.08720001484997596",
            "extra": "mean: 16.133986475599976 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}