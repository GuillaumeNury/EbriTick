const LONG_PRESS_DURATION = 200;

/**
 *
 * @param {HTMLElement} node
 */
export function longpress(node) {
  let pressed = false;
  let longpressSent = false;
  let intervalId;

  function handleMouseDown() {
    if (pressed) {
      return;
    }

    pressed = true;
    longpressSent = false;

    intervalId = setInterval(() => {
      longpressSent = true;
      node.dispatchEvent(new CustomEvent('longpress'));
    }, LONG_PRESS_DURATION);
  }

  /**
   *
   * @param {MouseEvent} event
   */
  function handleMouseUp(event) {
    if (!pressed) {
      return;
    }

    event.preventDefault();

    pressed = false;
    clearInterval(intervalId);

    if (!longpressSent) {
      node.dispatchEvent(new CustomEvent('shortpress'));
    }
  }

  node.addEventListener('mousedown', handleMouseDown);
  node.addEventListener('touchstart', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchend', handleMouseUp);

  return {
    destroy() {
      clearInterval(intervalId);
      node.removeEventListener('mousedown', handleMouseDown);
      node.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    },
  };
}
