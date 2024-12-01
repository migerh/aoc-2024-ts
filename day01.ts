import { Day, Solve } from "jsr:@mikehw/advent-of-code";

const parse = (input: string): [number[], number[]] => {
  const parsed = input.split(/\r?\n/).map((line) =>
    line
      .split(" ")
      .filter((s) => s.length > 0)
      .map((v) => parseInt(v, 10))
  );
  const first = parsed.map((line) => line[0]);
  const second = parsed.map((line) => line[1]);
  return [first, second];
};

const sorter = (a: number, b: number) => b - a;

const puzzle: Day = {
  year: 2024,
  day: 1,
  part1: (input: string): number => {
    const [first, second] = parse(input);
    first.sort(sorter);
    second.sort(sorter);

    return first.reduce(
      (sum, value, index) => sum + Math.abs(second[index] - value),
      0
    );
  },
  part2: (input: string): number => {
    const [first, second] = parse(input);

    return first.reduce(
      (sum, value) => second.filter((v) => v === value).length * value + sum,
      0
    );
  },
};

if (import.meta.main) {
  await Solve(puzzle);
}
