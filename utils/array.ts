// generate array with sequence numbers
export function sequence(to: number): number[];
export function sequence(from: number, to: number): number[];
export function sequence(from: number, to: number, step: number): number[];
export function sequence(...args: number[]): number[] {
  const from = args.length > 1 ? args[0] : 0;
  const to = args.length > 1 ? args[1] : args[0];
  const step = args[2] ?? 1;

  const list = [];
  for (let i = from; i < to; i += step) list.push(i);
  return list;
}
