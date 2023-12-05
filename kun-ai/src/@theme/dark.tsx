export function light() {
  localStorage.theme = 'light';
  document.documentElement.dataset.theme = 'light';
  document.documentElement.classList.remove('dark');
}

export function dark() {
  localStorage.theme = 'dark';
  document.documentElement.dataset.theme = 'dark';
  document.documentElement.classList.add('dark');
}

export function clear() {
  localStorage.removeItem('theme');
  document.documentElement.dataset.theme = 'light';
  document.documentElement.classList.remove('dark');
}

export function isDark() {
  return (
    localStorage.theme === 'dark' ||
    document.documentElement.dataset.theme === 'dark'
  );
}

export function toggle() {
  if (
    localStorage.theme === 'dark' ||
    document.documentElement.dataset.theme === 'dark'
  ) {
    light();
  } else {
    dark();
  }
}

// we use toString to get the string value of the function in root.tsx
// @ts-ignore
export function activeTheme(defaultTheme) {
  const isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  if ((isDark || defaultTheme === 'dark') && defaultTheme !== 'light') {
    localStorage.theme = 'dark';
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.classList.add('dark');
  } else {
    localStorage.theme = 'light';
    document.documentElement.dataset.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
}
