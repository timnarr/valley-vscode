<!doctype html>
<html>

  <head>
    <title>HTML in PHP || PHP in HTML</title>
  </head>

  <body>
    <?php echo '<p>Hello, World!</p>'; ?>

    <!-- Example from https://www.php.net/manual/en/language.basic-syntax.phpmode.php -->
    <div class="containter" id="containerId">
      <p>This is going to be ignored by PHP and displayed by the browser.</p>
      <?php echo 'While this is going to be parsed.'; ?>
      <p>This will also be ignored by PHP and displayed by the browser.</p>
    </div>

    <?php if ($expression == true): ?>
    This will show if the expression is true.
    <?php else: ?>
    Otherwise this will show.
    <?php endif; ?>
  </body>

</html>
