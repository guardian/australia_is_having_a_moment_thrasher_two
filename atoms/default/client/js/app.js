import share from 'shared/js/share'

var totalDisplay = document.getElementById('total');

var socialista = share("Information can save lives. Help Guardian Australia reach 150,000 supporters ", "https://support.theguardian.com/contribute", "https://interactive.guim.co.uk/embed/aus/2020/social/guardian_australia.png", "https://interactive.guim.co.uk/embed/aus/2020/social/guardian_australia.png", "#supporttheguardian", "Guardian Australia supporters are doing something powerful. I support the Guardian because I believe their independent journalism is vital, and should be open and free to all. Join me. With your support, we can do more.");

const platforms = document.querySelectorAll('.interactive-share');

[...platforms].forEach(platform => {

    var network = platform.getAttribute('data-network');

    platform.addEventListener('click',() => socialista(network));

});


const init = x => {

	fetch(`https://support.theguardian.com/supporters-ticker.json?t=${new Date().getTime()}`)
		.then(response => response.json())
		.then((data) => {
			const total = data.total;

            totalDisplay.textContent = total.toLocaleString();
		})
}

let options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
}

let boom = new IntersectionObserver(function(entries, exit) {

	entries.forEach(entry => {

	    if (entry.isIntersecting) {

	      init()

	      exit.unobserve(entry.target);

	    }

	});

}, options);

const moments = document.querySelectorAll('.australian_moment');

moments.forEach(img => {

	boom.observe(img);

});




