package utils;

import org.apache.log4j.Logger;

import java.io.*;
import java.util.Properties;

public class PropertiesUtil {
    private static Logger log = Logger.getLogger(PropertiesUtil.class.getClass());
    public static String getValue(String path, String key) {
        Properties prop = new Properties();
        InputStream in = null;

        try {
            //装载配置文件
            in = new BufferedInputStream(new FileInputStream(path));
            prop.load(new InputStreamReader(in, "utf-8"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        //返回获取的值
        log.info("load file:" + path + "." + key);
        String content = prop.getProperty(key);
        log.info("getContent:" + content);
        return content;
    }

//    public static void main(String[] args) {
//        System.out.println(getValue("src\\test\\resources\\assertdata\\equity", "EquityGroupDetailResponse"));
//    }
}
