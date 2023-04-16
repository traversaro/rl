window.BENCHMARK_DATA = {
  "lastUpdate": 1681638671577,
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
      },
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
          "id": "a47dd3b14225b236c62a7b63f6575442f693ce3b",
          "message": "[Refactor] Better integration of QValue tools (#1063)",
          "timestamp": "2023-04-16T10:19:25+01:00",
          "tree_id": "ef00810aaeee91eeacccee1c9423aceaf19e7615",
          "url": "https://github.com/pytorch/rl/commit/a47dd3b14225b236c62a7b63f6575442f693ce3b"
        },
        "date": 1681638617225,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0634212223692177,
            "unit": "iter/sec",
            "range": "stddev: 0.0549432463598328",
            "extra": "mean: 15.767592655000021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11520759102219999,
            "unit": "iter/sec",
            "range": "stddev: 0.1511848949646655",
            "extra": "mean: 8.679983594200007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11754355809751696,
            "unit": "iter/sec",
            "range": "stddev: 0.03703626974888036",
            "extra": "mean: 8.507484512000019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.098471889479088,
            "unit": "iter/sec",
            "range": "stddev: 0.04113814896426827",
            "extra": "mean: 910.3555672000084 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6320451037852485,
            "unit": "iter/sec",
            "range": "stddev: 0.0442639334311428",
            "extra": "mean: 1.582165567000061 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.42899961866782066,
            "unit": "iter/sec",
            "range": "stddev: 0.004998941112174116",
            "extra": "mean: 2.3310044029999744 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5072810159370136,
            "unit": "iter/sec",
            "range": "stddev: 0.06169565993837708",
            "extra": "mean: 1.971293954600037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.49863923614709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231747111538335",
            "extra": "mean: 35.08939467999653 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3529339937551335,
            "unit": "iter/sec",
            "range": "stddev: 0.10186313104156473",
            "extra": "mean: 739.134358820013 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3191.9711455318215,
            "unit": "iter/sec",
            "range": "stddev: 0.00006645199177767472",
            "extra": "mean: 313.28604000691485 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.1870801168036,
            "unit": "iter/sec",
            "range": "stddev: 0.00013269760872336575",
            "extra": "mean: 13.300157400001353 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2752317330293577,
            "unit": "iter/sec",
            "range": "stddev: 0.010889953532717577",
            "extra": "mean: 784.171201279994 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.649441027951216,
            "unit": "iter/sec",
            "range": "stddev: 0.00022298540554724125",
            "extra": "mean: 31.596134640003584 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.274566410999685,
            "unit": "iter/sec",
            "range": "stddev: 0.004856683846281108",
            "extra": "mean: 784.5805376399858 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2507761852201682,
            "unit": "iter/sec",
            "range": "stddev: 0.0429340267916047",
            "extra": "mean: 3.9876194748000215 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2434330072543659,
            "unit": "iter/sec",
            "range": "stddev: 0.023391414705022987",
            "extra": "mean: 4.107906365200051 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.24524403004143605,
            "unit": "iter/sec",
            "range": "stddev: 0.018360908611691016",
            "extra": "mean: 4.077571225000019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.253661424580822,
            "unit": "iter/sec",
            "range": "stddev: 0.054860622182144526",
            "extra": "mean: 3.9422628081999846 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.24588443703122556,
            "unit": "iter/sec",
            "range": "stddev: 0.021377383549387775",
            "extra": "mean: 4.06695117459999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.24591770012443837,
            "unit": "iter/sec",
            "range": "stddev: 0.04615577273662317",
            "extra": "mean: 4.066401074400028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.253539466991423,
            "unit": "iter/sec",
            "range": "stddev: 0.05709237265629414",
            "extra": "mean: 3.944159115999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.24617728303107775,
            "unit": "iter/sec",
            "range": "stddev: 0.019244171460072908",
            "extra": "mean: 4.062113236799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2465204833710624,
            "unit": "iter/sec",
            "range": "stddev: 0.06779006319955494",
            "extra": "mean: 4.056458053000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 40.75878942712814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006838666160934542",
            "extra": "mean: 24.534585399987918 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 39.197095169227765,
            "unit": "iter/sec",
            "range": "stddev: 0.00044989214668902",
            "extra": "mean: 25.512094599935153 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 39.16212661452788,
            "unit": "iter/sec",
            "range": "stddev: 0.0005230403856663371",
            "extra": "mean: 25.534874799905083 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 39.72601223607356,
            "unit": "iter/sec",
            "range": "stddev: 0.00059099910485396",
            "extra": "mean: 25.17242339999939 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 38.59830263959689,
            "unit": "iter/sec",
            "range": "stddev: 0.00024760241964553043",
            "extra": "mean: 25.90787500002989 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 38.065182407216284,
            "unit": "iter/sec",
            "range": "stddev: 0.00042073951513989444",
            "extra": "mean: 26.27072660002341 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 40.679764395281545,
            "unit": "iter/sec",
            "range": "stddev: 0.000391678084414724",
            "extra": "mean: 24.58224660013002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 38.73423732477585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007212740262642438",
            "extra": "mean: 25.81695340004444 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 39.149500283017616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003959361878612435",
            "extra": "mean: 25.543110199896546 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.07015263723483545,
            "unit": "iter/sec",
            "range": "stddev: 0.10781759410919636",
            "extra": "mean: 14.254631606400016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.07017258309139006,
            "unit": "iter/sec",
            "range": "stddev: 0.03549685239315903",
            "extra": "mean: 14.25057986960005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.07024931623617679,
            "unit": "iter/sec",
            "range": "stddev: 0.04203795481718342",
            "extra": "mean: 14.235013998399927 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.07039461696396292,
            "unit": "iter/sec",
            "range": "stddev: 0.05522822202452741",
            "extra": "mean: 14.205631667999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.0710746844500875,
            "unit": "iter/sec",
            "range": "stddev: 0.10297853978937155",
            "extra": "mean: 14.069707206399972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0716823841080349,
            "unit": "iter/sec",
            "range": "stddev: 0.03474659661961257",
            "extra": "mean: 13.950428859800013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.07165928907129177,
            "unit": "iter/sec",
            "range": "stddev: 0.022344648421158873",
            "extra": "mean: 13.954924936600037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07154753597787758,
            "unit": "iter/sec",
            "range": "stddev: 0.07521686251415345",
            "extra": "mean: 13.976721718399904 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0712269400556088,
            "unit": "iter/sec",
            "range": "stddev: 0.0908743495163165",
            "extra": "mean: 14.039631622799925 sec\nrounds: 5"
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
          "id": "a47dd3b14225b236c62a7b63f6575442f693ce3b",
          "message": "[Refactor] Better integration of QValue tools (#1063)",
          "timestamp": "2023-04-16T10:19:25+01:00",
          "tree_id": "ef00810aaeee91eeacccee1c9423aceaf19e7615",
          "url": "https://github.com/pytorch/rl/commit/a47dd3b14225b236c62a7b63f6575442f693ce3b"
        },
        "date": 1681638545944,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05977495215860981,
            "unit": "iter/sec",
            "range": "stddev: 0.0370570937069652",
            "extra": "mean: 16.72941531340001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11079120650516582,
            "unit": "iter/sec",
            "range": "stddev: 0.03920851721103716",
            "extra": "mean: 9.025987093600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11078407671851141,
            "unit": "iter/sec",
            "range": "stddev: 0.056552822906032786",
            "extra": "mean: 9.026567983599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0464556825853015,
            "unit": "iter/sec",
            "range": "stddev: 0.04221416112093969",
            "extra": "mean: 955.6066412000064 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6062710023074409,
            "unit": "iter/sec",
            "range": "stddev: 0.04094588418496516",
            "extra": "mean: 1.6494273949999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4031561380472888,
            "unit": "iter/sec",
            "range": "stddev: 0.005941807874098777",
            "extra": "mean: 2.480428562599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46897416789359414,
            "unit": "iter/sec",
            "range": "stddev: 0.05459846943816749",
            "extra": "mean: 2.1323136080000267 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.927171419597876,
            "unit": "iter/sec",
            "range": "stddev: 0.000613688483753268",
            "extra": "mean: 35.807421560002695 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.343869560894875,
            "unit": "iter/sec",
            "range": "stddev: 0.004830615773625638",
            "extra": "mean: 744.1198380400147 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3348.7893355845545,
            "unit": "iter/sec",
            "range": "stddev: 0.00006724014652539571",
            "extra": "mean: 298.6153800043212 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.86998622353084,
            "unit": "iter/sec",
            "range": "stddev: 0.0001851156016169349",
            "extra": "mean: 13.180442620007398 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.236668177916568,
            "unit": "iter/sec",
            "range": "stddev: 0.004183268928069437",
            "extra": "mean: 808.6243487599995 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.32178008426822,
            "unit": "iter/sec",
            "range": "stddev: 0.00034667999731653173",
            "extra": "mean: 31.926665639998646 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2372531513716483,
            "unit": "iter/sec",
            "range": "stddev: 0.0041390630467427495",
            "extra": "mean: 808.2420310599946 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21777633538955193,
            "unit": "iter/sec",
            "range": "stddev: 0.02723277587288713",
            "extra": "mean: 4.591867147599987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21051424663100546,
            "unit": "iter/sec",
            "range": "stddev: 0.016386987833080187",
            "extra": "mean: 4.7502723259999815 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20861215134872,
            "unit": "iter/sec",
            "range": "stddev: 0.040952249494362714",
            "extra": "mean: 4.793584618799992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21549530037233505,
            "unit": "iter/sec",
            "range": "stddev: 0.018500208382636593",
            "extra": "mean: 4.640472429200031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20798975492717617,
            "unit": "iter/sec",
            "range": "stddev: 0.06688361749988694",
            "extra": "mean: 4.807929122999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2077802327514193,
            "unit": "iter/sec",
            "range": "stddev: 0.09035104284821716",
            "extra": "mean: 4.812777359799975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21575493866964232,
            "unit": "iter/sec",
            "range": "stddev: 0.04178739791490071",
            "extra": "mean: 4.63488811039997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21140665116482502,
            "unit": "iter/sec",
            "range": "stddev: 0.025231944212439357",
            "extra": "mean: 4.730220144400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21064880299510458,
            "unit": "iter/sec",
            "range": "stddev: 0.017566670862344574",
            "extra": "mean: 4.7472379894000145 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.9578940206563,
            "unit": "iter/sec",
            "range": "stddev: 0.0005493245561360571",
            "extra": "mean: 28.60584220002238 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.63124427619107,
            "unit": "iter/sec",
            "range": "stddev: 0.00038487716996039807",
            "extra": "mean: 29.734255199946347 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.51620736876311,
            "unit": "iter/sec",
            "range": "stddev: 0.0004742005958295495",
            "extra": "mean: 29.836311399958504 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.94605192754364,
            "unit": "iter/sec",
            "range": "stddev: 0.0002507720153233112",
            "extra": "mean: 28.615535799963254 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.82042959032705,
            "unit": "iter/sec",
            "range": "stddev: 0.000431287065511658",
            "extra": "mean: 29.56792720001431 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.486609582214335,
            "unit": "iter/sec",
            "range": "stddev: 0.00131538170142434",
            "extra": "mean: 29.862682799966933 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.916265488076895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006944767421806219",
            "extra": "mean: 28.639947200008464 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.853825748086,
            "unit": "iter/sec",
            "range": "stddev: 0.00023063915012234935",
            "extra": "mean: 29.53875899997911 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.51141522800691,
            "unit": "iter/sec",
            "range": "stddev: 0.0005767156441924495",
            "extra": "mean: 29.840577999948437 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.055772477289617116,
            "unit": "iter/sec",
            "range": "stddev: 0.13948598309386034",
            "extra": "mean: 17.929990715799978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.056193080403193825,
            "unit": "iter/sec",
            "range": "stddev: 0.04823403898867844",
            "extra": "mean: 17.79578540319999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0560673487000314,
            "unit": "iter/sec",
            "range": "stddev: 0.07192531963110453",
            "extra": "mean: 17.83569266579998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05653295945376682,
            "unit": "iter/sec",
            "range": "stddev: 0.06212782557059481",
            "extra": "mean: 17.68879622899999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05644017623086395,
            "unit": "iter/sec",
            "range": "stddev: 0.17372067678369046",
            "extra": "mean: 17.717875222599968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.056924188415199035,
            "unit": "iter/sec",
            "range": "stddev: 0.03599808384476346",
            "extra": "mean: 17.56722454620003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05700022447079411,
            "unit": "iter/sec",
            "range": "stddev: 0.03199752509488494",
            "extra": "mean: 17.543790560200023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05686026271652612,
            "unit": "iter/sec",
            "range": "stddev: 0.10290053011583906",
            "extra": "mean: 17.586974667800042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05683504251997983,
            "unit": "iter/sec",
            "range": "stddev: 0.06265884283967654",
            "extra": "mean: 17.59477877839995 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}