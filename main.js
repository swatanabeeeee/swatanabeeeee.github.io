miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'sample8',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
          // Get selected widgets
          let selectedWidgets = await miro.board.selection.get()

          // Filter stickers from selected widgets
          // let treasure = selectedWidgets.filter((widget) => widget.id === '3074457366196671495')

          // Delete selected stickers
          await miro.board.widgets.deleteById(selectedWidgets.map((widget) => widget.id))

          // Create shapes from selected stickers
          let count = 0
          count += 1
          let colortext = ""
          if(count%3==0){
            colortext = "#f24726"
          }
          else if(count%3==1){
            colortext = "#2d9bf0"
          }
          else if(count%3==2){
            colortext = "#8fd14f"
          }
          
//           await selectedWidgets.update(
//             selectedWidgets.map((widget) => ({
//               style: {
//                   backgroundColor : colortext,
//               }
//             }))
//           )
          
          
          
          
//             selectedWidgets.map((widget) => ({
//                 backgroundColor : "#f24726",
//             })),
          
          
                  
          await miro.board.widgets.create(
            selectedWidgets.map((widget) => ({
              type: 'shape',
              text: "おめでとうございます",
              x: widget.x,
              y: widget.y,
              width: 500,
              height: 500,
              style: {
                backgroundColor : colortext,
              }
            })),
          )

          // Show success message
          miro.showNotification('NICE!!')
        },
      },
    },
  })
})
