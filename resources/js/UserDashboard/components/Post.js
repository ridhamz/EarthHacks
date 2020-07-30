import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';

export default function Post(props){
 const style={
    'borderLeft':'2px solid red',
    'margin':'3px',
    'paddingLeft':'10px',
 }
 const styleimg = {'width':'35px',
                    'height':'35px',
                    'border-radius':'50%',
                    'margin':'1px',

                    }
const stylebody ={
    'marginRight':'3px',
}

  return(
    <div style={style}>
     <p style={{'fontSize':'12px','color':'blue'}}><img style={styleimg} src={props.post.user_profileimage} />{props.post.user_name}</p>
     <p style={stylebody}>{props.post.body}</p>
     <p style={{'fontSize':'10px','color':'#000'}}>Created at :{props.post.created_at}</p>

     {props.user.id==props.post.user_id?<a style={{'color':'green'}}>Edit|</a>:null}
     {props.user.id==props.post.user_id?<a style={{'color':'red'}}>Delete</a>:null}
     <hr />
    </div>
  )
}
