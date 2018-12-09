window.addEventListener('click',window_Clicked);//Webページ内でクリックされたらメッセージを送る。
function window_Clicked()
{
    //メッセージは今回は特に利用しないのでなんでもよい
    browser.runtime.sendMessage({ message: 'incrementIt' });
}

//バックグラウンド側からのメッセージを受け取ったとき。
browser.runtime.onMessage.addListener(function (msg) {
    console.log("Extension1 content:Message from background.");
});