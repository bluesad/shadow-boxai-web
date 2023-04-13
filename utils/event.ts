export function stopPropagation<T = Element, E = Event>(
  fn: (event: React.SyntheticEvent<T, E>) => void,
) {
  return (event: React.SyntheticEvent<T, E>) => {
    event.stopPropagation();
    fn(event);
  };
}
