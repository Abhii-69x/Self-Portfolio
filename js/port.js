document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                });
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        document.querySelector('.header').classList.toggle('sticky', top > 100);
    };
});
