$(document).ready(function() {
    // Set default colors for each light
    $('#light-1-color').css('background-color', '#ffffff');
    $('#light-2-color').css('background-color', '#ffffff');
    $('#light-3-color').css('background-color', '#ffffff');
    
    // Handle light selection change
    $('#light-select').on('change', function() {
      // Get selected light ID
      var lightId = $(this).val();
      
      // Update color select value to match current light color
      var currentColor = $('#light-' + lightId + '-color').css('background-color');
      $('#color-select').val(rgbToHex(currentColor));
    });
    
    // Handle color select change
    $('#color-select').on('change', function() {
      // Get selected light ID
      var lightId = $('#light-select').val();
      
      // Update light color
      var newColor = $(this).val();
      $('#light-' + lightId + '-color').css('background-color', newColor);
    });
  });
  
  // Helper function to convert RGB color to hex
  function rgbToHex(rgbColor) {
    var match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) {
      return rgbColor;
    }
    return "#" + ("0" + parseInt(match[1],10).toString(16)).slice(-2) +
                 ("0" + parseInt(match[2],10).toString(16)).slice(-2) +
                 ("0" + parseInt(match[3],10).toString(16)).slice(-2);
  }
  