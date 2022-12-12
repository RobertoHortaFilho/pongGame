const setShortcuts = (p, { up, down }) => {
  return window.addEventListener('keydown', ({ key }) => {
    switch (key) {
      case up:
        p.up()
        break;
      case down:
        p.down()
        break;
      default:
        break;
    }
  })
}

export default setShortcuts;