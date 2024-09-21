document.addEventListener('DOMContentLoaded', function () {
    // 指定日付を設定
    const targetDate = '2024/09/21';
    // 指定日時のタイムスタンプを作成
    const targetTime = new Date(`${targetDate} 12:00:00`).getTime();

    // 現在のタイムスタンプを取得
    const currentTime = new Date().getTime();

    // 今日の12時を過ぎているか確認
    if (currentTime >= targetTime) {
        // 12時を過ぎていたら表示
        document.querySelector('.flyer').style.display = 'block';
        document.querySelector('iframe').style.width = '100%';
    } else {
        // 12時をまだ過ぎていなかったら12時になった時点で表示
        setTimeout(function() {
            document.querySelector('.flyer').style.display = 'block';
            document.querySelector('iframe').style.width = '100%';
        }, targetTime - currentTime);
    }
});

