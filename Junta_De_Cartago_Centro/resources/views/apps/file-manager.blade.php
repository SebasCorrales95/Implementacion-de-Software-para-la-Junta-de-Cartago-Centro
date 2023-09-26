@extends('layouts.vertical', ["page_title"=> "File Manager"])

@section('content')
<!-- Start Content-->
<div class="container-fluid">

    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <h4 class="page-title">Control de Archivos</h4>
            </div>
        </div>
    </div>
    <!-- end page title -->

    <div class="row">

        <!-- Right Sidebar -->
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <!-- Left sidebar -->
                    <div class="inbox-leftbar">
                        <div class="mail-list mt-3">
                            <a href="#" class="list-group-item border-0"><i class="mdi mdi-folder-outline font-18 align-middle me-2"></i>Mis Archivos</a>
                            <a href="#" class="list-group-item border-0"><i class="mdi mdi-clock-outline font-18 align-middle me-2"></i>Reciente</a>
                            <a href="#" class="list-group-item border-0"><i class="mdi mdi-delete font-18 align-middle me-2"></i>Archivos Borrados</a>
                        </div>

                        

                    </div>
                    <!-- End Left sidebar -->

                    <div class="inbox-rightbar">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <form class="search-bar">
                                <div class="position-relative">
                                    <input type="text" class="form-control form-control-light" placeholder="Search files...">
                                    <span class="mdi mdi-magnify"></span>
                                </div>
                            </form>
                        </div>

                        <div class="mt-3">
                            <h5 class="mb-2">Acceso Rápido</h5>

                            <div class="row mx-n1 g-0">
                                <div class="col-xl-3 col-lg-6">
                                    <div class="card m-1 shadow-none border">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto pe-0">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title bg-light text-secondary rounded">
                                                            <i class="mdi mdi-folder-zip font-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <a href="javascript:void(0);" class="text-muted fw-bold">Adjudicaciones.zip</a>
                                                    <p class="mb-0 font-13">100.8 MB</p>
                                                </div>
                                            </div> <!-- end row -->
                                        </div> <!-- end .p-2-->
                                    </div> <!-- end col -->
                                </div> <!-- end col-->

                                <div class="col-xl-3 col-lg-6">
                                    <div class="card m-1 shadow-none border">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto pe-0">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title bg-light text-secondary rounded">
                                                            <i class="mdi mdi-folder font-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <a href="javascript:void(0);" class="text-muted fw-bold">Contratos</a>
                                                    <p class="mb-0 font-13">900.2 MB</p>
                                                </div>
                                            </div> <!-- end row -->
                                        </div> <!-- end .p-2-->
                                    </div> <!-- end col -->
                                </div> <!-- end col-->

                                <div class="col-xl-3 col-lg-6">
                                    <div class="card m-1 shadow-none border">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto pe-0">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title bg-soft-primary text-primary rounded">
                                                            <i class="mdi mdi-folder-zip font-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <a href="javascript:void(0);" class="text-muted fw-bold">Expedientes.zip</a>
                                                    <p class="mb-0 font-13">2.5 GB</p>
                                                </div>
                                            </div> <!-- end row -->
                                        </div> <!-- end .p-2-->
                                    </div> <!-- end col -->
                                </div> <!-- end col-->

                                <div class="col-xl-3 col-lg-6">
                                    <div class="card m-1 shadow-none border">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto pe-0">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title bg-light text-secondary rounded">
                                                            <i class="mdi mdi-file-pdf-outline font-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <a href="javascript:void(0);" class="text-muted fw-bold">Ordenes de compra - Agosto 2023.pdf</a>
                                                    <p class="mb-0 font-13">7.5 MB</p>
                                                </div>
                                            </div> <!-- end row -->
                                        </div> <!-- end .p-2-->
                                    </div> <!-- end col -->
                                </div> <!-- end col-->

                        <div class="mt-3">
                            <h5 class="mb-3">Recientes</h5>

                            <div class="table-responsive">
                                <table class="table table-centered table-nowrap mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="border-0">Nombre</th>
                                            <th class="border-0">Ultima Modificación</th>
                                            <th class="border-0">Tamaño</th>
                                            <th class="border-0">Dueño</th>
                                            <th class="border-0">Miembros</th>
                                            <th class="border-0" style="width: 80px;">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <i data-feather="folder" class="icon-dual"></i>
                                                <span class="ms-2 fw-semibold"><a href="javascript: void(0);" class="text-reset">App Design & Development</a></span>
                                            </td>
                                            <td>
                                                <p class="mb-0">Ene 03, 2020</p>
                                                <span class="font-12">por Andres</span>
                                            </td>
                                            <td>400 MB</td>
                                            <td>
                                                Daniela Torres
                                            </td>
                                            <td id="tooltips-container">
                                                <div class="avatar-group">
                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme">
                                                        <img src="{{Vite::asset('resources/images/users/user-1.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty">
                                                        <img src="{{Vite::asset('resources/images/users/user-2.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson">
                                                        <img src="{{Vite::asset('resources/images/users/user-3.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Username">
                                                        <img src="{{Vite::asset('resources/images/users/user-5.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="btn-group dropdown">
                                                    <a href="javascript: void(0);" class="table-action-btn dropdown-toggle arrow-none btn btn-light btn-xs" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-pencil me-2 text-muted vertical-middle"></i>Renombrar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-download me-2 text-muted vertical-middle"></i>Descargar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-delete me-2 text-muted vertical-middle"></i>Eliminar</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <i data-feather="file-text" class="icon-dual"></i>
                                                <span class="ms-2 fw-semibold"><a href="javascript: void(0);" class="text-reset">Reporte_Anual.pdf</a></span>
                                            </td>
                                            <td>
                                                <p class="mb-0">Dic 18, 2019</p>
                                                <span class="font-12">por Alejandro</span>
                                            </td>
                                            <td>29.2 MB</td>
                                            <td>
                                                Gabriel Conejo
                                            </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme">
                                                        <img src="{{Vite::asset('resources/images/users/user-9.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty">
                                                        <img src="{{Vite::asset('resources/images/users/user-7.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson">
                                                        <img src="{{Vite::asset('resources/images/users/user-3.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="btn-group dropdown">
                                                    <a href="javascript: void(0);" class="table-action-btn dropdown-toggle arrow-none btn btn-light btn-xs" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-share-variant me-2 text-muted vertical-middle"></i>Compartir</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-link me-2 text-muted vertical-middle"></i>Obtener link</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-pencil me-2 text-muted vertical-middle"></i>Renombrar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-download me-2 text-muted vertical-middle"></i>Descargar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-delete me-2 text-muted vertical-middle"></i>Eliminar</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <i data-feather="folder" class="icon-dual"></i>
                                                <span class="ms-2 fw-semibold"><a href="javascript: void(0);" class="text-reset">Reportes</a></span>
                                            </td>
                                            <td>
                                                <p class="mb-0">Nov 25, 2019</p>
                                                <span class="font-12">por Daniel</span>
                                            </td>
                                            <td>600 MB</td>
                                            <td>
                                                Pablo Gutiérrez
                                            </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme">
                                                        <img src="{{Vite::asset('resources/images/users/user-1.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty">
                                                        <img src="{{Vite::asset('resources/images/users/user-8.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson">
                                                        <img src="{{Vite::asset('resources/images/users/user-2.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Username">
                                                        <img src="{{Vite::asset('resources/images/users/user-5.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="btn-group dropdown">
                                                    <a href="javascript: void(0);" class="table-action-btn dropdown-toggle arrow-none btn btn-light btn-xs" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-share-variant me-2 text-muted vertical-middle"></i>Compartir</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-link me-2 text-muted vertical-middle"></i>Obtener link</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-pencil me-2 text-muted vertical-middle"></i>Renombrar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-download me-2 text-muted vertical-middle"></i>Descargar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-delete me-2 text-muted vertical-middle"></i>Eliminar</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <i data-feather="file-text" class="icon-dual"></i>
                                                <span class="ms-2 fw-semibold"><a href="javascript: void(0);" class="text-reset">Documentación.docs</a></span>
                                            </td>
                                            <td>
                                                <p class="mb-0">Feb 9, 2020</p>
                                                <span class="font-12">por Justin</span>
                                            </td>
                                            <td>63.3 MB</td>
                                            <td>
                                                Carlos Gomez
                                            </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme">
                                                        <img src="{{Vite::asset('resources/images/users/user-3.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>

                                                    <a href="javascript: void(0);" class="avatar-group-item mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty">
                                                        <img src="{{Vite::asset('resources/images/users/user-10.jpg')}}" class="rounded-circle avatar-xs" alt="friend">
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="btn-group dropdown">
                                                    <a href="javascript: void(0);" class="table-action-btn dropdown-toggle arrow-none btn btn-light btn-xs" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-horizontal"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-share-variant me-2 text-muted vertical-middle"></i>Compartir</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-link me-2 text-muted vertical-middle"></i>Obtener link</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-pencil me-2 text-muted vertical-middle"></i>Renombrar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-download me-2 text-muted vertical-middle"></i>Descargar</a>
                                                        <a class="dropdown-item" href="#"><i class="mdi mdi-delete me-2 text-muted vertical-middle"></i>Eliminar</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div> <!-- end .mt-3-->

                    </div>
                    <!-- end inbox-rightbar-->

                    <div class="clearfix"></div>
                </div>
            </div> <!-- end card -->

        </div> <!-- end Col -->
    </div><!-- End row -->

</div> <!-- container -->
@endsection