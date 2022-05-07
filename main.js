// about-btn を押したら about にスクロールする
document.getElementById('about-btn').addEventListener('click', (e) => {    // #about-btn 要素を取得してクリックイベントを設定
    e.preventDefault();    // a 要素の元の動作であるブラウザを読み込んでリンク先に飛ぶを無効化する
    const about = document.getElementById('about').getBoundingClientRect().top;    // #about 要素の位置を取得して定数に代入
    const aboutOffset = window.pageYOffset;
    const aboutTarget = about + aboutOffset - 5;
    window.scrollTo(0, aboutTarget);    //windowオブジェクトのscrollToメソッドで定数aboutのtopへ移動
});

// bicycle-btn を押したら bicycle にスクロールする
document.getElementById('bicycle-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const bicycle = document.getElementById('bicycle').getBoundingClientRect().top;
    const bicycleOffset = window.pageYOffset;
    const bicycleTarget = bicycle + bicycleOffset - 5;
    window.scrollTo(0, bicycleTarget);
});