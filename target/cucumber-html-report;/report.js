$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("baidu.feature");
formatter.feature({
  "line": 1,
  "name": "在百度中搜索",
  "description": "",
  "id": "在百度中搜索",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "搜索testng",
  "description": "",
  "id": "在百度中搜索;搜索testng",
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
  "name": "访问百度 \"https://www.baidu.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "验证title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "输入 \"testng\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "点击搜索按钮",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "清除搜索框",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.baidu.com/",
      "offset": 6
    }
  ],
  "location": "Search.step0(String)"
});
formatter.result({
  "duration": 1143414165,
  "status": "passed"
});
formatter.match({
  "location": "Search.step1()"
});
formatter.result({
  "duration": 17680014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testng",
      "offset": 4
    }
  ],
  "location": "Search.setp2(String)"
});
formatter.result({
  "duration": 413593125,
  "status": "passed"
});
formatter.match({
  "location": "Search.step3()"
});
formatter.result({
  "duration": 769913108,
  "status": "passed"
});
formatter.match({
  "location": "Search.step4()"
});
formatter.result({
  "duration": 173911894,
  "status": "passed"
});
});