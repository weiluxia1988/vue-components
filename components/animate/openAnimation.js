import velocity from 'velocity-animate'
const defaultDuration = 500;
function animate (node, show, duration, transitionName, done) {
  let ok
  
  function complete () {
    if (!ok) {
      ok = true;
      done && done()
    }
  }

  // Fix safari flash bug
  node.style.display = show ? 'block' : 'none';
  console.log(duration)
  velocity(node, transitionName, {
    duration: duration,
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
  enter (node, duration = defaultDuration, transitionName, done) {
    return animate(node, false, duration, transitionName, done);
  },
  leave (node, duration = defaultDuration, transitionName, done) {
    return animate(node, true, duration, transitionName, done);
  }
}

export default animation;
