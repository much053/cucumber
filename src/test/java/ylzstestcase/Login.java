package ylzstestcase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import utils.HttpClientUtil;

import java.util.HashMap;

public class Login extends YLZSCucumbeRunner {

    private String response = "";

    @Given("^输入账号\"([^\"]*)\" 密码\"([^\"]*)\"$")
    public void step1(String username, String password) throws Throwable {
        String url = "http://data.uniondrug.cn/api/users/login";//做成配置读取
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("mobile", username);
        params.put("password", password);

        HashMap<String, String> header = new HashMap<String, String>();//header暂时写死
        header.put("User-Agent", "UnionDrug");
        response = HttpClientUtil.post(url, params, header, null);
    }

    @Then("^打印返回$")
    public void step2() throws Throwable {
        System.out.println(response);
    }
}
