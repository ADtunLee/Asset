$(document).ready(function() {
  // Filter switch button
  $('#filter__switch-type').bootstrapToggle('on');
  $("#filter__switch-type").change(function () {
    var $target = $(this),
      filterType = $("#filter-type")[0];
    filtersProject = $("#filters-project");
    filtersProperties = $("#filters-properties");

    if ($target.prop("checked")) {
      filterType.innerHTML = $('#filterType').find('.toggle-on')[0].innerHTML;
      filtersProject.addClass('show');
      filtersProperties.removeClass('show');
    } else {
      filterType.innerHTML = $('#filterType').find('.toggle-off')[0].innerHTML;
      filtersProject.removeClass('show');
      filtersProperties.addClass('show');
    }
  });
  // Trigger for dropdown menu
  var options = [];
  $('#filterMore .dropdown-menu select').on('click', function (event) {
    return false;
  });
  $('.dropdown-menu .form-check-label').on('click', function (event) {
    var $target = $(event.currentTarget),
      $inp = $($target[0].control);
    $inp.prop('checked', !$inp.is(":checked"))
    return false;
  });

  // $(".bootstrap-tagsinput span[data-role='remove']").on('click', function (event) {
  //   return false;
  // });
});