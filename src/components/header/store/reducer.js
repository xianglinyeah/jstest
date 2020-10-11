import {fromJS} from "immutable";

const defaultdata=fromJS({
    name:"首页"
})

export default (state=defaultdata,action)=>{

 switch(action.type){
     case "changename":
         return state.set("name",action.name)
 }
 
    return state;

}

