document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.reveal');
const reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

function showRevealTarget(revealTarget) {
  revealTarget.classList.add('is-visible');
}

if (!('IntersectionObserver' in window) || reducedMotionPreference.matches) {
  revealTargets.forEach(showRevealTarget);
} else {
  const revealObserver = new IntersectionObserver(
    (intersectionEntries) => {
      intersectionEntries
        .filter(({ isIntersecting }) => isIntersecting)
        .forEach(({ target }) => {
          showRevealTarget(target);
          revealObserver.unobserve(target);
        });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    }
  );

  revealTargets.forEach((revealTarget) => revealObserver.observe(revealTarget));
}
