window.BENCHMARK_DATA = {
  "lastUpdate": 1681292692130,
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
          "id": "6920823a65655c57cd177c60e90b62d9bf97651c",
          "message": "[Refactor] Import envpool locally to avoid importing gym at root level (#1041)",
          "timestamp": "2023-04-12T10:16:28+01:00",
          "tree_id": "36c4e43e63dd981d3a97d71f3cd20d90d7cf6759",
          "url": "https://github.com/pytorch/rl/commit/6920823a65655c57cd177c60e90b62d9bf97651c"
        },
        "date": 1681292632174,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07094515133863186,
            "unit": "iter/sec",
            "range": "stddev: 0.04737086596115579",
            "extra": "mean: 14.095395966199998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.13071538974733574,
            "unit": "iter/sec",
            "range": "stddev: 0.046574178153421686",
            "extra": "mean: 7.65020860919999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13140121326091989,
            "unit": "iter/sec",
            "range": "stddev: 0.052275618407924086",
            "extra": "mean: 7.610279807799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.2541662037382568,
            "unit": "iter/sec",
            "range": "stddev: 0.03313565542305854",
            "extra": "mean: 797.3424869999917 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7215596917734849,
            "unit": "iter/sec",
            "range": "stddev: 0.029586791393395536",
            "extra": "mean: 1.385886727599973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.45436526373226477,
            "unit": "iter/sec",
            "range": "stddev: 0.0032124466575310646",
            "extra": "mean: 2.200872469399974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5196232954961386,
            "unit": "iter/sec",
            "range": "stddev: 0.0293793464318229",
            "extra": "mean: 1.9244710709999935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.16253922321227,
            "unit": "iter/sec",
            "range": "stddev: 0.00028419981020850625",
            "extra": "mean: 35.5081618200029 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.531882095387726,
            "unit": "iter/sec",
            "range": "stddev: 0.006062063448309376",
            "extra": "mean: 652.7917540200087 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4196.826108076129,
            "unit": "iter/sec",
            "range": "stddev: 0.000025516334784063232",
            "extra": "mean: 238.27530001199193 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.35690730594798,
            "unit": "iter/sec",
            "range": "stddev: 0.0001551279787995365",
            "extra": "mean: 13.270183660006296 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.3968978464718869,
            "unit": "iter/sec",
            "range": "stddev: 0.012589772127257481",
            "extra": "mean: 715.8719605200031 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.830930557293165,
            "unit": "iter/sec",
            "range": "stddev: 0.00017254461227156234",
            "extra": "mean: 31.415983839997352 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.3651909265879545,
            "unit": "iter/sec",
            "range": "stddev: 0.11271970156200448",
            "extra": "mean: 732.4982759 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.23212207638412308,
            "unit": "iter/sec",
            "range": "stddev: 0.04196890480968652",
            "extra": "mean: 4.308077954400028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.22455849704798764,
            "unit": "iter/sec",
            "range": "stddev: 0.032495642952106565",
            "extra": "mean: 4.453182636799989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2283968770699158,
            "unit": "iter/sec",
            "range": "stddev: 0.020268692616730387",
            "extra": "mean: 4.378343578199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23360903153432477,
            "unit": "iter/sec",
            "range": "stddev: 0.052214089451368996",
            "extra": "mean: 4.280656417399973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2301070122311048,
            "unit": "iter/sec",
            "range": "stddev: 0.017018143721803655",
            "extra": "mean: 4.34580411220004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23084811392086027,
            "unit": "iter/sec",
            "range": "stddev: 0.028021699747052237",
            "extra": "mean: 4.331852589199935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.23817313390027373,
            "unit": "iter/sec",
            "range": "stddev: 0.029530606505894015",
            "extra": "mean: 4.198626367400084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23211404228016935,
            "unit": "iter/sec",
            "range": "stddev: 0.02202168682238331",
            "extra": "mean: 4.308227068799942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23069949856275787,
            "unit": "iter/sec",
            "range": "stddev: 0.02598169002500208",
            "extra": "mean: 4.334643145000018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.79732605076065,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831406351770278",
            "extra": "mean: 26.45689800006039 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.99010536139587,
            "unit": "iter/sec",
            "range": "stddev: 0.0002451372319630702",
            "extra": "mean: 27.03425659997265 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 36.55169015739729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006192376460712978",
            "extra": "mean: 27.35851600004935 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.54892850682057,
            "unit": "iter/sec",
            "range": "stddev: 0.0006038776648346454",
            "extra": "mean: 26.631918399971255 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 37.082169883458924,
            "unit": "iter/sec",
            "range": "stddev: 0.00012247183602001355",
            "extra": "mean: 26.967138199916008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 37.08439848384856,
            "unit": "iter/sec",
            "range": "stddev: 0.000260064344513822",
            "extra": "mean: 26.965517599956 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.7571104416274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667528164980432",
            "extra": "mean: 26.48507760004577 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 37.42874045036998,
            "unit": "iter/sec",
            "range": "stddev: 0.00018426005845963758",
            "extra": "mean: 26.717436599983557 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 37.2419549630857,
            "unit": "iter/sec",
            "range": "stddev: 0.0001965305060539074",
            "extra": "mean: 26.851436800006923 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06080020915754473,
            "unit": "iter/sec",
            "range": "stddev: 0.06589606258989945",
            "extra": "mean: 16.447311840799966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06105295107014593,
            "unit": "iter/sec",
            "range": "stddev: 0.0409563875141229",
            "extra": "mean: 16.379224631599936 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.061393771308892904,
            "unit": "iter/sec",
            "range": "stddev: 0.02808294431028484",
            "extra": "mean: 16.288297308999972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06171125554903202,
            "unit": "iter/sec",
            "range": "stddev: 0.051997099970656324",
            "extra": "mean: 16.204499343000087 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.061504929278871086,
            "unit": "iter/sec",
            "range": "stddev: 0.04498891356760539",
            "extra": "mean: 16.258859439799927 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06172071961324242,
            "unit": "iter/sec",
            "range": "stddev: 0.027532356090851307",
            "extra": "mean: 16.20201459519999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06167501624962977,
            "unit": "iter/sec",
            "range": "stddev: 0.023507407666247253",
            "extra": "mean: 16.214020859799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06138105012852509,
            "unit": "iter/sec",
            "range": "stddev: 0.031132193351852015",
            "extra": "mean: 16.29167304739999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06150426889003591,
            "unit": "iter/sec",
            "range": "stddev: 0.06579358834190817",
            "extra": "mean: 16.259034015799944 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}