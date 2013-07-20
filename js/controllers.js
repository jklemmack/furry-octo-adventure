function PhoneListCtrl($scope) {
  $.get('data.js', function(x) {
					$scope.phones = JSON.parse(x);
				})
				.fail(function(e) {
					alert('fail');
				});
	
//	$scope.phones = [
//    {"name": "Nexus S",
//     "snippet": "Fast just got faster with Nexus S."},
//    {"name": "Motorola XOOM™ with Wi-Fi",
//     "snippet": "The Next, Next Generation tablet."},
//    {"name": "MOTOROLA XOOM™",
//     "snippet": "The Next, Next Generation tablet."}
//  ];
}