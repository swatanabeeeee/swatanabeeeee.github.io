miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'treasure3',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
          // Get selected widgets
          let selectedWidgets = await miro.board.selection.get()

          // Filter stickers from selected widgets
          let treasure = selectedWidgets.filter((widget) => widget.id === '307445736619852566')
          if(treasure.id=='307445736619852566'){
            miro.showNotification('宝島のボードはこちら！\nhttps://miro.com/app/board/o9J_lo2orEo=/?moveToWidget=3074457366198822686&cot=14')
          }

          // Delete selected stickers
          // await miro.board.widgets.deleteById(selectedWidgets.map((widget) => widget.id))

          // Create shapes from selected stickers
          await miro.board.widgets.create(
            {
              type: 'text',
              text: "🎉",
              x: treasure.x,
              y: treasure.y,
              width: 100,
              height: 100,
            }
          )

            // selectedWidgets.map((widget) => ({
            //   type: 'shape',
            //   text: "aaa",
            //   x: widget.x,
            //   y: widget.y,
            //   width: 100,
            //   height: 100,
            // })),
          

          // Show success message
          // miro.showNotification('https://miro.com/app/board/o9J_lo2orEo=/?moveToWidget=3074457366198822686&cot=14')
        },
      },
    },
  })
})