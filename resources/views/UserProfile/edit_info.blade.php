
<form method="POST" action="{{url('edit/user/profile',$user->id)}}"" enctype="multipart/form-data">
    @csrf
        <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
        <input type="text" name='name' value="{{$user->name}}" class="form-control" id="exampleInputPassword1">
              </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
        <input type="email" name='email' value="{{$user->email}}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>

        <div class="form-group">
          <label for="exampleInputFile">Profile Photo</label>
          <input type="file" name='file' class="form-control-file"
           id="exampleInputFile" aria-describedby="fileHelp">

        </div>
        <button type="submit" class="btn btn-success">Save changes</button>
      </form>
