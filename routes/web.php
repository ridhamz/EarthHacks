<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/UserProfile',"UserController@Index");
Route::post('/edit/user/profile/{id}','UserController@EditProfile');
Route::get('/allorders','AllRequestController@getorders');
Route::get('/getname/{user_id}','AllRequestController@getname');
Route::post('/addtomyorderes/{id}','UserordersController@addorder');
Route::get('/getuserorders','UserordersController@getorder');
Route::post('/addorderbyresto','AllRequestController@addorder');
Route::get('/myorders','AllRequestController@myorders');
Route::post('/addpost','PostsController@addpost');
Route::get('/getposts','PostsController@getposts');
Route::get('/getuser/{id}','UserController@getUser');
Route::get('/getauth',function(){
 return auth()->user();
});

