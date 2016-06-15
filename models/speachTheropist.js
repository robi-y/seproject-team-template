module.exports = {
 
  attributes: {
  
      name:{
        type:"string",
        required:true,
        minLength: 2
      },      
      email:{
        type:"email",
        required:"true",
        unique: true
      },
      phone:{
        type:"string",
        required:true
      }
  }
};