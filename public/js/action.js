document.querySelectorAll('.action-tab .Polaris-Button--pressable').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('.action-tab');
    const closestPopover = container?.querySelector('.Polaris-Popover__PopoverOverlay');
    if (closestPopover) {
      const isOpen = closestPopover.classList.contains('Polaris-Popover__PopoverOverlay--open');

      document.querySelectorAll('.action-tab .Polaris-Popover__PopoverOverlay').forEach(popover => {
        popover.classList.remove('Polaris-Popover__PopoverOverlay--open');
      });
      if (!isOpen) {
        closestPopover.classList.add('Polaris-Popover__PopoverOverlay--open');
      }
    }
  });
});