<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{{ asset('gamesuit/main.css') }}">
  <title>Latihan DOM</title>
  <style ></style>
</head>
<body>
  <h1>Suwit Jawa v2.0</h1>

  <div class="container">
      <div class="area-komputer">
          <img src="{{ asset('gamesuit/img/gajah.png') }}" class="img-komputer">
      </div>
      <div class="info"></div>
      <div class="area-player">
          <ul>
              <li>
                  <img src="{{ asset('gamesuit/img/gajah.png') }}" class="gajah">
              </li>
              <li>
                  <img src="{{ asset('gamesuit/img/orang.png') }}" class="orang">
              </li>
              <li>
                  <img src="{{ asset('gamesuit/img/semut.png') }}" class="semut">
              </li>
          </ul>
      </div>
  </div>

<script src="{{ asset('gamesuit/script.js') }}"></script>
</body>
</html>
