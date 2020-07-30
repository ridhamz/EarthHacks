<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function Index(){
        $user = auth()->user();
        return view('UserProfile.Index',['user'=>$user]);
    }

    public function getUser($id){
      $user = User::find($id);
      return $user;
    }

    public function EditProfile($id){
        $this->validate(request(),['file'=>'required|image|mimes:jpg,jpeg,png',
                                    'email'=>'required','name'=>'required']);
        $user = User::find($id);
        $file = Request()->file('file');
        $name = $file->getClientOriginalName();
        $ext  = $file->getClientOriginalExtension();
        $size = $file->getSize();
        $mime = $file->getMimeType();
        $file->move(public_path('images'),'img_'.time().'.'.$ext);
        $user->name = Request('name');
        $user->email = Request('email');
        $user->profileimage = 'images/img_'.time().'.'.$ext;
        $user->update();
        return redirect('/UserProfile');

     }
}
