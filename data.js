const DAYS = [
  {
    id: 1, theme: "機場生存", label: "機上應答", emoji: "✈️", date: "03/27",
    title: "Day 01 — 泰國航班上的專業需求",
    desc: "長途飛行中，精準表達餐飲與舒適度需求。",
    phrases: [
      { scenario: "點餐需求", en: "I'll have the chicken meal, please.", zh: "我要雞肉餐，謝謝。" },
      { scenario: "客製化", en: "Can I get a Coke with no ice, please?", zh: "可以給我一杯去冰可樂嗎？" },
      { scenario: "舒適需求", en: "Could I get a blanket? It's a bit cold in here.", zh: "可以給我一件毯子嗎？這裡有點冷。" },
      { scenario: "服務請求", en: "Excuse me, could I borrow a pen for the arrival card?", zh: "不好意思，能借支筆填寫入境卡嗎？" },
      { scenario: "餐飲調整", en: "I think I'll skip the meal service. I'm going to try and get some sleep.", zh: "我想跳過這次供餐。我打算試著睡一下。" },    
      { scenario: "飲料續杯", en: "Could I get a refill on my water when you have a moment?", zh: "您有空的時候，可以幫我的水續杯嗎？" },
      { scenario: "特殊飲食", en: "Are there any vegetarian options left for this flight?", zh: "這班飛機還有剩下的素食選擇嗎？" },
      { scenario: "睡眠備品", en: "Would it be possible to get a pair of earplugs and an eye mask?", zh: "可以給我一副耳塞和眼罩嗎？" },
      { scenario: "禮貌溝通", en: "Would you mind bringing your seat up a bit during the meal?", zh: "用餐時間介意把您的椅背稍微調直嗎？" },
      { scenario: "設備故障", en: "Excuse me, my entertainment screen doesn't seem to be responding. Could you reset it?", zh: "不好意思，我的娛樂螢幕好像沒反應。可以麻煩您幫我重啟嗎？" },

      // 萬用句型 1：禮貌索取 (Could I get + 物品 + please?)
      { scenario: "萬用句型", en: "Could I get [a blanket / some water / a headset], please?", zh: "可以給我 [一條毯子 / 一些水 / 一副耳機] 嗎？" },
      
      // 萬用句型 2：委婉拒絕或跳過 (No thank you, I'll just...)
      { scenario: "萬用句型", en: "No thank you, I think I'll just [sleep / read].", zh: "不用了謝謝，我想我直接 [睡覺 / 看書] 就好。" },
      
      // 萬用句型 3：反應設備問題 (Excuse me, my + 設備 + isn't working.)
      { scenario: "萬用句型", en: "Excuse me, my [screen / reading light / headphone] isn't working.", zh: "不好意思，我的 [螢幕 / 閱讀燈 / 耳機] 壞了/沒反應。" },

      // 真實對答：點餐
      { scenario: "雙向對答", en: "A: Chicken or beef? \nB: I'll have the chicken, please.", zh: "空服員：雞肉還是牛肉？ \n你：我要雞肉，謝謝。" },

      // 真實對答：空服員主動關心
      { scenario: "雙向對答", en: "A: Can I get you anything else? \nB: No thank you, I'm good for now.", zh: "空服員：還需要什麼嗎？ \n你：不用了謝謝，我現在不需要。" }
      
    ]
  },
  {
    id: 2, theme: "機場生存", label: "海關實戰", emoji: "🛃", date: "03/28",
    title: "Day 02 — 泰國海關的專業應對",
    desc: "向海關簡明扼要地交代你的身分與 ACI 會議目的。",
    phrases: [
      { scenario: "來訪目的", en: "I'm here to attend a professional conference on airport management.", zh: "我是來參加一場關於機場管理的專業會議。" },
      { scenario: "職業身分", en: "I work as an electrical engineer at an airport in Taiwan.", zh: "我在台灣的機場擔任電機技師。" },
      { scenario: "停留時間", en: "I'll be staying for five days. Here is my return ticket.", zh: "我會停留五天。這是我的回程機票。" },
      { scenario: "住宿資訊", en: "I'm staying at the [Hotel Name]. Here is the booking confirmation.", zh: "我住在[飯店名稱]。這是訂房確認函。" }
    ]
  },
  {
    id: 3, theme: "機場生存", label: "地面交通", emoji: "🚕", date: "03/29",
    title: "Day 03 — 從機場到飯店的順暢接駁",
    desc: "曼谷交通繁雜，確保司機清楚目的地並正確計費。",
    phrases: [
      { scenario: "尋找交通", en: "Could you point me to the international taxi stand?", zh: "能告訴我國際線計程車站在哪裡嗎？" },
      { scenario: "計程車", en: "Please make sure to use the meter. Thank you.", zh: "請務必按跳表計費。謝謝。" },
      { scenario: "地點確認", en: "I need to go to the BITEC Exhibition Center. Do you know where it is?", zh: "我要去 BITEC 展覽中心。您知道在哪裡嗎？" },
      { scenario: "收費確認", en: "Are highway tolls included in this fare?", zh: "這個車資有包含高速公路過路費嗎？" }
    ]
  },
  {
    id: 4, theme: "機場生存", label: "飯店入住", emoji: "🏨", date: "03/30",
    title: "Day 04 — 飯店 Check-in 與基本需求",
    desc: "經過漫長旅途，順利辦理入住並確認基本設施。",
    phrases: [
      { scenario: "辦理入住", en: "Hi, I'd like to check in. The reservation is under 'Hsieh'.", zh: "你好，我要辦理入住。預約姓名是謝先生。" },
      { scenario: "房型需求", en: "If possible, could I get a quiet room away from the elevators?", zh: "如果可以的話，能給我一間遠離電梯的安靜房間嗎？" },
      { scenario: "服務詢問", en: "What time does the breakfast buffet start in the morning?", zh: "早上的自助早餐幾點開始？" },
      { scenario: "網路需求", en: "Could you provide me with the Wi-Fi password, please?", zh: "能提供我 Wi-Fi 密碼嗎？" }
    ]
  },
  {
    id: 5, theme: "機場生存", label: "機電反應", emoji: "🔌", date: "03/31",
    title: "Day 05 — 飯店設施問題反應",
    desc: "遇到房間設備異常時，精準描述問題點。",
    phrases: [
      { scenario: "電力問題", en: "The power socket near the desk seems to be loose and not working.", zh: "書桌旁的插座似乎鬆動而且沒有電。" },
      { scenario: "設備借用", en: "Do you happen to have a universal power adapter I could borrow?", zh: "請問你們剛好有萬用轉接頭可以借我嗎？" },
      { scenario: "空調問題", en: "The air conditioning in my room is making a strange noise.", zh: "我房間的空調發出奇怪的噪音。" },
      { scenario: "修繕請求", en: "Could you send maintenance up to check the lights in the bathroom?", zh: "可以請維修人員上來檢查浴室的燈嗎？" }
    ]
  },
  {
    id: 6, theme: "機場生存", label: "餐飲點菜", emoji: "🍽️", date: "04/01",
    title: "Day 06 — 曼谷餐廳點餐與結帳",
    desc: "體驗泰國美食，掌握點餐與口味調整的關鍵句。",
    phrases: [
      { scenario: "索取菜單", en: "Could we get a menu with English translations, please?", zh: "可以給我們一份有英文翻譯的菜單嗎？" },
      { scenario: "口味調整", en: "I'd like this dish, but please make it not too spicy.", zh: "我要這道菜，但請不要做太辣。" },
      { scenario: "結帳付款", en: "Can we get the bill, please? Do you accept credit cards?", zh: "麻煩結帳。你們收信用卡嗎？" },
      { scenario: "街頭小吃", en: "I'll take one of those. How much is it?", zh: "我要一個那個。請問多少錢？" }
    ]
  },
  {
    id: 7, theme: "機場生存", label: "突發狀況", emoji: "🆘", date: "04/02",
    title: "Day 07 — 迷路與尋求協助",
    desc: "在異國他鄉遇到小麻煩時的求救用語。",
    phrases: [
      { scenario: "行李遺失", en: "My checked luggage hasn't arrived on the carousel.", zh: "我的托運行李沒有出現在轉盤上。" },
      { scenario: "問路指引", en: "Excuse me, could you show me on the map where we are right now?", zh: "不好意思，能在地圖上指給看我們現在在哪裡嗎？" },
      { scenario: "網路問題", en: "I'm having trouble connecting my phone to the local network.", zh: "我的手機無法連上當地的網路。" },
      { scenario: "尋求協助", en: "I'm a bit lost. Which way is the nearest BTS Skytrain station?", zh: "我有點迷路了。最近的 BTS 捷運站往哪個方向？" }
    ]
  }
];