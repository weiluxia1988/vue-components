import velocity from 'velocity-animate'

function animate (node, show, transitionName, done) {
  let ok

  function complete () {
    if (!ok) {
      ok = true;
      done && done()
    }
  }

  // Fix safari flash bug
  node.style.display = show ? 'block' : 'none'
  velocity(node, transitionName, {
    duration: 1000,
    complete: complete,
    easing: 'easeInOutQuad'
  });
  return {
    stop () {
      velocity(node, 'finish');
      complete();
    }
  }
}

const animation = {
  enter (node, transitionName, done) {
    return animate(node, false, transitionName, done)
  },
  leave (node, transitionName, done) {
    return animate(node, true, transitionName, done)
  }
}

export default animation;
