window.BENCHMARK_DATA = {
  "lastUpdate": 1680841070575,
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
          "id": "c3765cf6352238a4c6901bec84c06a3906d4c811",
          "message": "[Doc] Refactor DDPG and DQN tutos to narrow the scope (#979)",
          "timestamp": "2023-04-07T04:47:32+01:00",
          "tree_id": "1dee398ac64a82001d9eea84cff6b5c47ca2f485",
          "url": "https://github.com/pytorch/rl/commit/c3765cf6352238a4c6901bec84c06a3906d4c811"
        },
        "date": 1680841022648,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.060912841182180696,
            "unit": "iter/sec",
            "range": "stddev: 0.03607066333431607",
            "extra": "mean: 16.41689963220001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11123221547243878,
            "unit": "iter/sec",
            "range": "stddev: 0.019552440742365864",
            "extra": "mean: 8.990201226799991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11237685577433187,
            "unit": "iter/sec",
            "range": "stddev: 0.03642064795094291",
            "extra": "mean: 8.898629465199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.055431948982934,
            "unit": "iter/sec",
            "range": "stddev: 0.044294312803629034",
            "extra": "mean: 947.4793718000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.603655483250302,
            "unit": "iter/sec",
            "range": "stddev: 0.039352789800750305",
            "extra": "mean: 1.6565740355999652 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40565910969978936,
            "unit": "iter/sec",
            "range": "stddev: 0.03683614099208737",
            "extra": "mean: 2.4651239824000415 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4737936887921424,
            "unit": "iter/sec",
            "range": "stddev: 0.06152613125027781",
            "extra": "mean: 2.1106233022000196 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.850561113352818,
            "unit": "iter/sec",
            "range": "stddev: 0.0013070768512004822",
            "extra": "mean: 34.66137091999826 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3545004576536035,
            "unit": "iter/sec",
            "range": "stddev: 0.0052146561325074735",
            "extra": "mean: 738.2795585999997 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3546.4494083286254,
            "unit": "iter/sec",
            "range": "stddev: 0.00003129741272107068",
            "extra": "mean: 281.97216000080516 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.86057708477705,
            "unit": "iter/sec",
            "range": "stddev: 0.00016294266492406572",
            "extra": "mean: 12.680607179997878 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2446647916987736,
            "unit": "iter/sec",
            "range": "stddev: 0.0052874978774860295",
            "extra": "mean: 803.4291695799925 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.57102385022272,
            "unit": "iter/sec",
            "range": "stddev: 0.00021331583068440535",
            "extra": "mean: 30.702135879992056 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.242229480687208,
            "unit": "iter/sec",
            "range": "stddev: 0.009357805781451189",
            "extra": "mean: 805.0042408000127 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.219344717274969,
            "unit": "iter/sec",
            "range": "stddev: 0.015597801185474583",
            "extra": "mean: 4.5590338915999835 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21364218854615874,
            "unit": "iter/sec",
            "range": "stddev: 0.038939750785677345",
            "extra": "mean: 4.680723441399982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21445529814903802,
            "unit": "iter/sec",
            "range": "stddev: 0.02191102518678508",
            "extra": "mean: 4.662976427399985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2211146604505707,
            "unit": "iter/sec",
            "range": "stddev: 0.034740651103488014",
            "extra": "mean: 4.5225404681999635 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20753463825822283,
            "unit": "iter/sec",
            "range": "stddev: 0.338536875866015",
            "extra": "mean: 4.818472754200002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2138198144417837,
            "unit": "iter/sec",
            "range": "stddev: 0.0066313427999769425",
            "extra": "mean: 4.676835038000036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2187636114500257,
            "unit": "iter/sec",
            "range": "stddev: 0.02504922846250932",
            "extra": "mean: 4.571144137600049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21316197421623503,
            "unit": "iter/sec",
            "range": "stddev: 0.02976749115923269",
            "extra": "mean: 4.691268241799935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21088206837808798,
            "unit": "iter/sec",
            "range": "stddev: 0.029745904542266496",
            "extra": "mean: 4.741986873000087 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.9702878445697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005081769467329805",
            "extra": "mean: 28.595704000053956 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.23003121809028,
            "unit": "iter/sec",
            "range": "stddev: 0.000627658313067035",
            "extra": "mean: 29.21411300003456 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.94321529541791,
            "unit": "iter/sec",
            "range": "stddev: 0.00029611551137181225",
            "extra": "mean: 29.460968599960324 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.98796798771021,
            "unit": "iter/sec",
            "range": "stddev: 0.00043269089002868357",
            "extra": "mean: 28.581253999982437 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.31673449586783,
            "unit": "iter/sec",
            "range": "stddev: 0.00023385805392012039",
            "extra": "mean: 29.14030179999827 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.837177936058374,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693559266190614",
            "extra": "mean: 29.553291999991416 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.82720981362116,
            "unit": "iter/sec",
            "range": "stddev: 0.00047507777988746826",
            "extra": "mean: 28.713181600005555 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.07548582903461,
            "unit": "iter/sec",
            "range": "stddev: 0.000314969616103996",
            "extra": "mean: 29.34661019999112 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.79886789887486,
            "unit": "iter/sec",
            "range": "stddev: 0.00042675642351442793",
            "extra": "mean: 29.58678979994147 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05581533267413132,
            "unit": "iter/sec",
            "range": "stddev: 0.19581231606322314",
            "extra": "mean: 17.9162239494 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.056600908003319544,
            "unit": "iter/sec",
            "range": "stddev: 0.026669393013696457",
            "extra": "mean: 17.667561091800007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05700147241050608,
            "unit": "iter/sec",
            "range": "stddev: 0.04809224856782059",
            "extra": "mean: 17.54340647199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05687382957854595,
            "unit": "iter/sec",
            "range": "stddev: 0.045593711720492563",
            "extra": "mean: 17.582779415599997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05666960121586545,
            "unit": "iter/sec",
            "range": "stddev: 0.08991099635958558",
            "extra": "mean: 17.64614499740005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05693173970807477,
            "unit": "iter/sec",
            "range": "stddev: 0.04026034321942276",
            "extra": "mean: 17.564894470599985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05709880856325221,
            "unit": "iter/sec",
            "range": "stddev: 0.04553751287086811",
            "extra": "mean: 17.513500284200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05699753512253351,
            "unit": "iter/sec",
            "range": "stddev: 0.026614111022407256",
            "extra": "mean: 17.544618339200042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.056863364808145425,
            "unit": "iter/sec",
            "range": "stddev: 0.08599625525437901",
            "extra": "mean: 17.586015238000027 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}