export function useNovaTheme() {
  const theme = useTheme()

  const isDark = computed(() => theme.global.current.value.dark)

  function toggleTheme() {
    theme.global.name.value = isDark.value ? 'novaLight' : 'novaDark'
  }

  function setDark(value: boolean) {
    theme.global.name.value = value ? 'novaDark' : 'novaLight'
  }

  return { isDark, toggleTheme, setDark }
}
