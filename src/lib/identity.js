export function generateRegistration() {
  const values = new Uint32Array(1);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(values);
    return `264-${String(values[0] % 1000000).padStart(6, '0')}`;
  }
  return `264-${String(Math.floor(Math.random() * 1000000)).padStart(6, '0')}`;
}

export function sanitizeName(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ').slice(0, 32);
}
