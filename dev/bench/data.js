window.BENCHMARK_DATA = {
  "lastUpdate": 1681039728727,
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
          "id": "87666f7d589b4d07397e2c9a7d990f27cae61e5c",
          "message": "Revert \"[Doc] Refactor DDPG and DQN tutos to narrow the scope\" (#1032)",
          "timestamp": "2023-04-09T11:45:56+01:00",
          "tree_id": "89b3b32a99c73fe498d2abc0bf55ca1c91bd695d",
          "url": "https://github.com/pytorch/rl/commit/87666f7d589b4d07397e2c9a7d990f27cae61e5c"
        },
        "date": 1681039677698,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0647806426386986,
            "unit": "iter/sec",
            "range": "stddev: 0.07129081162521984",
            "extra": "mean: 15.436710092199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11555028162952741,
            "unit": "iter/sec",
            "range": "stddev: 0.1257781035666121",
            "extra": "mean: 8.654241131200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11729526806163035,
            "unit": "iter/sec",
            "range": "stddev: 0.04760368015294202",
            "extra": "mean: 8.525493112599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.091937794069293,
            "unit": "iter/sec",
            "range": "stddev: 0.04765986609335715",
            "extra": "mean: 915.8030846000202 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6272810854772809,
            "unit": "iter/sec",
            "range": "stddev: 0.053600231616948636",
            "extra": "mean: 1.5941816565999716 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.42334193037413986,
            "unit": "iter/sec",
            "range": "stddev: 0.049512704120650085",
            "extra": "mean: 2.362156753799991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5098138749308159,
            "unit": "iter/sec",
            "range": "stddev: 0.01837996885779418",
            "extra": "mean: 1.9615001653999797 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.211261680631562,
            "unit": "iter/sec",
            "range": "stddev: 0.0006622125252574719",
            "extra": "mean: 35.44683720000194 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2483453187792855,
            "unit": "iter/sec",
            "range": "stddev: 0.01593706137306657",
            "extra": "mean: 801.0603996800069 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3470.344621062099,
            "unit": "iter/sec",
            "range": "stddev: 0.00004329258869108547",
            "extra": "mean: 288.1558200101608 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.4709519431693,
            "unit": "iter/sec",
            "range": "stddev: 0.00017679359595616342",
            "extra": "mean: 12.743569120000302 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1438488438562484,
            "unit": "iter/sec",
            "range": "stddev: 0.0056632559970377664",
            "extra": "mean: 874.2413871999975 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.948669805109432,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148885980275854",
            "extra": "mean: 31.300207680010317 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1430110790433563,
            "unit": "iter/sec",
            "range": "stddev: 0.00686344557971557",
            "extra": "mean: 874.8821584799953 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.24181529608755892,
            "unit": "iter/sec",
            "range": "stddev: 0.0160570878675271",
            "extra": "mean: 4.135387695400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23290410844853385,
            "unit": "iter/sec",
            "range": "stddev: 0.015030554792389362",
            "extra": "mean: 4.293612537199943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.23319823552300822,
            "unit": "iter/sec",
            "range": "stddev: 0.016952966377509628",
            "extra": "mean: 4.288197111600084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24115058471137277,
            "unit": "iter/sec",
            "range": "stddev: 0.04105566127191823",
            "extra": "mean: 4.146786544999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23302186090663674,
            "unit": "iter/sec",
            "range": "stddev: 0.023920799030636614",
            "extra": "mean: 4.291442854800062 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23311552746765668,
            "unit": "iter/sec",
            "range": "stddev: 0.026323517212752397",
            "extra": "mean: 4.289718539399928 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2374171048284134,
            "unit": "iter/sec",
            "range": "stddev: 0.03391224511969048",
            "extra": "mean: 4.211996438599999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.22968410201384748,
            "unit": "iter/sec",
            "range": "stddev: 0.03321576135865244",
            "extra": "mean: 4.353805906599973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23037276664874007,
            "unit": "iter/sec",
            "range": "stddev: 0.05314857761362206",
            "extra": "mean: 4.3407908606000545 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.12956603449574,
            "unit": "iter/sec",
            "range": "stddev: 0.00015833021574974135",
            "extra": "mean: 26.226367200069944 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.17923069314576,
            "unit": "iter/sec",
            "range": "stddev: 0.00038566033449616055",
            "extra": "mean: 27.64016760006598 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 36.62073469509937,
            "unit": "iter/sec",
            "range": "stddev: 0.00032440706573563555",
            "extra": "mean: 27.306934400030514 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.834754244019116,
            "unit": "iter/sec",
            "range": "stddev: 0.00034066711599697674",
            "extra": "mean: 26.430725399995936 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.63367101224569,
            "unit": "iter/sec",
            "range": "stddev: 0.00019952517214851678",
            "extra": "mean: 27.297291600007156 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.48928023404038,
            "unit": "iter/sec",
            "range": "stddev: 0.0004765860824723457",
            "extra": "mean: 27.405308999959743 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.836458054784096,
            "unit": "iter/sec",
            "range": "stddev: 0.00010026132059607674",
            "extra": "mean: 26.4295351999408 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.66186046783181,
            "unit": "iter/sec",
            "range": "stddev: 0.0004814993387631686",
            "extra": "mean: 27.27630260001206 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 36.07105290422805,
            "unit": "iter/sec",
            "range": "stddev: 0.0006860302354385357",
            "extra": "mean: 27.72306100005153 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03547573750390501,
            "unit": "iter/sec",
            "range": "stddev: 0.1582259024564597",
            "extra": "mean: 28.188279380800033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.035756262064441845,
            "unit": "iter/sec",
            "range": "stddev: 0.1720489099806804",
            "extra": "mean: 27.967129175799936 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03633203598636187,
            "unit": "iter/sec",
            "range": "stddev: 0.06775180896882449",
            "extra": "mean: 27.523918570800014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03622392288468332,
            "unit": "iter/sec",
            "range": "stddev: 0.08965533089892384",
            "extra": "mean: 27.606065836200013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03607528325970157,
            "unit": "iter/sec",
            "range": "stddev: 0.026159941559779947",
            "extra": "mean: 27.719810064999955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.036262632809520856,
            "unit": "iter/sec",
            "range": "stddev: 0.10990569525332441",
            "extra": "mean: 27.57659669259997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.036290142566670805,
            "unit": "iter/sec",
            "range": "stddev: 0.07697273786453797",
            "extra": "mean: 27.55569224239998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03617963901384799,
            "unit": "iter/sec",
            "range": "stddev: 0.1507851793406577",
            "extra": "mean: 27.639855655199973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03598344615841618,
            "unit": "iter/sec",
            "range": "stddev: 0.1434043703076312",
            "extra": "mean: 27.7905566798001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}