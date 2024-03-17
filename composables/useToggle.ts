export const useToggle = (toggled: boolean) => {
  const state = ref(toggled);

  const setState = (_: MouseEvent): void => {
    state.value = !state.value;
  };

  return [readonly(state), setState];
};
