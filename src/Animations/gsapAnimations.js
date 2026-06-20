import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function animateIntro(introEl, stripeEl, starsEl, onComplete) {
  const tl = gsap.timeline({ onComplete })

  tl.from(introEl, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  })

  .to(stripeEl, {
    scaleY: 0,
    duration: 0.5,
    ease: "power2.inOut"
  })

  .to(starsEl, {
    top: "15.5rem",
    left: "17.3rem",
    scale: 0.16,
    duration: 1.4,
    ease: "power3.inOut"
  }, "-=0.2")

  .to(introEl, {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut"
  }, "-=0.5")

  return tl
}

export function animateHero(badgeEl, headingEl, subEl) {
  const tl = gsap.timeline({ delay: 1.9 })

  tl.from(badgeEl, {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out"
  })

  .from(headingEl, {
    opacity: 0,
    y: 80,
    duration: 0.9,
    ease: "power3.out"
  }, "-=0.3")

  .from(subEl, {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: "power2.out"
  }, "-=0.4")

  return tl
}

export function animateOnScroll(selector, trigger) {
  gsap.from(selector, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: trigger,
      start: "top 95%",
      end: "top 30%",
      toggleActions: "play none none reverse",
    }
  })
}

export function animateStickyScroll(sectionEl, slideEls) {
  slideEls.forEach((slide) => {
    if (!slide) return

    gsap.to(slide, {
      opacity: 1,
      scrollTrigger: {
        trigger: slide,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    })
  })
}