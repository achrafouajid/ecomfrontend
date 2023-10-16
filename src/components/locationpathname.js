{
  `${
    location.pathname == "/"
      ? "product/:id"
      : location.patchname == "product/:id"
      ? "product/:id"
      : ":id"
  }`;
}
