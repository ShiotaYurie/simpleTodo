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

   //liタグ生成
   const li = document.createElement("li");
   li.innerText = inputText; //textBOXの入力値を取得(変数を格納)
   
   //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener('click', () => {
        //押された完了ボタンの親タグ（div）を未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode);

        //完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        //TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;

        //div以下を初期化
        addTarget.textContent = null;

        //liタグを生成
        const li = document.createElement("li");
        li.innerText = text;

        //buttonタグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        //divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);
        
        //完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);

  });

  
    //button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener('click', () => {
        //押された削除ボタンの親タグ（div）を未完了リストから削除
        deleteFromIncompleteList(deleteButton.parentNode);
    });

   //divタグの子要素に各要素を設定する
   div.appendChild(li);
   div.appendChild(completeButton);
   div.appendChild(deleteButton);

   //未完了リストに追加
   document.getElementById("incomplete-list").appendChild(div);

   //未完了リストから指定の要素を削除
   const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
   }

}

// idを取得し、イベントを付与し、関数を呼ぶ(どこに？何を？どうする？)
document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd()); 

