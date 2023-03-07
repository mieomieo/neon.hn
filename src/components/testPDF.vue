<!DOCTYPE html>
<html>
  <head>
    <title>Export SVG to vector file</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.1/svg.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Mynerve&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <button onClick="Handle()">Click me</button>
    <script>
      function Handle() {
        var draw = SVG().size(100, 100);
        var text = draw
          .text("Hello, world!")
          .font({
            family: "Mynerve",
            size: 12,
          })
          .move(10, 10);

        // Xuất SVG đến file vector có thể mở trên AI
        var svgString = draw.svg();
        var blob = new Blob([svgString], { type: "image/svg+xml" });
        saveAs(blob, "example.svg");
      }
    </script>
  </body>
</html>
