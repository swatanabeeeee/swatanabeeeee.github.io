miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'sample2',
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
          await miro.board.widgets.update(
            if(count%3==0){
              selectedWidgets.map((widget) => ({
                  backgroundColor : "#f24726",
              }))
            }
            if(count%3==1){
                selectedWidgets.map((widget) => ({
                    backgroundColor : "#2d9bf0",
                }))
              }
            if(count%3==2){
                selectedWidgets.map((widget) => ({
                    backgroundColor : "#8fd14f",
                }))
              }
          
          
          
          
//             selectedWidgets.map((widget) => ({
//                 backgroundColor : "#f24726",
//             })),
          )
          
                  
//           await miro.board.widgets.create(
//             selectedWidgets.map((widget) => ({
//               type: 'shape',
//               text: "おめでとうございます",
//               x: widget.x,
//               y: widget.y,
//               width: 500,
//               height: 500,
//               style: {
//                 backgroundColor : "#f24726",
//               }
//             })),
//           )

          // Show success message
          miro.showNotification('NICE!!')
        },
      },
    },
  })
})
