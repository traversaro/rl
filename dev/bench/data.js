window.BENCHMARK_DATA = {
  "lastUpdate": 1681292537167,
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
          "id": "ded56210936b6b3c57d139e9682477534a2732c9",
          "message": "[Feature] `make_composite_from_td` (#1042)",
          "timestamp": "2023-04-12T10:04:42+01:00",
          "tree_id": "9d2b515ed05a2ed9082f40864ccfbfd99924e3f6",
          "url": "https://github.com/pytorch/rl/commit/ded56210936b6b3c57d139e9682477534a2732c9"
        },
        "date": 1681292469221,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.054889666322617735,
            "unit": "iter/sec",
            "range": "stddev: 0.25332362430114563",
            "extra": "mean: 18.218365440999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.0977707108643879,
            "unit": "iter/sec",
            "range": "stddev: 0.21010856101016456",
            "extra": "mean: 10.22801195940001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10141315689541054,
            "unit": "iter/sec",
            "range": "stddev: 0.1087598404750871",
            "extra": "mean: 9.86065349520004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9522561511408528,
            "unit": "iter/sec",
            "range": "stddev: 0.050554912262570494",
            "extra": "mean: 1.0501376113999867 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5402615040594683,
            "unit": "iter/sec",
            "range": "stddev: 0.052366379282122254",
            "extra": "mean: 1.8509554956000103 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.358302027904105,
            "unit": "iter/sec",
            "range": "stddev: 0.045357966251610204",
            "extra": "mean: 2.79094150220003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4163566419249829,
            "unit": "iter/sec",
            "range": "stddev: 0.05221141652827184",
            "extra": "mean: 2.4017870721999315 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.80432238414877,
            "unit": "iter/sec",
            "range": "stddev: 0.0026735697983889394",
            "extra": "mean: 40.315554060007344 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.1992145328529513,
            "unit": "iter/sec",
            "range": "stddev: 0.022430389486517616",
            "extra": "mean: 833.8791538999976 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3166.861555311208,
            "unit": "iter/sec",
            "range": "stddev: 0.00004473205229516609",
            "extra": "mean: 315.77004000155284 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 69.81289440576465,
            "unit": "iter/sec",
            "range": "stddev: 0.00013326330889795",
            "extra": "mean: 14.324001440018037 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.104794267473032,
            "unit": "iter/sec",
            "range": "stddev: 0.01360584902454904",
            "extra": "mean: 905.1458985999943 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.405915983091155,
            "unit": "iter/sec",
            "range": "stddev: 0.0003506203570530011",
            "extra": "mean: 35.203934299997854 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.0768333099016127,
            "unit": "iter/sec",
            "range": "stddev: 0.02897892256558677",
            "extra": "mean: 928.6488361800093 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.20698869412029738,
            "unit": "iter/sec",
            "range": "stddev: 0.06761428809612648",
            "extra": "mean: 4.831181742800027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20189453426422327,
            "unit": "iter/sec",
            "range": "stddev: 0.08875859787714926",
            "extra": "mean: 4.953081090800015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20299280789080784,
            "unit": "iter/sec",
            "range": "stddev: 0.1729270044639763",
            "extra": "mean: 4.926282908199937 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21224258659202025,
            "unit": "iter/sec",
            "range": "stddev: 0.04453230048212165",
            "extra": "mean: 4.711589771200034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20631802769330757,
            "unit": "iter/sec",
            "range": "stddev: 0.03530038959908947",
            "extra": "mean: 4.84688619399999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2047003424291849,
            "unit": "iter/sec",
            "range": "stddev: 0.04354020544487857",
            "extra": "mean: 4.8851896784000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21455512691652187,
            "unit": "iter/sec",
            "range": "stddev: 0.02139091842762075",
            "extra": "mean: 4.660806825600003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20577940740588893,
            "unit": "iter/sec",
            "range": "stddev: 0.12111362491574464",
            "extra": "mean: 4.8595727464 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2064850180974117,
            "unit": "iter/sec",
            "range": "stddev: 0.045436704829708574",
            "extra": "mean: 4.8429663769999935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.14072062925825,
            "unit": "iter/sec",
            "range": "stddev: 0.0004684206534149009",
            "extra": "mean: 28.45701459996235 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.50328993932087,
            "unit": "iter/sec",
            "range": "stddev: 0.00031104313259023317",
            "extra": "mean: 29.847814999993716 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.50542321791557,
            "unit": "iter/sec",
            "range": "stddev: 0.0005721812519796658",
            "extra": "mean: 29.84591460003685 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.457707867126885,
            "unit": "iter/sec",
            "range": "stddev: 0.00016255437310007116",
            "extra": "mean: 29.02108299995234 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.53681842632254,
            "unit": "iter/sec",
            "range": "stddev: 0.00019233393887194968",
            "extra": "mean: 29.81797459997324 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.56201258094582,
            "unit": "iter/sec",
            "range": "stddev: 0.00032667562074961535",
            "extra": "mean: 29.795591000038257 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.59162562341298,
            "unit": "iter/sec",
            "range": "stddev: 0.00019514219660556569",
            "extra": "mean: 28.908731000001353 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.367559106135275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004944025648334372",
            "extra": "mean: 29.969228399932035 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.360314933696095,
            "unit": "iter/sec",
            "range": "stddev: 0.00044611507190050933",
            "extra": "mean: 29.97573619995819 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06050535893801675,
            "unit": "iter/sec",
            "range": "stddev: 0.10098808318659991",
            "extra": "mean: 16.52746165879994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.0609328821069883,
            "unit": "iter/sec",
            "range": "stddev: 0.097038413700859",
            "extra": "mean: 16.411500087000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06109498537293105,
            "unit": "iter/sec",
            "range": "stddev: 0.06260568010992773",
            "extra": "mean: 16.36795546960002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06159557228823385,
            "unit": "iter/sec",
            "range": "stddev: 0.09408559377069467",
            "extra": "mean: 16.234933175400055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.061499048381056,
            "unit": "iter/sec",
            "range": "stddev: 0.05344454683059575",
            "extra": "mean: 16.260414206799943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06084538570724019,
            "unit": "iter/sec",
            "range": "stddev: 0.02623253786216744",
            "extra": "mean: 16.4351000224 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06084157288624819,
            "unit": "iter/sec",
            "range": "stddev: 0.022254622362966228",
            "extra": "mean: 16.43612997760001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.060995224119747435,
            "unit": "iter/sec",
            "range": "stddev: 0.054153099060009736",
            "extra": "mean: 16.394726217199786 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0606279892463748,
            "unit": "iter/sec",
            "range": "stddev: 0.10491774926130246",
            "extra": "mean: 16.49403208700005 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}