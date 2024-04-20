import { FormGroup, NgForm } from "@angular/forms";
import { Error } from "src/types/Error";

export function errorHandler(form: NgForm | FormGroup) {

    if (form.controls["name"] && form.controls["name"].errors) {

        if (form.controls["name"].errors["minlength"]) {
            return <Error>{
                message: "Name must be 2 symbols at least!",
                field: "name"
            }
        }

        return <Error>{
            message: "Invalid name!",
            field: "name"
        }
    }
   
    return null
}