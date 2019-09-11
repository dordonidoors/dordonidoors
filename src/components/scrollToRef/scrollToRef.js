/**
 * Scrolls to the given reference
 * @param {object} ref   The reference to the dom element
 */
export const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
