export function randomViewportPosition(
  elWidth = 100,
  elHeight = 40,
  margin = 20,
) {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );
  const maxLeft = Math.max(0, vw - elWidth - margin);
  const maxTop = Math.max(0, vh - elHeight - margin);
  const left = Math.floor(Math.random() * (maxLeft + 1)) + margin / 2;
  const top = Math.floor(Math.random() * (maxTop + 1)) + margin / 2;
  return { left, top };
}
