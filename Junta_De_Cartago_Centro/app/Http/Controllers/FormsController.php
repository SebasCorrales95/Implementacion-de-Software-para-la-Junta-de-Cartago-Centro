<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormsController extends Controller
{
    public function miMetodo()
    {
        return view("forms");
    }

    public function miMetodo2()
    {
        return view("busqueda-documentos");
    }

    public function miMetodo3()
    {
        return view("file-manager");
    }

     public function miMetodo4()
    {
        return view("login");
    }
}
