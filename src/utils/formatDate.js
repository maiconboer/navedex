
export function formatDateBR(date) {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
}

export function formatDateUS(date) {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('fr-ca', {timeZone: 'UTC'});
}