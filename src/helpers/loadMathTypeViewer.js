const loadMathTypeViewer = () => {
  const script = document.createElement("script");

  script.setAttribute("async", true);
  script.setAttribute(
    "src",
    "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image"
  );
  document.body.appendChild(script);
};

export default loadMathTypeViewer;
