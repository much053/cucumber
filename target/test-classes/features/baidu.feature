Feature:  在百度中搜索

  @cases
  Scenario: 搜索testng
    Given 访问百度 "https://www.baidu.com/"
    Given 验证title
    When  输入 "testng"
    Then  点击搜索按钮
    Then  清除搜索框