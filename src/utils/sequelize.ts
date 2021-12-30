import {Sequelize} from 'sequelize';
 
let client:Sequelize = null;

export const connect = () => {
  try {
    if(!client)
      client = new Sequelize("mysql://root@localhost:3306/sport");
    return client;
  }catch(err){
    throw err;
  }
}