import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

 places = [
  {id: '1', title: '幾米主題南港站', photoURL: 'g_me.jpg', intro: '受到各方廣大喜愛的幾米主題裝置藝術，就藏身在捷運板南線的南港站之中。南港捷運站大膽引進享譽國際的幾米繪畫，完整表現出捷運站的現代性'},
  {id: '2', title: '140高地公園', photoURL: 'high_land.jpg', intro: '140高地公園位於台北市文山區萬美里境內，萬寧街北側，介於萬寧街與萬美街2段間的丘陵地，最高海拔為138公尺的枹子腳山（枹仔坑山），山頂視野遼闊'},
  {id: '3', title: '通化公園', photoURL: 'th_park.jpg', intro: '本公園位於文昌街與通化街口，於民國76年建立，原命名為「文通公園」，面積1180平方公尺，後改「文通公園」為「通化公園」'},
  {id: '4', title: '世貿公園', photoURL: 'wtc_park.jpg', intro: '為提供市民更多的停車空間，停管處新建南港區世貿公園地下停車場，並於民國100年簡易綠美化，公園面積約1.2公頃，位於南港區經貿二路106巷'},
];
  id = '';
  data = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // X 像是函式中的變數
    // tostring 將數字類型資料變為字串
    // filter(func內容)
    this.data = this.places.filter(x => x.id.toString() === this.id)[0];
  }

}
