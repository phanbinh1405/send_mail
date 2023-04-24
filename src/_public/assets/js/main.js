function checkType() {
  $(".contact-form__optionitem").each(function () {
    if ($(this).html() === $("#recruitment-type").val()) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

function showFileName(){
  var fileName = $(this)[0].files[0].name

  if($(this).parent().find('.contact-form__filename').length <= 0) {
    var html = `<p class="contact-form__filename">${fileName}</p>`
    $(this).parent().append(html)
  } else {
    $('.contact-form__filename').text(fileName)
  }
  $(this).next().text('ファイル指定済み')
}

$(function () {
	$("#recruitment-type").click(function () {
		$(this).next().next().toggleClass("active");
	});

	$(".contact-form__optionitem").click(function () {
		var value = $(this).html();
		$(this).parent().removeClass("active");
		$("#recruitment-type").val(value);
    checkType()
	});

  $("#cover-letter").change(function(){
    showFileName.call(this)
  })

  $("#avatar").change(function(){
    showFileName.call(this)
  })

  window.onclick = function(event) {
    if (event.target !== $('#recruitment-type')[0]) {
      $('.contact-form__option').removeClass('active')
    }
  }
});
