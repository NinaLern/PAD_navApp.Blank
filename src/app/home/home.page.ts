import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scene = {
    title: '幾米主題南港站',
    avatar: 'avatar.jpg',
    desc: '受到各方廣大喜愛的幾米主題裝置藝術，就藏身在捷運板南線的南港站之中。南港捷運站大膽引進享譽國際的幾米繪畫，完整表現出捷運站的現代性，既寫實又富美感，也是捷運南港站啟用最受人矚目的話題。',
    img: 'g_me.jpg'
  };
  constructor() {}

}
