/**
 * 中国省级行政区及下辖城市默认数据
 * visited 为是否到访；档案详情存 localStorage，键名 province|city
 */
const DEFAULT_TRAVEL_DATA = {
  // 直辖市
  "北京市": {
    name: "北京",
    cities: [
      { name: "北京市", visited: true }
    ]
  },
  "上海市": {
    name: "上海",
    cities: [
      { name: "上海市", visited: true }
    ]
  },
  "天津市": {
    name: "天津",
    cities: [
      { name: "天津市", visited: false }
    ]
  },
  "重庆市": {
    name: "重庆",
    cities: [
      { name: "重庆市", visited: true }
    ]
  },

  // 省份
  "河北省": {
    name: "河北",
    cities: [
      { name: "石家庄市", visited: false },
      { name: "唐山市", visited: false },
      { name: "秦皇岛市", visited: false },
      { name: "邯郸市", visited: false },
      { name: "邢台市", visited: false },
      { name: "保定市", visited: false },
      { name: "张家口市", visited: false },
      { name: "承德市", visited: false },
      { name: "沧州市", visited: false },
      { name: "廊坊市", visited: false },
      { name: "衡水市", visited: false }
    ]
  },
  "山西省": {
    name: "山西",
    cities: [
      { name: "太原市", visited: false },
      { name: "大同市", visited: false },
      { name: "阳泉市", visited: false },
      { name: "长治市", visited: false },
      { name: "晋城市", visited: false },
      { name: "朔州市", visited: false },
      { name: "晋中市", visited: false },
      { name: "运城市", visited: false },
      { name: "忻州市", visited: false },
      { name: "临汾市", visited: false },
      { name: "吕梁市", visited: false }
    ]
  },
  "内蒙古自治区": {
    name: "内蒙古",
    cities: [
      { name: "呼和浩特市", visited: true },
      { name: "包头市", visited: true },
      { name: "乌海市", visited: false },
      { name: "赤峰市", visited: false },
      { name: "通辽市", visited: false },
      { name: "鄂尔多斯市", visited: false },
      { name: "呼伦贝尔市", visited: false },
      { name: "巴彦淖尔市", visited: false },
      { name: "乌兰察布市", visited: true }
    ]
  },
  "辽宁省": {
    name: "辽宁",
    cities: [
      { name: "沈阳市", visited: true },
      { name: "大连市", visited: false },
      { name: "鞍山市", visited: false },
      { name: "抚顺市", visited: false },
      { name: "本溪市", visited: false },
      { name: "丹东市", visited: false },
      { name: "锦州市", visited: false },
      { name: "营口市", visited: false },
      { name: "阜新市", visited: false },
      { name: "辽阳市", visited: false },
      { name: "盘锦市", visited: false },
      { name: "铁岭市", visited: false },
      { name: "朝阳市", visited: false },
      { name: "葫芦岛市", visited: false }
    ]
  },
  "吉林省": {
    name: "吉林",
    cities: [
      { name: "长春市", visited: true },
      { name: "吉林市", visited: false },
      { name: "四平市", visited: false },
      { name: "辽源市", visited: false },
      { name: "通化市", visited: false },
      { name: "白山市", visited: false },
      { name: "松原市", visited: false },
      { name: "白城市", visited: false }
    ]
  },
  "黑龙江省": {
    name: "黑龙江",
    cities: [
      { name: "哈尔滨市", visited: true },
      { name: "齐齐哈尔市", visited: false },
      { name: "鸡西市", visited: false },
      { name: "鹤岗市", visited: false },
      { name: "双鸭山市", visited: false },
      { name: "大庆市", visited: false },
      { name: "伊春市", visited: false },
      { name: "佳木斯市", visited: false },
      { name: "七台河市", visited: false },
      { name: "牡丹江市", visited: false },
      { name: "黑河市", visited: false },
      { name: "绥化市", visited: false }
    ]
  },
  "江苏省": {
    name: "江苏",
    cities: [
      { name: "南京市", visited: true },
      { name: "无锡市", visited: false },
      { name: "徐州市", visited: false },
      { name: "常州市", visited: false },
      { name: "苏州市", visited: true },
      { name: "南通市", visited: false },
      { name: "连云港市", visited: false },
      { name: "淮安市", visited: false },
      { name: "盐城市", visited: false },
      { name: "扬州市", visited: false },
      { name: "镇江市", visited: false },
      { name: "泰州市", visited: false },
      { name: "宿迁市", visited: false }
    ]
  },
  "浙江省": {
    name: "浙江",
    cities: [
      { name: "杭州市", visited: false },
      { name: "宁波市", visited: false },
      { name: "温州市", visited: false },
      { name: "嘉兴市", visited: false },
      { name: "湖州市", visited: false },
      { name: "绍兴市", visited: false },
      { name: "金华市", visited: false },
      { name: "衢州市", visited: false },
      { name: "舟山市", visited: false },
      { name: "台州市", visited: false },
      { name: "丽水市", visited: false }
    ]
  },
  "安徽省": {
    name: "安徽",
    cities: [
      { name: "合肥市", visited: false },
      { name: "芜湖市", visited: false },
      { name: "蚌埠市", visited: false },
      { name: "淮南市", visited: false },
      { name: "马鞍山市", visited: false },
      { name: "淮北市", visited: false },
      { name: "铜陵市", visited: false },
      { name: "安庆市", visited: false },
      { name: "黄山市", visited: true },
      { name: "滁州市", visited: false },
      { name: "阜阳市", visited: false },
      { name: "宿州市", visited: false },
      { name: "六安市", visited: false },
      { name: "亳州市", visited: false },
      { name: "池州市", visited: false },
      { name: "宣城市", visited: false }
    ]
  },
  "福建省": {
    name: "福建",
    cities: [
      { name: "福州市", visited: true },
      { name: "厦门市", visited: false },
      { name: "莆田市", visited: false },
      { name: "三明市", visited: false },
      { name: "泉州市", visited: false },
      { name: "漳州市", visited: false },
      { name: "南平市", visited: false },
      { name: "龙岩市", visited: false },
      { name: "宁德市", visited: false }
    ]
  },
  "江西省": {
    name: "江西",
    cities: [
      { name: "南昌市", visited: true },
      { name: "景德镇市", visited: false },
      { name: "萍乡市", visited: false },
      { name: "九江市", visited: false },
      { name: "新余市", visited: false },
      { name: "鹰潭市", visited: false },
      { name: "赣州市", visited: false },
      { name: "吉安市", visited: false },
      { name: "宜春市", visited: false },
      { name: "抚州市", visited: false },
      { name: "上饶市", visited: true }
    ]
  },
  "山东省": {
    name: "山东",
    cities: [
      { name: "济南市", visited: false },
      { name: "青岛市", visited: false },
      { name: "淄博市", visited: false },
      { name: "枣庄市", visited: false },
      { name: "东营市", visited: false },
      { name: "烟台市", visited: false },
      { name: "潍坊市", visited: false },
      { name: "济宁市", visited: false },
      { name: "泰安市", visited: false },
      { name: "威海市", visited: false },
      { name: "日照市", visited: false },
      { name: "临沂市", visited: false },
      { name: "德州市", visited: false },
      { name: "聊城市", visited: false },
      { name: "滨州市", visited: false },
      { name: "菏泽市", visited: false }
    ]
  },
  "河南省": {
    name: "河南",
    cities: [
      { name: "郑州市", visited: false },
      { name: "开封市", visited: false },
      { name: "洛阳市", visited: false },
      { name: "平顶山市", visited: false },
      { name: "安阳市", visited: false },
      { name: "鹤壁市", visited: false },
      { name: "新乡市", visited: false },
      { name: "焦作市", visited: false },
      { name: "濮阳市", visited: false },
      { name: "许昌市", visited: false },
      { name: "漯河市", visited: false },
      { name: "三门峡市", visited: false },
      { name: "南阳市", visited: false },
      { name: "商丘市", visited: false },
      { name: "信阳市", visited: false },
      { name: "周口市", visited: false },
      { name: "驻马店市", visited: false }
    ]
  },
  "湖北省": {
    name: "湖北",
    cities: [
      { name: "武汉市", visited: false },
      { name: "黄石市", visited: false },
      { name: "十堰市", visited: false },
      { name: "宜昌市", visited: false },
      { name: "襄阳市", visited: false },
      { name: "鄂州市", visited: false },
      { name: "荆门市", visited: false },
      { name: "孝感市", visited: false },
      { name: "荆州市", visited: false },
      { name: "黄冈市", visited: false },
      { name: "咸宁市", visited: false },
      { name: "随州市", visited: false },
      { name: "恩施土家族苗族自治州", visited: false },
      { name: "仙桃市", visited: false },
      { name: "潜江市", visited: false },
      { name: "天门市", visited: false },
      { name: "神农架林区", visited: false }
    ]
  },
  "湖南省": {
    name: "湖南",
    cities: [
      { name: "长沙市", visited: true },
      { name: "株洲市", visited: false },
      { name: "湘潭市", visited: false },
      { name: "衡阳市", visited: false },
      { name: "邵阳市", visited: false },
      { name: "岳阳市", visited: false },
      { name: "常德市", visited: false },
      { name: "张家界市", visited: false },
      { name: "益阳市", visited: false },
      { name: "郴州市", visited: false },
      { name: "永州市", visited: false },
      { name: "怀化市", visited: false },
      { name: "娄底市", visited: false },
      { name: "湘西土家族苗族自治州", visited: false }
    ]
  },
  "广东省": {
    name: "广东",
    cities: [
      { name: "广州市", visited: false },
      { name: "韶关市", visited: false },
      { name: "深圳市", visited: true },
      { name: "珠海市", visited: false },
      { name: "汕头市", visited: false },
      { name: "佛山市", visited: false },
      { name: "江门市", visited: false },
      { name: "湛江市", visited: false },
      { name: "茂名市", visited: false },
      { name: "肇庆市", visited: false },
      { name: "惠州市", visited: false },
      { name: "梅州市", visited: false },
      { name: "汕尾市", visited: false },
      { name: "河源市", visited: false },
      { name: "阳江市", visited: false },
      { name: "清远市", visited: false },
      { name: "东莞市", visited: false },
      { name: "中山市", visited: false },
      { name: "潮州市", visited: false },
      { name: "揭阳市", visited: false },
      { name: "云浮市", visited: false }
    ]
  },
  "广西壮族自治区": {
    name: "广西",
    cities: [
      { name: "南宁市", visited: false },
      { name: "柳州市", visited: false },
      { name: "桂林市", visited: false },
      { name: "梧州市", visited: false },
      { name: "北海市", visited: false },
      { name: "防城港市", visited: false },
      { name: "钦州市", visited: false },
      { name: "贵港市", visited: false },
      { name: "玉林市", visited: false },
      { name: "百色市", visited: false },
      { name: "贺州市", visited: false },
      { name: "河池市", visited: false },
      { name: "来宾市", visited: false },
      { name: "崇左市", visited: false }
    ]
  },
  "海南省": {
    name: "海南",
    cities: [
      { name: "海口市", visited: false },
      { name: "三亚市", visited: false },
      { name: "三沙市", visited: false },
      { name: "儋州市", visited: false },
      { name: "五指山市", visited: false },
      { name: "琼海市", visited: false },
      { name: "文昌市", visited: false },
      { name: "万宁市", visited: false },
      { name: "东方市", visited: false },
      { name: "定安县", visited: false },
      { name: "屯昌县", visited: false },
      { name: "澄迈县", visited: false },
      { name: "临高县", visited: false },
      { name: "白沙黎族自治县", visited: false },
      { name: "昌江黎族自治县", visited: false },
      { name: "乐东黎族自治县", visited: false },
      { name: "陵水黎族自治县", visited: false },
      { name: "保亭黎族苗族自治县", visited: false },
      { name: "琼中黎族苗族自治县", visited: false }
    ]
  },
  "四川省": {
    name: "四川",
    cities: [
      { name: "成都市", visited: true },
      { name: "自贡市", visited: false },
      { name: "攀枝花市", visited: false },
      { name: "泸州市", visited: false },
      { name: "德阳市", visited: false },
      { name: "绵阳市", visited: false },
      { name: "广元市", visited: false },
      { name: "遂宁市", visited: false },
      { name: "内江市", visited: false },
      { name: "乐山市", visited: false },
      { name: "南充市", visited: false },
      { name: "眉山市", visited: false },
      { name: "宜宾市", visited: false },
      { name: "广安市", visited: false },
      { name: "达州市", visited: false },
      { name: "雅安市", visited: false },
      { name: "巴中市", visited: false },
      { name: "资阳市", visited: false },
      { name: "阿坝藏族羌族自治州", visited: false },
      { name: "甘孜藏族自治州", visited: false },
      { name: "凉山彝族自治州", visited: false }
    ]
  },
  "贵州省": {
    name: "贵州",
    cities: [
      { name: "贵阳市", visited: false },
      { name: "六盘水市", visited: false },
      { name: "遵义市", visited: false },
      { name: "安顺市", visited: false },
      { name: "毕节市", visited: false },
      { name: "铜仁市", visited: false },
      { name: "黔西南布依族苗族自治州", visited: false },
      { name: "黔东南苗族侗族自治州", visited: false },
      { name: "黔南布依族苗族自治州", visited: false }
    ]
  },
  "云南省": {
    name: "云南",
    cities: [
      { name: "昆明市", visited: true },
      { name: "曲靖市", visited: false },
      { name: "玉溪市", visited: false },
      { name: "保山市", visited: false },
      { name: "昭通市", visited: false },
      { name: "丽江市", visited: false },
      { name: "普洱市", visited: false },
      { name: "临沧市", visited: false },
      { name: "楚雄彝族自治州", visited: false },
      { name: "红河哈尼族彝族自治州", visited: false },
      { name: "文山壮族苗族自治州", visited: false },
      { name: "西双版纳傣族自治州", visited: false },
      { name: "大理白族自治州", visited: true },
      { name: "德宏傣族景颇族自治州", visited: false },
      { name: "怒江傈僳族自治州", visited: false },
      { name: "迪庆藏族自治州", visited: false }
    ]
  },
  "西藏自治区": {
    name: "西藏",
    cities: [
      { name: "拉萨市", visited: false },
      { name: "日喀则市", visited: false },
      { name: "昌都市", visited: false },
      { name: "林芝市", visited: false },
      { name: "山南市", visited: false },
      { name: "那曲市", visited: false },
      { name: "阿里地区", visited: false }
    ]
  },
  "陕西省": {
    name: "陕西",
    cities: [
      { name: "西安市", visited: true },
      { name: "铜川市", visited: false },
      { name: "宝鸡市", visited: true },
      { name: "咸阳市", visited: true },
      { name: "渭南市", visited: false },
      { name: "延安市", visited: false },
      { name: "汉中市", visited: false },
      { name: "榆林市", visited: false },
      { name: "安康市", visited: false },
      { name: "商洛市", visited: false }
    ]
  },
  "甘肃省": {
    name: "甘肃",
    cities: [
      { name: "兰州市", visited: false },
      { name: "嘉峪关市", visited: false },
      { name: "金昌市", visited: false },
      { name: "白银市", visited: false },
      { name: "天水市", visited: false },
      { name: "武威市", visited: false },
      { name: "张掖市", visited: false },
      { name: "平凉市", visited: false },
      { name: "酒泉市", visited: false },
      { name: "庆阳市", visited: false },
      { name: "定西市", visited: false },
      { name: "陇南市", visited: false },
      { name: "临夏回族自治州", visited: false },
      { name: "甘南藏族自治州", visited: false }
    ]
  },
  "青海省": {
    name: "青海",
    cities: [
      { name: "西宁市", visited: false },
      { name: "海东市", visited: false },
      { name: "海北藏族自治州", visited: false },
      { name: "黄南藏族自治州", visited: false },
      { name: "海南藏族自治州", visited: false },
      { name: "果洛藏族自治州", visited: false },
      { name: "玉树藏族自治州", visited: false },
      { name: "海西蒙古族藏族自治州", visited: false }
    ]
  },
  "宁夏回族自治区": {
    name: "宁夏",
    cities: [
      { name: "银川市", visited: false },
      { name: "石嘴山市", visited: false },
      { name: "吴忠市", visited: false },
      { name: "固原市", visited: false },
      { name: "中卫市", visited: false }
    ]
  },
  "新疆维吾尔自治区": {
    name: "新疆",
    cities: [
      { name: "乌鲁木齐市", visited: false },
      { name: "克拉玛依市", visited: false },
      { name: "吐鲁番市", visited: false },
      { name: "哈密市", visited: false },
      { name: "昌吉回族自治州", visited: false },
      { name: "博尔塔拉蒙古自治州", visited: false },
      { name: "巴音郭楞蒙古自治州", visited: false },
      { name: "阿克苏地区", visited: false },
      { name: "克孜勒苏柯尔克孜自治州", visited: false },
      { name: "喀什地区", visited: false },
      { name: "和田地区", visited: false },
      { name: "伊犁哈萨克自治州", visited: false },
      { name: "塔城地区", visited: false },
      { name: "阿勒泰地区", visited: false }
    ]
  },
  "台湾省": {
    name: "台湾",
    cities: [
      { name: "台北市", visited: false },
      { name: "高雄市", visited: false },
      { name: "基隆市", visited: false },
      { name: "台中市", visited: false },
      { name: "台南市", visited: false },
      { name: "新竹市", visited: false },
      { name: "嘉义市", visited: false }
    ]
  },
  "香港特别行政区": {
    name: "香港",
    cities: [
      { name: "香港岛", visited: false },
      { name: "九龙", visited: false },
      { name: "新界", visited: false }
    ]
  },
  "澳门特别行政区": {
    name: "澳门",
    cities: [
      { name: "澳门半岛", visited: false },
      { name: "氹仔岛", visited: false },
      { name: "路环岛", visited: false }
    ]
  }
};


/** 示例旅行档案（首次使用时可选加载） */
const SAMPLE_ARCHIVES = {
  "江苏省|南京市": {
    firstVisit: "2019-04-05",
    photos: ["https://picsum.photos/seed/nanjing1/400/300", "https://picsum.photos/seed/nanjing2/400/300"],
    notes: "清明时节游夫子庙、中山陵，樱花季很美。鸭血粉丝汤和盐水鸭必吃。",
    expense: 2800,
    rating: 5
  },
  "江苏省|苏州市": {
    firstVisit: "2020-10-01",
    photos: ["https://picsum.photos/seed/suzhou1/400/300"],
    notes: "拙政园、平江路，江南水乡的精致与温婉。",
    expense: 3200,
    rating: 5
  },
  "浙江省|杭州市": {
    firstVisit: "2021-05-20",
    photos: ["https://picsum.photos/seed/hangzhou1/400/300", "https://picsum.photos/seed/hangzhou2/400/300"],
    notes: "西湖骑行，灵隐寺祈福。龙井村品茶，人间天堂名不虚传。",
    expense: 4500,
    rating: 5
  },
  "四川省|成都市": {
    firstVisit: "2022-01-15",
    photos: ["https://picsum.photos/seed/chengdu1/400/300"],
    notes: "宽窄巷子、锦里、大熊猫基地。火锅和串串太巴适了！",
    expense: 3800,
    rating: 5
  },
  "陕西省|西安市": {
    firstVisit: "2018-08-12",
    photos: ["https://picsum.photos/seed/xian1/400/300"],
    notes: "兵马俑震撼，回民街美食云集，城墙骑行看日落。",
    expense: 3500,
    rating: 4
  }
};

const SAMPLE_VISITED = [
  ["江苏省", "南京市"], ["江苏省", "苏州市"],
  ["浙江省", "杭州市"], ["四川省", "成都市"],
  ["陕西省", "西安市"], ["北京市", "北京市"],
  ["上海市", "上海市"], ["广东省", "深圳市"]
];
