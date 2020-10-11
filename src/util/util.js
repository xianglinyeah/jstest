import Axios from '../../src/axios';
export const formatDate=()=>{

      const time=new Date();

      return time.getFullYear()+"-"+correctnumber((time.getMonth()+1))+'-'+correctnumber(time.getDate())+' '+correctnumber(time.getHours())+':'+correctnumber(time.getMinutes())+':'+correctnumber(time.getSeconds());
}

const correctnumber=(number)=>{

      if(number<10){return "0"+number}else{
            return number
      }

}
