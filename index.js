// import "./index.css";
// import "./index.html"


//追加機能（テキスト取得まで）流れ
//1 追加ボタン
//1-1 クリック関数を作る
//1-2 buttonにidを付与する(html)
//1-3 idを取得して、イベントを付与し、関数を発火する

//2 入力テキスト値を取得する(テキストbox内の要素を取得)
//2-1 textareaにid名を付与(html)
//2-2 関数内でテキストを取得する
//2-3 関数内で入力値を初期化する

//3 未完了TODOのリストを作る（DOM）
//3-1 divタグ作成
//3-2 listタグ生成
//3-3 liタグにテキスト値を設定

//4 divタグの子要素に各要素を設定する

//5 ulタグにdiv以下の要素(li)を設定する
//5-1 ulにidをつける
//5-2 未完了リストに追加

//クリック関数
const onClickAdd = () => {
    //テキストBOXの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value; //テキスト取得
    document.getElementById("add-text").value = ""; //初期化
    
    //リストのdiv生成
    const div = document.createElement("div"); //divタグ生成
    div.className = "list-row";

   //listタグ生成
   const li = document.createElement("li");
   li.innerText = inputText; //textBOXの入力値を取得(変数を格納)
   

   //divタグの子要素に各要素を設定する
   div.appendChild(li);
   console.log(div);

   //未完了リストに追加
   document.getElementById("incomplete-list").appendChild(div);

}

// idを取得し、イベントを付与し、関数を呼ぶ(どこに？何を？どうする？)
document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd()); 

