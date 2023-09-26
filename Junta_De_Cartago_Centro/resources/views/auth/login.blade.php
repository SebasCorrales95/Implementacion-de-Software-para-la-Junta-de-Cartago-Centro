<!DOCTYPE html>
<html lang="en">

<head>

    @include('layouts.shared/title-meta', ['title' => 'Log In'])
    @include('layouts.shared/head-css', ['mode' => $mode ?? '', 'demo' => $demo ?? ''])
    @vite(['resources/scss/icons.scss', 'node_modules/jquery/dist/jquery.js'])
</head>

<body class="bg-login loading authentication-bg-pattern">

    <div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4">
                    <div class="card bg-pattern">

                        <div class="card-body p-4">
                            
                            <div class="text-center  m-auto">
                                <div class="auth-brand">
                                    </strong><h1>Bienvenido de Vuelta !</h1></strong>
                                    
                                </div>

                            </div>


                            @if (session('error'))
                                <div class="alert alert-danger">{{ session('error') }}</div>
                                <br>
                            @endif
                            @if (session('success'))
                                <div class=" alert alert-success">{{ session('success') }}
                                </div>
                                <br>
                            @endif

                            @if (sizeof($errors) > 0)
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li class="text-danger">{{ $error }}</li>
                                    @endforeach
                                </ul>
                            @endif

                            <form method="POST" action="{{ route('login') }}">
                                @csrf

                                <div class="mb-3">
                                    <label for="cedula" class="form-label">Cédula</label>
                                    <input class="form-control" type="text" name="cedula" id="cedula" required="" placeholder="Ingrese su número de cédula">
                                </div>

                                <div class="mb-3">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <div class="input-group input-group-merge">
                                        <input type="password" name="password" id="password" class="form-control" placeholder="Ingrese su contraseña" value="password">
                                        <div class="input-group-text" data-password="true">
                                            <span class="password-eye"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" name="remember" class="form-check-input btn-dark" id="checkbox-signin" checked>
                                        <label class="form-check-label" for="checkbox-signin">Recuerdame</label>
                                    </div>
                                </div>

                                <div class="text-center d-grid">
                                    <button style="background-color: #CCCCCC;" class="btn btn-outline-dark" type="submit"> Iniciar Sesión</button>
                                </div>

                            </form>
                        </div> <!-- end card-body -->
                    </div><!-- end card -->   
                </div> <!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->   
    </div><!-- end page -->
    

    <footer style="background-color: #CCCCCC;" class="footer footer-alt">
        1986 -
        <script>
            document.write(new Date().getFullYear())
        </script> &copy; Junta de Educación de Cartago Centro
    @vite(['resources/js/app.js'])
    @include('layouts.shared/footer-script')

</body>

</html>
