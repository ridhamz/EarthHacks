 <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src='images/logo.png' />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link btn btn-primary btn-sm mx-2" style="color:#fff !important" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link btn btn-primary btn-sm" style="color:#fff !important" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                              <li class="nav-item">
                                    <a class="nav-link btn btn-primary btn-sm" style="color:#fff !important" href="{{ url('/') }}">Home</a>
                                </li>
                             <li class="nav-item">
                                    <a class="nav-link btn btn-primary btn-sm mx-2" style="color:#fff !important" href="{{ url('/home') }}">DashBoard</a>
                                </li>
                                @if(auth()->user()->Addmin == false )
                                 <li class="nav-item">
                                    <a class="nav-link btn btn-primary btn-sm"
                                    style="color:#fff !important"
                                    href="{{ url('/UserProfile') }}">Profile</a>
                                </li>
                                @endif
                            <li class="nav-item">
                                    <a class="nav-link btn btn-danger btn-sm mx-2" style="color:#fff !important" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
