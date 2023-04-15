window.BENCHMARK_DATA = {
  "lastUpdate": 1681544565557,
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
          "id": "05460fd1806926ce41a1e9ae6bf1f36b7599e56e",
          "message": "[Refactor] resetting envs in collectors always passes the _reset entry (#1061)",
          "timestamp": "2023-04-15T08:12:44+01:00",
          "tree_id": "2bbf64e85faa314ac1c749b2998117806af38edd",
          "url": "https://github.com/pytorch/rl/commit/05460fd1806926ce41a1e9ae6bf1f36b7599e56e"
        },
        "date": 1681544517513,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05993269949997798,
            "unit": "iter/sec",
            "range": "stddev: 0.055871614085378725",
            "extra": "mean: 16.68538224279998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11052903351597658,
            "unit": "iter/sec",
            "range": "stddev: 0.030776862220548165",
            "extra": "mean: 9.047396581600015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11231237972827358,
            "unit": "iter/sec",
            "range": "stddev: 0.03885860867220411",
            "extra": "mean: 8.903737970999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.080300439866318,
            "unit": "iter/sec",
            "range": "stddev: 0.03473522494783058",
            "extra": "mean: 925.6684188000008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.619140965492218,
            "unit": "iter/sec",
            "range": "stddev: 0.002611536271023323",
            "extra": "mean: 1.6151410676000069 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40940209465537825,
            "unit": "iter/sec",
            "range": "stddev: 0.001898946124514603",
            "extra": "mean: 2.4425864280000043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.47086977850547146,
            "unit": "iter/sec",
            "range": "stddev: 0.028565709639900266",
            "extra": "mean: 2.1237294166000082 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.42786290917816,
            "unit": "iter/sec",
            "range": "stddev: 0.0002346581273855429",
            "extra": "mean: 35.17675609998605 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3898947424327701,
            "unit": "iter/sec",
            "range": "stddev: 0.00509326842048764",
            "extra": "mean: 719.4789428800004 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4058.1747467383448,
            "unit": "iter/sec",
            "range": "stddev: 0.000028678419742182627",
            "extra": "mean: 246.41619999329126 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.22083971726042,
            "unit": "iter/sec",
            "range": "stddev: 0.00010734082607874133",
            "extra": "mean: 12.784316859990668 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2849237808898812,
            "unit": "iter/sec",
            "range": "stddev: 0.004041278830771399",
            "extra": "mean: 778.2562785999994 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.083370089910645,
            "unit": "iter/sec",
            "range": "stddev: 0.00024910515343552807",
            "extra": "mean: 31.16879546000291 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2893455823740987,
            "unit": "iter/sec",
            "range": "stddev: 0.00433566051409979",
            "extra": "mean: 775.5872542399993 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22724834927836404,
            "unit": "iter/sec",
            "range": "stddev: 0.02020051109661419",
            "extra": "mean: 4.400472008600014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21866454688589965,
            "unit": "iter/sec",
            "range": "stddev: 0.02197205745202004",
            "extra": "mean: 4.5732150650000225 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2193446868296335,
            "unit": "iter/sec",
            "range": "stddev: 0.02193046420974416",
            "extra": "mean: 4.559034524399976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22792176295187316,
            "unit": "iter/sec",
            "range": "stddev: 0.026361670805639937",
            "extra": "mean: 4.387470450599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21909619827111815,
            "unit": "iter/sec",
            "range": "stddev: 0.013606454768482436",
            "extra": "mean: 4.5642051660000105 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21754356086334695,
            "unit": "iter/sec",
            "range": "stddev: 0.09412082905438585",
            "extra": "mean: 4.596780506999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22828400108528846,
            "unit": "iter/sec",
            "range": "stddev: 0.012655850377256332",
            "extra": "mean: 4.38050846860001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21928253189512406,
            "unit": "iter/sec",
            "range": "stddev: 0.02282647673081043",
            "extra": "mean: 4.56032676819998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21777866148661193,
            "unit": "iter/sec",
            "range": "stddev: 0.11877860523482539",
            "extra": "mean: 4.591818101800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.07621588631906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004172744370562746",
            "extra": "mean: 26.971468800002185 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 35.28495401998012,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041650243150479",
            "extra": "mean: 28.340691599987622 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 35.400874941155045,
            "unit": "iter/sec",
            "range": "stddev: 0.00026148020027413926",
            "extra": "mean: 28.247889399972337 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 36.5385772252328,
            "unit": "iter/sec",
            "range": "stddev: 0.00027384016885197886",
            "extra": "mean: 27.36833439998918 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.96603235277752,
            "unit": "iter/sec",
            "range": "stddev: 0.0005152881872298886",
            "extra": "mean: 28.599184199993033 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.77055038973849,
            "unit": "iter/sec",
            "range": "stddev: 0.0004662635288269079",
            "extra": "mean: 28.759970399983104 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.42131625645094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005884459508498071",
            "extra": "mean: 26.722737200020674 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.80753403785928,
            "unit": "iter/sec",
            "range": "stddev: 0.0005874954774722769",
            "extra": "mean: 28.729412399979992 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 35.49017136613282,
            "unit": "iter/sec",
            "range": "stddev: 0.00032163425223032024",
            "extra": "mean: 28.176815200004057 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.056215305133052035,
            "unit": "iter/sec",
            "range": "stddev: 0.0913562083330363",
            "extra": "mean: 17.788749836600026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05614147665113945,
            "unit": "iter/sec",
            "range": "stddev: 0.020601436165180037",
            "extra": "mean: 17.81214281580005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05616121102915774,
            "unit": "iter/sec",
            "range": "stddev: 0.024684288744025347",
            "extra": "mean: 17.805883841800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05622055846551956,
            "unit": "iter/sec",
            "range": "stddev: 0.028518741817652123",
            "extra": "mean: 17.787087629399956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05637941462464767,
            "unit": "iter/sec",
            "range": "stddev: 0.044018342524365386",
            "extra": "mean: 17.73697025160004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.057217994791540716,
            "unit": "iter/sec",
            "range": "stddev: 0.05517642483406043",
            "extra": "mean: 17.477019312599943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05738109663725332,
            "unit": "iter/sec",
            "range": "stddev: 0.02587394697158855",
            "extra": "mean: 17.42734207960002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0568305959768755,
            "unit": "iter/sec",
            "range": "stddev: 0.050553813262238505",
            "extra": "mean: 17.596155430199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.056956583348150645,
            "unit": "iter/sec",
            "range": "stddev: 0.04565247058474943",
            "extra": "mean: 17.55723291699992 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}