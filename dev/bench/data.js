window.BENCHMARK_DATA = {
  "lastUpdate": 1681201364926,
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
    ],
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
          "id": "87666f7d589b4d07397e2c9a7d990f27cae61e5c",
          "message": "Revert \"[Doc] Refactor DDPG and DQN tutos to narrow the scope\" (#1032)",
          "timestamp": "2023-04-09T11:45:56+01:00",
          "tree_id": "89b3b32a99c73fe498d2abc0bf55ca1c91bd695d",
          "url": "https://github.com/pytorch/rl/commit/87666f7d589b4d07397e2c9a7d990f27cae61e5c"
        },
        "date": 1681039786810,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.060793132988034355,
            "unit": "iter/sec",
            "range": "stddev: 0.03932405275178182",
            "extra": "mean: 16.449226267000018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1128746040791283,
            "unit": "iter/sec",
            "range": "stddev: 0.03355009159188967",
            "extra": "mean: 8.859388771800003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11366138055788924,
            "unit": "iter/sec",
            "range": "stddev: 0.023437491083410297",
            "extra": "mean: 8.798063115999957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0654404219073832,
            "unit": "iter/sec",
            "range": "stddev: 0.038008456476113124",
            "extra": "mean: 938.5789945999704 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.603805258533552,
            "unit": "iter/sec",
            "range": "stddev: 0.03773762759728739",
            "extra": "mean: 1.6561631185999885 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3990656498117269,
            "unit": "iter/sec",
            "range": "stddev: 0.035812405257988136",
            "extra": "mean: 2.5058533614000225 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46531016303681244,
            "unit": "iter/sec",
            "range": "stddev: 0.05732262001380234",
            "extra": "mean: 2.1491041448000487 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.852275993410114,
            "unit": "iter/sec",
            "range": "stddev: 0.00021378613110674424",
            "extra": "mean: 35.903708559997085 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3631247695145763,
            "unit": "iter/sec",
            "range": "stddev: 0.005404188878560697",
            "extra": "mean: 733.6085605399944 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3742.0348916995194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002909717716665592",
            "extra": "mean: 267.2342799951366 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 74.43626816292046,
            "unit": "iter/sec",
            "range": "stddev: 0.00011646983028371105",
            "extra": "mean: 13.434311320004326 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2469605431218775,
            "unit": "iter/sec",
            "range": "stddev: 0.006983159056284136",
            "extra": "mean: 801.949993939993 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.11216629751732,
            "unit": "iter/sec",
            "range": "stddev: 0.000251376272668073",
            "extra": "mean: 32.141766999998254 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.253030584596069,
            "unit": "iter/sec",
            "range": "stddev: 0.0033327358273888864",
            "extra": "mean: 798.0651169200019 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21805236064437014,
            "unit": "iter/sec",
            "range": "stddev: 0.04297981084162847",
            "extra": "mean: 4.586054455200042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21434737058114242,
            "unit": "iter/sec",
            "range": "stddev: 0.0275162398461617",
            "extra": "mean: 4.665324315800012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20903830957123729,
            "unit": "iter/sec",
            "range": "stddev: 0.12344974219657372",
            "extra": "mean: 4.783812125399981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21891310642828538,
            "unit": "iter/sec",
            "range": "stddev: 0.014963234894922215",
            "extra": "mean: 4.568022519600004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21310878177156484,
            "unit": "iter/sec",
            "range": "stddev: 0.0240878934128379",
            "extra": "mean: 4.692439193200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2133380435733659,
            "unit": "iter/sec",
            "range": "stddev: 0.024444032985089337",
            "extra": "mean: 4.687396505799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21765899810558467,
            "unit": "iter/sec",
            "range": "stddev: 0.032617380444090224",
            "extra": "mean: 4.594342566600017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.213619229826364,
            "unit": "iter/sec",
            "range": "stddev: 0.021788856323629764",
            "extra": "mean: 4.681226501999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2139288327974971,
            "unit": "iter/sec",
            "range": "stddev: 0.02762995997280142",
            "extra": "mean: 4.674451718000023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.956627529465585,
            "unit": "iter/sec",
            "range": "stddev: 0.00021992599420931545",
            "extra": "mean: 28.60687859997597 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.62540087534738,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066795432954317",
            "extra": "mean: 29.739422399961768 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.900590559205426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004781831387456332",
            "extra": "mean: 29.498011199939356 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.915986306037375,
            "unit": "iter/sec",
            "range": "stddev: 0.00022690976221448914",
            "extra": "mean: 28.640176199951384 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.092655409707824,
            "unit": "iter/sec",
            "range": "stddev: 0.00014755126608964535",
            "extra": "mean: 29.33183079999253 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.785853852161374,
            "unit": "iter/sec",
            "range": "stddev: 0.000592570355298989",
            "extra": "mean: 29.598186400016857 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.97772331768229,
            "unit": "iter/sec",
            "range": "stddev: 0.00031794878432790663",
            "extra": "mean: 28.589625199947477 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.09424273301022,
            "unit": "iter/sec",
            "range": "stddev: 0.00015116011143317476",
            "extra": "mean: 29.330465199973332 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.02549399614519,
            "unit": "iter/sec",
            "range": "stddev: 0.00034957709059342903",
            "extra": "mean: 29.389727599937032 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.02744352532038399,
            "unit": "iter/sec",
            "range": "stddev: 0.03440049471940953",
            "extra": "mean: 36.438467300599996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.027562356054364894,
            "unit": "iter/sec",
            "range": "stddev: 0.15498051322174677",
            "extra": "mean: 36.28136861839994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.027874953149830996,
            "unit": "iter/sec",
            "range": "stddev: 0.2131851989080872",
            "extra": "mean: 35.87449975700006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.027959261583613396,
            "unit": "iter/sec",
            "range": "stddev: 0.053671471673449905",
            "extra": "mean: 35.766323692399965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.027862252020711333,
            "unit": "iter/sec",
            "range": "stddev: 0.1455099070261943",
            "extra": "mean: 35.89085330419998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.027897999898875935,
            "unit": "iter/sec",
            "range": "stddev: 0.04070204960614243",
            "extra": "mean: 35.84486356100001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.027883436993365204,
            "unit": "iter/sec",
            "range": "stddev: 0.035558762869805444",
            "extra": "mean: 35.86358454439987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.027938647941278257,
            "unit": "iter/sec",
            "range": "stddev: 0.056934828603888855",
            "extra": "mean: 35.792712736200066 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.027874259489191627,
            "unit": "iter/sec",
            "range": "stddev: 0.08804797900781532",
            "extra": "mean: 35.8753925064002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albertbou92@users.noreply.github.com",
            "name": "Albert Bou",
            "username": "albertbou92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d3c5537e5ca81670576c6921aa09b0141a6815d",
          "message": "[BugFix] Advantage normalisation in ClipPPOLoss is done after computing gain1 (#1033)",
          "timestamp": "2023-04-11T08:37:19+01:00",
          "tree_id": "280c5e835e37888e1393cee2d346fa4749e73b2c",
          "url": "https://github.com/pytorch/rl/commit/4d3c5537e5ca81670576c6921aa09b0141a6815d"
        },
        "date": 1681201317014,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06000351697798019,
            "unit": "iter/sec",
            "range": "stddev: 0.04424648990379816",
            "extra": "mean: 16.665689785599987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1119062333180459,
            "unit": "iter/sec",
            "range": "stddev: 0.012025554508376897",
            "extra": "mean: 8.936052714399967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11276710306378784,
            "unit": "iter/sec",
            "range": "stddev: 0.038779801386349774",
            "extra": "mean: 8.867834437800003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0566725188967074,
            "unit": "iter/sec",
            "range": "stddev: 0.04166331908678518",
            "extra": "mean: 946.366998399958 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.604052735572965,
            "unit": "iter/sec",
            "range": "stddev: 0.03457851990436954",
            "extra": "mean: 1.6554845978000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.402650452336238,
            "unit": "iter/sec",
            "range": "stddev: 0.030355556123341596",
            "extra": "mean: 2.483543714400048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4709404849921814,
            "unit": "iter/sec",
            "range": "stddev: 0.030824702198202523",
            "extra": "mean: 2.123410562200024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.068275005618275,
            "unit": "iter/sec",
            "range": "stddev: 0.0014703164456835414",
            "extra": "mean: 35.627412080002614 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.4049074514117132,
            "unit": "iter/sec",
            "range": "stddev: 0.004402710512792315",
            "extra": "mean: 711.7906585200012 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3651.20558786336,
            "unit": "iter/sec",
            "range": "stddev: 0.00003320096276671814",
            "extra": "mean: 273.88214000438893 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.17038254840769,
            "unit": "iter/sec",
            "range": "stddev: 0.00009454283988263533",
            "extra": "mean: 12.792568840004606 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2865690808588646,
            "unit": "iter/sec",
            "range": "stddev: 0.004638672313378393",
            "extra": "mean: 777.261023040005 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.835217775131753,
            "unit": "iter/sec",
            "range": "stddev: 0.00023619937778055766",
            "extra": "mean: 31.411753079985374 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2862659723818977,
            "unit": "iter/sec",
            "range": "stddev: 0.004883841324406356",
            "extra": "mean: 777.4441845400042 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22462840260555722,
            "unit": "iter/sec",
            "range": "stddev: 0.030458891401963704",
            "extra": "mean: 4.451796782600013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21809917329264347,
            "unit": "iter/sec",
            "range": "stddev: 0.022155525769475326",
            "extra": "mean: 4.585070107800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21799329626649017,
            "unit": "iter/sec",
            "range": "stddev: 0.021764751010421714",
            "extra": "mean: 4.587297027600016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22360913319434944,
            "unit": "iter/sec",
            "range": "stddev: 0.009878657536844672",
            "extra": "mean: 4.472089246600012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21848912993132757,
            "unit": "iter/sec",
            "range": "stddev: 0.020200692185359807",
            "extra": "mean: 4.5768867325999505 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21787924755622712,
            "unit": "iter/sec",
            "range": "stddev: 0.01868443234921477",
            "extra": "mean: 4.58969824439996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22298342651314682,
            "unit": "iter/sec",
            "range": "stddev: 0.0328469647948243",
            "extra": "mean: 4.484638233600026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.217625287714687,
            "unit": "iter/sec",
            "range": "stddev: 0.02715889651343168",
            "extra": "mean: 4.595054235200041 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21523378993545422,
            "unit": "iter/sec",
            "range": "stddev: 0.031772719059596374",
            "extra": "mean: 4.6461106329999895 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.19701430200222,
            "unit": "iter/sec",
            "range": "stddev: 0.00031409686989894295",
            "extra": "mean: 28.4115008000299 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.517686234197896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003732406149187566",
            "extra": "mean: 28.970655600005557 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.30236532032934,
            "unit": "iter/sec",
            "range": "stddev: 0.000195388497837414",
            "extra": "mean: 29.152508599963767 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.48663892558858,
            "unit": "iter/sec",
            "range": "stddev: 0.00021118074844459752",
            "extra": "mean: 28.1796199999917 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.83396377235402,
            "unit": "iter/sec",
            "range": "stddev: 0.0002008924181777796",
            "extra": "mean: 28.707614399991144 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.64503692941841,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337583024567562",
            "extra": "mean: 28.864163199978066 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 35.59763201994368,
            "unit": "iter/sec",
            "range": "stddev: 0.00010628786948371915",
            "extra": "mean: 28.091756199955853 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.922344474742246,
            "unit": "iter/sec",
            "range": "stddev: 0.00007040456942119126",
            "extra": "mean: 28.634961799980374 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.92838458659966,
            "unit": "iter/sec",
            "range": "stddev: 0.00029100308780820306",
            "extra": "mean: 28.630010000051698 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.027291154113009166,
            "unit": "iter/sec",
            "range": "stddev: 0.06712254384485301",
            "extra": "mean: 36.64190953079992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.02743215065038483,
            "unit": "iter/sec",
            "range": "stddev: 0.06718948086099782",
            "extra": "mean: 36.45357641639998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.027389659513187975,
            "unit": "iter/sec",
            "range": "stddev: 0.02353666645367665",
            "extra": "mean: 36.51012892359999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.027295893907180305,
            "unit": "iter/sec",
            "range": "stddev: 0.03257212488430196",
            "extra": "mean: 36.635546848199965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.027319282657317517,
            "unit": "iter/sec",
            "range": "stddev: 0.12907884698733943",
            "extra": "mean: 36.60418220140009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.02726461437169066,
            "unit": "iter/sec",
            "range": "stddev: 0.03988952633178508",
            "extra": "mean: 36.677577257000124 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.027412571098569722,
            "unit": "iter/sec",
            "range": "stddev: 0.030650272813710983",
            "extra": "mean: 36.47961354679992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.02744945830406379,
            "unit": "iter/sec",
            "range": "stddev: 0.044048786517300605",
            "extra": "mean: 36.430591413600084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.02726855928628147,
            "unit": "iter/sec",
            "range": "stddev: 0.09623890141692709",
            "extra": "mean: 36.672271149399876 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}