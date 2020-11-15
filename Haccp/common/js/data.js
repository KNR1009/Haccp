// こちらにinputで日付入力の際にデフォルトで現在日時が入るようにする


{
  window.onload = function () {
    //今日の日時を表示
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var toTwoDigits = function (num, digit) {
      num += ''
      if (num.length < digit) {
        num = '0' + num
      }
      return num
    }

    var yyyy = toTwoDigits(year, 4)
    var mm = toTwoDigits(month, 2)
    var dd = toTwoDigits(day, 2)
    // 昨日の日付の取得
    var ddd = toTwoDigits(day-1, 2)

    // 今日の日付
    var ymd = yyyy + "-" + mm + "-" + dd;

    // 昨日の日付
    var ymdd = yyyy + "-" + mm + "-" + ddd;

    document.getElementById("today").value = ymd;
    document.getElementById("yesterday").value = ymdd;
  }


    // 現在の日時を表示する
  window.addEventListener('load', () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('cal').value = now.toISOString().slice(0, -5);
  });

  // ドラッグアンドドロップエリア
  var dropZone = document.getElementById('drop-zone');
  var preview = document.getElementById('preview');
  var fileInput = document.getElementById('file-input');

  dropZone.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = '#e1e7f0';
  }, false);

  dropZone.addEventListener('dragleave', function (e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = '#ffffff';
  }, false);

  fileInput.addEventListener('change', function () {
    previewFile(this.files[0]);
  });

  dropZone.addEventListener('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = '#ffffff'; //背景色を白に戻す
    var files = e.dataTransfer.files; //ドロップしたファイルを取得
    if (files.length > 1) return alert('アップロードできるファイルは1つだけです。');
    fileInput.files = files; //inputのvalueをドラッグしたファイルに置き換える。
    previewFile(files[0]);
  }, false);

  function previewFile(file) {
    /* FileReaderで読み込み、プレビュー画像を表示。 */
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function () {
      var img = document.createElement('img');
      img.setAttribute('src', fr.result);
      preview.innerHTML = '';
      preview.appendChild(img);
    };
  }
}




