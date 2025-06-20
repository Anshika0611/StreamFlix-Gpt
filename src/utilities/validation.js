export const checkValidation=(email,pswd,name)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPswdValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pswd);
    const isNameValid=/^[a-zA-Z\s]+$/.test(name); 
    if(!isEmailValid){
        return "Please enter a valid email address";
    }
    if(!isPswdValid){
        return "Password is invalid";
    }
    if(!isNameValid && name){
        return "Name can only contain letters and spaces";
    }
    return null; // No validation errors
}