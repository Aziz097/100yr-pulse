import { useNuxtApp } from '#app'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useGSAP() {
  const nuxtApp = useNuxtApp()
  
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
  })
  
  return {
    gsap,
    ScrollTrigger,
    
    animate(element: gsap.Targetable, vars: gsap.TweenVars) {
      return gsap.to(element, vars)
    },
    
    staggerAnimate(
      elements: HTMLElement[], 
      vars: gsap.TweenVars, 
      stagger = 0.1
    ) {
      return gsap.fromTo(elements, 
        { ...vars, opacity: 0 },
        { 
          ...vars, 
          opacity: 1, 
          stagger,
          ease: vars.ease || 'power2.out'
        }
      )
    },
    
    scrollTrigger(
      element: gsap.Targetable, 
      vars: ScrollTrigger.Vars
    ) {
      return ScrollTrigger.create({
        trigger: element,
        ...vars
      })
    },
    
    pin(element: gsap.Targetable, vars: ScrollTrigger.PinVars = {}) {
      return ScrollTrigger.create({
        trigger: element,
        pin: true,
        ...vars
      })
    }
  }
}
