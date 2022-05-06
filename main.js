// about-btn を押したら about にスクロールする
document.getElementById('about-btn').addEventListener('click', (e) => {    // #about-btn 要素を取得してクリックイベントを設定
    e.preventDefault();    // a 要素の元の動作であるブラウザを読み込んでリンク先に飛ぶを無効化する
    const about = document.getElementById('about').getBoundingClientRect();    // #about 要素の位置を取得して定数に代入
    window.scrollTo(0, about.top);    //windowオブジェクトのscrollToメソッドで定数aboutのtopへ移動
});

// bicycle-btn を押したら bicycle にスクロールする
document.getElementById('bicycle-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const bicycle = document.getElementById('bicycle').getBoundingClientRect().top;
    window.scrollTo(0, bicycle);
});