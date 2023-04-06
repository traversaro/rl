window.BENCHMARK_DATA = {
  "lastUpdate": 1680793241061,
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
          "id": "38496d27fc4a6273e9ce1bbda091741db832a392",
          "message": "[Feature] Benchmarking worflow (#1028)",
          "timestamp": "2023-04-06T15:13:00+01:00",
          "tree_id": "81ce8862047230a927609ac0cfe36111ea1e9d00",
          "url": "https://github.com/pytorch/rl/commit/38496d27fc4a6273e9ce1bbda091741db832a392"
        },
        "date": 1680792935369,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.061200776048699994,
            "unit": "iter/sec",
            "range": "stddev: 0.06943982205495969",
            "extra": "mean: 16.339662085400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11198838343853501,
            "unit": "iter/sec",
            "range": "stddev: 0.07166836935199498",
            "extra": "mean: 8.92949758980003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11284480859205571,
            "unit": "iter/sec",
            "range": "stddev: 0.019483874172052506",
            "extra": "mean: 8.861728000400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.071550087198486,
            "unit": "iter/sec",
            "range": "stddev: 0.044291496131106604",
            "extra": "mean: 933.227491599996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.60987572535388,
            "unit": "iter/sec",
            "range": "stddev: 0.038692113913434675",
            "extra": "mean: 1.6396783121999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.39966896778272737,
            "unit": "iter/sec",
            "range": "stddev: 0.05034297527985087",
            "extra": "mean: 2.5020706650000193 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4687978508119316,
            "unit": "iter/sec",
            "range": "stddev: 0.06156481644844056",
            "extra": "mean: 2.1331155811999905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.798109865311407,
            "unit": "iter/sec",
            "range": "stddev: 0.000870639441093369",
            "extra": "mean: 34.72450118000779 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.280460554708349,
            "unit": "iter/sec",
            "range": "stddev: 0.00548597427849121",
            "extra": "mean: 780.9690008199982 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3288.1724764614455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004153806715055187",
            "extra": "mean: 304.1203000020687 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.90962067503544,
            "unit": "iter/sec",
            "range": "stddev: 0.00015013726588408358",
            "extra": "mean: 12.672725979994084 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 100.66003530024335,
            "unit": "iter/sec",
            "range": "stddev: 0.0048722149575736624",
            "extra": "mean: 9.934429260006254 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.452086854630096,
            "unit": "iter/sec",
            "range": "stddev: 0.00023725432319961405",
            "extra": "mean: 30.81465930001741 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 155.76506683957604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966642336724342",
            "extra": "mean: 6.4199246999965 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21505156276503273,
            "unit": "iter/sec",
            "range": "stddev: 0.07744225539946846",
            "extra": "mean: 4.65004758460002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21055505394788862,
            "unit": "iter/sec",
            "range": "stddev: 0.020438382813467288",
            "extra": "mean: 4.749351683799977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20864064005382937,
            "unit": "iter/sec",
            "range": "stddev: 0.04501314893405119",
            "extra": "mean: 4.792930081799978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21480636524955096,
            "unit": "iter/sec",
            "range": "stddev: 0.05536571411000677",
            "extra": "mean: 4.655355528399968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2099941601716016,
            "unit": "iter/sec",
            "range": "stddev: 0.04412699922909987",
            "extra": "mean: 4.762037188000022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20832038106572184,
            "unit": "iter/sec",
            "range": "stddev: 0.04126311056094748",
            "extra": "mean: 4.800298438799973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21341142591676568,
            "unit": "iter/sec",
            "range": "stddev: 0.049920968180198484",
            "extra": "mean: 4.685784726399879 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20920331511693868,
            "unit": "iter/sec",
            "range": "stddev: 0.012617631571055764",
            "extra": "mean: 4.780038975199932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2085628047852405,
            "unit": "iter/sec",
            "range": "stddev: 0.02640106988604662",
            "extra": "mean: 4.794718794800019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.09537124512188,
            "unit": "iter/sec",
            "range": "stddev: 0.0003570510396482356",
            "extra": "mean: 29.329494400008116 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.853592904523424,
            "unit": "iter/sec",
            "range": "stddev: 0.000927979979063715",
            "extra": "mean: 30.438071199887418 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.333810895712965,
            "unit": "iter/sec",
            "range": "stddev: 0.00022055841384939625",
            "extra": "mean: 29.999570200016024 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.57093272875302,
            "unit": "iter/sec",
            "range": "stddev: 0.00023770006643582766",
            "extra": "mean: 29.787673999999242 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.7755552200498,
            "unit": "iter/sec",
            "range": "stddev: 0.0005236693198213784",
            "extra": "mean: 30.510543399987 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.158848158414415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003957346925451126",
            "extra": "mean: 30.15786300002219 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.06494270125723,
            "unit": "iter/sec",
            "range": "stddev: 0.00046963767300570034",
            "extra": "mean: 29.35569299997951 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.769270205339325,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921286443254559",
            "extra": "mean: 30.51639519994751 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.18934534124282,
            "unit": "iter/sec",
            "range": "stddev: 0.000643654730112913",
            "extra": "mean: 30.13015140004427 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.027524667588871825,
            "unit": "iter/sec",
            "range": "stddev: 0.22593106557177195",
            "extra": "mean: 36.33104729679999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.027931699493000204,
            "unit": "iter/sec",
            "range": "stddev: 0.15081366508689384",
            "extra": "mean: 35.80161673479997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.028116020988980615,
            "unit": "iter/sec",
            "range": "stddev: 0.08827953808658456",
            "extra": "mean: 35.566910424199975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.028026457822583534,
            "unit": "iter/sec",
            "range": "stddev: 0.07944787528226974",
            "extra": "mean: 35.68057035000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.027919339256145016,
            "unit": "iter/sec",
            "range": "stddev: 0.16043678192283994",
            "extra": "mean: 35.81746655339994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.027961144747401724,
            "unit": "iter/sec",
            "range": "stddev: 0.01753784168964676",
            "extra": "mean: 35.76391485520007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.028019550564072054,
            "unit": "iter/sec",
            "range": "stddev: 0.061107306703613244",
            "extra": "mean: 35.689366170000085 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.028063856342957123,
            "unit": "iter/sec",
            "range": "stddev: 0.03473235580136693",
            "extra": "mean: 35.633021626800016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.028029524486664667,
            "unit": "iter/sec",
            "range": "stddev: 0.09991600879014471",
            "extra": "mean: 35.676666597599976 sec\nrounds: 5"
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
          "id": "38496d27fc4a6273e9ce1bbda091741db832a392",
          "message": "[Feature] Benchmarking worflow (#1028)",
          "timestamp": "2023-04-06T15:13:00+01:00",
          "tree_id": "81ce8862047230a927609ac0cfe36111ea1e9d00",
          "url": "https://github.com/pytorch/rl/commit/38496d27fc4a6273e9ce1bbda091741db832a392"
        },
        "date": 1680793157757,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05542746494550709,
            "unit": "iter/sec",
            "range": "stddev: 0.04778707193121389",
            "extra": "mean: 18.04159726559999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09860791809129274,
            "unit": "iter/sec",
            "range": "stddev: 0.2522859044165592",
            "extra": "mean: 10.141173440800003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10135232771598923,
            "unit": "iter/sec",
            "range": "stddev: 0.06620495936439441",
            "extra": "mean: 9.866571617399973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9581231038621613,
            "unit": "iter/sec",
            "range": "stddev: 0.04109240742850625",
            "extra": "mean: 1.0437072188000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5395108442579515,
            "unit": "iter/sec",
            "range": "stddev: 0.051922577767038784",
            "extra": "mean: 1.8535308616000292 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3609077231837903,
            "unit": "iter/sec",
            "range": "stddev: 0.04098129940995923",
            "extra": "mean: 2.770791356799964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4070263692195924,
            "unit": "iter/sec",
            "range": "stddev: 0.06556770599706671",
            "extra": "mean: 2.456843280000112 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.207261332112385,
            "unit": "iter/sec",
            "range": "stddev: 0.002433984600136053",
            "extra": "mean: 41.30991880000238 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2248598579177856,
            "unit": "iter/sec",
            "range": "stddev: 0.02084273113831208",
            "extra": "mean: 816.4199304400108 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3066.736792709393,
            "unit": "iter/sec",
            "range": "stddev: 0.000037292206418641736",
            "extra": "mean: 326.0795000005601 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 65.3011690701938,
            "unit": "iter/sec",
            "range": "stddev: 0.0001470529167257242",
            "extra": "mean: 15.313661519980997 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 80.45980797736165,
            "unit": "iter/sec",
            "range": "stddev: 0.0055963919740693625",
            "extra": "mean: 12.428565579989481 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 27.562956003442252,
            "unit": "iter/sec",
            "range": "stddev: 0.0003567171682023681",
            "extra": "mean: 36.28057889999582 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 130.33695112613083,
            "unit": "iter/sec",
            "range": "stddev: 0.000701830024999475",
            "extra": "mean: 7.672421300021597 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2147115179541033,
            "unit": "iter/sec",
            "range": "stddev: 0.012416637138940888",
            "extra": "mean: 4.657411998799989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20955537738013758,
            "unit": "iter/sec",
            "range": "stddev: 0.03685810383195255",
            "extra": "mean: 4.772008299199979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20988716896442666,
            "unit": "iter/sec",
            "range": "stddev: 0.01449387108193877",
            "extra": "mean: 4.764464664200068 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21730275143585834,
            "unit": "iter/sec",
            "range": "stddev: 0.02358172056372222",
            "extra": "mean: 4.6018745432000285 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20982121041919144,
            "unit": "iter/sec",
            "range": "stddev: 0.023062886430482307",
            "extra": "mean: 4.765962402000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21047571898636513,
            "unit": "iter/sec",
            "range": "stddev: 0.017939666848721423",
            "extra": "mean: 4.751141864800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21784077048336664,
            "unit": "iter/sec",
            "range": "stddev: 0.023710476989860476",
            "extra": "mean: 4.590508919800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21003030831064304,
            "unit": "iter/sec",
            "range": "stddev: 0.029281229610626305",
            "extra": "mean: 4.761217597800032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21170744764048618,
            "unit": "iter/sec",
            "range": "stddev: 0.01488863497271319",
            "extra": "mean: 4.723499390999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.41594777202353,
            "unit": "iter/sec",
            "range": "stddev: 0.00023802290188647377",
            "extra": "mean: 29.056296999988263 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.497340780100494,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788205002658676",
            "extra": "mean: 29.853116000003865 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.28012639848346,
            "unit": "iter/sec",
            "range": "stddev: 0.00047394213642587937",
            "extra": "mean: 30.047962799972083 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.84992663214938,
            "unit": "iter/sec",
            "range": "stddev: 0.00025114909074223235",
            "extra": "mean: 28.694465000035052 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.00688341498115,
            "unit": "iter/sec",
            "range": "stddev: 0.0003740585492069074",
            "extra": "mean: 29.405811399919912 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.900438399067575,
            "unit": "iter/sec",
            "range": "stddev: 0.0003596451679521523",
            "extra": "mean: 29.49814360003984 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 35.00366775438208,
            "unit": "iter/sec",
            "range": "stddev: 0.0005430902556770652",
            "extra": "mean: 28.568434799944953 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.02683841015738,
            "unit": "iter/sec",
            "range": "stddev: 0.00048717548561879876",
            "extra": "mean: 29.38856640002996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.83860896086675,
            "unit": "iter/sec",
            "range": "stddev: 0.0005757119867195477",
            "extra": "mean: 29.552042199975403 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03107926483642897,
            "unit": "iter/sec",
            "range": "stddev: 0.0744923763049842",
            "extra": "mean: 32.17579325840002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.031303996586338624,
            "unit": "iter/sec",
            "range": "stddev: 0.1184988172356525",
            "extra": "mean: 31.944802870199965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03134345123112756,
            "unit": "iter/sec",
            "range": "stddev: 0.03272888759011622",
            "extra": "mean: 31.90459125339994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03125072935178778,
            "unit": "iter/sec",
            "range": "stddev: 0.04560283933183916",
            "extra": "mean: 31.999253161199977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.031215141682554227,
            "unit": "iter/sec",
            "range": "stddev: 0.1458860530042738",
            "extra": "mean: 32.035734778000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03130400276055111,
            "unit": "iter/sec",
            "range": "stddev: 0.15653061850974526",
            "extra": "mean: 31.94479656959993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03120865854228999,
            "unit": "iter/sec",
            "range": "stddev: 0.12901972623375538",
            "extra": "mean: 32.042389731200004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.031267257313096694,
            "unit": "iter/sec",
            "range": "stddev: 0.18825422324548388",
            "extra": "mean: 31.9823382648 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.031123121351176963,
            "unit": "iter/sec",
            "range": "stddev: 0.12074555524101872",
            "extra": "mean: 32.13045339239998 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}