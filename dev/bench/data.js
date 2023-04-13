window.BENCHMARK_DATA = {
  "lastUpdate": 1681394026828,
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
          "id": "01316ecd5c8b8b8c41c2ce949dc0235a92fac761",
          "message": "[Doc] Document tensordict modules (#1053)",
          "timestamp": "2023-04-13T14:21:31+01:00",
          "tree_id": "fb305e88c946f2bb09dbc151ce3e463ae333aa38",
          "url": "https://github.com/pytorch/rl/commit/01316ecd5c8b8b8c41c2ce949dc0235a92fac761"
        },
        "date": 1681393970139,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06529896185672067,
            "unit": "iter/sec",
            "range": "stddev: 0.10149215639358614",
            "extra": "mean: 15.314179147200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1199138373453857,
            "unit": "iter/sec",
            "range": "stddev: 0.1186645902182694",
            "extra": "mean: 8.339321150399996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.12036780955748186,
            "unit": "iter/sec",
            "range": "stddev: 0.040045790192617677",
            "extra": "mean: 8.30786905299999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1244563305085884,
            "unit": "iter/sec",
            "range": "stddev: 0.03505310508016905",
            "extra": "mean: 889.3186625999988 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6402955951968768,
            "unit": "iter/sec",
            "range": "stddev: 0.04508809259112759",
            "extra": "mean: 1.5617786651999723 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.42520704939793513,
            "unit": "iter/sec",
            "range": "stddev: 0.04322027129057273",
            "extra": "mean: 2.3517954403999966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5038160390628648,
            "unit": "iter/sec",
            "range": "stddev: 0.05618159386155427",
            "extra": "mean: 1.9848514585999966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.74325254876504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829063561312359",
            "extra": "mean: 34.79077388000633 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3914346343894488,
            "unit": "iter/sec",
            "range": "stddev: 0.007922967479670593",
            "extra": "mean: 718.6827000599942 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3529.1633117046763,
            "unit": "iter/sec",
            "range": "stddev: 0.00003190807127608036",
            "extra": "mean: 283.35327999229776 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 77.49175733744214,
            "unit": "iter/sec",
            "range": "stddev: 0.00011608272052376933",
            "extra": "mean: 12.904598299990084 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2704555685519143,
            "unit": "iter/sec",
            "range": "stddev: 0.012439097821859422",
            "extra": "mean: 787.1192230199881 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.55481331724148,
            "unit": "iter/sec",
            "range": "stddev: 0.0003325131584653988",
            "extra": "mean: 30.71742388000075 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2793114393603275,
            "unit": "iter/sec",
            "range": "stddev: 0.004798645740559565",
            "extra": "mean: 781.6704902599895 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.25240578330998514,
            "unit": "iter/sec",
            "range": "stddev: 0.03881811918684808",
            "extra": "mean: 3.961874355200007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2417526544877856,
            "unit": "iter/sec",
            "range": "stddev: 0.06952971117328308",
            "extra": "mean: 4.136459233999949 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.24071677293719343,
            "unit": "iter/sec",
            "range": "stddev: 0.04999613561405924",
            "extra": "mean: 4.15425974599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.25494253360083136,
            "unit": "iter/sec",
            "range": "stddev: 0.031351455089470306",
            "extra": "mean: 3.922452585199926 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2416499092032027,
            "unit": "iter/sec",
            "range": "stddev: 0.03578206060656142",
            "extra": "mean: 4.138217983599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23957071947577496,
            "unit": "iter/sec",
            "range": "stddev: 0.043388210593214065",
            "extra": "mean: 4.174132808000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.24741863200281586,
            "unit": "iter/sec",
            "range": "stddev: 0.04070320321594396",
            "extra": "mean: 4.041732798799967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23849952942547567,
            "unit": "iter/sec",
            "range": "stddev: 0.03606706992759523",
            "extra": "mean: 4.19288039019998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2400990576912828,
            "unit": "iter/sec",
            "range": "stddev: 0.02610049835681214",
            "extra": "mean: 4.164947624599972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 39.75347407796833,
            "unit": "iter/sec",
            "range": "stddev: 0.0003303140169884576",
            "extra": "mean: 25.155034199997317 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.34804315512826,
            "unit": "iter/sec",
            "range": "stddev: 0.009026214982550617",
            "extra": "mean: 29.986767000036707 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 38.7117926317047,
            "unit": "iter/sec",
            "range": "stddev: 0.00025989084885607563",
            "extra": "mean: 25.83192179999969 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 40.35784884851319,
            "unit": "iter/sec",
            "range": "stddev: 0.00033676258619082293",
            "extra": "mean: 24.778327600006378 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 38.441811897995656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003503134208577115",
            "extra": "mean: 26.013341999941986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 38.83935697059284,
            "unit": "iter/sec",
            "range": "stddev: 0.0002054772924621748",
            "extra": "mean: 25.747079200027656 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 39.582369585016494,
            "unit": "iter/sec",
            "range": "stddev: 0.00045027586359845705",
            "extra": "mean: 25.263773000051515 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 38.68032688719309,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096561783374334",
            "extra": "mean: 25.852935599959892 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 38.579537836022276,
            "unit": "iter/sec",
            "range": "stddev: 0.00016989799865813876",
            "extra": "mean: 25.920476399960535 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0681307559701993,
            "unit": "iter/sec",
            "range": "stddev: 0.04581692092567343",
            "extra": "mean: 14.677658947999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06927940514609483,
            "unit": "iter/sec",
            "range": "stddev: 0.07733888804384542",
            "extra": "mean: 14.434304074800048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06902046453506014,
            "unit": "iter/sec",
            "range": "stddev: 0.03224671715920767",
            "extra": "mean: 14.488456528600045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06951226447918613,
            "unit": "iter/sec",
            "range": "stddev: 0.12786003375903787",
            "extra": "mean: 14.385950558400054 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.07010840945170077,
            "unit": "iter/sec",
            "range": "stddev: 0.07322451073051076",
            "extra": "mean: 14.263624118999905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.070027966691607,
            "unit": "iter/sec",
            "range": "stddev: 0.07098306264756338",
            "extra": "mean: 14.280009076999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06998517133152277,
            "unit": "iter/sec",
            "range": "stddev: 0.09346782156333813",
            "extra": "mean: 14.288741185800017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07005879434303432,
            "unit": "iter/sec",
            "range": "stddev: 0.05234027310152747",
            "extra": "mean: 14.273725509799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.07031741253254341,
            "unit": "iter/sec",
            "range": "stddev: 0.03232430955873223",
            "extra": "mean: 14.221228625800086 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}