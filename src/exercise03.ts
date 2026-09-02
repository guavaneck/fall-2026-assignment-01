export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory
    .filter((a) => a[1] > 5)
    .map((a) => a[1] * a[2])
    .reduce((acc, x) => acc + x, 0);
}
