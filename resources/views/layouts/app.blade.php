<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
crossorigin="anonymous"></script>
  <link rel="stylesheet" href={{asset("vendors/bootstrap/bootstrap.min.css")}}>
  <link rel="stylesheet" href={{asset("vendors/fontawesome/css/all.min.css")}}>
  <link rel="stylesheet" href={{asset("vendors/themify-icons/themify-icons.css")}}>
  <link rel="stylesheet" href={{asset("vendors/linericon/style.css")}}>
  <link rel="stylesheet" href={{asset("vendors/owl-carousel/owl.theme.default.min.css")}}>
  <link rel="stylesheet" href={{asset("vendors/owl-carousel/owl.carousel.min.css")}}>
  <link rel="stylesheet" href={{asset("css/magnific-popup.css")}}>
  <link rel="stylesheet" href={{asset("vendors/flat-icon/font/flaticon.css")}}>
  <link rel="stylesheet" href={{asset("css/style.css")}}>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">


    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <style>


    .b_frame {
        -webkit-box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);
        box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);


        float: left;
        width: 400px;
        height: 530px;


        margin-right: 80;

        border-radius: 40px;
    }
    .ChatText{

    margin-right: 300px;
  }


</style>
</head>
<body>
    <div id="app">
      @include('includes.Navbar')
        <main class="py-4">
            @yield('content')
        </main>
    </div>
      <script src="vendors/jquery/jquery-3.2.1.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/Magnific-Popup/jquery.magnific-popup.min.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="js/countdown.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
