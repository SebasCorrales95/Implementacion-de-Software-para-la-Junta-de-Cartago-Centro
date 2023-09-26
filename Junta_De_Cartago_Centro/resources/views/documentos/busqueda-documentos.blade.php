@extends('layouts.vertical', ['page_title' => 'CRM Customers'])

@section('css')
    <link href="{{ Vite::asset('node_modules/dropify/dist/css/dropify.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ Vite::asset('public/assets/css/styles.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Busqueda de documentos</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

<div class="row">
    
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col-auto">
                            
                            <form class="d-flex flex-wrap align-items-center">
                                <label for="inputPassword2" class="visually-hidden">Buscar</label>
                                <div class="me-3">
                                    
                                    <input type="search" class="form-control my-1 my-lg-0" id="inputPassword2" placeholder="Buscar...">
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <!-- Date View -->
                                        <div class="mb-3">
                                            <label class="form-label">Fecha inicial de ingreso</label>
                                            <input type="date" class="form-control" data-toggle="flatpicker">
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <!-- Date View -->
                                        <div class="mb-3">
                                            <label class="form-label">Fecha limite de ingreso</label>
                                            <input type="date" class="form-control" data-toggle="flatpicker">
                                        </div>
                                    </div>
                                </div>
                                <label for="status-select" class=" p-2 me-2">Filtrar</label>
                                <div class="me-sm-3">
                                    <select class="form-select my-1 my-lg-0" id="status-select">
                                        <option selected="">Actas</option>
                                        <option value="1">Actas</option>
                                        <option value="2">Adjudicaciones</option>
                                        <option value="3">Contratos</option>
                                        <option value="4">Ordenes de compra</option>
                                        <option value="4">Planillas</option>
                                        <option value="4">Cheques</option>
                                        <option value="4">Expedientes</option>
                                    </select>
                                </div>
                                <label for="status-select" class="me-2">Filtrar</label>
                                <div class="me-sm-3">
                                    <select class="form-select my-1 my-lg-0" id="status-select">
                                        <option selected="">Escuela o Kinder</option>
                                        <option value="1">Escuela de Jesus Jimenez</option>
                                        <option value="2">Kinder de la Jesus Jimenez</option>
                                        <option value="3">Escuela Esquivel Ibarra</option>
                                        <option value="4">Kinder de la Esquivel Ibarra</option>
                                        <option value="4">Escuela de la Padre Peralta</option>
                                        <option value="4">Kinder de la Paadre Peralta</option>
                                        <option value="4">General</option>
                                    </select>
                                    
                                </div>
                            </form>
                        </div>
                    </div> <!-- end row -->
                </div>
            </div> <!-- end card -->
        </div> <!-- end col-->
    </div>


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-2">
                            <div class="col-sm-4">
                                <button type="button" class="btn btn-dark waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#custom-modal"><i class="mdi mdi-plus-circle me-1"></i> Añadir documento</button>
                            </div>
                            
                        </div>

                        <div class="table-responsive">
                            <table class="table table-centered table-nowrap table-striped" id="products-datatable">
                                <thead>
                                    <tr>
                                        <th style="width: 20px;">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck1">
                                                <label class="form-check-label" for="customCheck1">&nbsp;</label>
                                            </div>
                                        </th>
                                        </th>
                                        <th>Nombre del archivo</th>                            
                                        <th>Procedencia del documento</th>
                                        <th>Tipo de documento</th>                              
                                        <th style="width: 85px;">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck2">
                                                <label class="form-check-label" for="customCheck2">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td class="table-user">
                                            
                                            <a href="javascript:void(0);" class="text-body fw-semibold">Acta de remodelacion</a>
                                        </td>
                                        <td>
                                            Jesus Jimenez
                                        </td>
                                        <td>
                                            Acta
                                        </td>
                                        <td>
                                             07/07/2018
                                        </td>
                                    

                                        <td>
                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck3">
                                                <label class="form-check-label" for="customCheck3">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td class="table-user">
                                            
                                            <a href="javascript:void(0);" class="text-body fw-semibold">Contrato de profesora Frances</a>
                                        </td>
                                        <td>
                                            Esquivel Ibarra
                                        </td>
                                        <td>
                                           Contrato
                                        </td>
                                        <td>
                                        09/12/2018
                                        </td>
                                        

                                        <td>
                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck4">
                                                <label class="form-check-label" for="customCheck4">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td class="table-user">
                                           
                                            <a href="javascript:void(0);" class="text-body fw-semibold">Adjudicacion de puesto</a>
                                        </td>
                                        <td>
                                            Junta
                                        </td>
                                        <td>
                                            Ajudicacion
                                        </td>
                                        <td>
                                        06/30/2018
                                        </td>
                                      

                                        <td>
                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        
                                       
                                       

                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                        <ul class="pagination pagination-rounded justify-content-end mb-0">
                            <li class="page-item">
                                <a class="page-link" href="javascript: void(0);" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="javascript: void(0);">1</a></li>
                            <li class="page-item"><a class="page-link" href="javascript: void(0);">2</a></li>
                            <li class="page-item"><a class="page-link" href="javascript: void(0);">3</a></li>
                            <li class="page-item"><a class="page-link" href="javascript: void(0);">4</a></li>
                            <li class="page-item"><a class="page-link" href="javascript: void(0);">5</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript: void(0);" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </li>
                        </ul>

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div> <!-- container -->

    <!-- Modal -->
    <div class="modal fade" id="custom-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-light">
                    <h4 class="modal-title" id="myCenterModalLabel">Añadir un nuevo documento</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body p-4">
                    <form action="/" method="post" class="" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre del documento</label>
                            <input type="text" class="form-control" id="name" placeholder="Ingresa el nombre del documento">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Fecha de ingreso</label>
                            <input type="date" class="form-control" id="exampleInputEmail1" placeholder="Fecha de ingreso">
                        </div>
                        <div class="mb-3">
                            <label for="position" class="form-label">Tipo de documento</label>
                            <select class="form-select my-1 my-lg-0" id="status-select">
                                        <option selected="">Ingresa el tipo de documento</option>
                                        <option value="1">Actas</option>
                                        <option value="2">Adjudicaciones</option>
                                        <option value="3">Contratos</option>
                                        <option value="4">Ordenes de compra</option>
                                        <option value="4">Planillas</option>
                                        <option value="4">Cheques</option>
                                        <option value="4">Expedientes</option>
                                    </select>
                        </div>
                        <div class="mb-3">
                            <label for="category" class="form-label">Descripcion del documento</label>
                            <input type="text" class="form-control" data-toggle="flatpicker" placeholder="Descripcion de documento ">   
                        </div>

                        <div class=" row">
                            <div class="p-3 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class= "dropzone">
                                            <div class="mb-3">
                                                <h4 class="header-title">Cargar Documento</h4>
                                                <p class="sub-header">
                                                    En este apartado puedes arrastrar o seleccionar el documento.
                                                </p>
                                                <div class="fallback">
                                                <input name="file" type="file" multiple />
                                                </div>

                                                <div class="dz-message needsclick">
                                                    <i class="h1 text-muted dripicons-cloud-upload"></i>
                                                    <h3>Suelte el documento aquí o haga clic para cargar.</h3>
                                                </div>
                                                <!-- Preview -->
                                                <div class="dropzone-previews mt-3" id="file-previews">
                                                </div>
                                            </div>
                                        </div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div><!-- end col -->
                        </div><!-- end row -->    
                        <div class="text-end">
                            <button type="submit" class="btn btn-success waves-effect waves-light">Guardar</button>
                            <button type="button" class="btn btn-danger waves-effect waves-light" data-bs-dismiss="modal">Continuar</button>
                        </div>
                    </form>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
@endsection
