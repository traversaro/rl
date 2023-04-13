window.BENCHMARK_DATA = {
  "lastUpdate": 1681393919172,
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
          "id": "01316ecd5c8b8b8c41c2ce949dc0235a92fac761",
          "message": "[Doc] Document tensordict modules (#1053)",
          "timestamp": "2023-04-13T14:21:31+01:00",
          "tree_id": "fb305e88c946f2bb09dbc151ce3e463ae333aa38",
          "url": "https://github.com/pytorch/rl/commit/01316ecd5c8b8b8c41c2ce949dc0235a92fac761"
        },
        "date": 1681393863253,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06034838303200301,
            "unit": "iter/sec",
            "range": "stddev: 0.205845054991163",
            "extra": "mean: 16.570452260000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11265918438179047,
            "unit": "iter/sec",
            "range": "stddev: 0.025676774496622853",
            "extra": "mean: 8.876329129199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1143854028271149,
            "unit": "iter/sec",
            "range": "stddev: 0.036779567105927544",
            "extra": "mean: 8.742374247800011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0646583607746638,
            "unit": "iter/sec",
            "range": "stddev: 0.035596239608031016",
            "extra": "mean: 939.2684421999775 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.605299464655023,
            "unit": "iter/sec",
            "range": "stddev: 0.029351107956415073",
            "extra": "mean: 1.652074813199988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4030550174787209,
            "unit": "iter/sec",
            "range": "stddev: 0.030593259676731623",
            "extra": "mean: 2.481050865599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4772027287535896,
            "unit": "iter/sec",
            "range": "stddev: 0.04724257671569775",
            "extra": "mean: 2.0955454353999814 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 29.693197248610183,
            "unit": "iter/sec",
            "range": "stddev: 0.0004305848307227993",
            "extra": "mean: 33.6777475199915 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3991755784596605,
            "unit": "iter/sec",
            "range": "stddev: 0.004172603656732425",
            "extra": "mean: 714.7065853599952 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4360.23987950152,
            "unit": "iter/sec",
            "range": "stddev: 0.00002852352564433304",
            "extra": "mean: 229.3451799982904 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 80.74225763180183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000640626333288314",
            "extra": "mean: 12.385088419996464 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2817721073864605,
            "unit": "iter/sec",
            "range": "stddev: 0.005447637953614553",
            "extra": "mean: 780.169886860001 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 33.11688508153681,
            "unit": "iter/sec",
            "range": "stddev: 0.000248541776308561",
            "extra": "mean: 30.196076639995226 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2807774179742488,
            "unit": "iter/sec",
            "range": "stddev: 0.0046576658990231294",
            "extra": "mean: 780.7757897399983 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.23150814222708938,
            "unit": "iter/sec",
            "range": "stddev: 0.017440325135160868",
            "extra": "mean: 4.319502503800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.22210967042705937,
            "unit": "iter/sec",
            "range": "stddev: 0.026428100374273945",
            "extra": "mean: 4.502280328799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.22140965522319372,
            "unit": "iter/sec",
            "range": "stddev: 0.08586059968073208",
            "extra": "mean: 4.5165148692 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23318540955555273,
            "unit": "iter/sec",
            "range": "stddev: 0.04171057991012286",
            "extra": "mean: 4.288432976599961 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22087650932415953,
            "unit": "iter/sec",
            "range": "stddev: 0.028594889407839493",
            "extra": "mean: 4.527416713799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21801524165605982,
            "unit": "iter/sec",
            "range": "stddev: 0.09530253668563335",
            "extra": "mean: 4.586835270799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.23267454390368142,
            "unit": "iter/sec",
            "range": "stddev: 0.03810399694419152",
            "extra": "mean: 4.297848759999988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.22309174992142658,
            "unit": "iter/sec",
            "range": "stddev: 0.025202963065560687",
            "extra": "mean: 4.4824606932000055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21993825933124814,
            "unit": "iter/sec",
            "range": "stddev: 0.13553189672354357",
            "extra": "mean: 4.5467305372000055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.19193317385744,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374628823519197",
            "extra": "mean: 26.887550999981613 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 35.74075122998047,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763174725266125",
            "extra": "mean: 27.979266400006964 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.93560208672559,
            "unit": "iter/sec",
            "range": "stddev: 0.00012406210460603115",
            "extra": "mean: 28.624095200007105 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 36.223298611233,
            "unit": "iter/sec",
            "range": "stddev: 0.0003305397015225765",
            "extra": "mean: 27.60654159999376 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.901582180155465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003534454195521984",
            "extra": "mean: 28.65199620000567 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 35.141784625628524,
            "unit": "iter/sec",
            "range": "stddev: 0.00017858569741181687",
            "extra": "mean: 28.456153000001905 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.15059153510143,
            "unit": "iter/sec",
            "range": "stddev: 0.00038269711393749246",
            "extra": "mean: 26.917471800015846 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.00167603644573,
            "unit": "iter/sec",
            "range": "stddev: 0.00021892123011047688",
            "extra": "mean: 27.77648459998545 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 35.643268030278165,
            "unit": "iter/sec",
            "range": "stddev: 0.00021187463710398586",
            "extra": "mean: 28.05578880002031 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0545818428739182,
            "unit": "iter/sec",
            "range": "stddev: 0.0767461516806423",
            "extra": "mean: 18.32111096560002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05474739529801056,
            "unit": "iter/sec",
            "range": "stddev: 0.026535535152722108",
            "extra": "mean: 18.265709163999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05508479680031657,
            "unit": "iter/sec",
            "range": "stddev: 0.03658388051664948",
            "extra": "mean: 18.15382933380001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05555497175983838,
            "unit": "iter/sec",
            "range": "stddev: 0.01880355378465993",
            "extra": "mean: 18.000189151800033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05578340567947933,
            "unit": "iter/sec",
            "range": "stddev: 0.1055134408183331",
            "extra": "mean: 17.926478095400036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.056081111775281516,
            "unit": "iter/sec",
            "range": "stddev: 0.01639209554633018",
            "extra": "mean: 17.831315541799995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.056084001420630095,
            "unit": "iter/sec",
            "range": "stddev: 0.018016080055671298",
            "extra": "mean: 17.830396809599915 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05607761001049359,
            "unit": "iter/sec",
            "range": "stddev: 0.01767026221971766",
            "extra": "mean: 17.83242901780004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05595972433189325,
            "unit": "iter/sec",
            "range": "stddev: 0.05171821936704964",
            "extra": "mean: 17.869995106999976 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}