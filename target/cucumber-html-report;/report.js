$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ylzslogin.feature");
formatter.feature({
  "line": 1,
  "name": "药联助手",
  "description": "",
  "id": "药联助手",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "登录药联助手",
  "description": "",
  "id": "药联助手;登录药联助手",
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
  "name": "输入账号\"15250989839\" 密码\"111111\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "打印返回",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15250989839",
      "offset": 5
    },
    {
      "val": "111111",
      "offset": 21
    }
  ],
  "location": "Login.step1(String,String)"
});
formatter.result({
  "duration": 795553687,
  "status": "passed"
});
formatter.match({
  "location": "Login.step2()"
});
formatter.result({
  "duration": 65991,
  "status": "passed"
});
});