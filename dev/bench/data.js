window.BENCHMARK_DATA = {
  "lastUpdate": 1681410683473,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "ningx@meta.com",
            "name": "Ning Xu",
            "username": "Goldspear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9bdac9a351e92d58f9d3df58a43e5d508f8e28f",
          "message": "[Refactor] Import enum and interaction_type utils (#1055)",
          "timestamp": "2023-04-13T17:06:42+01:00",
          "tree_id": "44e62ea7765508032d476dbcf62c31af44b9000f",
          "url": "https://github.com/pytorch/rl/commit/d9bdac9a351e92d58f9d3df58a43e5d508f8e28f"
        },
        "date": 1681404086717,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05677477309829677,
            "unit": "iter/sec",
            "range": "stddev: 0.11197750765795027",
            "extra": "mean: 17.613456565799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10552698759819842,
            "unit": "iter/sec",
            "range": "stddev: 0.1759256419051168",
            "extra": "mean: 9.476248898599966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10630507762065015,
            "unit": "iter/sec",
            "range": "stddev: 0.1518811243310725",
            "extra": "mean: 9.406888385599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0244173298264696,
            "unit": "iter/sec",
            "range": "stddev: 0.04145406926053171",
            "extra": "mean: 976.1646653999833 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5694192971515272,
            "unit": "iter/sec",
            "range": "stddev: 0.05003942905866309",
            "extra": "mean: 1.7561751156000809 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.37442795094229886,
            "unit": "iter/sec",
            "range": "stddev: 0.0634333408575381",
            "extra": "mean: 2.6707407859999877 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4412105055666333,
            "unit": "iter/sec",
            "range": "stddev: 0.0695247941077819",
            "extra": "mean: 2.266491816000007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 26.63278223946034,
            "unit": "iter/sec",
            "range": "stddev: 0.0016004811495343352",
            "extra": "mean: 37.54771059999712 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.218778298019575,
            "unit": "iter/sec",
            "range": "stddev: 0.017658584069397305",
            "extra": "mean: 820.4937695599983 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3231.127806506842,
            "unit": "iter/sec",
            "range": "stddev: 0.00004357692968105123",
            "extra": "mean: 309.48945999170974 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 67.30191345472832,
            "unit": "iter/sec",
            "range": "stddev: 0.00030196974286605493",
            "extra": "mean: 14.85841856001116 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1295293515583387,
            "unit": "iter/sec",
            "range": "stddev: 0.013113263229131498",
            "extra": "mean: 885.3244925599893 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.855427189699505,
            "unit": "iter/sec",
            "range": "stddev: 0.00118374985466783",
            "extra": "mean: 33.49474765998366 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1249928213813998,
            "unit": "iter/sec",
            "range": "stddev: 0.011472895699949212",
            "extra": "mean: 888.8945609200255 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22184391934897252,
            "unit": "iter/sec",
            "range": "stddev: 0.10947830496630018",
            "extra": "mean: 4.507673696599932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21888099212594297,
            "unit": "iter/sec",
            "range": "stddev: 0.056757949048648434",
            "extra": "mean: 4.568692741599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2183463272219595,
            "unit": "iter/sec",
            "range": "stddev: 0.10190246429523789",
            "extra": "mean: 4.579880104799986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2321810879340261,
            "unit": "iter/sec",
            "range": "stddev: 0.05373023165150957",
            "extra": "mean: 4.306983005799975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22045968548493863,
            "unit": "iter/sec",
            "range": "stddev: 0.04823724834123838",
            "extra": "mean: 4.535976715200013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2219065909071535,
            "unit": "iter/sec",
            "range": "stddev: 0.045815735367773475",
            "extra": "mean: 4.506400625200013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22074558967146118,
            "unit": "iter/sec",
            "range": "stddev: 0.09341410293276746",
            "extra": "mean: 4.530101831199954 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2178214849894862,
            "unit": "iter/sec",
            "range": "stddev: 0.07132304135023076",
            "extra": "mean: 4.590915354599974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2150187555852695,
            "unit": "iter/sec",
            "range": "stddev: 0.06842658900357126",
            "extra": "mean: 4.650757080600033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.871819371363,
            "unit": "iter/sec",
            "range": "stddev: 0.00035717412452035803",
            "extra": "mean: 27.877035999972577 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.9586430319264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002720834782825343",
            "extra": "mean: 29.44758419998834 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.90110336223797,
            "unit": "iter/sec",
            "range": "stddev: 0.00030655533206146147",
            "extra": "mean: 29.497565000019677 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.469944666564025,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242832876107403",
            "extra": "mean: 28.192882999974245 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.81367209979267,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483633836741468",
            "extra": "mean: 29.573836200006554 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.3409723247133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009984831121374058",
            "extra": "mean: 29.119734599953517 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.848272780900615,
            "unit": "iter/sec",
            "range": "stddev: 0.0006454657758841562",
            "extra": "mean: 28.695826800003488 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.21250905677704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823903481249191",
            "extra": "mean: 29.229075199964427 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.60928898779693,
            "unit": "iter/sec",
            "range": "stddev: 0.00048218912368939813",
            "extra": "mean: 28.893977000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06328231125875679,
            "unit": "iter/sec",
            "range": "stddev: 0.26805161735708594",
            "extra": "mean: 15.802204124799937 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.062715767026193,
            "unit": "iter/sec",
            "range": "stddev: 0.4365482599710312",
            "extra": "mean: 15.94495367620002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06263552475973594,
            "unit": "iter/sec",
            "range": "stddev: 0.326229288695247",
            "extra": "mean: 15.965380729800017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06445390834704579,
            "unit": "iter/sec",
            "range": "stddev: 0.04147399245297257",
            "extra": "mean: 15.514962950199969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06355108796474845,
            "unit": "iter/sec",
            "range": "stddev: 0.24016260440455184",
            "extra": "mean: 15.735371840600056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06227016474029363,
            "unit": "iter/sec",
            "range": "stddev: 0.3861849132927959",
            "extra": "mean: 16.059054993200014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06414185359961788,
            "unit": "iter/sec",
            "range": "stddev: 0.22858974452928368",
            "extra": "mean: 15.590444364800168 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06242528489008932,
            "unit": "iter/sec",
            "range": "stddev: 0.279164714131794",
            "extra": "mean: 16.01914996079995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06134330481375076,
            "unit": "iter/sec",
            "range": "stddev: 0.1979953693286018",
            "extra": "mean: 16.30169752080001 sec\nrounds: 5"
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
          "id": "d318220cf775a876a4072ca3be93c4ab792ea00c",
          "message": "[Feature] Deduplicate calls to common layers in PPO (#1057)",
          "timestamp": "2023-04-13T19:02:54+01:00",
          "tree_id": "084bceb4abda4dfa3f6667665209dccaf41d381a",
          "url": "https://github.com/pytorch/rl/commit/d318220cf775a876a4072ca3be93c4ab792ea00c"
        },
        "date": 1681410625175,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07119776091207458,
            "unit": "iter/sec",
            "range": "stddev: 0.058025374348750984",
            "extra": "mean: 14.045385517600005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1302643281773605,
            "unit": "iter/sec",
            "range": "stddev: 0.02548437087234108",
            "extra": "mean: 7.6766987093999886 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13172305895680805,
            "unit": "iter/sec",
            "range": "stddev: 0.041431685747597036",
            "extra": "mean: 7.591685221399996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.260047945837458,
            "unit": "iter/sec",
            "range": "stddev: 0.029151348495552155",
            "extra": "mean: 793.6205945999745 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7334029579848157,
            "unit": "iter/sec",
            "range": "stddev: 0.004058054776327542",
            "extra": "mean: 1.3635069086000384 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.455910876036992,
            "unit": "iter/sec",
            "range": "stddev: 0.009801334677972789",
            "extra": "mean: 2.1934111524000173 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5204831834223045,
            "unit": "iter/sec",
            "range": "stddev: 0.05202369306649483",
            "extra": "mean: 1.9212916609999866 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 29.06611312168799,
            "unit": "iter/sec",
            "range": "stddev: 0.0005223242590980592",
            "extra": "mean: 34.404324919999 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5582896515416957,
            "unit": "iter/sec",
            "range": "stddev: 0.004509850901323709",
            "extra": "mean: 641.7292183200016 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4434.093889885579,
            "unit": "iter/sec",
            "range": "stddev: 0.00002150549563657816",
            "extra": "mean: 225.52521999614328 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.99413818940569,
            "unit": "iter/sec",
            "range": "stddev: 0.00010038643701224235",
            "extra": "mean: 12.659167160002198 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.4290673987837954,
            "unit": "iter/sec",
            "range": "stddev: 0.004098078368668715",
            "extra": "mean: 699.7570589400107 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.36327034634349,
            "unit": "iter/sec",
            "range": "stddev: 0.00019943126151484311",
            "extra": "mean: 30.899225860002844 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.4314469324613472,
            "unit": "iter/sec",
            "range": "stddev: 0.0044428956653845015",
            "extra": "mean: 698.5938335000083 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21385190360135187,
            "unit": "iter/sec",
            "range": "stddev: 1.1306104138167619",
            "extra": "mean: 4.676133263999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23336617182603137,
            "unit": "iter/sec",
            "range": "stddev: 0.020848808666674115",
            "extra": "mean: 4.28511121460001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.23179829195798657,
            "unit": "iter/sec",
            "range": "stddev: 0.012417929591991719",
            "extra": "mean: 4.314095636999991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23698525381966157,
            "unit": "iter/sec",
            "range": "stddev: 0.016231712888471028",
            "extra": "mean: 4.219671831399978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2324483031707867,
            "unit": "iter/sec",
            "range": "stddev: 0.014816867626704417",
            "extra": "mean: 4.302031833999967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23030324953441533,
            "unit": "iter/sec",
            "range": "stddev: 0.0858065157110624",
            "extra": "mean: 4.3421011298000165 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.23727844267070822,
            "unit": "iter/sec",
            "range": "stddev: 0.01825806983928613",
            "extra": "mean: 4.214457869600006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23219738720903246,
            "unit": "iter/sec",
            "range": "stddev: 0.017001243806090815",
            "extra": "mean: 4.306680673800019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.22991986186255983,
            "unit": "iter/sec",
            "range": "stddev: 0.08274442474498632",
            "extra": "mean: 4.349341513599962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.37179627542642,
            "unit": "iter/sec",
            "range": "stddev: 0.00008086063779876871",
            "extra": "mean: 26.060807599992586 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.52351664450791,
            "unit": "iter/sec",
            "range": "stddev: 0.00014188315461350796",
            "extra": "mean: 26.649954200024695 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.285812952543424,
            "unit": "iter/sec",
            "range": "stddev: 0.00020767472414519704",
            "extra": "mean: 26.819852399967203 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.86889434326883,
            "unit": "iter/sec",
            "range": "stddev: 0.0004365016434536523",
            "extra": "mean: 26.406897199990453 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 37.47823105058846,
            "unit": "iter/sec",
            "range": "stddev: 0.00018836174081863962",
            "extra": "mean: 26.68215579999469 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 37.16500247235687,
            "unit": "iter/sec",
            "range": "stddev: 0.00030321819295152716",
            "extra": "mean: 26.907034400005614 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 38.085484148898715,
            "unit": "iter/sec",
            "range": "stddev: 0.00014336414662190065",
            "extra": "mean: 26.256722799962517 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 37.18764092257264,
            "unit": "iter/sec",
            "range": "stddev: 0.00035520803845182856",
            "extra": "mean: 26.890654399994673 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 37.2985534964331,
            "unit": "iter/sec",
            "range": "stddev: 0.0001692016366469711",
            "extra": "mean: 26.810691200012116 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06028697262851314,
            "unit": "iter/sec",
            "range": "stddev: 0.10309573566006773",
            "extra": "mean: 16.587331498000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06037930446751887,
            "unit": "iter/sec",
            "range": "stddev: 0.011956221438855713",
            "extra": "mean: 16.561966203800033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.060507132443433205,
            "unit": "iter/sec",
            "range": "stddev: 0.02890230205817276",
            "extra": "mean: 16.526977227600035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06046808820544967,
            "unit": "iter/sec",
            "range": "stddev: 0.016193502096821952",
            "extra": "mean: 16.53764869500001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06048764049310731,
            "unit": "iter/sec",
            "range": "stddev: 0.09685059789535143",
            "extra": "mean: 16.532302993600023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.060970636457123265,
            "unit": "iter/sec",
            "range": "stddev: 0.03457500326005405",
            "extra": "mean: 16.4013377276 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.0612312048319607,
            "unit": "iter/sec",
            "range": "stddev: 0.027433079935667307",
            "extra": "mean: 16.33154210739999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.061137720199816635,
            "unit": "iter/sec",
            "range": "stddev: 0.05856744339439487",
            "extra": "mean: 16.356514386400022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06113285295184735,
            "unit": "iter/sec",
            "range": "stddev: 0.05383582182142825",
            "extra": "mean: 16.357816652000064 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}