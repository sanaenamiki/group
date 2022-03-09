$("#contactCheck").change(function () {
  // チェックが入っていたら有効化
  if ($(this).is(":checked")) {
    // ボタンを有効化
    $("#contactBtn").prop("disabled", false);
    // 有効化したらボタンの色を変える
    $("#contactBtn").css({ "background-color": "#c9171e" });
  } else {
    // ボタンを無効化
    $("#contactBtn").prop("disabled", true);
    // 無効化したらボタンの色を戻す
    $("#contactBtn").css({ "background-color": "#ccc" });
  }
});
