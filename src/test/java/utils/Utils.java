package utils;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.log4j.Logger;

import java.util.Random;

public class Utils {
    private static Logger log = Logger.getLogger(Utils.class.getClass());

    //生成n位的random
    public static int getRandom(int length) {
        Random random = new Random();
        String result = "";
        for (int i = 0; i < length; i++) {
            result += random.nextInt(10);
        }
        return Integer.valueOf(result);
    }

    public static String md5(String text) throws Exception {
        //加密后的字符串
        String encodeStr = DigestUtils.md5Hex(text);
        System.out.println("MD5加密后的字符串为:encodeStr=" + encodeStr);
        return encodeStr;
    }

    public static boolean verify(String text, String md5) throws Exception {
        //根据传入的密钥进行验证
        String md5Text = md5(text);
        if(md5Text.equalsIgnoreCase(md5))
        {
            System.out.println("MD5验证通过");
            return true;
        }

        return false;
    }

//    public static void main(String[] args) {
//        try {
//            //Utils.md5("123456");
//
//            String md5str="e10adc3949ba59abbe56e057f20f883e";
//            Utils.verify("123456",md5str);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
