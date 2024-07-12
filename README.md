# 3C Reuse

https://wei886-tw.github.io/Vue-Week8/

## 專案說明

以販售二手 3c 產品的電商網站，以及後台管理者使用。

- 製作者：Yu Wei Hong
- 設計師：Yu Wei Hong
- 文案來源：chatGPT
- 圖片來源：[unsplash](https://unsplash.com/), [Momo 購物網站](https://www.momoshop.com.tw/main/Main.jsp), [PChome](https://24h.pchome.com.tw/?gad_source=1&gclid=Cj0KCQjw7ZO0BhDYARIsAFttkCgRq_VgBVPATLz4aHpMQtxOdaagNxkLWnaWP8Q65eIcZanICHZKWdwaAmkrEALw_wcB)

## 使用技術

- 使用 `Vue 3` 和 `create-vue` 構建開發環境
- 選用 `Bootstrap 5` 搭配 `Sass` 進行網頁切版
- 整合 `ESLint Standard` 以保持程式碼風格的一致性
- 運用 `Pinia.js` 作為狀態管理工具，實現跨元件資料的傳遞

## 套件
* "@popperjs/core": "^2.11.8"
* "@vee-validate/i18n": "^4.13.1"
* "@vee-validate/rules": "^4.13.1"
* "aos": "^2.3.4"
* "axios": "^1.6.8"
* "bootstrap": "^5.3.3"
* "bootstrap-icons": "^1.11.3"
* "git": "^0.1.5"
* "pinia": "^2.1.7"
* "swiper": "^11.1.4"
* "vee-validate": "^4.13.1"
* "vue": "^3.4.21"
* "vue-axios": "^3.5.2"
* "vue-i18n": "^9.10.2"
* "vue-loading-overlay": "^6.0.4"
* "vue-router": "^4.3.2"

## 開發套件
* "@babel/plugin-transform-typescript": "^7.24.7"
* "@vitejs/plugin-vue": "^5.0.4"
* "@vue/test-utils": "^2.4.4"
* "eslint": "^8.49.0"
* "eslint-plugin-vue": "^9.17.0"
* "gh-pages": "^6.1.1"
* "jsdom": "^24.0.0"
* "sass": "^1.77.0"
* "sass-loader": "^14.2.1"
* "vite": "^5.1.5"
* "vite-plugin-vue-devtools": "^7.0.16"
* "vitest": "^1.3.1"

## 前台介紹

### 首頁

- 前往各賣場  

- Swiper 顧客評論  

- AOS 動畫

![HomePage](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/HomePage.jpeg)

### 關於我們

- AOS 動畫

- 聯絡平台
  
![About](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/About.png)

### 部落格

- 左方可以篩選文章類別
  
![Blog](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/Blog.png)

### 文章內容

- 可以透過 hash tag 進入文章類別，目前顯示最新消息
  
![BlogCategory](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/BlogCategory.png)

### 所有產品頁面

- 可以透過右方 select 進行產品類別篩選

- 透過中間關鍵字搜尋產品  

- 產品 select 可以調整加入購物車數量

- 加入收藏，再次點選取消收藏
  
![ProductsList](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/ProductsList.jpg)

### 收藏頁面

- 產品加入購物車後自行刪除
  
![Collection](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/Collection.jpg)

### 購物車

- 領取優惠可以打八折
![Collection](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/UserCart.png)

## 後台介紹  

### 產品列表  

- 可以透過 Bootstrap Modal 對產品列表進行修改新增  

![AdminProducts](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/AdminProducts.png)


### 訂單管理  

- 可以透過 Bootstrap Modal 檢視訂單內容  

![AdminOrders](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/AdminOrders.png)

### 優惠券管理  

- 可以透過 Bootstrap Modal 新增或修改優惠券
![AdminCoupons](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/AdminCoupons.png)


### 文章管理  

- 可以透過 Bootstrap Modal 新增或修改文章  
![AdminArticles](https://raw.githubusercontent.com/wei886-tw/3cReuse-pic/main/AdminArticles.png)

# 資料夾結構
- .vscode：Visual Studio Code 的設定檔
- dist：打包後的檔案
- public：公開的靜態檔案
- src：專案的程式碼
  - assets：靜態檔案
  - components：元件
  - router：路由
  - store：狀態管理
  - views：頁面
  - App.vue：根元件
  - main.js：進入點
- .env.example：環境變數範本
- .eslintrc.js：ESLint 設定檔
- .gitignore：Git 忽略檔案
- .nvmrc：Node.js 版本
- index.html：進入點 HTML
- package-lock.json：套件版本鎖定
- package.json：專案資訊
- README.md：專案說明
- vite.config.js：Vite 設定檔

# 安裝與使用
以下將會引導你如何安裝此專案到你的電腦上。

## 取得專案
```bash
git clone https://github.com/wei886-tw/Vue-Week8 
```

## 環境變數
請將 `.env` 複製一份並命名為 `.env.copy`，並將裡面的環境變數設定為你的值。
（請記得將 .env 中的 VITE_API, VITE_PATH 改為你的 API 。）
```bash
cp .env .env.copy
```

## 安裝套件
```bash
npm install 
```

## 啟動開發環境
```bash
npm run dev
```

## 打包專案
```bash
npm run build
```

## 部署專案
```bash
npm run deploy
```




