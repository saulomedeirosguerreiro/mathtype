export const parseMathML = (renderedNode) => {
  if (renderedNode) {
    window.com?.wiris?.js?.JsPluginViewer?.parseElement(renderedNode, true);
  }
};
