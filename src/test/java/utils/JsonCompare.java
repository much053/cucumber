package utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.util.*;

public class JsonCompare {
    private static Logger log = Logger.getLogger(JsonCompare.class.getClass());
    private static ObjectMapper objectMapper = new ObjectMapper();

    private List<String> ignore;
    private boolean same = false;
    private List<JsonCompareDiff> diffs = new ArrayList<>(0);

    public static class JsonCompareDiff {
        public final String path;
        public final Object o1;
        public final Object o2;

        public JsonCompareDiff(String path, Object o1, Object o2) {
            this.path = path;
            this.o1 = o1;
            this.o2 = o2;
        }
    }

    public boolean result() {
        return same;
    }

    public List<JsonCompareDiff> diffs() {
        return diffs;
    }

    public Object fromJson(String json) {
        try {
            if (json.startsWith("[")) {
                return objectMapper.readValue(json, List.class);
            }
            return objectMapper.readValue(json, Map.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static JsonCompare compare(String json1, String json2, String... ignore) {
        return compare(json1, json2, Arrays.asList(ignore));
    }

    public static JsonCompare compare(String json1, String json2, List<String> ignore) {
        JsonCompare jsonCompare = new JsonCompare();
        jsonCompare.ignore = ignore;
        jsonCompare.same = jsonCompare.compare0(json1, json2);
        return jsonCompare;
    }

    private boolean compare0(String json1, String json2) {
        Object o1 = fromJson(json1);
        Object o2 = fromJson(json2);
        return dispatch(o1, o2, "root");
    }

    private boolean dispatch(Object o1, Object o2, String path) {

        if (o1 instanceof Map) {
            return mapCompare((Map<?, ?>) o1, (Map<?, ?>) o2, path);
        } else if (o1 instanceof List) {
            return listCompare((List<?>) o1, (List<?>) o2, path);
        } else {
            return baseCompare(o1, o2, path);
        }
    }

    private boolean listCompare(List<?> list1, List<?> list2, String path) {
        Optional<Boolean> noNeedCompare = noNeedCompare(list1, list2, path);
        if (noNeedCompare.isPresent()) {
            return noNeedCompare.get();
        }

        if (list1.size() != list2.size()) {
            diffs.add(new JsonCompareDiff(path, "list1.size = " + list1.size(), "list2.size = " + list2.size()));
            diffs.add(new JsonCompareDiff(path, list1, list2));
            return false;
        }

        boolean result = true;
        for (int i = 0; i < list1.size(); i++) {
            Object o1 = list1.get(i);
            Object o2 = list2.get(i);
            if (!dispatch(o1, o2, path)) {
                result = false;
            }
        }
        return result;
    }

    private boolean baseCompare(Object base1, Object base2, String path) {
        Optional<Boolean> noNeedCompare = noNeedCompare(base1, base2, path);
        if (noNeedCompare.isPresent()) {
            return noNeedCompare.get();
        }

        boolean equals = base1.equals(base2);
        if (!equals) {
//            System.out.println("校验失败 " + " | " + path + " | 预期值: " + base1 +
//                    " | 实际值: " + base2);
            diffs.add(new JsonCompareDiff(path, base1, base2));
        } else {
//            System.out.println("校验通过 " + " | " + path + " | 预期值: " + base1 +
//                    " | 实际值: " + base2);
        }
        return equals;
    }

    private boolean mapCompare(Map<?, ?> map1, Map<?, ?> map2, String path) {
        Optional<Boolean> noNeedCompare = noNeedCompare(map1, map2, path);
        if (noNeedCompare.isPresent()) {
            return noNeedCompare.get();
        }

        boolean result = true;
        for (Map.Entry entry : map1.entrySet()) {
            Object key = entry.getKey();
            Object o1 = entry.getValue();
            Object o2 = map2.get(key);
            if (!dispatch(o1, o2, addPath(path, key))) {
                result = false;
            }
        }
        return result;
    }

    private Optional<Boolean> noNeedCompare(Object base1, Object base2, String path) {
        if (ignore.contains(path)) {
            // log.info("校验通过 " + " | " + path + " 字段过滤" + " | 预期值: "
            // + base1 + " | 实际值: " + base2);
            return Optional.of(true);
        }

        if (base1 == base2) {
            // log.info("校验通过 " + " | " + path + " | 预期值: " + base1 +
            // " | 实际值: " + base2);
            return Optional.of(true);
        }

        if (base1 == null || base2 == null) {
//            log.error("入库校验失败 " + " | " + path + " | 预期值: " + base1 + " | 实际值:" + base2);
//            log.info("校验失败 " + " | " + path + " | 预期值: " + base1 + " | 实际值: " + base2);
            diffs.add(new JsonCompareDiff(path, base1, base2));
            return Optional.of(false);
        }

        return Optional.empty();
    }

    private String addPath(String pre, Object current) {
        return pre + "." + current;
    }

    @Override
    public String toString() {
        return new Gson().toJson(this);
    }
}
