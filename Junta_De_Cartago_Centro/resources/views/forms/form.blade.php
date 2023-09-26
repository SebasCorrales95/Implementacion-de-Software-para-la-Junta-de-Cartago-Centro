@extends('layouts.vertical', ['page_title' => 'Registro de Documentos'])

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
                    <h4 class="page-title">Registro de Documentos</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row">

            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <form action="/" method="post" class="" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                    <div class="form-group row">
                                        <div class="col-sm-6">
                                            <label for="simpleinput" class="form-label">Nombre del Documento</label>
                                            <input type="text" id="Nombre_Doc" class="form-control">
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="example-date" class="form-label">Fecha de ingreso</label>
                                            <input class="form-control" id="example-date" type="date" name="date">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6">
                                            <label for="example-select" class="form-label">Tipo de Documento</label>
                                            <select class="form-select" id="example-select">
                                                <option>Acta</option>
                                                <option>Contrato</option>
                                                <option>Adjudicación</option>
                                                <option>Oficio</option>
                                                <option>Expediente</option>
                                                <option>Orden de Compra</option>
                                                <option>Planilla</option>
                                                <option>Cheque</option> 
                                            </select>
                                        </div>
                                        <div class="col-sm-6 form-descripcion">
                                            <label for="simpleinput" class="form-label">Descripción del Documento</label>
                                            <textarea class="form-control" id="textarea-descripcion" rows="1"></textarea>
                                        </div> <!-- end col -->
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
                                        

                                    <!-- file preview template -->
                                    <div class="d-none" id="uploadPreviewTemplate">
                                        <div class="card mt-1 mb-0 shadow-none border">
                                            <div class="p-2">
                                                <div class="row align-items-center">
                                                    <div class="col-auto">
                                                        <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                                                    </div>
                                                    <div class="col ps-0">
                                                        <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
                                                        <p class="mb-0" data-dz-size></p>
                                                    </div>
                                                    <div class="col-auto">
                                                        <!-- Button -->
                                                        <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                                        <i class="dripicons-cross"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class ="button-submit" type="submit">
                                        Guardar Documento
                                    </button>
                                </form>
                            </div><!-- end col -->
                        </div><!-- end row -->                                        
                    </div><!-- end card-body -->
                </div><!-- end card --> 
            </div><!-- end col -->                                                    
        </div><!-- end row -->           
    </div> <!-- container -->
@endsection

@section('script')
    @vite(['resources/js/pages/form-fileuploads.init.js'])
    @vite(['resources/js/pages/toastr.init.js'])
@endsection

