window.BENCHMARK_DATA = {
  "lastUpdate": 1681300752782,
  "repoUrl": "https://github.com/pytorch/rl",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "50365897+FrankTianTT@users.noreply.github.com",
            "name": "Honglong Tian",
            "username": "FrankTianTT"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9df4529d28445eeb115283f4b005b8d447599339",
          "message": "[Minor] Fix a typo (#1046)",
          "timestamp": "2023-04-12T12:26:10+01:00",
          "tree_id": "b71a59137e77e4b9fe06abdccfd39502f670e3f0",
          "url": "https://github.com/pytorch/rl/commit/9df4529d28445eeb115283f4b005b8d447599339"
        },
        "date": 1681300695810,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0650602833022658,
            "unit": "iter/sec",
            "range": "stddev: 0.06011166072907635",
            "extra": "mean: 15.370360368000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11508029853567098,
            "unit": "iter/sec",
            "range": "stddev: 0.1620197114444353",
            "extra": "mean: 8.689584687599972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11669606904179687,
            "unit": "iter/sec",
            "range": "stddev: 0.12553286277801876",
            "extra": "mean: 8.569268941199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0885259539635297,
            "unit": "iter/sec",
            "range": "stddev: 0.049095125136224986",
            "extra": "mean: 918.6735477999491 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6257653983764867,
            "unit": "iter/sec",
            "range": "stddev: 0.055362766570204634",
            "extra": "mean: 1.5980429768000022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4196378418366935,
            "unit": "iter/sec",
            "range": "stddev: 0.04422320072707916",
            "extra": "mean: 2.3830072036000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.517263514407396,
            "unit": "iter/sec",
            "range": "stddev: 0.022842851798722065",
            "extra": "mean: 1.9332506007999655 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.564680971824657,
            "unit": "iter/sec",
            "range": "stddev: 0.0012025361770071404",
            "extra": "mean: 36.27830850000237 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3333902203114363,
            "unit": "iter/sec",
            "range": "stddev: 0.017728231984044125",
            "extra": "mean: 749.9680024400004 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3564.0492075832476,
            "unit": "iter/sec",
            "range": "stddev: 0.00004388671606508667",
            "extra": "mean: 280.57973999693786 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.42975461536943,
            "unit": "iter/sec",
            "range": "stddev: 0.00015627110641732868",
            "extra": "mean: 13.257367800003976 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.220218598120481,
            "unit": "iter/sec",
            "range": "stddev: 0.00846345632177739",
            "extra": "mean: 819.5252896000056 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.345343365998957,
            "unit": "iter/sec",
            "range": "stddev: 0.00019129688044729223",
            "extra": "mean: 31.90266536000763 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2182641104020662,
            "unit": "iter/sec",
            "range": "stddev: 0.00972384918399988",
            "extra": "mean: 820.8400719200108 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2420987618438615,
            "unit": "iter/sec",
            "range": "stddev: 0.018805293295278525",
            "extra": "mean: 4.13054570119998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2346699198560939,
            "unit": "iter/sec",
            "range": "stddev: 0.012505983875106657",
            "extra": "mean: 4.261304561799943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.23459918837285915,
            "unit": "iter/sec",
            "range": "stddev: 0.030200536746165765",
            "extra": "mean: 4.262589342000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24278934217415993,
            "unit": "iter/sec",
            "range": "stddev: 0.03063744231696322",
            "extra": "mean: 4.118796941599976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2328619630944587,
            "unit": "iter/sec",
            "range": "stddev: 0.027863532412657703",
            "extra": "mean: 4.294389631999957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2340516205524519,
            "unit": "iter/sec",
            "range": "stddev: 0.02053482403574936",
            "extra": "mean: 4.272561743600045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.24186504586475532,
            "unit": "iter/sec",
            "range": "stddev: 0.0198630646650493",
            "extra": "mean: 4.134537077999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2336810207280391,
            "unit": "iter/sec",
            "range": "stddev: 0.017855400053328602",
            "extra": "mean: 4.279337692399986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23342232295473253,
            "unit": "iter/sec",
            "range": "stddev: 0.016849556490238723",
            "extra": "mean: 4.28408040559998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.95438332652949,
            "unit": "iter/sec",
            "range": "stddev: 0.00012908529352399084",
            "extra": "mean: 25.671051999916017 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.19155721306809,
            "unit": "iter/sec",
            "range": "stddev: 0.00029751485562490055",
            "extra": "mean: 26.887822799972128 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.11491843197914,
            "unit": "iter/sec",
            "range": "stddev: 0.0005185475538630225",
            "extra": "mean: 26.943343600032676 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 38.70253917292196,
            "unit": "iter/sec",
            "range": "stddev: 0.00040696003350326526",
            "extra": "mean: 25.838098000031096 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 37.27412532334845,
            "unit": "iter/sec",
            "range": "stddev: 0.0003091238578029456",
            "extra": "mean: 26.82826200011732 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 37.36867768497531,
            "unit": "iter/sec",
            "range": "stddev: 0.0003781981531718271",
            "extra": "mean: 26.760379600000306 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 38.6620233576765,
            "unit": "iter/sec",
            "range": "stddev: 0.000761483451190667",
            "extra": "mean: 25.865174999989904 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 37.14574364299137,
            "unit": "iter/sec",
            "range": "stddev: 0.00031832678036414837",
            "extra": "mean: 26.920984800062797 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 36.797684454197466,
            "unit": "iter/sec",
            "range": "stddev: 0.00040261748798835315",
            "extra": "mean: 27.17562299999372 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06713218097144626,
            "unit": "iter/sec",
            "range": "stddev: 0.14666440076921713",
            "extra": "mean: 14.89598558440007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06783333161341244,
            "unit": "iter/sec",
            "range": "stddev: 0.06034738641595723",
            "extra": "mean: 14.742015115799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06783367106762586,
            "unit": "iter/sec",
            "range": "stddev: 0.03778650446085327",
            "extra": "mean: 14.741941343600047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06761728666444683,
            "unit": "iter/sec",
            "range": "stddev: 0.06955595572949014",
            "extra": "mean: 14.78911753679995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06805426471935179,
            "unit": "iter/sec",
            "range": "stddev: 0.04395760764696406",
            "extra": "mean: 14.694156260799947 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06794310833872853,
            "unit": "iter/sec",
            "range": "stddev: 0.04295047868830022",
            "extra": "mean: 14.718196215200033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06826185742039717,
            "unit": "iter/sec",
            "range": "stddev: 0.06274422541383336",
            "extra": "mean: 14.64946952499995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06832659150224701,
            "unit": "iter/sec",
            "range": "stddev: 0.05856526247764883",
            "extra": "mean: 14.635590302600031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06794687848615473,
            "unit": "iter/sec",
            "range": "stddev: 0.0874599826055042",
            "extra": "mean: 14.71737955119993 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}