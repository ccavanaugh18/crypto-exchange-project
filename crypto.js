document.addEventListener('DOMContentLoaded', function() {
	// Handles scrolling to target section
	function scrollToSection(event) {
	  event.preventDefault();
  
	  // Get target section element based on the link's href
	  var targetSectionId = this.getAttribute('href').substring(1);
	  var targetSection = document.getElementById(targetSectionId);
  
	  // Scroll to the target section with smooth behavior
	  targetSection.scrollIntoView({ behavior: 'smooth' });
	}
  
	// Find "Start Trading" button
	var ctaButton = document.querySelector('.cta');
  
	// Start Trading button click listener
	ctaButton.addEventListener('click', scrollToSection);
  
	// Find navigation links
	var navLinks = document.querySelectorAll('nav ul li a');
  
	// Navigation click listener
	navLinks.forEach(function(link) {
	  link.addEventListener('click', scrollToSection);
	});
  });

// API for preview coins
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
	"async": true,
	"scrossDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
	"method": "GET",
	"headers": {}
}
$.ajax(settings).done(function (response){
	btc.innerHTML = response.bitcoin.usd;
	eth.innerHTML = response.ethereum.usd;
	doge.innerHTML = response.dogecoin.usd;
});
  