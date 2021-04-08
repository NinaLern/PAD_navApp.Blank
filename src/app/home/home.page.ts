import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 places = [
  {id: '1', title: '幾米主題南港站', photoURL: 'g_me.jpg', intro: '受到各方廣大喜愛的幾米主題裝置藝術，就藏身在捷運板南線的南港站之中。南港捷運站大膽引進享譽國際的幾米繪畫，完整表現出捷運站的現代性'},
  {id: '2', title: '140高地公園', photoURL: 'high_land.jpg', intro: '140高地公園位於台北市文山區萬美里境內，萬寧街北側，介於萬寧街與萬美街2段間的丘陵地，最高海拔為138公尺的枹子腳山（枹仔坑山），山頂視野遼闊'},
  {id: '3', title: '通化公園', photoURL: 'th_park.jpg', intro: '本公園位於文昌街與通化街口，於民國76年建立，原命名為「文通公園」，面積1180平方公尺，後改「文通公園」為「通化公園」'},
  {id: '4', title: '世貿公園', photoURL: 'wtc_park.jpg', intro: '為提供市民更多的停車空間，停管處新建南港區世貿公園地下停車場，並於民國100年簡易綠美化，公園面積約1.2公頃，位於南港區經貿二路106巷'},
];
  // 建構子宣告Router服務引數
  // 參數router:類型Router(外部功能)
  constructor(private router: Router) {}

  // 切換到detail頁面的時候，將代號傳過去。
  // 參數stockid（股票代號）：類型（數字）
  detail(placesid: number) {
    // ['網址',{要傳送的代號跟名稱}]
    this.router.navigate(['detail', {id: placesid}]);
  }

}
