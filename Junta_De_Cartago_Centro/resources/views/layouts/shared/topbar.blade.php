<!-- Topbar Start -->
<div class="navbar-custom">
    <div class="topbar">
        <div class="topbar-menu d-flex align-items-center gap-1">

            <!-- LOGO -->
            <div class="logo-box">
                <a href="{{ route('any', 'index') }}" class="logo-light">
                    <img src="{{ Vite::asset('resources/images/logo-light.png') }}" alt="logo" class="logo-lg">
                    <img src="{{ Vite::asset('resources/images/logo-sm.png') }}" alt="small logo" class="logo-sm">
                </a>
                <a href="{{ route('any', 'index') }}" class="logo-dark">
                    <img src="{{ Vite::asset('resources/images/logo-dark.png') }}" alt="dark logo" class="logo-lg">
                    <img src="{{ Vite::asset('resources/images/logo-sm.png') }}" alt="small logo" class="logo-sm">
                </a>
            </div>

            <button class="btn btn-dark">
                <a class="bg-navbar-items" style="font-size: 12" font color="#9900FF"; href="{{route('forms')}}">Inicio</a>
            </button>

            <div >
                <a class="bg-navbar-items" href="{{route('forms')}}" role="button">
                    Carga de Documentos
                </a>
            </div>

            <div >
                <a class="bg-navbar-items" href="{{route('busqueda')}}" role="button" >
                    Busqueda de Documentos  
                </a> 
            </div>

             <div>
                <a class="bg-navbar-items" href="{{route('file-manager')}}" role="button" >
                    Control de  archivos
                </a>  
            </div>
        </div>




        {{-- Right part of topnav --}}
        <ul class="topbar-menu d-flex align-items-center">

            <!-- User Dropdown -->
            <li class="dropdown">
                <a class="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">

                    <!-- User Image-->
                    <img src="{{ Vite::asset('resources/images/users/user-1.jpg') }}" alt="user-image" class="rounded-circle">

                    <!-- User Name-->
                    <span class="ms-1 d-none d-md-inline-block">
                        {{ auth()->user()->name }} <i class="mdi mdi-chevron-down"></i>
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-end profile-dropdown " data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 72px);">
                    <!-- item-->
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Bienvenido !</h6>
                    </div>

                    <!-- item-->
                    <a href="#theme-settings-offcanvas" class="dropdown-item notify-item" data-bs-toggle="offcanvas">
                    <i class="fe-settings "></i>
                    <span>Configuración</span>
                    </a>

                    <!-- item-->
                    <form method="POST" action="{{ route('logout') }}" style="margin-block-end: 0px;">
                        @csrf
                        <a href="javascript:void(0);" class="dropdown-item notify-item" onclick="event.preventDefault(); this.closest('form').submit();">
                            <i class="fe-log-out"></i>
                            <span>Cerrar Sesión</span>
                        </a>
                    </form>

                </div>
            </li>
        </ul>

    </div>

    <div class="container-fluid">

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">

            <li>
                <!-- Mobile menu toggle (Horizontal Layout)-->
                <a class="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </li>

        </ul>
        <div class="clearfix"></div>
    </div>
</div>
<!-- end Topbar -->
