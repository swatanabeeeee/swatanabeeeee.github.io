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
          // let stickers = selectedWidgets.filter((widget) => widget.type === 'STICKER')

          // Delete selected stickers
          await miro.board.widgets.deleteById(selectedWidgets.map((widget) => widget.id))

          // Create shapes from selected stickers
          await miro.board.widgets.create(
            selectedWidgets.map((widget) => ({
              type: 'shape',
              text: "aaa",
              x: widget.x,
              y: widget.y,
              width: 100,
              height: 100,
            })),
          )

          // Show success message
          miro.showNotification('Stickers has been converted')
        },
      },
    },
  })
})