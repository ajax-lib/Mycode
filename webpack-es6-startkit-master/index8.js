// 宣告會需要使用的變數
// 會用到輸入的內容、時間、日期，以及修改html內容的方程式
// 如何儲存輸入的內容--> list內放object存放這些內容以及丟棄這個內容
const content = document.getElementById('content') 
const date = document.getElementById("date") 
const time = document.getElementById('time') 
const addedBtn = document.getElementById('addedBtn') 
const deleteBtn = document.getElementById("deleteBtn") 
const list = document.getElementById("list") 

const listContent = [] 


//function render() {
    // 渲染頁面的list
//    let htmlStr = ''
  
//    listContent.forEach(function (item) {
//      htmlStr = htmlStr + `
//      <div class="item">
//        <div>
//          <p>內容：${item.content}</p>
//          <p>時間：${item.date} ${item.time}</p>
//        </div>
//      </div>
//      `
//    })
//}


function reloadnew(){
    let htmlStr = '' ;

    listContent.forEach(function(item){
        htmlStr = htmlStr + `               
            <div class="item">
                 <div>
                    <p>內容:${item.content}</p>
                    <p>時間:${item.date} ${item.time}</p>
                </div>
            </div>
            `                       
    })
    console.log(htmlStr);
    list.innerHTML = htmlStr
};

addedBtn.addEventListener('click', function () {
    console.log(content.value);
    console.log(date.value);
    console.log(time.value);
    
    listContent.push({
        content: content.value,
        date : date.value,
        time : time.value
    })
    reloadnew()
})

deleteBtn.addEventListener('click', function(){
    listContent.shift()
    reloadnew()
})
