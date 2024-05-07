import { FormGroup, NgForm } from "@angular/forms";
import { Error } from "src/types/Error";

export function errorHandler(form: NgForm | FormGroup) {
    console.log(form.controls["phone"].errors, "errrors")

    if (form.controls["mainCategory"] && form.controls["mainCategory"].errors) {

        if (form.controls["mainCategory"].errors["required"]) {
            return <Error>{
                message: "Моля изберете основна категория!",
                field: "mainCategory"
            }
        }

        return <Error>{
            message: "Invalid name!",
            field: "name"
        }
    }

    if (form.controls["brand"] && form.controls["brand"].errors) {

        if (form.controls["brand"].errors["required"]) {
            return <Error>{
                message: "Моля изберете марка на автомобила!",
                field: "brand"
            }
        }

    }

    if (form.controls["model"] && form.controls["model"].errors) {

        if (form.controls["model"].errors["required"]) {
            return <Error>{
                message: "Моля изберете модел на автомобила!",
                field: "brand"
            }
        }

    }

    if (form.controls["vin"] && form.controls["vin"].errors) {

        if (form.controls["vin"].errors["minlength"]) {
            return <Error>{
                message: "VIN номера трябва да бъде минимум 5 символа!",
                field: "vin"
            }
        }

    }

    if (form.controls["distance"] && form.controls["distance"].errors) {

        if (form.controls["distance"].errors["required"]) {
            return <Error>{
                message: "Моля въведете пробега на автомобила!",
                field: "distance"
            }
        }

        if (form.controls["distance"].errors["min"]) {
            return <Error>{
                message: "Моля въведете  валиден пробег на автомобила!",
                field: "distance"
            }
        }

    }

    if (form.controls["price"] && form.controls["price"].errors) {

        if (form.controls["price"].errors["required"]) {
            return <Error>{
                message: "Моля въведете цена на автомобила!",
                field: "price"
            }
        }

        if (form.controls["price"].errors["min"]) {
            return <Error>{
                message: "Моля въведете валидна цена на автомобила!",
                field: "price"
            }
        }

    }

    if (form.controls["kb"] && form.controls["kb"].errors) {

        if (form.controls["kb"].errors["required"]) {
            return <Error>{
                message: "Моля въведете кубатурата на автомобила!",
                field: "kb"
            }
        }

        if (form.controls["kb"].errors["min"]) {
            return <Error>{
                message: "Моля въведете валидна кубатура на автомобила!",
                field: "kb"
            }
        }


    }

    if (form.controls["phone"] && form.controls["phone"].errors) {

        if (form.controls["phone"].errors["required"]) {
            return <Error>{
                message: "Моля въведете телефонен номер!",
                field: "phone"
            }
        }

        if (form.controls["phone"].errors["minlength"]) {
            return <Error>{
                message: "Минималната дължина на телефонния номер е 10!",
                field: "phone"
            }
        }

        if (form.controls["phone"].errors["maxlength"]) {
            return <Error>{
                message: "Максималната дължина на телефонния номер е 10!",
                field: "phone"
            }
        }

    }


    if (form.controls["year"] && form.controls["year"].errors) {

        if (form.controls["year"].errors["required"]) {
            return <Error>{
                message: "Моля въведете година на автомобила!",
                field: "year"
            }
        }

        if (form.controls["year"].errors["min"]) {
            return <Error>{
                message: "Минималната  година е 1700!",
                field: "year"
            }
        }

        if (form.controls["year"].errors["max"]) {
            return <Error>{
                message: "Минималната  година е 2025!",
                field: "year"
            }
        }

    }

    if (form.controls["type"] && form.controls["type"].errors) {

        if (form.controls["type"].errors["required"]) {
            return <Error>{
                message: "Моля изберете състояние на автомобила!",
                field: "type"
            }
        }



    }

    if (form.controls["district"] && form.controls["district"].errors) {

        if (form.controls["district"].errors["required"]) {
            return <Error>{
                message: "Моля изберете област!",
                field: "district"
            }
        }

    }

    if (form.controls["city"] && form.controls["city"].errors) {

        if (form.controls["city"].errors["required"]) {
            return <Error>{
                message: "Моля изберете населено място!",
                field: "city"
            }
        }

    }

    if (form.controls["ecoCategory"] && form.controls["ecoCategory"].errors) {

        if (form.controls["ecoCategory"].errors["required"]) {
            return <Error>{
                message: "Моля изберете евростандарт на автомобила!",
                field: "ecoCategory"
            }
        }

    }

    if (form.controls["color"] && form.controls["color"].errors) {

        if (form.controls["color"].errors["required"]) {
            return <Error>{
                message: "Моля изберете цвят на автомобила!",
                field: "color"
            }
        }

    }

    if (form.controls["carCategory"] && form.controls["carCategory"].errors) {

        if (form.controls["carCategory"].errors["required"]) {
            return <Error>{
                message: "Моля изберете категория на автомобила!",
                field: "carCategory"
            }
        }

    }
    
    if (form.controls["engine"] && form.controls["engine"].errors) {

        if (form.controls["engine"].errors["required"]) {
            return <Error>{
                message: "Моля изберете двигателя на автомобила!",
                field: "engine"
            }
        }

    }

        
    if (form.controls["transmission"] && form.controls["transmission"].errors) {

        if (form.controls["transmission"].errors["required"]) {
            return <Error>{
                message: "Моля изберете скоростната кутия на автомобила!",
                field: "transmission"
            }
        }

    }

    return null
}