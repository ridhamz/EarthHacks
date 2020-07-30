<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Posts;


class PostsController extends Controller
{
 public function addpost(){
     $post = new Posts;
     $post->body = Request('t1');
     $post->user_id = auth()->user()->id;
     $post->user_name = auth()->user()->name;
     $post->user_profileimage = auth()->user()->profileimage;
     $post->save();
 }

 public function getposts(){
  $posts = Posts::orderBy('id', 'desc')->paginate(2);
  return $posts;
 }
}
