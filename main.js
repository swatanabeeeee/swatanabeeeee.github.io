// const kitchenData = [{"2月3日": {"A": "ウッキー,トンちゃんくん", "B": "Daikichi", "C": "", "D": "吉吾", "E": "キッチンカー・アド", "F": "いか焼きみなせん", "G": "Kyotoケバブ屋", "H": "鉄平", "I": "じぃじの餃子", "J": "MONKAZI", "K": "T-STAR"}}];
const kitchenData = {"2月3日": {"A": "ウッキー,トンちゃんくん", "B": "Daikichi", "C": "", "D": "吉吾", "E": "キッチンカー・アド", "F": "いか焼きみなせん", "G": "Kyotoケバブ屋", "H": "鉄平", "I": "じぃじの餃子", "J": "MONKAZI", "K": "T-STAR"}};
const LocationA = 0;
const LocationB = 0;
const LocationC = 0;
const LocationD = 0;
const LocationE = 0;
const LocationF = 0;
const LocationG = 0;
const LocationH = 0;
const LocationI = 0;
const LocationJ = 0;
const LocationK = 0;
const ID_ukki = 3458764518031867936;
const ID_tonchann = 3458764518031779508;
const ID_daikichi = 3458764518031867948;

miro.onReady(() => {
  AuthorizeBoard()
})

async function AuthorizeBoard() {
  await miro.board.getInfo()
  .then((result) => {
    if(result.id=="o9J_lwQzDZE="){
      console.log("Authorized Board")
      AuthorizeUser();
    }
    else{
      console.log('Unauthorized Board');
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

async function AuthorizeUser() {
  //認証確認
  isok = true;
  await miro.isAuthorized().then( (isAuthorized) => {
    if (isAuthorized) {
      console.log('Web plugin authorized');
    } else {
      isok = false;
      console.log('Unauthorized');
    }
  })
  //認証申請
  if(!isok){
    await miro.requestAuthorization()
  }
  //プログラム実行
  getWidget(new Date().getHours())
  ChangeLocation(new Date())
  getUser();
  //画像を動かしてみる
  // miro.board.widgets.update(
  //   {
  //     id : "3458764518477594227",
  //     x : 3000,
  //   },
  // )
}

async function ChangeLocation(date) {
  today = (date.getMonth()+1) + "月" + date.getDate() + "日";
  console.log(today)
  console.log("情報", kitchenData[today])
  // console.log("情報2", kitchenData["2月3日"])

}

//オンライン人数を取得し、更新
async function getUser() {
  await miro.board.getOnlineUsers()
  .then((result) => {
    miro.board.widgets.update(
      {
        id : "3458764516879906156",
        text :result.length
      },
    )
    console.log("現在のオンライン人数",result.length);
  })
  .catch((err) => {
    console.log(err);
  });
}

//時間によって背景を変更
async function getWidget(hour) {
  console.log(hour, "時")
  let colortext = "";
  if(6<hour && 18>hour){
    colortext = "#2d9bf0";
    console.log("昼");
  }
  else{
    colortext = "#f24726";
    console.log("夜");
  }
  miro.board.widgets.update(
    {
      id : "3458764516401601937",
      style: {
        backgroundColor : colortext,
      }
    },
  )
}



// window.on('beforeunload', function(e) {
//   miro.board.widgets.update(
//     {
//       id : "3458764516442959651",
//       x : widget.x + 1000,
//     },
//   )
//   return "閉じる"
// });

  // users.forEach(user => console.log(user));
  // console.log(miro.board.getOnlineUsers())

  //すべてのオブジェクトを読み込み完了
//   onAllWidgetsLoaded(() => {
//     console.log('all widgets are loaded')
//     console.log(miro.board.getOnlineUsers())
//   })
// }
// async function onAllWidgetsLoaded(callback) {
//   const areAllWidgetsLoaded = await miro.board.widgets.areAllWidgetsLoaded()
//   if (areAllWidgetsLoaded) {
//     callback()
//   } else {
//     miro.addListener('ALL_WIDGETS_LOADED', callback)
//   }
// }



  // await miro.board.widgets.create(
  //   type: widget.type,
  //   text: "おめでとうございます",
  //   x: widget.x,
  //   y: widget.y,
  //   width: widget.width,
  //   height: widget.height,
  //   style: {
  //     backgroundColor : colortext,
  //   }
  // )



  //   backWidget.update(
  //   style: {
  //     backgroundColor : "#f24726",
  //   }
  // )



//   let objects = await miro.board.widgets.get()
//   let backWidget = objects.filter((widget) => widget.id === '3458764516401601937')
//   backWidget.update(
//     style: {
//       backgroundColor : "#f24726",
//     }
//   )
  
//   miro.initialize({
//     extensionPoints: {
//       bottomBar: {
//         title: 'sample10',
//         svgIcon:
//           '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
//         positionPriority: 1,
//         onClick: async () => {
          // Get selected widgets
          //let selectedWidgets = await miro.board.selection.get()

          // Filter stickers from selected widgets
          // let treasure = selectedWidgets.filter((widget) => widget.id === '3074457366196671495')

          // Delete selected stickers
          //await miro.board.widgets.deleteById(selectedWidgets.map((widget) => widget.id))

          // Create shapes from selected stickers
//           let colortext = "#f24726"
//           if(selectedWidgets[0].style.backgroundColor =="#8fd14f"){
//             colortext = "#f24726"
//           }
//           else if(selectedWidgets[0].style.backgroundColor =="#f24726"){
//             colortext = "#2d9bf0"
//           }
//           else if(selectedWidgets[0].style.backgroundColor =="#2d9bf0"){
//             colortext = "#8fd14f"
//           }
          
//           await miro.board.widgets.deleteById(selectedWidgets.map((widget) => widget.id))
          
//           await selectedWidgets.update(
//             selectedWidgets.map((widget) => ({
//               style: {
//                   backgroundColor : colortext,
//               }
//             }))
//           )
          
          
//           await miro.board.widgets.create(
//             selectedWidgets.map((widget) => ({
//               type: widget.type,
//               text: "おめでとうございます",
//               x: widget.x,
//               y: widget.y,
//               width: widget.width,
//               height: widget.height,
//               style: {
//                 backgroundColor : colortext,
//               }
//             })),
//           )

          // Show success message
//           miro.showNotification(selectedWidgets)
//           console.log(selectedWidgets[0].style.backgroundColor)
//         },
//       },
//     },
//   })
