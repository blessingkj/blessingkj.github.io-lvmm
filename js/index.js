window.onload=function () {
    //获取当前城市
    getCurrentCity();

    //初始化城市导航分类
    initCityClass();

    //城市切换
    CitySwitch();

    //顶部广告关闭
    // adClose();

    //导航数据导入
    NavDataImport();

    //导航效果
    NavEffect();
    
    //图片轮播
    bannerCarousel();

    //图片自动轮播
    bannerAutoCarousel();

    //tab选项卡
    tabItem();

    //底部秒杀数据导入
    spikeData()

    //秒杀区域效果
    spikeBorder();


}
function getCurrentCity() {
    let oCityName=document.querySelector(".city>b");
    oCityName.innerText=returnCitySN["cname"];
}
function initCityJsonData() {
    let str = `{
  "cityS": [
    {
      "area": "华北",
      "list": [
        "北京",
        "天津",
        "太原",
        "唐山",
        "呼和浩特",
        "包头",
        "石家庄",
        "呼伦贝尔",
        "大同",
        "济南",
        "青岛",
        "日照",
        "烟台"
      ]
    },
    {
      "area": "华东",
      "list": [
        "上海",
        "南京",
        "杭州",
        "合肥",
        "厦门",
        "南昌",
        "苏州",
        "无锡",
        "宁波",
        "常州",
        "嘉兴",
        "南通",
        "扬州",
        "镇江",
        "绍兴",
        "温州",
        "金华",
        "台州",
        "盐城",
        "泰安",
        "芜湖",
        "黄山",
        "阜阳",
        "福州",
        "赣州",
        "宜春",
        "婺源",
        "泰州"
      ]
    },
    {
      "area": "东北",
      "list": [
        "沈阳",
        "大连",
        "哈尔滨",
        "长春",
        "齐齐哈尔",
        "延边"
      ]
    },
    {
      "area": "华中",
      "list": [
        "武汉",
        "洛阳",
        "张家界",
        "长沙",
        "郑州",
        "焦作",
        "宜昌",
        "神农架",
        "南阳"
      ]
    },
    {
      "area": "华南",
      "list": [
        "广州",
        "深圳",
        "南宁",
        "桂林",
        "海口",
        "三亚",
        "珠海",
        "清远",
        "东莞"
      ]
    },
    {
      "area": "西南",
      "list": [
        "成都",
        "重庆",
        "昆明",
        "丽江",
        "大理",
        "西双版纳",
        "香格里拉",
        "贵阳",
        "拉萨",
        "九寨沟",
        "西昌"
      ]
    },
    {
      "area": "西北",
      "list": [
        "西安",
        "银川",
        "西宁",
        "乌鲁木齐",
        "兰州",
        "嘉峪关",
        "榆林",
        "延安",
        "喀什",
        "喀纳斯"
      ]
    },
    {
      "area": "港澳台",
      "list": [
        "中国香港",
        "中国澳门",
        "中国台湾"
      ]
    }
  ]
}`;
    return JSON.parse(str);
}
function initCityClass() {
    let oCity=document.querySelector(".city");
    let obj=initCityJsonData();
    let html = template('cityS', obj);
    oCity.innerHTML += html;
}
function CitySwitch(){
    let oCity=document.querySelector(".city");
    let oCitySwitchBtn=document.querySelector(".city > a");
    let oCityDiv=document.querySelector(".city > div");
    oCitySwitchBtn.onclick=function () {
        if(oCity.className.includes("active")){
            oCity.className=oCity.className.replace("active","");
            oCityDiv.style.display="none";
        }else {
            oCity.className=oCity.className+" active";
            oCityDiv.style.display="block";
        }
    }
}
function adClose() {
    let oAd=document.querySelector(".ad");
    let oImg=document.querySelector(".ad-in>img");
    let oAdCloseBtn=document.querySelector(".ad-close-btn");
    linearAnimation(oAd,{"height":400},function () {
        setTimeout(function () {
            linearAnimation(oAd,{"height":60},function () {
                oImg.scr= `images/small-ad.jpg`;
                oAdCloseBtn.style.display="block";
            });
        },2000);
    })
    oAdCloseBtn.onclick=function () {
        linearAnimation(oAd,{"height":0},function () {
            oAd.style.height="0";
        });
    }
}
function initNavJsonData() {
    let str = `{
  "navs":[
    {
      "title": "首页",
      "subTitle": []
    },
    {
      "title": "出境游",
      "subTitle": ["出境首页", "邮轮", "签证", "境外玩乐", "WIFI/电话卡", "定制游"]
    },
    {
      "title": "国内游",
      "subTitle": ["国内首页", "机酒自由行", "超级自由行", "定制游"]
    },
    {
      "title": "周边游",
      "subTitle": ["周边游首页", "酒店+景点", "周边跟团", "定制游"]
    },
    {
      "title": "景点门票",
      "subTitle": ["国内门票", "境外门票"]
    },
    {
      "title": "酒店",
      "subTitle": ["国内酒店", "境外酒店"]
    },
    {
      "title": "定制游",
      "subTitle": ["个人定制游", "企业定制游"]
    },
    {
      "title": "自驾游",
      "subTitle": ["自驾首页", "定制游"]
    },
    {
      "title": "亲子游",
      "subTitle": []
    },
    {
      "title": "邮轮",
      "subTitle": ["邮轮首页", "日本航线", "海外航线"]
    },
    {
      "title": "机票",
      "subTitle": ["国内机票", "国际·港澳台机票"]
    },
    {
      "title": "火车票",
      "subTitle": []
    },
    {
      "title": " 特卖会",
      "subTitle": []
    },
    {
      "title": "金融",
      "subTitle": ["小驴白条", "礼品卡"]
    },
    {
      "title": "旅游攻略",
      "subTitle": ["目的地", "游记", "问答"]
    }
  ]
}`;
    return JSON.parse(str);
}
function NavDataImport() {
    let obj=initNavJsonData();
    let oNavIn=document.querySelector(".nav-in");
    for (let i=0;i<obj.navs.length;i++){
        let oLi=document.createElement("li");
        oNavIn.appendChild(oLi);
        let oA=document.createElement("a");
        oA.innerText=obj.navs[i].title;
        oLi.appendChild(oA);
        if (obj.navs[i].subTitle.length !==0){
            let oI=document.createElement("i");
            oLi.appendChild(oI);
        }
    }
}
function NavEffect() {
    let oNav=document.querySelector(".nav");
    let oItems=document.querySelectorAll(".nav-in>li");
    let oArrow=document.querySelector(".nav-arrow");
    let oSubNavP=document.querySelector(".sub-nav>p");
    let oSubNav=document.querySelector(".sub-nav");
    let obj=initNavJsonData();
    let currentLi=null;
    for (let i=0;i<oItems.length;i++){
        let item=oItems[i];
        item.onmouseenter=function () {
            oSubNav.style.display="none";
            if (obj.navs[i].subTitle.length !==0){
                oSubNav.style.display="block";
            }
            if (currentLi !== null){
                currentLi.className="";
            }
            this.className="selected";
            let offsetX=this.offsetLeft+this.offsetWidth/2;
            oArrow.style.display="block";
            oArrow.style.left=offsetX-oArrow.offsetWidth/2+"px";

            oSubNavP.innerHTML="";
            for (let j=0;j<obj.navs[i].subTitle.length;j++){
                let oA=document.createElement("a");
                oA.innerText=obj.navs[i].subTitle[j];
                oSubNavP.appendChild(oA);
            }

            oSubNavP.style.left=offsetX-oSubNavP.offsetWidth/2+"px";
            currentLi=this;
        }
    }
    oNav.onmouseleave=function () {
        let oLi=document.querySelector("li.selected");//为什么只能放在这里?
        oArrow.style.display="none";
        oSubNav.style.display="none";
        oLi.className="";
    }
}
function bannerCarousel() {
    let oBanners=document.querySelectorAll(".banner-in>li");
    let currentBanner=oBanners[0];
    let oNumbers=document.querySelectorAll(".banner-number>li")
    let currentNumber=oNumbers[0];
    currentBanner.style.opacity="1";
    currentNumber.className="active-2";
    //监听索引的移入事件
    for(let i=0;i<oNumbers.length;i++){
        let oNumber=oNumbers[i];
        oNumber.index=i;
        oNumber.onmouseenter=function () {
            currentNumber.className="";
            this.className="active-2";
            currentNumber=this;

            currentBanner.style.opacity="0";
            let oBanner=oBanners[this.index];
            oBanner.style.opacity="1";
            currentBanner=oBanner;
        }
    }
}
function bannerAutoCarousel() {
    let oBanners=document.querySelectorAll(".banner-in>li");
    let currentBanner=oBanners[0];
    let oNumbers=document.querySelectorAll(".banner-number>li")
    let currentNumber=oNumbers[0];
    let oBannerWrap=document.querySelector(".banner");
    let index=0;
    let count=oBanners.length;
    let timerID=setInterval(function () {
        currentBanner.style.opacity="0";
        currentNumber.className="";
        index++;
        if (index===count){
            index=0;
        }
        let oBanner=oBanners[index];
        oBanner.style.opacity="1";
        currentBanner=oBanner;

        let oNumber=oNumbers[index];
        oNumber.className="active-2";
        currentNumber=oNumber;
    },2000);

    oBannerWrap.onmouseenter=function () {
        clearInterval(timerID);
    }
    oBannerWrap.onmouseleave=function () {
        timerID=setInterval(function () {
            currentBanner.style.opacity="0";
            currentNumber.className="";
            index++;
            if (index===count){
                index=0;
            }
            let oBanner=oBanners[index];
            oBanner.style.opacity="1";
            currentBanner=oBanner;

            let oNumber=oNumbers[index];
            oNumber.className="active-2";
            currentNumber=oNumber;
        },2000);
    }
}
function tabItem() {
    let oTabItems=document.querySelectorAll(".tab-left>li")
    let oTabContents=document.querySelectorAll(".tab-right>div")
    let currentItem=oTabItems[0];
    let currentContent=oTabContents[0];
    for (let i=0;i<oTabItems.length;i++){
        let item=oTabItems[i];
        item.index=i;
        item.onclick=function () {
            currentItem.className="";
            this.className="active";
            currentItem=this;

            currentContent.className="";
            let content=oTabContents[this.index];
            content.className="active";
            currentContent=content;
        }
    }
}
function spikeBorder() {
    let oSpikeS=document.querySelectorAll(".spike-top>.spike-left>li");
    let oLine=document.querySelector(".spike-top>p");
    let currentSpike=oSpikeS[0];

    let oBottoms=document.querySelectorAll(".spike-bottom");
    let currentBottom=oBottoms[0];
    for(let i=0;i<oSpikeS.length;i++){
        let oSpike=oSpikeS[i];
        oSpike.index=i;
        oSpike.onmouseenter=function () {
            currentSpike.className="";
            this.className="active";
            currentSpike=this;

            oLine.style.left=this.offsetLeft+"px";

            currentBottom.className=currentBottom.className.replace("active","");
            let oBottom=oBottoms[this.index];
            oBottom.className=oBottom.className+" active";
            currentBottom=oBottom;
        }
    }
}
function initSpikeJsonData() {
    let str = `{
  "spikeS": [
    {
      "title": "今日必抢",
      "list": [
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-09-19/0f509447-40e3-4e69-b5ca-f1ccd3fc4e50_300_200.jpg",
          "type": "酒店套餐",
          "des": "茅山2天1晚【5.28-31爆款抢购，超长有效期，支持改期一次】句容茅山涵田半岛酒店景观房1晚＋双早双晚+茅山风景区/伏热花海二选一",
          "price": "¥599"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-05-20/a8f9e58e-6637-4eac-956b-19a13c00ffbe_300_200.jpg",
          "type": "景区门票",
          "des": "上海迪士尼乐园",
          "price": "¥74"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-05-15/aec6bc8c-ad51-410f-a944-df8a9cda95f1_300_200.jpg",
          "type": "跟团游",
          "des": "朱家角古镇，深坑精灵之城1日 纯玩跟团游(  游佘山森林公园，览世界海拔最低酒店、体验刺激玻璃栈道)",
          "price": "¥99"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-29/fe4fb464-0fc6-4100-b415-8e7318dbeb2b_300_200.jpg",
          "type": "酒店套餐",
          "des": "横店2天1晚【下单立减200，独家特惠套餐】住1晚四星影视主题酒店百老汇大厦+3景点＋梦幻谷",
          "price": "¥1210"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
          "type": "跟团游",
          "des": "【驴妈妈臻选】【提前60天报名，立减1000元每单，2人起订】北欧四国+双峡湾+皇后岛10日8晚经典游",
          "price": "¥13999"
        }
      ]
    },
    {
      "title": "品质优选",
      "list": [
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-02-02/ff9f7185-ff1d-49bc-a8f3-87c8e172ce3f_300_200.jpg",
          "type": "酒店套餐",
          "des": "【乐玩同里，美食之旅】【同里2天1晚自由行特卖】住同里湖度假村二期1晚＋含双人自助早餐＋双人自助晚餐带你体验亲子酒店界的海底捞",
          "price": "¥1058"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-11-28/d3f9e1ad-7bf2-4245-a5c5-4c6c1ab049af_300_200.jpg",
          "type": "酒店套餐",
          "des": "【无锡特卖】住无锡希尔顿逸林酒店1晚含双早＋享酒店周日-周四中餐套餐、周五-周六自助晚餐；享酒店恒温泳池，先进健身房，免费停车",
          "price": "¥735"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-01-09/e1ee33f4-cdd8-44ad-b441-90a3db6ed07d_300_200.jpg",
          "type": "酒店套餐",
          "des": "【横店自由行特卖·住一晚送一晚】住2晚横店官方酒店＋横店景点6选4＋梦幻谷＋赠随行儿童门票1套、大智禅寺、公交IC卡",
          "price": "¥1288"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-07-05/1a35f90b-1323-43e3-b319-fa100f7da20a_300_200.jpg",
          "type": "酒店套餐",
          "des": "【昆山兰博基尼2天1晚自由行特卖】住昆山托尼洛·兰博基尼酒店精致房＋双人早餐＋（双人自助晚餐／蒙特利／锦溪古镇／趣乐儿童游乐中心／重元寺）5选1",
          "price": "¥658"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-02-19/9777f90a-8f71-471f-a53d-495980a9a168_300_200.jpg",
          "type": "自由行",
          "des": "杭州2天1晚【桐庐市中心酒店·298元起】桐庐开元名都大酒店＋可自选自助晚餐＋深奥古村＋芦茨湾＋免费健身房＋免费停车场",
          "price": "¥298"
        }
      ]
    },
    {
      "title": "亲子/自驾",
      "list": [
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-01-08/54abcf17-43f4-446a-b68a-0fb0827544d7_300_200.jpg",
          "type": "酒店套餐",
          "des": "南通2天1晚【迎海踏春】恒大海上威尼斯（恒大酒店）含双早+放飞童梦套餐/踏春亲海游园记套餐套餐多选一+享“碧海银沙”，恒温泳池，健身房",
          "price": "¥1099"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-09-19/98282bf9-f439-42ac-a467-3b52bec1ae48_300_200.jpg",
          "type": "酒店套餐",
          "des": "上海2天1晚【住驴小玩房车】东平国家森林公园景区内房车双早＋免东平国家森林公园门票2张+小电瓶车接送各1次＋崇明大米1份＋文具礼盒套装3选1",
          "price": "¥520"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2015-09-22/f1313097-9599-4864-8845-10f000120f31_300_200.jpg",
          "type": "自由行",
          "des": "【随心任性，饕餮美食，宁波2天1晚自由行特卖】住宁波凯洲皇冠假日酒店，享双人海鲜自助晚餐＋酒店双早，免费体验酒店健身房，游泳池，WIFI",
          "price": "¥698"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2018-11-28/cb662da5-bad1-4902-a781-f7f5eb8ad331_300_200.jpg",
          "type": "酒店套餐",
          "des": "【凯蒂猫乐园 自由行特卖】安吉银润锦江城堡主题酒店2天1晚亲子梦幻萌之旅，游杭州Hello Kitty乐园 体验梦幻亲子之旅，免费享酒店停车，泳池，健身房等设施！",
          "price": "¥1108"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-07-05/1a35f90b-1323-43e3-b319-fa100f7da20a_300_200.jpg",
          "type": "酒店套餐",
          "des": "昆山2天1晚 【昆山兰博基尼2天1晚自由行特卖】,入住昆山托尼洛·兰博基尼酒店 + 双人早餐＋（双人自助晚餐／蒙特利亲子主题乐园／锦溪＋双人美美哒下午茶／周庄）项目自选＋WIFI＆游泳池＆健身房＆停车等",
          "price": "¥658"
        }
      ]
    }
  ]
}`;
    return JSON.parse(str);
}
function spikeData(){
    let oSpike=document.querySelector(".spike>.spike-in");
    let obj=initSpikeJsonData();
    let html = template('spikeS', obj);
    oSpike.innerHTML += html;
}
