export function NumbersOnly(e) {
  //on key down
  const allowedKeys = [
    'Backspace', 'Delete', 'Tab', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];
  if (e.ctrlKey || e.metaKey) {
    return;
  }
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}
 
export function CleanNonNumbers(e) {
  //on input
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
}
 
export function NumbersOnlyWDot(e) {
  //on key down
  const allowedKeys = [
    'Backspace', 'Delete', 'Tab', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];
  if (e.ctrlKey || e.metaKey) {
    return;
  }
  if (e.key === '.' && e.target.value.includes('.')) {
    e.preventDefault();
    return;
  }
 
  if (!/[0-9.]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}
 
export function CleanNonNumbersWDot(e) {
  //on input
  let value = e.target.value.replace(/[^0-9.]/g, '');
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('');
  }
  e.target.value = value;
}
 
export function TextOnly(e) {
  //on key down
  const allowedKeys = [
    'Backspace', 'Delete', 'Tab', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End', ' '
  ];
  if (e.ctrlKey || e.metaKey) {
    return;
  }
  if (!/[a-zA-Z]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}
 
export function CleanNonText(e) {
  //on input
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
}
 
export function TextOnlyNoSpaces(e) {
  //on key down
  const allowedKeys = [
    'Backspace', 'Delete', 'Tab', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];
  if (e.ctrlKey || e.metaKey) {
    return;
  }
  if (!/[a-zA-Z]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}
 
export function CleanSpaces(e) {
  // on input
  e.target.value = e.target.value.replace(/\s+/g, '');
}
 
export function ToUpperCase(e) {
  // on input
  e.target.value = e.target.value.toUpperCase();
}
