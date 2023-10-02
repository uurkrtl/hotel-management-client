import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-create-update',
  templateUrl: './room-create-update.component.html',
  styleUrls: ['./room-create-update.component.css']
})
export class RoomCreateUpdateComponent {
  roomAddUpdateForm:FormGroup
  errorMessage:string = ""
  successMessage:string = ""
  roomId:number = 0
  selectedRoom:Room
  id:number=0

  name: string
  floor:string
  price:number

  constructor(private roomService:RoomService, private route:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.roomId= this.route.snapshot.queryParamMap.get('roomId') as unknown as number
    if(this.roomId>0) this.getByIdRoom(this.roomId)
    this.createRoomAddUpdateForm()
  }

  createRoomAddUpdateForm(){
    this.roomAddUpdateForm = this.formBuilder.group({
      id: this.roomId,
      name: ["",Validators.required],
      floor: ["",Validators.required],
      price: ["",Validators.required]
    })
  }

  addRoom(){
    if(this.roomAddUpdateForm.valid){
      let roomModel = Object.assign({},this.roomAddUpdateForm.value)
      this.roomService.addRoom(roomModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Das Zimmer wurde erfolgreich hinzugefügt"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Das Zimmer konnte nicht hinzugefügt werden"
      this.successMessage=""
    }
  }

  updateRoom(){
    if(this.roomAddUpdateForm.valid){
      let roomModel = Object.assign({},this.roomAddUpdateForm.value)
      this.roomService.updateRoom(roomModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Das Zimmer wurde erfolgreich aktuelisiert"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Der Gast konnte nicht aktuelisiert werden"
      this.successMessage=""
    }
  }

  getByIdRoom(roomId:number){
    this.roomService.getByIdRoom(roomId).subscribe(response=>{
      this.selectedRoom=response
      this.name=response.name
      this.floor=response.floor
      this.price=response.price
    })
  }

}
