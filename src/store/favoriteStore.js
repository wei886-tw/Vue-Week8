import { defineStore } from 'pinia';

export default defineStore('favoriteStore', {
  state: () => ({
    // 收藏 id
    favoriteList: [],
    // 完整收藏資料
    favoriteId: []
  }),
  actions: {
    handleFavorite(id) {
      const favoriteIdx = this.favoriteList.indexOf(id);
      if (favoriteIdx === -1) {
        this.favoriteList.push(id);
        alert("已收藏商品！");

      } else {
        this.favoriteList.splice(favoriteIdx, 1);
        alert("取消收藏商品！");

      }
      this.setStorage();
    },

    // 儲存收藏
    setStorage() {
      localStorage.setItem('favoriteList', this.favoriteList);
    },

    // 獲得收藏
    getFavoriteList() {
      const favoriteList = localStorage.getItem('favoriteList');
      if (favoriteList) {
        this.favoriteList = favoriteList.split(',');
      }
    },
  }
});
