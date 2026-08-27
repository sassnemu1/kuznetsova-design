/**
 * Русское склонение числительных.
 * plural(21, "проект", "проекта", "проектов") → "проект"
 * plural(3,  ...) → "проекта"   ·   plural(11, ...) → "проектов"
 */
export function plural(n, one, few, many) {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (last > 1 && last < 5) return few;
  if (last === 1) return one;
  return many;
}

/** «21 проект» — число вместе с правильной формой слова. */
export function pluralize(n, one, few, many) {
  return `${n} ${plural(n, one, few, many)}`;
}
