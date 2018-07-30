Feature:  权益中心

  @cases
  Scenario: 查询组权益详情
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"group_equity" 删除条件路径"src\test\resources\datapreset\equity-EquityGroupDetailDelete"
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"group_equity" 入库数据路径"src\test\resources\datapreset\equity-EquityGroupDetailInsert"
    Then 请求接口 接口地址"equity/group/detail" 参数文件路径"src\test\resources\senddata\equity-EquityGroupDetailBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityGroupDetailResponse" 忽略字段""

  @cases
  Scenario: 创建团体权益
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"group_equity" 删除条件路径"src\test\resources\datapreset\equity-EquityGroupAddDelete"
    Then 请求接口 接口地址"equity/group/add" 参数文件路径"src\test\resources\senddata\equity-EquityGroupAddBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityGroupAddResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityGroupAdd"

  @cases
  Scenario: 禁用团体权益
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"group_equity" 入库数据路径"src\test\resources\datapreset\equity-EquityGroupDisable"
    Then 请求接口 接口地址"equity/group/disable" 参数文件路径"src\test\resources\senddata\equity-EquityGroupDisableBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityGroupDisableResponse" 忽略字段""

#  @cases(未实现)
#  Scenario: 启用团体权益
#    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"group_equity" 删除条件路径"src\test\resources\datapreset\equity-EquityGroupEnableDelete"
#    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"group_equity" 入库数据路径"src\test\resources\datapreset\equity-EquityGroupDisable"
#    Then 请求接口 接口地址"equity/group/enable" 参数文件路径"src\test\resources\senddata\equity-EquityGroupEnableBody"
#    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityGroupEnableResponse" 忽略字段""

#  @cases(未实现)
#  Scenario: 获取组权益列表

  @cases
  Scenario: 预核算
    #预置权益数据、药店数据、药品数据
    #Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"group_equity" 入库数据路径"src\test\resources\datapreset\equity-EquityGroupDisable"
    Then 请求接口 接口地址"precheck/check" 参数文件路径"src\test\resources\senddata\equity-PreCheckBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-PreCheckResponse" 忽略字段"src\test\resources\ignoredata\equity-PreCheck"

  @cases
  Scenario: 锁定试算
    #预置试算单号
    #Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"precheck" 入库数据路径"src\test\resources\datapreset\equity-"
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"precheck" 更新数据路径"src\test\resources\datapreset\equity-PreCheckLockUpdate"
    Then 请求接口 接口地址"precheck/lock" 参数文件路径"src\test\resources\senddata\equity-PreCheckLockBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-PreCheckLockResponse" 忽略字段"src\test\resources\ignoredata\equity-PreChecklock"

  @cases
  Scenario: 添加权益
  #补充各种类型的权益卡case
  #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity" 删除条件路径"src\test\resources\datapreset\equity-EquityAddDelete"
  #Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"equity" 入库数据路径"src\test\resources\datapreset\equity-EquityAddInsert"
    Then 请求接口 接口地址"equity/add" 参数文件路径"src\test\resources\senddata\equity-EquityAddBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityAddResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityAdd"

  @cases
  Scenario: 激活权益
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"equity" 入库数据路径"src\test\resources\datapreset\equity-EquityActiveInsert"
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"equity" 更新数据路径"src\test\resources\datapreset\equity-EquityActiveUpdate"
    Then 请求接口 接口地址"equity/active" 参数文件路径"src\test\resources\senddata\equity-EquityActiveBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityActiveResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityActive"

  @cases
  Scenario: 禁用团体权益
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"equity" 入库数据路径"src\test\resources\datapreset\equity-EquityDisableInsert"
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"equity" 更新数据路径"src\test\resources\datapreset\equity-EquityDisableUpdate"
    Then 请求接口 接口地址"equity/disable" 参数文件路径"src\test\resources\senddata\equity-EquityDisableBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityDisableResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityDisable"

  @cases
  Scenario: 启用团体权益
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"equity" 入库数据路径"src\test\resources\datapreset\equity-EquityEnableInsert"
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"equity" 更新数据路径"src\test\resources\datapreset\equity-EquityEnableUpdate"
    Then 请求接口 接口地址"equity/disable" 参数文件路径"src\test\resources\senddata\equity-EquityEnableBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityEnableResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityEnable"

  @cases
  Scenario: 解锁接口
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"precheck" 更新数据路径"src\test\resources\datapreset\equity-EquityUnlockUpdatePrecheck"
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"equity" 更新数据路径"src\test\resources\datapreset\equity-EquityUnlockUpdateequity"
    Then 请求接口 接口地址"equity/unlock" 参数文件路径"src\test\resources\senddata\equity-EquityUnlockBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityUnlockResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityUnlock"

  @cases
  Scenario: 消费接口
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"precheck" 更新数据路径"src\test\resources\datapreset\equity-EquityConsumeUpdatePrecheck"
    Given 预置数据 操作类型update 库名"cn_turboradio_module_test_equity" 表名"equity" 更新数据路径"src\test\resources\datapreset\equity-EquityConsumeUpdateequity"
    Then 请求接口 接口地址"equity/consume" 参数文件路径"src\test\resources\senddata\equity-EquityConsumeBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityConsumeResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityConsume"

  @cases
  Scenario: 退款接口
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/refund" 参数文件路径"src\test\resources\senddata\equity-EquityRefundBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityRefundResponse" 忽略字段"src\test\resources\ignoredata\equity-EquityRefund"

  @cases
  Scenario: 权益列表
    #清空权益卡，再创建固定数量的权益卡
    #各个可填参数的测试
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/paging" 参数文件路径"src\test\resources\senddata\equity-EquityPagingBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityPagingResponse" 忽略字段""

  @cases
  Scenario: 权益详情
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/detail" 参数文件路径"src\test\resources\senddata\equity-EquityDetailBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityDetailResponse" 忽略字段""

  @cases
  Scenario: 用订单号查权益
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/detailByOrder" 参数文件路径"src\test\resources\senddata\equity-EquityDetailByOrderBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityDetailByOrderResponse" 忽略字段""

  @cases
  Scenario: 根据外部订单号获取权益详情
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/outorderno" 参数文件路径"src\test\resources\senddata\equity-EquityOutordernoBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityOutordernoResponse" 忽略字段""

#  @cases
#  Scenario: 权益消费列表
#    #属性'App\\Structs\\Results\\Equity\\CousumePaging::$body'必须实现'StructInterface'接口
#    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
#    Then 请求接口 接口地址"equity/consume/lists" 参数文件路径"src\test\resources\senddata\equity-EquityConsumeListsBody"
#    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityConsumeListsResponse" 忽略字段""

  @cases
  Scenario: 权益消费记录
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/consume/detail/orderNo" 参数文件路径"src\test\resources\senddata\equity-EquityConsumeDetailOrderNoBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityConsumeDetailOrderNoResponse" 忽略字段""

  @cases
  Scenario: 权益合并列表
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/combine/lists" 参数文件路径"src\test\resources\senddata\equity-EquityCombineListsBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityCombineListsResponse" 忽略字段""

  @cases
  Scenario: 权益退款列表
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/refund/lists" 参数文件路径"src\test\resources\senddata\equity-EquityRefundListsBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityRefundListsResponse" 忽略字段""

  @cases
  Scenario: 获取权益退款详情
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/refund/detail" 参数文件路径"src\test\resources\senddata\equity-EquityRefundDetailBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityRefundDetailResponse" 忽略字段""

  @cases
  Scenario: 获取总金额和保障总额
    #guaranteeStatus改成2
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/totalfee" 参数文件路径"src\test\resources\senddata\equity-EquityTotalfeeBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityTotalfeeResponse" 忽略字段""

  @cases
  Scenario: 关闭次卡提醒
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/cue" 参数文件路径"src\test\resources\senddata\equity-EquityCueBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityCueResponse" 忽略字段""

  @cases
  Scenario: 确认阅读协议
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/read" 参数文件路径"src\test\resources\senddata\equity-EquityReadBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityReadResponse" 忽略字段""

  @cases
  Scenario: 判断权益是否可用
    #本次可用金额为啥是0
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/available" 参数文件路径"src\test\resources\senddata\equity-EquityAvailableBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityAvailableResponse" 忽略字段""

  @cases
  Scenario:   通过id获取多条权益信息
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/ids/lists" 参数文件路径"src\test\resources\senddata\equity-EquityIdsListsBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityIdsListsResponse" 忽略字段""

  @cases
  Scenario:   获取每个用户的权益余额列表
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"equity/ids/lists" 参数文件路径"src\test\resources\senddata\equity-EquityIdsListsBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-EquityIdsListsResponse" 忽略字段""

  #获取用户离过期最近的权益信息
  #没有参数说明

  @cases
  Scenario:   创建保障
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"guarantee/add" 参数文件路径"src\test\resources\senddata\equity-GuaranteeAddBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteeAddResponse" 忽略字段"src\test\resources\ignoredata\equity-GuaranteeAdd"

  @cases
  Scenario:   保障详情
    #Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"equity_refund" 删除条件路径"src\test\resources\datapreset\equity-EquityRefundDelete"
    Then 请求接口 接口地址"guarantee/detail" 参数文件路径"src\test\resources\senddata\equity-GuaranteeDetailBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteeDetailResponse" 忽略字段""

  @cases
  Scenario:   保障列表
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"guarantee" 删除条件路径"src\test\resources\datapreset\equity-GuaranteePagingDelete"
    Then 请求接口 接口地址"guarantee/paging" 参数文件路径"src\test\resources\senddata\equity-GuaranteePagingBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteePagingResponse" 忽略字段""

  @cases
  Scenario:   赠送保障
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"guarantee" 删除条件路径"src\test\resources\datapreset\equity-GuaranteeGiveDelete"
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"guarantee" 入库数据路径"src\test\resources\datapreset\equity-GuaranteeGiveInsert"
    Then 请求接口 接口地址"guarantee/give" 参数文件路径"src\test\resources\senddata\equity-GuaranteeGiveBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteeGiveResponse" 忽略字段""

  @cases
  Scenario:   激活保障
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"guarantee" 删除条件路径"src\test\resources\datapreset\equity-GuaranteeActiveDelete"
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"guarantee" 入库数据路径"src\test\resources\datapreset\equity-GuaranteeActiveInsert"
    Then 请求接口 接口地址"guarantee/active" 参数文件路径"src\test\resources\senddata\equity-GuaranteeActiveBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteeActiveResponse" 忽略字段"src\test\resources\ignoredata\equity-GuaranteeActive"

  @cases
  Scenario:   检查保障是否购买
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"guarantee" 删除条件路径"src\test\resources\datapreset\equity-GuaranteeCheckDelete"
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"guarantee" 入库数据路径"src\test\resources\datapreset\equity-GuaranteeCheckInsert"
    Then 请求接口 接口地址"guarantee/check" 参数文件路径"src\test\resources\senddata\equity-GuaranteeCheckBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteeCheckResponse" 忽略字段""

  @cases
  Scenario:   禁用权益
    Given 预置数据 操作类型delete 库名"cn_turboradio_module_test_equity" 表名"guarantee" 删除条件路径"src\test\resources\datapreset\equity-GuaranteeDisableDelete"
    Given 预置数据 操作类型insert 库名"cn_turboradio_module_test_equity" 表名"guarantee" 入库数据路径"src\test\resources\datapreset\equity-GuaranteeDisableInsert"
    Then 请求接口 接口地址"guarantee/disable" 参数文件路径"src\test\resources\senddata\equity-GuaranteeDisableBody"
    Then 校验返回值 数据路径"src\test\resources\assertdata\equity-GuaranteeDisableResponse" 忽略字段""







