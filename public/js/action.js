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
// checkbox checked functionality
const theadCheckbox = document.querySelector('.ddr-main-dashboard .main-table-container .Polaris-IndexTable__TableHeading--first #\\:R9ckq6\\:');
const tbodyCheckboxes = document.querySelectorAll('.ddr-main-dashboard .main-table-container tbody .Polaris-Checkbox__Input');

theadCheckbox.addEventListener('change', function () {
  const isChecked = this.checked;
  tbodyCheckboxes.forEach(checkbox => {
    checkbox.checked = isChecked;
    
    checkbox.dispatchEvent(new Event('change'));
  });
});

