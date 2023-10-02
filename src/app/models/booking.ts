export interface Booking{
    id:number
    checkInDate:Date
    checkOutDate:Date
    payment:number
    debt:number
    bookingStatusId:number
    bookingStatusName:string
    customerId:number
    customerFirstName:string
    customerLastName:string
    roomId:number
    roomName:string
    roomPrice:number
    discountRate:number
    discountedPrice:number
}