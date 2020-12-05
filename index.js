$(function(){

    // Listen for form submition
    $('#js-shopping-list-form').submit(function(event) {

      // Prevent default form submition
      event.preventDefault();
  
      // Get text value for the new item
      const listItem = $('#shopping-list-entry').val();
  
      // Clear text entry for user
      $('.js-shopping-list-entry').val('');
  
      // Add new item to shopping list
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  
    // Listen for delete click events
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  
      // Remove deleted item
      $(this).closest('li').remove();
    });

      // Listen for check click events
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

    // Toggle checked events
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});