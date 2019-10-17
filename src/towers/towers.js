'use strict';
$(document).ready(function() {
  //$block arguments :data-color and size
  let $block = null;
  
  $('[data-row]').click(function() {
    
    if ($block) {
      let blockSize = $block.attr('size')
      let isBlockStack = $(this).hasClass('block-stack')
      let topBlockSize = $(this).children().first().attr('size') || 1000
      if(blockSize < topBlockSize || isBlockStack){
        $(this).prepend($block);
      } else {
        $('.block-stack').prepend($block);
      }
      
      $block = null;
    } else {
      $block = $(this).children().first().detach();
    }
  })


  $('.block-stack').click(function(){
    if ($(this).children().length == 0){
      $(this).addClass('empty');
    } else {
      $(this).removeClass('empty');
    }
  })


})
