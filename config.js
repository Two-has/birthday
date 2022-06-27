// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送給我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "敬愛的師母",  // 同上...
        "今天是您的生日",
        "我特來為您祝壽啦",
        "祝您",
        "身體健康",
        "萬事勝意",
        "青春永駐",
        "夫妻恩愛",
        "吉祥如意",
        "富貴安康",
        "最後",
        "拜託叫周sir給少點作業",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "我特來為您祝壽啦": "我的專案.png",
        "拜託叫周sir給少點作業": "WeChat 圖片_20220627213641",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "開始",
        play: "音樂",
        bannar_coming: "橫幅",
        balloons_flying: "好像少點東西",
        cake_fadein: "蛋糕？",
        light_candle: "蠟燭？",
        wish_message: "生辰快樂",
        story: "您有一則留言",
    }
};
