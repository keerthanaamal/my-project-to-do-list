import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  save(params:any){
    console.log(params,"its here")
    
    return this.http.post('https://to-do-list-3-oo2k.onrender.com/reg',params)
  }
  savelogin(params:any){
    console.log(params,"its here")
    
    return this.http.post('https://to-do-list-3-oo2k.onrender.com/log',params)
  }

  task_save(params:any){
    console.log(params,"its here")
    
    return this.http.post('https://to-do-list-3-oo2k.onrender.com/task',params)
  }
  task_view(data:any){
    console.log(data,"id is passing")
    return this.http.get('https://to-do-list-3-oo2k.onrender.com/task_view/?user1_id='+data)
  }
  updateTask(taskId: number, data: any){
    return this.http.put('https://to-do-list-3-oo2k.onrender.com/task/'+taskId, data);
  }
  
  changestatus(taskId: number, data: any) {
    return this.http.put('https://to-do-list-3-oo2k.onrender.com/task/'+taskId, data);
}


  deleteTask(taskId: number) {
    console.log(taskId,"in service")
    return this.http.delete('https://to-do-list-3-oo2k.onrender.com/task'+"/"+taskId)
  }
  constructor(public http:HttpClient) { }
}
