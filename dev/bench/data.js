window.BENCHMARK_DATA = {
  "lastUpdate": 1680841164010,
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
          "id": "c3765cf6352238a4c6901bec84c06a3906d4c811",
          "message": "[Doc] Refactor DDPG and DQN tutos to narrow the scope (#979)",
          "timestamp": "2023-04-07T04:47:32+01:00",
          "tree_id": "1dee398ac64a82001d9eea84cff6b5c47ca2f485",
          "url": "https://github.com/pytorch/rl/commit/c3765cf6352238a4c6901bec84c06a3906d4c811"
        },
        "date": 1680841116130,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06556550716731997,
            "unit": "iter/sec",
            "range": "stddev: 0.05106131557456071",
            "extra": "mean: 15.251921981600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11770450386965396,
            "unit": "iter/sec",
            "range": "stddev: 0.16499407409985806",
            "extra": "mean: 8.495851620999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11809734677010862,
            "unit": "iter/sec",
            "range": "stddev: 0.04160071459522311",
            "extra": "mean: 8.467590740600007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1115615225093671,
            "unit": "iter/sec",
            "range": "stddev: 0.044974943524814286",
            "extra": "mean: 899.6353146000274 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6285204540756895,
            "unit": "iter/sec",
            "range": "stddev: 0.051419600250388484",
            "extra": "mean: 1.591038117400035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.42373166297520043,
            "unit": "iter/sec",
            "range": "stddev: 0.046022144432841285",
            "extra": "mean: 2.3599841300000435 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5131293195710434,
            "unit": "iter/sec",
            "range": "stddev: 0.06380404514652634",
            "extra": "mean: 1.9488264689999824 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.677347600518523,
            "unit": "iter/sec",
            "range": "stddev: 0.0012390801216110566",
            "extra": "mean: 36.13062979999086 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2722574060132141,
            "unit": "iter/sec",
            "range": "stddev: 0.007853911819248327",
            "extra": "mean: 786.0044636200087 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2603.532055677801,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712470889735621",
            "extra": "mean: 384.093600007418 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 72.33724367200134,
            "unit": "iter/sec",
            "range": "stddev: 0.00019143369396669427",
            "extra": "mean: 13.824137460010206 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1501660490239218,
            "unit": "iter/sec",
            "range": "stddev: 0.018810405798571964",
            "extra": "mean: 869.4396786000084 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.88610109581531,
            "unit": "iter/sec",
            "range": "stddev: 0.00028796311409654885",
            "extra": "mean: 32.37702281999873 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.17170520537927,
            "unit": "iter/sec",
            "range": "stddev: 0.0037866174679235935",
            "extra": "mean: 853.4569919200021 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2427318354661069,
            "unit": "iter/sec",
            "range": "stddev: 0.056740315368121755",
            "extra": "mean: 4.119772744600004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23726916682576338,
            "unit": "iter/sec",
            "range": "stddev: 0.01568471329391987",
            "extra": "mean: 4.214622630399935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2375914765644926,
            "unit": "iter/sec",
            "range": "stddev: 0.015275971327775403",
            "extra": "mean: 4.208905194999943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24905191296331827,
            "unit": "iter/sec",
            "range": "stddev: 0.03732917694684415",
            "extra": "mean: 4.015227139200033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23825767790274177,
            "unit": "iter/sec",
            "range": "stddev: 0.03499696712863175",
            "extra": "mean: 4.197136515399961 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23758602517174982,
            "unit": "iter/sec",
            "range": "stddev: 0.03338278024796919",
            "extra": "mean: 4.209001768000053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.24923659164709291,
            "unit": "iter/sec",
            "range": "stddev: 0.041674450951435606",
            "extra": "mean: 4.012251946600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23673168052481927,
            "unit": "iter/sec",
            "range": "stddev: 0.05042954902778987",
            "extra": "mean: 4.224191700000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23400069633983156,
            "unit": "iter/sec",
            "range": "stddev: 0.013633063264660038",
            "extra": "mean: 4.273491556400041 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.378578146051254,
            "unit": "iter/sec",
            "range": "stddev: 0.00033591557427045725",
            "extra": "mean: 26.056202400059192 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.06161987218326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002975481931396629",
            "extra": "mean: 26.982091000036235 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 35.770519781917024,
            "unit": "iter/sec",
            "range": "stddev: 0.00038719752091618864",
            "extra": "mean: 27.955981800005247 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.259642980004536,
            "unit": "iter/sec",
            "range": "stddev: 0.00024760702491921817",
            "extra": "mean: 26.83868980002444 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 35.33999103413422,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793144273684837",
            "extra": "mean: 28.29655500008812 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 35.678904219208604,
            "unit": "iter/sec",
            "range": "stddev: 0.00044514384405797434",
            "extra": "mean: 28.027766600007453 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.67864860258158,
            "unit": "iter/sec",
            "range": "stddev: 0.0008074967101876516",
            "extra": "mean: 26.540229999955045 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 35.92544134495682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097983714162528",
            "extra": "mean: 27.835426999990887 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 35.97911072980055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199288954147329",
            "extra": "mean: 27.7939053999944 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06909808543896068,
            "unit": "iter/sec",
            "range": "stddev: 0.05221967484879911",
            "extra": "mean: 14.472181011199973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06867750753812951,
            "unit": "iter/sec",
            "range": "stddev: 0.1544338061687115",
            "extra": "mean: 14.560807982799952 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06845978950083322,
            "unit": "iter/sec",
            "range": "stddev: 0.034611570462939674",
            "extra": "mean: 14.607114735399955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06872884422677643,
            "unit": "iter/sec",
            "range": "stddev: 0.06275052402559146",
            "extra": "mean: 14.549931855400018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06959650544030163,
            "unit": "iter/sec",
            "range": "stddev: 0.07094629611812962",
            "extra": "mean: 14.368537524599969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06987125684915177,
            "unit": "iter/sec",
            "range": "stddev: 0.057922057028250554",
            "extra": "mean: 14.312036810200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06963491110576227,
            "unit": "iter/sec",
            "range": "stddev: 0.06129841946467869",
            "extra": "mean: 14.360612860999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06941584562895142,
            "unit": "iter/sec",
            "range": "stddev: 0.026872637305513803",
            "extra": "mean: 14.40593269359997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06981800534848669,
            "unit": "iter/sec",
            "range": "stddev: 0.039244273789789105",
            "extra": "mean: 14.322952868799984 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}