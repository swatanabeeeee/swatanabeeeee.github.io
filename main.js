miro.onReady(() => {
  //時刻取得
  getWidget(new Date().getHours())
})

async function getWidget(hour) {
  console.log(hour)
  //0:背景　1:image
  console.log(miro.board)
  let objects = await miro.board.widgets.get({id: '3458764516401601937'})
  let images = await miro.board.widgets.get({id: '3458764516442959651'})

  console.log(objects[0].style.backgroundColor)

  //時間によって変更
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
    objects.map((widget) => ({
      id : widget.id,
      style: {
        backgroundColor : colortext,
      }
    })),
  )


  //画像を動かしてみる
  miro.board.widgets.update(
    images.map((widget) => ({
      id : widget.id,
      x : widget.x + 100,
    })),
  )

}



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
