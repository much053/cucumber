$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("equity.feature");
formatter.feature({
  "line": 1,
  "name": "权益中心",
  "description": "",
  "id": "权益中心",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "查询组权益详情",
  "description": "",
  "id": "权益中心;查询组权益详情",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDetailInsert\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "请求接口 接口地址\"equity/group/detail\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupDetailBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityGroupDetailResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "group_equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityGroupDetailInsert",
      "offset": 77
    }
  ],
  "location": "Equity.insertPrepare(String,String,String)"
});
formatter.result({
  "duration": 872163380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/group/detail",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityGroupDetailBody",
      "offset": 38
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 607302593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityGroupDetailResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 80
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 207255148,
  "error_message": "java.lang.Exception: root.data.groupEquityStatus | 校验失败 | 预期值: 1 | 实际值: 2\r\n\tat testcase.Equity.assertData(Equity.java:109)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityGroupDetailResponse\" 忽略字段\"\"(equity.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "创建团体权益",
  "description": "",
  "id": "权益中心;创建团体权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityGroupAddDelete\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "请求接口 接口地址\"equity/group/add\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupAddBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityGroupAddResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityGroupAdd\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "group_equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityGroupAddDelete",
      "offset": 77
    }
  ],
  "location": "Equity.deletePrepare(String,String,String)"
});
formatter.result({
  "duration": 233377365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/group/add",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityGroupAddBody",
      "offset": 35
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 202683560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityGroupAddResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityGroupAdd",
      "offset": 77
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1357367,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "禁用团体权益",
  "description": "",
  "id": "权益中心;禁用团体权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDisable\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "请求接口 接口地址\"equity/group/disable\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupDisableBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityGroupDisableResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "group_equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityGroupDisable",
      "offset": 77
    }
  ],
  "location": "Equity.insertPrepare(String,String,String)"
});
formatter.result({
  "duration": 233639623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/group/disable",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityGroupDisableBody",
      "offset": 39
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 103075752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityGroupDisableResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 81
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1106488,
  "error_message": "java.lang.Exception: root.errno | 校验失败 | 预期值: 0 | 实际值: 16021\r\n\tat testcase.Equity.assertData(Equity.java:109)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityGroupDisableResponse\" 忽略字段\"\"(equity.feature:19)\r\n",
  "status": "failed"
});
});