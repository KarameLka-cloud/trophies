<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('/users', 'App\Http\Controllers\UserController');
    Route::apiResource('/events', 'App\Http\Controllers\EventController');
    Route::apiResource('/posts', 'App\Http\Controllers\PostController');
});
