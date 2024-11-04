<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        return DB::table('users')->get();
    }

    public function show($email)
    {
        return DB::table('users')->select('id', 'name')->where('email', $email)->get();
    }
}
