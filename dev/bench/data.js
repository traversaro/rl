window.BENCHMARK_DATA = {
  "lastUpdate": 1681411441329,
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
          "id": "d318220cf775a876a4072ca3be93c4ab792ea00c",
          "message": "[Feature] Deduplicate calls to common layers in PPO (#1057)",
          "timestamp": "2023-04-13T19:02:54+01:00",
          "tree_id": "084bceb4abda4dfa3f6667665209dccaf41d381a",
          "url": "https://github.com/pytorch/rl/commit/d318220cf775a876a4072ca3be93c4ab792ea00c"
        },
        "date": 1681411389949,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.043681675452473395,
            "unit": "iter/sec",
            "range": "stddev: 0.8375872447869581",
            "extra": "mean: 22.892894781199992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07896887001926264,
            "unit": "iter/sec",
            "range": "stddev: 0.17588810581177902",
            "extra": "mean: 12.663217794000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08256534598259749,
            "unit": "iter/sec",
            "range": "stddev: 0.2915066629002943",
            "extra": "mean: 12.11161884080002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.7468206626327065,
            "unit": "iter/sec",
            "range": "stddev: 0.03754938935390842",
            "extra": "mean: 1.3390095508000286 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4308921266237074,
            "unit": "iter/sec",
            "range": "stddev: 0.0485819037711659",
            "extra": "mean: 2.320766470799981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.27961272915164376,
            "unit": "iter/sec",
            "range": "stddev: 0.036413667979464694",
            "extra": "mean: 3.5763750921999873 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3511065826657511,
            "unit": "iter/sec",
            "range": "stddev: 0.029426191962545152",
            "extra": "mean: 2.8481379995999303 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 18.91564978340372,
            "unit": "iter/sec",
            "range": "stddev: 0.002563426234054084",
            "extra": "mean: 52.86627799999678 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.213309071380404,
            "unit": "iter/sec",
            "range": "stddev: 0.02175953032471089",
            "extra": "mean: 824.192304819976 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2707.6735523880625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004312999684780533",
            "extra": "mean: 369.32073998286796 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 62.70476373846063,
            "unit": "iter/sec",
            "range": "stddev: 0.0009931080550359904",
            "extra": "mean: 15.947751660000904 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.0865871345766378,
            "unit": "iter/sec",
            "range": "stddev: 0.027998446421365123",
            "extra": "mean: 920.3127555799983 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 20.62199249505029,
            "unit": "iter/sec",
            "range": "stddev: 0.0024404528228178708",
            "extra": "mean: 48.49191950002023 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.069382230534264,
            "unit": "iter/sec",
            "range": "stddev: 0.043798929384977474",
            "extra": "mean: 935.1193347400203 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.220706352637547,
            "unit": "iter/sec",
            "range": "stddev: 0.1570226137322758",
            "extra": "mean: 4.530907189800018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2248624219128403,
            "unit": "iter/sec",
            "range": "stddev: 0.06302244624656379",
            "extra": "mean: 4.447163698999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2278107043012272,
            "unit": "iter/sec",
            "range": "stddev: 0.08551441615897397",
            "extra": "mean: 4.3896093604000725 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23884679732887595,
            "unit": "iter/sec",
            "range": "stddev: 0.037181206025094005",
            "extra": "mean: 4.186784211400027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21601719969624414,
            "unit": "iter/sec",
            "range": "stddev: 0.19028251614930372",
            "extra": "mean: 4.6292610097999844 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21589569947735276,
            "unit": "iter/sec",
            "range": "stddev: 0.10089646976493474",
            "extra": "mean: 4.631866231800041 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2283890887680926,
            "unit": "iter/sec",
            "range": "stddev: 0.05079414280733023",
            "extra": "mean: 4.3784928841999315 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21267078070227288,
            "unit": "iter/sec",
            "range": "stddev: 0.0957737529140592",
            "extra": "mean: 4.702103395200038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2179093038777224,
            "unit": "iter/sec",
            "range": "stddev: 0.030906076115360948",
            "extra": "mean: 4.589065185399977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.99464292377078,
            "unit": "iter/sec",
            "range": "stddev: 0.0009214916203920248",
            "extra": "mean: 25.644548199989003 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.7161512347425,
            "unit": "iter/sec",
            "range": "stddev: 0.002757572700819836",
            "extra": "mean: 29.65937579997444 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.180266349725414,
            "unit": "iter/sec",
            "range": "stddev: 0.002259900741395877",
            "extra": "mean: 30.138395800076978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.77723857651177,
            "unit": "iter/sec",
            "range": "stddev: 0.0021244410316031462",
            "extra": "mean: 27.9507318000924 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.309222119796026,
            "unit": "iter/sec",
            "range": "stddev: 0.0012274660829765171",
            "extra": "mean: 30.021715800012316 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.95650930433942,
            "unit": "iter/sec",
            "range": "stddev: 0.0023216143768667666",
            "extra": "mean: 29.44943459992828 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 35.47531864666283,
            "unit": "iter/sec",
            "range": "stddev: 0.0024123246565700886",
            "extra": "mean: 28.18861219993778 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.86294140106893,
            "unit": "iter/sec",
            "range": "stddev: 0.001551184395674643",
            "extra": "mean: 28.68375299995023 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 31.990481680056867,
            "unit": "iter/sec",
            "range": "stddev: 0.010130905128925019",
            "extra": "mean: 31.259297999986302 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.047532838343643434,
            "unit": "iter/sec",
            "range": "stddev: 0.3036707043655934",
            "extra": "mean: 21.038087243400014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04808086968877877,
            "unit": "iter/sec",
            "range": "stddev: 0.7471862365324956",
            "extra": "mean: 20.798292678000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0481087152352107,
            "unit": "iter/sec",
            "range": "stddev: 0.9098427024967228",
            "extra": "mean: 20.786254530199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04815627931229557,
            "unit": "iter/sec",
            "range": "stddev: 0.9319928680036079",
            "extra": "mean: 20.765723894800022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04642332623202278,
            "unit": "iter/sec",
            "range": "stddev: 0.536344324241956",
            "extra": "mean: 21.540895087999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04756072721583078,
            "unit": "iter/sec",
            "range": "stddev: 0.8518100931240202",
            "extra": "mean: 21.025750835600046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.049576006164875584,
            "unit": "iter/sec",
            "range": "stddev: 0.3812238654640302",
            "extra": "mean: 20.171047999999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.048335522985871245,
            "unit": "iter/sec",
            "range": "stddev: 0.45028239388103375",
            "extra": "mean: 20.688717908199852 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04900075865981259,
            "unit": "iter/sec",
            "range": "stddev: 0.6984882884097866",
            "extra": "mean: 20.407847293599936 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}