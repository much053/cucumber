package utils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.log4j.Logger;

import java.sql.*;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class DbUtils {

    private static Logger log = Logger.getLogger(DbUtils.class.getClass());
    Connection conn = null;
    PreparedStatement pst;
    ResultSet rSet;

    // 初始化
    public void init(String dbname) throws Exception {
        String path = "src\\test\\resources\\config\\db.properties";
        String driverName = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://" + PropertiesUtil.getValue(path, "url") + ":" + PropertiesUtil.getValue(path, "port") + "/" + dbname;
        String user = PropertiesUtil.getValue(path, "user");
        String password = PropertiesUtil.getValue(path, "password");

        // 加载驱动
        Class.forName(driverName);
        conn = DriverManager.getConnection(url, user, password);
        // 开始连接数据库
        log.info("数据库连接成功..");

    }

    public void initConn(String dbname) throws Exception {
        if (conn == null || conn.isClosed()) {
            this.init(dbname);
        }
    }

    public void close() throws Exception {
        if (conn != null && !conn.isClosed()) {
            conn.close();
            conn = null;

        }
    }

    public void setAutoCommit(boolean fals) throws Exception {
        if (conn != null && !conn.isClosed()) {
            conn.setAutoCommit(fals);
        }
    }

    public void setSavepoint() throws Exception {
        if (conn != null && !conn.isClosed()) {
            conn.setSavepoint();
        }
    }

    public void rollback() throws Exception {
        if (conn != null && !conn.isClosed()) {
            conn.rollback();
        }
    }

    public void commit() throws Exception {
        if (conn != null && !conn.isClosed()) {
            conn.commit();
        }
    }

    // 简单查询
    public JSONArray select(String sql) throws Exception {
        pst = conn.prepareStatement(sql);
        rSet = pst.executeQuery();
        return resultSetToJson(rSet);
    }

    // 简单更新
    public void update(String sql) throws Exception {
        pst = conn.prepareStatement(sql);
        pst.executeUpdate();
        log.info("更新成功");
    }

    // 条件查询
    public JSONArray select(List<String> coloums, String table, LinkedHashMap<String, String> conditions) throws Exception {
        String sql = "select ";
        for (int i = 0; i < coloums.size(); i++) {
            if (i == coloums.size() - 1) {
                sql = sql + coloums.get(i) + " from " + table + " where";
            } else {
                sql = sql + coloums.get(i) + ",";
            }
        }

        int i = 0;
        for (Map.Entry<String, String> entry : conditions.entrySet()) {
            i = i + 1;
            if (i == conditions.size()) {
                sql = sql + " " + entry.getKey() + "=" + entry.getValue() + ";";
            } else {
                sql = sql + " " + entry.getKey() + "=" + entry.getValue() + " and";
            }
        }
        log.info("执行sql语句:" + sql);
        pst = conn.prepareStatement(sql);
        rSet = pst.executeQuery();
        return resultSetToJson(rSet);
    }

    // 条件更新
    public void update(LinkedHashMap<String, String> coloums, String table, LinkedHashMap<String, String> conditions) throws Exception {
        String sql = "update " + table + " set ";

        int j = 0;
        for (Map.Entry<String, String> entry : coloums.entrySet()) {
            j = j + 1;
            if (j == coloums.size()) {
                sql = sql + entry.getKey() + "=" + entry.getValue() + " where";
            } else {
                sql = sql + entry.getKey() + "=" + entry.getValue() + ",";
            }
        }

        int i = 0;
        for (Map.Entry<String, String> entry : conditions.entrySet()) {
            i = i + 1;
            if (i == conditions.size()) {
                sql = sql + " " + entry.getKey() + "=" + entry.getValue() + ";";
            } else {
                sql = sql + " " + entry.getKey() + "=" + entry.getValue() + " and";
            }
        }
        log.info("执行sql语句:" + sql);
        pst = conn.prepareStatement(sql);
        if (1 == pst.executeUpdate()) {
            log.info("更新成功");
        } else {
            log.info("更新失败");
        }
    }


    // 入库
    public void insert(String table, List<String> values) throws Exception {
        String sql = "insert into " + table + " values (";
        for (int i = 0; i < values.size(); i++) {
            if (i == values.size() - 1) {
                sql = sql + values.get(i) + ");";
            } else {
                sql = sql + values.get(i) + ",";
            }
        }
        log.info("执行sql语句:" + sql);

        pst = conn.prepareStatement(sql);
        int result = pst.executeUpdate();

        if (0 < result) {
            log.info("入库成功");
        } else {
            log.info("入库失败");
        }

    }

    // 条件删除
    public void delete(String table, LinkedHashMap<String, String> conditions) throws Exception {
        String sql = "delete from " + table + " where";

        int i = 0;
        for (Map.Entry<String, String> entry : conditions.entrySet()) {
            i = i + 1;
            if (i == conditions.size()) {
                sql = sql + " " + entry.getKey() + "=" + entry.getValue() + ";";
            } else {
                sql = sql + " " + entry.getKey() + "=" + entry.getValue() + " and";
            }
        }
        log.info("执行sql语句:" + sql);
        pst = conn.prepareStatement(sql);
        int status = pst.executeUpdate();
        if (0 < status) {
            log.info("删除成功");
        } else {
            log.info("删除失败");
        }
    }


    public JSONArray resultSetToJson(ResultSet rs) throws Exception {
        // json数组
        JSONArray array = new JSONArray();

        // 获取列数
        ResultSetMetaData metaData = rs.getMetaData();
        int columnCount = metaData.getColumnCount();

        // 遍历ResultSet中的每条数据
        while (rs.next()) {
            JSONObject jsonObj = new JSONObject();

            // 遍历每一列
            for (int i = 1; i <= columnCount; i++) {
                String columnName = metaData.getColumnLabel(i);
                String value = rs.getString(columnName);
                jsonObj.put(columnName, value);
            }
            array.add(jsonObj);
        }

        return array;
    }

    //    public static void main(String[] args) {
//
//        DbUtils db = new DbUtils();
//        db.init("cn_turboradio_module_test_equity");
//
//        try {
//            简单更新
//            db.update("UPDATE equity SET equityStatus=1 WHERE equityNo='112652651797100'");
//            简单查询
//            log.info(db.select("SELECT * FROM `equity` WHERE memberId='1210291'"));
//            条件查询
//            List<String> coloums = new ArrayList<String>();
//            coloums.add("id");
//            coloums.add("equityNo");
//            coloums.add("equityName");
//
//            String tablename = "equity";
//
//            LinkedHashMap conditions = new LinkedHashMap();
//            conditions.put("equityNo", "112652651797100");
//            conditions.put("memberId", "1210291");
//
//            log.info(db.select(coloums, tablename, conditions));

//            条件更新
//            LinkedHashMap coloums = new LinkedHashMap();
//            coloums.put("equityStatus", "5");
//            coloums.put("equityStyle", "1");
//
//            String tablename = "equity";
//
//            LinkedHashMap conditions = new LinkedHashMap();
//            conditions.put("equityNo", "112652651797100");
//            conditions.put("memberId", "1210291");
//
//            db.update(coloums, tablename, conditions);

//            List values = new ArrayList<>();
//            String str = "2562239, '112999', 'test次卡', 'individual', 1, 2, 1, '2018-6-5 00:00:00', '2019-6-5 23:59:59', 69, 703882, 5, 171, 107, 500.00, 0.00, 0.00, 50, 0, 0, 10.00, '2018-6-5 19:09:31', '2019-6-5 00:00:00', NULL, '', NULL, 0, '', NULL, '', '2018-6-5 19:09:31', '2018-7-12 14:15:02'";
//            String[] testvalues = str.split(",");
//            for (int i = 0; i < testvalues.length; i++) {
//                values.add(testvalues[i]);
//            }
//            db.insert("equity", values);


//            LinkedHashMap conditions = new LinkedHashMap();
//            conditions.put("id", "2562239");
//            conditions.put("equityNo", "112999");
//            db.delete("equity", conditions);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            try {
//                db.close();
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        }
//
//    }
}
