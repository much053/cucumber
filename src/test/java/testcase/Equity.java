package testcase;

import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import net.sf.json.JSONObject;
import org.apache.log4j.Logger;
import utils.DbUtils;
import utils.HttpClientUtils;
import utils.JsonCompare;
import utils.PropertiesUtil;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

public class Equity extends CucumbeRunner {

    private String domain = PropertiesUtil.getValue("src/test/resources/config/env.properties", "domain");
    private JSONObject response = null;
    private static DbUtils db = new DbUtils();
    private static Logger log = Logger.getLogger(Equity.class.getClass());

    @Given("^预置数据 操作类型insert 库名\"([^\"]*)\" 表名\"([^\"]*)\" 入库数据路径\"([^\"]*)\"$")
    public void insertPrepare(String database, String table, String path) throws Throwable {
        try {
            String[] fullpath = path.split("-");
            String filepath = fullpath[0];
            String key = fullpath[1];
            String data = PropertiesUtil.getValue(filepath, key);

            List values = new ArrayList<>();
            String[] prevalues = data.split(",");
            for (int i = 0; i < prevalues.length; i++) {
                values.add(prevalues[i]);
            }

            db.init(database);
            db.insert(table, values);
        } catch (MySQLIntegrityConstraintViolationException e) {
            log.info("数据已存在");
        } finally {
            db.close();
        }
    }

    @Given("^预置数据 操作类型delete 库名\"([^\"]*)\" 表名\"([^\"]*)\" 删除条件路径\"([^\"]*)\"$")
    public void deletePrepare(String database, String table, String path) throws Throwable {

        String[] fullpath = path.split("-");
        String filepath = fullpath[0];
        String key = fullpath[1];
        String delCondition = PropertiesUtil.getValue(filepath, key);

        String[] delConditions = delCondition.split(",");
        LinkedHashMap conditions = new LinkedHashMap();
        for (int i = 0; i < delConditions.length; i++) {
            String[] keyValues = delConditions[i].split(":");
            String conditionKey = keyValues[0];
            String conditionValue = keyValues[1];
            conditions.put(conditionKey, conditionValue);
        }
        db.initConn(database);
        db.delete(table, conditions);
        db.close();
    }

    @Given("^预置数据 操作类型update 库名\"([^\"]*)\" 表名\"([^\"]*)\" 更新数据路径\"([^\"]*)\"$")
    public void updatePrepare(String database, String table, String path) throws Throwable {
        String[] fullpath = path.split("-");
        String filepath = fullpath[0];
        String key = fullpath[1];
        String updateCondition = PropertiesUtil.getValue(filepath, key);
        String[] coloumsAndConditions=updateCondition.split(" where ");
        String[] coloum=coloumsAndConditions[0].split(",");
        String[] condition=coloumsAndConditions[1].split(",");

        LinkedHashMap coloums = new LinkedHashMap();
        for (int i = 0; i <coloum.length ; i++) {
            String[] keyAndValue=coloum[i].split(":");
            String keys=keyAndValue[0];
            String value=keyAndValue[1];
            coloums.put(keys,value);
        }

        LinkedHashMap conditions = new LinkedHashMap();
        for (int i = 0; i <condition.length ; i++) {
            String[] keyAndValue=condition[i].split(":");
            String keys=keyAndValue[0];
            String value=keyAndValue[1];
            conditions.put(keys,value);
        }

        db.initConn(database);
        db.update(coloums, table, conditions);
        db.close();
    }

    @Then("^请求接口 接口地址\"([^\"]*)\" 参数文件路径\"([^\"]*)\"$")
    public void request(String url, String path) throws Throwable {
        String[] fullpath = path.split("-");
        String filepath = fullpath[0];
        String key = fullpath[1];
        String body = PropertiesUtil.getValue(filepath, key);
        JSONObject requestbody = JSONObject.fromObject(body);
        response = HttpClientUtils.httpPost(domain + url, requestbody);
    }

    @Then("^校验返回值 数据路径\"([^\"]*)\" 忽略字段\"([^\"]*)\"$")
    public void assertData(String path, String ignorePath) throws Throwable {
        String[] fullpath = path.split("-");
        String filepath = fullpath[0];
        String key = fullpath[1];
        String body = PropertiesUtil.getValue(filepath, key);

        String[] ignores = {};
        if (!ignorePath.isEmpty()) {
            String[] ignore = ignorePath.split("-");
            String ignorepath = ignore[0];
            String ignorekey = ignore[1];
            String ignoredatas = PropertiesUtil.getValue(ignorepath, ignorekey);
            ignores = ignoredatas.split(",");
        }

        JsonCompare compare = JsonCompare.compare(body, response.toString(), ignores);
        Boolean result = compare.result();
        if (!result) {
            log.error("对比失败");
            log.error("预期值：" + body);
            log.error("实际值：" + response.toString());
            List<JsonCompare.JsonCompareDiff> diffs = compare.diffs();
            if (diffs.size() > 0) {
                for (int k = 0; k < diffs.size(); k++) {
                    String p = diffs.get(k).path;
                    Object o1 = diffs.get(k).o1;
                    Object o2 = diffs.get(k).o2;
                    //log.error(p + " | 校验失败" + " | 预期值: " + o1 + " | 实际值: " + o2);
                    throw new Exception((p + " | 校验失败" + " | 预期值: " + o1 + " | 实际值: " + o2));
                }
            }
        } else {
            log.info("对比通过");
            log.info("预期值：" + body);
            log.info("实际值：" + response.toString());
        }
    }
}
