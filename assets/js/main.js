(function ($) {
	// $( document ).ready(function() {
	//   console.log( "ready!" );
	// });
	$(function () {
		console.log('ready');
		$('#register-form').validate({
			rules: {
				fullname: "required",
				username: {
					required: true,
					// minlength: 3,
				},
				password: {
					required: true,
					minlength: 5,
				},
				confirm_password: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				email: {
					required: true,
					email: true,
				},
				sdt: {
					required: true,
					minlength: 10,
					// phoneUS: true,
				},
				company: "required"
			},
			messages: {
				fullname: "Vui lòng nhập tên đầy dủ của bạn",
				username: {
					required: "Vui lòng nhập người giới thiệu",
					minlength: "Your username must consist of at least 2 characters"
				},
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				confirm_password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long",
					equalTo: "Please enter the same password as above"
				},
				email: "Vui lòng đăng nhập Email",
				sdt: {
					required: "vui lòng đăng nhập số điện thoại",
				},
				company: "Vui lòng điền tên doanh nghiệp"
			}
		});
	});
	$(function () {
		console.log('ready');
		$('#register-trial-form').validate({
			rules: {
				fullname: "required",
				username: {
					required: true,
					// minlength: 3,
				},
				password: {
					required: true,
					minlength: 5,
				},
				confirm_password: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				email: {
					required: true,
					email: true,
				},
				sdt: {
					required: true,
					minlength: 10,
					// phoneUS: true,
				},
				company: "required"
			},
			messages: {
				fullname: "Vui lòng nhập tên đầy dủ của bạn",
				username: {
					required: "Vui lòng nhập người giới thiệu",
					minlength: "Your username must consist of at least 2 characters"
				},
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				confirm_password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long",
					equalTo: "Please enter the same password as above"
				},
				email: "Vui lòng đăng nhập Email",
				sdt: {
					required: "vui lòng đăng nhập số điện thoại",
				},
				company: "Vui lòng điền tên doanh nghiệp"
			}
		});
	});

	$(window).on('load', function () {
		console.log("window loaded");
	});
})(jQuery);

