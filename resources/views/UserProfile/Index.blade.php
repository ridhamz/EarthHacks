@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row mx-7">
        <div class="col-md-7 justify-content-center">
         <img src={{$user->profileimage}} style="width:100px;height:100px"/>
        </p>
        <label style="font-size:15px;color:blue"> Name</label>  :{{$user->name}}</p>
       <p style="border-bottom:1px solid #eee">
       <label style="font-size:15px;color:blue"> Email</label> : {{$user->email}}<p>
       <p>
           <a href=""  data-toggle="modal" data-target="#exampleModaleditprof"
            class="btn btn-success" style="color:white">
            <i class="fa fa-edit"></i> Edit Your Profile</a>
           @include('UserProfile.edit_prof_modal')
        </p>
</div>
<div class="col-md-5 justify-content-center">
    <h3 style="color:blue">Your certificate :<h3>
        <p style="font-size:15px">your score is : 10%</p>
        <p style="font-size:15px">(Your certificate will send to you when you reach 100% score)</p>
        <div>
         <img  style="width:300px;height:400px;" src="images/certifi.jpg"/>
        </div>
</div>
</div>
</div>
@endsection
