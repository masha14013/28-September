function bonusTime(salary, bonus) {
  let check = bonus ? salary * 10 : salary;
  return `\u00A3${check}`;
}