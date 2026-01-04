// Temporary GSAP disable utility
// Set window.__DISABLE_GSAP = true to disable animations across the app.
// This file stubs common gsap methods and ScrollTrigger to safe no-ops.

if (typeof window !== 'undefined') {
  window.__DISABLE_GSAP = true; // toggle this to false to re-enable

  if (window.__DISABLE_GSAP) {
    // Dynamically import and stub to avoid bundling issues
    import('gsap').then((gsapModule) => {
      try {
        // replace common methods with no-op functions
        const noOp = () => {};
        gsapModule.to = noOp;
        gsapModule.fromTo = noOp;
        gsapModule.from = noOp;
        gsapModule.set = noOp;
        gsapModule.timeline = () => ({
          to: noOp,
          from: noOp,
          fromTo: noOp,
          kill: noOp,
        });
        gsapModule.registerPlugin = noOp;
        if (!gsapModule.utils) gsapModule.utils = {};
        gsapModule.utils.toArray = (items) => Array.from(items || []);
      } catch (e) {
        // ignore
      }
    }).catch(() => {});

    import('gsap/ScrollTrigger').then((ScrollTrigger) => {
      try {
        // ensure ScrollTrigger has safe fallbacks used by components
        if (!ScrollTrigger.getAll) ScrollTrigger.getAll = () => [];
        if (!ScrollTrigger.kill) ScrollTrigger.kill = () => {};
      } catch (e) {}
    }).catch(() => {});
  }
}
