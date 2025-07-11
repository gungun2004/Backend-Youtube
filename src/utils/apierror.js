class ApiError extends Error{
    constructor(statusCode, 
        message = "Something went wrong",
    errors=[],
stack="") {
       super(message)
       this.statusCode=statusCode
       this.data=null
       this.message=message
       this.success=false;   
       this.errors=errors
    //stack trace to get the exact location of error files
    if(stack)
    {
        this.stack=stack
    }else 
    {
        Error.captureStackTrace(this,this.constructor)
    }
    }
}
export {ApiError}