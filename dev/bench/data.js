window.BENCHMARK_DATA = {
  "lastUpdate": 1681403251172,
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
          "id": "40004e6c7e48a060d21d97743a4f4a0dee6ad8a9",
          "message": "[Doc] A bit more doc on modules (#1056)",
          "timestamp": "2023-04-13T16:56:37+01:00",
          "tree_id": "5610ee39f65ef1f83259505c8f165e1482859696",
          "url": "https://github.com/pytorch/rl/commit/40004e6c7e48a060d21d97743a4f4a0dee6ad8a9"
        },
        "date": 1681403191726,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05972857679672493,
            "unit": "iter/sec",
            "range": "stddev: 0.23642198199083453",
            "extra": "mean: 16.742404618199988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1099128507188152,
            "unit": "iter/sec",
            "range": "stddev: 0.44780233445902856",
            "extra": "mean: 9.098117221599978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11325869750042497,
            "unit": "iter/sec",
            "range": "stddev: 0.031566425966940044",
            "extra": "mean: 8.829343989200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0487373911491054,
            "unit": "iter/sec",
            "range": "stddev: 0.0358962908778113",
            "extra": "mean: 953.5275546000094 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6047413618268614,
            "unit": "iter/sec",
            "range": "stddev: 0.005000499898541504",
            "extra": "mean: 1.6535994775999825 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4016650061404148,
            "unit": "iter/sec",
            "range": "stddev: 0.007440704331807711",
            "extra": "mean: 2.4896368484000275 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4709010890805481,
            "unit": "iter/sec",
            "range": "stddev: 0.05701668866938268",
            "extra": "mean: 2.1235882082000215 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.621094626090642,
            "unit": "iter/sec",
            "range": "stddev: 0.0016159861561081956",
            "extra": "mean: 34.93926466000403 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3914621396520979,
            "unit": "iter/sec",
            "range": "stddev: 0.004745900927150812",
            "extra": "mean: 718.6684937399923 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3655.8777813458237,
            "unit": "iter/sec",
            "range": "stddev: 0.000040024163382582964",
            "extra": "mean: 273.5321200020735 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.9179209049934,
            "unit": "iter/sec",
            "range": "stddev: 0.00013764332459541997",
            "extra": "mean: 12.671393119996992 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2697591481723902,
            "unit": "iter/sec",
            "range": "stddev: 0.01829344556431348",
            "extra": "mean: 787.5509315600016 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.44939757384979,
            "unit": "iter/sec",
            "range": "stddev: 0.00019808823100497778",
            "extra": "mean: 30.81721310000148 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2743277559420518,
            "unit": "iter/sec",
            "range": "stddev: 0.005025022334417828",
            "extra": "mean: 784.7274732399956 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18993960502838875,
            "unit": "iter/sec",
            "range": "stddev: 1.5824651345684129",
            "extra": "mean: 5.264831417600021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2174254254870456,
            "unit": "iter/sec",
            "range": "stddev: 0.01974592358923391",
            "extra": "mean: 4.599278109999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21721692522574573,
            "unit": "iter/sec",
            "range": "stddev: 0.009253648831183844",
            "extra": "mean: 4.603692824400014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22293270515691055,
            "unit": "iter/sec",
            "range": "stddev: 0.016547379524964448",
            "extra": "mean: 4.4856585725999825 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21734642218879846,
            "unit": "iter/sec",
            "range": "stddev: 0.020431314093546222",
            "extra": "mean: 4.60094990259995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21573863224282883,
            "unit": "iter/sec",
            "range": "stddev: 0.08674374657217244",
            "extra": "mean: 4.635238434600024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22296448607868413,
            "unit": "iter/sec",
            "range": "stddev: 0.031234036186011567",
            "extra": "mean: 4.485019195600057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.215537717062944,
            "unit": "iter/sec",
            "range": "stddev: 0.026343113718161955",
            "extra": "mean: 4.6395592085999855 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2146876753206113,
            "unit": "iter/sec",
            "range": "stddev: 0.11548561763375188",
            "extra": "mean: 4.657929238399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 36.29041444809306,
            "unit": "iter/sec",
            "range": "stddev: 0.0003225484407509931",
            "extra": "mean: 27.555485799985036 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 35.23114094647644,
            "unit": "iter/sec",
            "range": "stddev: 0.00037123368291596466",
            "extra": "mean: 28.38397999994413 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.99264636533742,
            "unit": "iter/sec",
            "range": "stddev: 0.00029162184709725144",
            "extra": "mean: 28.577432800011593 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 36.30114954494927,
            "unit": "iter/sec",
            "range": "stddev: 0.00024771553164325684",
            "extra": "mean: 27.547336999941763 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.94275834576087,
            "unit": "iter/sec",
            "range": "stddev: 0.00031140068343798425",
            "extra": "mean: 28.618232999951942 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.929641711672794,
            "unit": "iter/sec",
            "range": "stddev: 0.0004355587764946772",
            "extra": "mean: 28.628979600034654 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.00770219151556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004010363848456249",
            "extra": "mean: 27.771836000010808 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.706227953451176,
            "unit": "iter/sec",
            "range": "stddev: 0.00046997921112462986",
            "extra": "mean: 28.81327240002065 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.52904683209572,
            "unit": "iter/sec",
            "range": "stddev: 0.00047855524483181495",
            "extra": "mean: 28.961123799990673 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05425929733282535,
            "unit": "iter/sec",
            "range": "stddev: 0.10459492554833037",
            "extra": "mean: 18.43002119739999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05428710461978375,
            "unit": "iter/sec",
            "range": "stddev: 0.04150268849896544",
            "extra": "mean: 18.420580854400033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.054866920532357,
            "unit": "iter/sec",
            "range": "stddev: 0.05880488602083654",
            "extra": "mean: 18.225918099599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05510776577395917,
            "unit": "iter/sec",
            "range": "stddev: 0.08810227591230341",
            "extra": "mean: 18.146262798999988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05541552189863393,
            "unit": "iter/sec",
            "range": "stddev: 0.04311833423277959",
            "extra": "mean: 18.045485555999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.055433315652400804,
            "unit": "iter/sec",
            "range": "stddev: 0.03693417983161173",
            "extra": "mean: 18.039693065999927 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.0556747572113246,
            "unit": "iter/sec",
            "range": "stddev: 0.017412660928374606",
            "extra": "mean: 17.9614613532 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05564956209153116,
            "unit": "iter/sec",
            "range": "stddev: 0.020654381049453507",
            "extra": "mean: 17.969593334000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05547134664356107,
            "unit": "iter/sec",
            "range": "stddev: 0.04738450939123506",
            "extra": "mean: 18.027325105799946 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}