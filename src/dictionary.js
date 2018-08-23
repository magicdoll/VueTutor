export default{
  en:{
    messages:{
      required(field){
        return field + ' must be entered'
      }
      ,min(field,n){
        return field + ' at least ...'
      }
    }
    ,attributes:{
      name: 'Name'
      ,surname: 'Surname'
    }
  }
  ,th:{
    messages:{
      required(field){
        return 'ต้องป้อน ' + field + ' นะจ๊ะ'
      }
      ,min(field,arg){
        return 'กรุณากรอกอย่างน้อย ' + arg[0] + ' ตัวอักษร'
      }
    }
    ,attributes:{
      name: 'ชื่อ'
      ,surname: 'นามสกุล'
    }
  }
}