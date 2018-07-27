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
  "name": "预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDetailDelete\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDetailInsert\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "请求接口 接口地址\"equity/group/detail\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupDetailBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
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
      "val": "src\\test\\resources\\datapreset\\equity-EquityGroupDetailDelete",
      "offset": 77
    }
  ],
  "location": "Equity.deletePrepare(String,String,String)"
});
formatter.result({
  "duration": 648944086,
  "status": "passed"
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
  "duration": 260536098,
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
  "duration": 599104342,
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
  "duration": 206092909,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "创建团体权益",
  "description": "",
  "id": "权益中心;创建团体权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityGroupAddDelete\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "请求接口 接口地址\"equity/group/add\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupAddBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 264908574,
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
  "duration": 479839164,
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
  "duration": 1477403,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "禁用团体权益",
  "description": "",
  "id": "权益中心;禁用团体权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDisable\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "请求接口 接口地址\"equity/group/disable\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupDisableBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
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
  "duration": 259632134,
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
  "duration": 102092713,
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
  "duration": 1912603,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#  @cases(未实现)"
    },
    {
      "line": 23,
      "value": "#  Scenario: 启用团体权益"
    },
    {
      "line": 24,
      "value": "#    Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityGroupEnableDelete\""
    },
    {
      "line": 25,
      "value": "#    Given 预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDisable\""
    },
    {
      "line": 26,
      "value": "#    Then 请求接口 接口地址\"equity/group/enable\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityGroupEnableBody\""
    },
    {
      "line": 27,
      "value": "#    Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityGroupEnableResponse\" 忽略字段\"\""
    },
    {
      "line": 29,
      "value": "#  @cases(未实现)"
    },
    {
      "line": 30,
      "value": "#  Scenario: 获取组权益列表"
    }
  ],
  "line": 33,
  "name": "预核算",
  "description": "",
  "id": "权益中心;预核算",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#预置权益数据、药店数据、药品数据"
    },
    {
      "line": 35,
      "value": "#Given 预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"group_equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityGroupDisable\""
    }
  ],
  "line": 36,
  "name": "请求接口 接口地址\"precheck/check\" 参数文件路径\"src\\test\\resources\\senddata\\equity-PreCheckBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-PreCheckResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-PreCheck\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "precheck/check",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-PreCheckBody",
      "offset": 33
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 1717388757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-PreCheckResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-PreCheck",
      "offset": 71
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1569563,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "锁定试算",
  "description": "",
  "id": "权益中心;锁定试算",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#预置试算单号"
    },
    {
      "line": 42,
      "value": "#Given 预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"precheck\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-\""
    }
  ],
  "line": 43,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"precheck\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-PreCheckLockUpdate\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "请求接口 接口地址\"precheck/lock\" 参数文件路径\"src\\test\\resources\\senddata\\equity-PreCheckLockBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-PreCheckLockResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-PreChecklock\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "precheck",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-PreCheckLockUpdate",
      "offset": 73
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 231857295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "precheck/lock",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-PreCheckLockBody",
      "offset": 32
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 2038619558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-PreCheckLockResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-PreChecklock",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1384675,
  "error_message": "java.lang.NullPointerException\r\n\tat testcase.Equity.assertData(Equity.java:125)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-PreCheckLockResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-PreChecklock\"(equity.feature:45)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 48,
  "name": "添加权益",
  "description": "",
  "id": "权益中心;添加权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#补充各种类型的权益卡case"
    },
    {
      "line": 50,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityAddDelete\""
    },
    {
      "line": 51,
      "value": "#Given 预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityAddInsert\""
    }
  ],
  "line": 52,
  "name": "请求接口 接口地址\"equity/add\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityAddBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityAddResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityAdd\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/add",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityAddBody",
      "offset": 29
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 49669646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityAddResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityAdd",
      "offset": 72
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1917154,
  "error_message": "java.lang.Exception: root.errno | 校验失败 | 预期值: 0 | 实际值: 1\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityAddResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityAdd\"(equity.feature:53)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 56,
  "name": "激活权益",
  "description": "",
  "id": "权益中心;激活权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityActiveInsert\"",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityActiveUpdate\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "请求接口 接口地址\"equity/active\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityActiveBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityActiveResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityActive\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityActiveInsert",
      "offset": 71
    }
  ],
  "location": "Equity.insertPrepare(String,String,String)"
});
formatter.result({
  "duration": 206337531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityActiveUpdate",
      "offset": 71
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 262803118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/active",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityActiveBody",
      "offset": 32
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 266425799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityActiveResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityActive",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 3225597,
  "error_message": "java.lang.Exception: root.data.expiredAt | 校验失败 | 预期值: 2020-06-05 00:00:00 | 实际值: 2018-07-27 11:12:46\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityActiveResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityActive\"(equity.feature:60)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 63,
  "name": "禁用权益",
  "description": "",
  "id": "权益中心;禁用权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityDisableInsert\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityDisableUpdate\"",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "请求接口 接口地址\"equity/disable\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityDisableBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityDisableResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityDisable\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityDisableInsert",
      "offset": 71
    }
  ],
  "location": "Equity.insertPrepare(String,String,String)"
});
formatter.result({
  "duration": 243396628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityDisableUpdate",
      "offset": 71
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 252543215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/disable",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityDisableBody",
      "offset": 33
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 210823785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityDisableResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityDisable",
      "offset": 76
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 4459517,
  "error_message": "java.lang.Exception: root.data.activatedAt | 校验失败 | 预期值: 2018-07-25 14:37:16 | 实际值: 2018-07-27 11:16:28\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityDisableResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityDisable\"(equity.feature:67)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 70,
  "name": "启用权益",
  "description": "",
  "id": "权益中心;启用权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "预置数据 操作类型insert 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 入库数据路径\"src\\test\\resources\\datapreset\\equity-EquityEnableInsert\"",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityEnableUpdate\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "请求接口 接口地址\"equity/disable\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityEnableBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityEnableResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityEnable\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityEnableInsert",
      "offset": 71
    }
  ],
  "location": "Equity.insertPrepare(String,String,String)"
});
formatter.result({
  "duration": 213683018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityEnableUpdate",
      "offset": 71
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 245499809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/disable",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityEnableBody",
      "offset": 33
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 178830638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityEnableResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityEnable",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 6319782,
  "error_message": "java.lang.Exception: root.data.activatedAt | 校验失败 | 预期值: 2018-07-25 14:37:16 | 实际值: 2018-07-27 11:16:28\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityEnableResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityEnable\"(equity.feature:74)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 77,
  "name": "解锁接口",
  "description": "",
  "id": "权益中心;解锁接口",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"precheck\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityUnlockUpdatePrecheck\"",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityUnlockUpdateequity\"",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "请求接口 接口地址\"equity/unlock\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityUnlockBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityUnlockResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityUnlock\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "precheck",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityUnlockUpdatePrecheck",
      "offset": 73
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 243245873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityUnlockUpdateequity",
      "offset": 71
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 221240700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/unlock",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityUnlockBody",
      "offset": 32
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 207837690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityUnlockResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityUnlock",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1038790,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "消费接口",
  "description": "",
  "id": "权益中心;消费接口",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"precheck\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityConsumeUpdatePrecheck\"",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "预置数据 操作类型update 库名\"cn_turboradio_module_test_equity\" 表名\"equity\" 更新数据路径\"src\\test\\resources\\datapreset\\equity-EquityConsumeUpdateequity\"",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "请求接口 接口地址\"equity/consume\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityConsumeBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityConsumeResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityConsume\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "precheck",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityConsumeUpdatePrecheck",
      "offset": 73
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 212662431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityConsumeUpdateequity",
      "offset": 71
    }
  ],
  "location": "Equity.updatePrepare(String,String,String)"
});
formatter.result({
  "duration": 294448105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/consume",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityConsumeBody",
      "offset": 33
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 349526742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityConsumeResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityConsume",
      "offset": 76
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1162807,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "退款接口",
  "description": "",
  "id": "权益中心;退款接口",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\"",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "请求接口 接口地址\"equity/refund\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityRefundBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityRefundResponse\" 忽略字段\"src\\test\\resources\\ignoredata\\equity-EquityRefund\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cn_turboradio_module_test_equity",
      "offset": 19
    },
    {
      "val": "equity_refund",
      "offset": 56
    },
    {
      "val": "src\\test\\resources\\datapreset\\equity-EquityRefundDelete",
      "offset": 78
    }
  ],
  "location": "Equity.deletePrepare(String,String,String)"
});
formatter.result({
  "duration": 242407900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equity/refund",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityRefundBody",
      "offset": 32
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 204687754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityRefundResponse",
      "offset": 11
    },
    {
      "val": "src\\test\\resources\\ignoredata\\equity-EquityRefund",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1159394,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "权益列表",
  "description": "",
  "id": "权益中心;权益列表",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 96,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 98,
      "value": "#清空权益卡，再创建固定数量的权益卡"
    },
    {
      "line": 99,
      "value": "#各个可填参数的测试"
    },
    {
      "line": 100,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 101,
  "name": "请求接口 接口地址\"equity/paging\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityPagingBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityPagingResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/paging",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityPagingBody",
      "offset": 32
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 432561125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityPagingResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 9629574,
  "error_message": "java.lang.Exception: root.data.body.extend.equityId | 校验失败 | 预期值: 79470 | 实际值: 0\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityPagingResponse\" 忽略字段\"\"(equity.feature:102)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 105,
  "name": "权益详情",
  "description": "",
  "id": "权益中心;权益详情",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 106,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 107,
  "name": "请求接口 接口地址\"equity/detail\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityDetailBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityDetailResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/detail",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityDetailBody",
      "offset": 32
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 347833161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityDetailResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 75
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 2328460,
  "error_message": "java.lang.Exception: root.data.extend.isCue | 校验失败 | 预期值: 0 | 实际值: 1\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityDetailResponse\" 忽略字段\"\"(equity.feature:108)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 111,
  "name": "用订单号查权益",
  "description": "",
  "id": "权益中心;用订单号查权益",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 110,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 112,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 113,
  "name": "请求接口 接口地址\"equity/detailByOrder\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityDetailByOrderBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityDetailByOrderResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/detailByOrder",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityDetailByOrderBody",
      "offset": 39
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 312181494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityDetailByOrderResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 82
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 3901437,
  "error_message": "java.lang.Exception: root.data.extend.isCue | 校验失败 | 预期值: 0 | 实际值: 1\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityDetailByOrderResponse\" 忽略字段\"\"(equity.feature:114)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 117,
  "name": "根据外部订单号获取权益详情",
  "description": "",
  "id": "权益中心;根据外部订单号获取权益详情",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 116,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 118,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 119,
  "name": "请求接口 接口地址\"equity/outorderno\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityOutordernoBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityOutordernoResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/outorderno",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityOutordernoBody",
      "offset": 36
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 254815356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityOutordernoResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 79
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 1273172,
  "error_message": "java.lang.Exception: root.data.extend.isCue | 校验失败 | 预期值: 0 | 实际值: 1\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityOutordernoResponse\" 忽略字段\"\"(equity.feature:120)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 122,
      "value": "#  @cases"
    },
    {
      "line": 123,
      "value": "#  Scenario: 权益消费列表"
    },
    {
      "line": 124,
      "value": "#    #属性\u0027App\\\\Structs\\\\Results\\\\Equity\\\\CousumePaging::$body\u0027必须实现\u0027StructInterface\u0027接口"
    },
    {
      "line": 125,
      "value": "#    #Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    },
    {
      "line": 126,
      "value": "#    Then 请求接口 接口地址\"equity/consume/lists\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityConsumeListsBody\""
    },
    {
      "line": 127,
      "value": "#    Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityConsumeListsResponse\" 忽略字段\"\""
    }
  ],
  "line": 130,
  "name": "权益消费记录",
  "description": "",
  "id": "权益中心;权益消费记录",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 129,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 131,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 132,
  "name": "请求接口 接口地址\"equity/consume/detail/orderNo\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityConsumeDetailOrderNoBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityConsumeDetailOrderNoResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/consume/detail/orderNo",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityConsumeDetailOrderNoBody",
      "offset": 48
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 152265825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityConsumeDetailOrderNoResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 89
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 803839,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "权益合并列表",
  "description": "",
  "id": "权益中心;权益合并列表",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 135,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 137,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 138,
  "name": "请求接口 接口地址\"equity/combine/lists\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityCombineListsBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityCombineListsResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/combine/lists",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityCombineListsBody",
      "offset": 39
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 184738545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityCombineListsResponse",
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
  "duration": 787341,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "权益退款列表",
  "description": "",
  "id": "权益中心;权益退款列表",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 141,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 144,
  "name": "请求接口 接口地址\"equity/refund/lists\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityRefundListsBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityRefundListsResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/refund/lists",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityRefundListsBody",
      "offset": 38
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 197333734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityRefundListsResponse",
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
  "duration": 974506,
  "error_message": "java.lang.Exception: root.data.body.refundNo | 校验失败 | 预期值: 1807260927021297880987950152 | 实际值: 1807271116311297880987998208\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityRefundListsResponse\" 忽略字段\"\"(equity.feature:145)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 148,
  "name": "获取权益退款详情",
  "description": "",
  "id": "权益中心;获取权益退款详情",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 147,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 149,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 150,
  "name": "请求接口 接口地址\"equity/refund/detail\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityRefundDetailBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityRefundDetailResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/refund/detail",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityRefundDetailBody",
      "offset": 39
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 182366280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityRefundDetailResponse",
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
  "duration": 882914,
  "error_message": "java.lang.Exception: root.data.body.refundNo | 校验失败 | 预期值: 1807260927021297880987950152 | 实际值: 1807271116311297880987998208\r\n\tat testcase.Equity.assertData(Equity.java:138)\r\n\tat ✽.Then 校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityRefundDetailResponse\" 忽略字段\"\"(equity.feature:151)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 154,
  "name": "获取总金额和保障总额",
  "description": "",
  "id": "权益中心;获取总金额和保障总额",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 153,
      "name": "@cases"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 155,
      "value": "#guaranteeStatus改成2"
    },
    {
      "line": 156,
      "value": "#Given 预置数据 操作类型delete 库名\"cn_turboradio_module_test_equity\" 表名\"equity_refund\" 删除条件路径\"src\\test\\resources\\datapreset\\equity-EquityRefundDelete\""
    }
  ],
  "line": 157,
  "name": "请求接口 接口地址\"equity/totalfee\" 参数文件路径\"src\\test\\resources\\senddata\\equity-EquityTotalfeeBody\"",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "校验返回值 数据路径\"src\\test\\resources\\assertdata\\equity-EquityEquityTotalfeeResponse\" 忽略字段\"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "equity/totalfee",
      "offset": 10
    },
    {
      "val": "src\\test\\resources\\senddata\\equity-EquityTotalfeeBody",
      "offset": 34
    }
  ],
  "location": "Equity.request(String,String)"
});
formatter.result({
  "duration": 176775245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\assertdata\\equity-EquityEquityTotalfeeResponse",
      "offset": 11
    },
    {
      "val": "",
      "offset": 83
    }
  ],
  "location": "Equity.assertData(String,String)"
});
formatter.result({
  "duration": 721351,
  "status": "passed"
});
});