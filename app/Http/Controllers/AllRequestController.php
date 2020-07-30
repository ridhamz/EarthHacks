<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AllRequest;

class AllRequestController extends Controller
{
   public function getorders(){
       $data =AllRequest::paginate(2);
       return $data;
   }
    public function myorders(){
       $data =AllRequest::find(auth()->user()->id)->orderBy('id', 'desc')->paginate(2);
       return $data;
   }

   public function addorder(){
       $order = new AllRequest;
       $order->quantity = Request('t3');
       $order->adress = Request('t1');
       $order->disc = Request('t2');
       $order->Resto_id = auth()->user()->id;
       $order->restoname = auth()->user()->name;
       $order->save();

   }
}
