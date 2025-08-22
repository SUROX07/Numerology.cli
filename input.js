// DOB Input
import inquirer from "inquirer";
import { compute } from "./compute.js";

 export async function takeInput(){
    try{
    const result = await inquirer.prompt([
        {
            type:"input",
            message :'Enter your DOB in (YYYY-MM-DD) Format',
            name:'dob'
        }
    ],'dob');
    return result.dob;
    
    }
    catch(err){
        console.log('Error During User Input ', err);
    }

}