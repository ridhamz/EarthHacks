<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\AllRequest;
use App\Userorders;

class UserordersController extends Controller
{
 public function addorder($id){
     $ord = AllRequest::find($id);
     $ord->etat = 'Is valid';
     $ord->update();
     $order = new Userorders;
     $order->user_id= auth()->user()->id;
     $order->order_id = $id;
     $order->name = $ord->restoname;
     $order->quantity = $ord->quantity;
     $order->save();
 }
 public function getorder(){
     $orders = Userorders::where('user_id',auth()->user()->id)->get();
     return $orders;
 }
}
