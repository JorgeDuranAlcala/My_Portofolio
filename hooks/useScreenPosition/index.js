import React from "react";

export function useScreenPosition({ linksRefs }) {
  const [linkActived, setLinkActived] = React.useState(null);
  const [changeBg, setChangeBg] = React.useState(false);
  const Window = typeof window === "undefined" ? null : window;
  const hooklog = (anything) => console.log("hook universe", anything);

  React.useEffect(() => {
    const onScroll = (e) => {
      const fromTop = Window?.scrollY;
      const greaterThanTwoHundred = fromTop > 200;
      setChangeBg(greaterThanTwoHundred);
    };

    Window.addEventListener("scroll", onScroll);

    return () => Window.removeEventListener("scroll", onScroll);
  }, [Window]);

  React.useEffect(() => {
    const onScroll = (e) => {
      linksRefs?.forEach((link) => {
        if (link) {
          const section = document.querySelector(link.hash);
          const fromTop = Window?.scrollY;

          const activeAnchorIf =
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop;
          if (activeAnchorIf) setLinkActived(link.id);
        }
      });
    };
    Window?.addEventListener("scroll", onScroll);
    return () => Window?.removeEventListener("scroll", onScroll);
  }, [Window, linksRefs]);

  return {
    linkActived,
    changeBg,
  };
}
